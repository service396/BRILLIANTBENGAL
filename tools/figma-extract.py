"""Convert the cached Figma metadata XML dump into structured page content.

The dump encodes each text layer's copy in its `name` attribute, so the whole
site's wording is recoverable without re-hitting Figma. Structure is uniform:
page > section frame > (eyebrow, title, intro texts) + item frames.
"""
import json, re, sys, html, unicodedata

SRC = "/root/.claude/projects/-home-user-BRILLIANTBENGAL/e52d4d5c-1252-505e-9697-8f03cbb2560f/tool-results/mcp-Figma-get_metadata-1786641501565.txt"
NODE = re.compile(r'^(\s*)<(\w+) id="([^"]+)" name="([^"]*)"')

ITEM_PREFIXES = ('card /', 'layer /', 'door /', 'stat /', 'item /', 'tile /',
                 'row /', 'step /', 'phase /', 'faq /', 'field /', 'link /',
                 'product /', 'sector /', 'cluster /', 'event /', 'form /')

COMPONENTS = {}

def clean(s):
    s = html.unescape(s or '')
    return unicodedata.normalize('NFC', s).strip()

def parse():
    text = json.load(open(SRC))[0]['text']
    root = {'children': [], 'indent': -2, 'type': 'root', 'name': 'root'}
    stack = [root]
    for line in text.split('\n'):
        m = NODE.match(line)
        if not m:
            continue
        indent, typ, nid, name = len(m.group(1)), m.group(2), m.group(3), clean(m.group(4))
        node = {'id': nid, 'type': typ, 'name': name, 'indent': indent, 'children': []}
        while stack and stack[-1]['indent'] >= indent:
            stack.pop()
        (stack[-1] if stack else root)['children'].append(node)
        stack.append(node)
    return root

def texts_of(node, depth=99):
    """All text copy under a node, in document order."""
    out = []
    def walk(n, d):
        for c in n['children']:
            if c['type'] == 'text':
                if c['name']:
                    out.append(c['name'])
            elif d > 0:
                walk(c, d - 1)
    walk(node, depth)
    return out

def direct_texts(node):
    return [c['name'] for c in node['children'] if c['type'] == 'text' and c['name']]

def find_items(section):
    """Item frames: either explicitly named, or a run of sibling frames that
    each carry their own copy — the repeated-card pattern the file uses."""
    items = []
    def walk(n):
        kids = [c for c in n['children'] if c['type'] in ('frame', 'instance')]
        named = [k for k in kids if k['name'].lower().startswith(ITEM_PREFIXES)]
        if len(named) >= 1:
            items.extend(named)
            for k in kids:
                if k not in named:
                    walk(k)
            return
        texty = [k for k in kids if texts_of(k)]
        # a card run: two or more siblings, each with a small amount of copy
        if len(texty) >= 2 and all(1 <= len(texts_of(k)) <= 9 for k in texty):
            items.extend(texty)
            return
        for k in kids:
            walk(k)
    walk(section)
    return items

def build_item(node):
    """Split an item's copy into title / description / cta / bullets."""
    raw = texts_of(node)
    bullets = []
    # bullet rows encode as a "—" marker followed by the label
    i = 0
    body = []
    while i < len(raw):
        if raw[i] == '—' and i + 1 < len(raw):
            bullets.append(raw[i + 1]); i += 2
        else:
            body.append(raw[i]); i += 1
    item = {'title': body[0] if body else '', 'name': node['name']}
    rest = body[1:]
    if rest and re.search(r'(→|»)\s*$', rest[-1]):
        item['cta'] = rest.pop()
    if rest:
        item['desc'] = rest[0]
    if len(rest) > 1:
        item['meta'] = ' · '.join(rest[1:])
    if bullets:
        item['bullets'] = bullets
    return item

def free_texts(node, items):
    """Copy belonging to the section itself, i.e. not inside one of its items."""
    banned = set()
    def mark(n):
        banned.add(id(n))
        for c in n['children']:
            mark(c)
    for it in items:
        mark(it)
    out = []
    def walk(n):
        for c in n['children']:
            if id(c) in banned:
                continue
            if c['type'] == 'text':
                if c['name']:
                    out.append(c['name'])
            else:
                walk(c)
    walk(node)
    return out

def resolve(node):
    """Follow an instance of a shared 'Section / X' component to its source."""
    if node['type'] == 'instance' and not node['children']:
        src = COMPONENTS.get(node['name'])
        if src is not None:
            return src
    return node

def collect_sections(node, depth=0):
    """Split a page into sections, descending through layout-only wrappers."""
    node = resolve(node)
    items = find_items(node)
    free = free_texts(node, items)
    kids = [resolve(c) for c in node['children']
            if c['type'] in ('frame', 'instance')]
    kids = [k for k in kids if k['children']]
    # a wrapper holding several independently-headed blocks is not itself a
    # section — recurse so each block keeps its own heading
    if depth < 2 and not items:
        headed = [k for k in kids if free_texts(k, find_items(k))]
        if len(headed) >= 2:
            out = []
            for k in kids:
                out.extend(collect_sections(k, depth + 1))
            return out
    if not free and not items:
        out = []
        for k in kids:
            out.extend(collect_sections(k, depth + 1))
        return out
    return [build_section(node, free, items)]

def build_section(node, heads=None, items=None):
    if heads is None:
        heads = direct_texts(node)
    if items is None:
        items = find_items(node)
    heads = list(heads)
    sec = {'name': node['name']}
    # a breadcrumb trail is navigation, not copy — keep it out of the heading
    if heads and '/' in heads[0] and heads[0].upper() == heads[0]:
        sec['breadcrumb'] = [x.strip() for x in heads.pop(0).split('/') if x.strip()]
    # a leading short all-caps line is the eyebrow
    if heads and len(heads[0]) < 90 and heads[0].upper() == heads[0]:
        sec['eyebrow'] = heads.pop(0)
    if heads:
        sec['title'] = heads.pop(0)
    if heads:
        # trailing "... →" among the heads is a section-level link
        tail = [h for h in heads if re.search(r'(→|»)\s*$', h)]
        body = [h for h in heads if h not in tail]
        if body:
            sec['intro'] = body[0]
        if len(body) > 1:
            sec['notes'] = body[1:]
        if tail:
            sec['link'] = tail[0]
    if items:
        sec['items'] = [build_item(i) for i in items]
    return sec

def main():
    root = parse()
    canvas = root['children'][0]
    for f in canvas['children']:
        if f['name'].startswith('Section /') or f['name'].startswith('Form /'):
            COMPONENTS[f['name']] = f
    pages = []
    for frame in canvas['children']:
        if frame['type'] != 'frame':
            continue
        if frame['name'].startswith(('Section /', 'Form /')):
            continue
        sections = []
        for c in frame['children']:
            if c['type'] in ('frame', 'instance'):
                sections.extend(collect_sections(c))
        sections = [s for s in sections if s.get('title') or s.get('items')]
        if not sections:
            continue
        pages.append({'id': frame['id'], 'name': frame['name'], 'sections': sections})
    json.dump(pages, open(sys.argv[1], 'w'), indent=1, ensure_ascii=False)
    print(f'pages={len(pages)} sections={sum(len(p["sections"]) for p in pages)} '
          f'items={sum(len(s.get("items",[])) for p in pages for s in p["sections"])}')

main()
