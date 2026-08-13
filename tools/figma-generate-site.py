"""Emit src/data/site.js — every page's route, copy and cards — from pages.json."""
import json, re, sys

pages = json.load(open(sys.argv[1]))
by_name = {p['name']: p for p in pages}

# Route table. Slugs follow the design's information architecture.
ROUTES = {
    'Homepage · Desktop 1440':              ('/',                          'Home'),
    'Summit · Overview':                    ('/summit',                    'The Summit'),
    'Grand Curtain Raiser · Nov 2026':      ('/summit/curtain-raiser',     'Grand Curtain Raiser'),
    'Grand Summit 2027':                    ('/summit/grand-summit-2027',  'Grand Summit 2027'),
    'Why Bengal':                           ('/why-bengal',                'Why Bengal'),
    'Sectors · Cluster board':              ('/sectors',                   'Sectors'),
    'Sectors · All sectors A–Z':            ('/sectors/all',               'All sectors A–Z'),
    'Calendar · All engagements':           ('/calendar',                  'Calendar'),
    'Event detail · North Bengal Summit':   ('/calendar/north-bengal-summit', 'North Bengal Summit'),
    'Bengal Investment Grid':               ('/investment-grid',           'Investment Grid'),
    'MSME & ODOP':                          ('/msme-odop',                 'MSME & ODOP'),
    'ODOP Product Directory':               ('/msme-odop/directory',       'ODOP Product Directory'),
    'Chambers & Partners':                  ('/chambers-partners',         'Chambers & Partners'),
    'Media & News':                         ('/media',                     'Media & News'),
    'News · Article detail':                ('/media/article',             'Article'),
    'Participate':                          ('/participate',               'Participate'),
    'Facilitation Desk':                    ('/facilitation-desk',         'Facilitation Desk'),
    'Single-window portal':                 ('/single-window',             'Single-window portal'),
    'Policies & Incentives':                ('/policies',                  'Policies & Incentives'),
    'Downloads & Resources':                ('/downloads',                 'Downloads & Resources'),
    'Accessibility & Policies':             ('/accessibility',             'Accessibility'),
    'Contact us':                           ('/contact',                   'Contact us'),
    'FAQ':                                  ('/faq',                       'FAQ'),
    'Register · Choose your role':          ('/register',                  'Register'),
    'Register · Investor form':             ('/register/investor',         'Investor registration'),
    'Register · Delegate form':             ('/register/delegate',         'Delegate registration'),
    'Register · MSME / ODOP form':          ('/register/msme',             'MSME / ODOP registration'),
    'Register · Exhibitor & sponsor form':  ('/register/exhibitor',        'Exhibitor & sponsor'),
    'Register · Media form':                ('/register/media',            'Media accreditation'),
    'My account · Investor':                ('/account',                   'My account'),
    'Raise an enquiry':                     ('/enquiry',                   'Raise an enquiry'),
    'Request a meeting':                    ('/meeting',                   'Request a meeting'),
    'Enquiry confirmed':                    ('/enquiry/confirmed',         'Enquiry confirmed'),
}

# Sector pages share one route shape and carry the cluster's accent colour.
SECTOR_TONE = {
    'EV': 'orange', 'Semiconductors': 'orange', 'Electronics Manufacturing': 'orange',
    'Aerospace & Defence': 'orange',
    'Renewable Energy': 'green', 'Solar': 'green', 'Circular Economy': 'green',
    'Green Infrastructure': 'green',
    'Chemicals & Petrochemicals': 'blue', 'Logistics & Warehousing': 'blue',
    'Textiles & Apparel': 'blue', 'Food Processing': 'blue',
    'IT & ITeS': 'purple', 'AI & Deep Tech': 'purple',
    'Biotechnology & Pharma': 'purple', 'Data & Cloud': 'purple',
    'MSME': 'magenta', 'Start-ups': 'magenta', 'Tourism & Hospitality': 'magenta',
    'ODOP / GI district products': 'magenta',
}
CLUSTERS = [
    ('01', 'Future Manufacturing',       'orange',
     ['EV', 'Semiconductors', 'Electronics Manufacturing', 'Aerospace & Defence']),
    ('02', 'Green & Sustainable Growth', 'green',
     ['Renewable Energy', 'Solar', 'Circular Economy', 'Green Infrastructure']),
    ('03', 'Industrial & Trade Economy', 'blue',
     ['Chemicals & Petrochemicals', 'Logistics & Warehousing', 'Textiles & Apparel', 'Food Processing']),
    ('04', 'Digital & Knowledge Economy', 'purple',
     ['IT & ITeS', 'AI & Deep Tech', 'Biotechnology & Pharma', 'Data & Cloud']),
    ('05', 'Inclusive Enterprise Economy', 'magenta',
     ['MSME', 'Start-ups', 'Tourism & Hospitality', 'ODOP / GI district products']),
]

def slug(name):
    s = name.lower().replace('&', 'and')
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return s

TONES = ['orange', 'magenta', 'purple', 'blue', 'green']

def tone_for(page_tone, i):
    return page_tone or TONES[i % len(TONES)]

out_pages = {}
sectors = []

for p in pages:
    name = p['name']
    if name.startswith('Sector · '):
        label = name.split('· ', 1)[1]
        route = '/sectors/' + slug(label)
        tone = SECTOR_TONE.get(label, 'purple')
        sectors.append({'slug': slug(label), 'label': label, 'tone': tone})
    elif name in ROUTES:
        route, label = ROUTES[name]
        tone = None
    else:
        continue

    secs = []
    for i, s in enumerate(p['sections']):
        sec = {k: v for k, v in s.items() if k in
               ('eyebrow', 'title', 'intro', 'link', 'notes', 'breadcrumb')}
        items = []
        for j, it in enumerate(s.get('items', [])):
            item = {k: v for k, v in it.items()
                    if k in ('title', 'desc', 'cta', 'meta', 'bullets') and v}
            if item.get('title'):
                item['tone'] = tone_for(tone, j)
                items.append(item)
        if items:
            sec['items'] = items
        if sec.get('title') or sec.get('items'):
            secs.append(sec)

    out_pages[route] = {
        'route': route,
        'label': label if name not in ROUTES else ROUTES[name][1],
        'figmaId': p['id'],
        'tone': tone or 'purple',
        'sections': secs,
    }

sectors.sort(key=lambda s: s['label'].lower())

js = (
    "// AUTO-GENERATED from the WBIS 2027 Figma file\n"
    "// (C2afjL5C6o45JM4NjXiOEY, canvas '02 · Site — all screens').\n"
    "// Copy is transcribed from the design's text layers. Regenerate rather\n"
    "// than hand-editing if the design changes.\n\n"
    "export const SECTORS = " + json.dumps(sectors, ensure_ascii=False, indent=2) + "\n\n"
    "export const CLUSTERS = " + json.dumps(
        [{'num': n, 'name': nm, 'tone': t,
          'sectors': [{'label': x, 'slug': slug(x)} for x in xs]}
         for n, nm, t, xs in CLUSTERS], ensure_ascii=False, indent=2) + "\n\n"
    "export const PAGES = " + json.dumps(out_pages, ensure_ascii=False, indent=1) + "\n"
)
open(sys.argv[2], 'w').write(js)
print(f'routes={len(out_pages)} sectors={len(sectors)} '
      f'sections={sum(len(p["sections"]) for p in out_pages.values())} '
      f'items={sum(len(s.get("items",[])) for p in out_pages.values() for s in p["sections"])}')
