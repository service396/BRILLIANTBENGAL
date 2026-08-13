# Brilliant Bengal — West Bengal Investment Summit 2027

Public campaign site. React 18 + Vite + Tailwind, React Router.

Built from the WBIS 2027 Figma file
(`C2afjL5C6o45JM4NjXiOEY`, canvas *02 · Site — all screens*).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Content is generated, not hand-written

`src/data/site.js` is **generated** from the design's own text layers and
carries 52 routes, 146 sections and 459 cards. Do not hand-edit it — when the
design changes, re-run the tools:

```bash
python3 tools/figma-extract.py       pages.json    # Figma metadata → structure
python3 tools/figma-generate-site.py pages.json src/data/site.js
```

`figma-extract.py` walks the Figma metadata tree, resolving instances of the
shared `Section / …` components, separating breadcrumb trails from headings,
and recognising card runs by their sibling shape (most card frames in the file
are simply named "Frame", so name matching alone finds only a fifth of them).

## Routing

Routing is data-driven: **every entry in `PAGES` becomes a route**, so the app
cannot drift out of sync with the design's page list. Five screens need real
behaviour and are hand-built on top of that data, registered in `BESPOKE` in
`src/App.jsx`:

| Route | Behaviour |
|---|---|
| `/` | The twelve homepage sections; every card links onward |
| `/sectors` | Cluster board; each sector deep-links to its own page |
| `/sectors/all` | All twenty sectors, A–Z |
| `/calendar` | View and month filters over fifteen engagements |
| `/investment-grid` | Free-text search plus type, district and status filters |

Everything else renders through `GenericPage`.

## Design system

Tokens live in `tailwind.config.js` and are the design's literal values.

| Token | Hex | Use |
|---|---|---|
| `orange` | `#F5931F` | Manufacturing strand |
| `magenta` | `#E62B7C` | Enterprise / MSME strand |
| `purple` | `#6B4FB8` | Digital strand · **default CTA fill** |
| `blue` | `#3457C4` | Trade strand |
| `green` | `#16A05E` | Green strand · grounded status |
| `ink` `#16181C` / `muted` `#5B6068` | | the only colours permitted for text |
| `paper` `#FAF8F3` | | page ground |
| `line` `#E8E5DF` | | hairlines |

Shell gutter is 60px; pill radius is 100px.

**Accessibility rule, non-negotiable.** GIGW 3.0 / WCAG 2.1 AA applies. The five
petal colours never carry body text — orange on paper is ~2.1:1. They are for
fills, large numerals, eyebrows and icons only. Body copy is `ink` or `muted`.
The header's A−/A/A+ control scales the root font size, and the skip link,
visible focus rings and reduced-motion handling are in `src/styles/index.css`.

Type: **Plus Jakarta Sans** (display), **Figtree** (UI), **Hind Siliguri**
(Bengali). No serifs anywhere.

## Deploy

`vercel.json` pins the Vite preset and rewrites all paths to `/index.html`, so
React Router deep links such as `/sectors/semiconductors` resolve on direct
hits rather than 404ing. Any static host works; the build output is `dist/`.

`brilliant-bengal.html` at the repo root is a standalone single-file version of
the homepage — no build step, no dependencies — useful for quick sharing.

## Known gaps

- **Images are placeholders.** The hero portraits, ODOP product photography,
  the district map and the logo vector are exports from Figma that were not
  reachable from the build environment. Each placeholder is commented at its
  call site. Geometry boxes are already at their designed dimensions.
- **Calendar and Investment Grid records are reconstructed.** Both boards are
  composed in Figma from component variants that the metadata dump does not
  expand. The filter taxonomies come from the variant names and are exact; the
  fifteen engagements (`src/data/calendar.js`) and twelve listings
  (`src/data/grid.js`) are assembled from engagements named elsewhere in the
  design plus representative records in the right shape.
- **Every statistic needs a source before launch.** The figures carried through
  from the design are pitch-deck placeholders.
