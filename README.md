# Brilliant Bengal — West Bengal Investment Summit 2027

Responsive public campaign site. React 18 + Vite + Tailwind, React Router.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Design system

Tokens live in `tailwind.config.js` and mirror the Figma variables exactly.

| Token | Hex | Use |
|---|---|---|
| `orange` | `#F2911D` | Manufacturing strand |
| `magenta` | `#E62B7C` | Enterprise / MSME strand |
| `purple` | `#5B4BB7` | Digital strand · **default CTA fill** |
| `blue` | `#3457C4` | Trade strand |
| `green` | `#16A05E` | Green strand · grounded status |
| `ink` `#231F20` / `muted` `#6E6A66` | | the only colours permitted for text |
| `paper` `#FAF8F3` | | page ground |

**Accessibility rule, non-negotiable.** GIGW 3.0 / WCAG 2.1 AA applies. The five petal
colours never carry body text — orange on paper is ~2.1:1. They are for fills, large
numerals, eyebrows and icons only. Body copy is `ink` or `muted`.

Type: **Plus Jakarta Sans** (display), **Figtree** (UI), **DM Sans** (numerals),
**Hind Siliguri** (Bengali). No serifs anywhere.

## Architecture

```
src/
  components/   Logo · Header (responsive, mobile drawer) · Footer · PageHero · UI primitives
  pages/        Home · WhyBengal · Opportunities · SectorDetail · Simple (template) · NotFound
  data/         nav.js · sectors.js · pages.js  ← content lives here, not in components
  styles/       index.css (Tailwind layers + focus/skip-link/reduced-motion)
```

`pages/Simple.jsx` is a data-driven template: a page is a hero plus a list of sections.
**To add a page, add an entry to `src/data/pages.js`** — it routes automatically from
`App.jsx`. That is how the remaining flowchart pages should be built; do not write a new
component per page.

## Responsive

Mobile-first. Header collapses to a drawer below `lg`. Card grids run 1 → 2 → 3/4.
Hero petal artwork is hidden below `md` so it never crowds the copy.
Honours `prefers-reduced-motion`. Skip-link and visible focus rings included.

## Still to build

- Remaining flowchart pages (districts, industrial parks, register, suppliers,
  facilitation desk, clinics, schemes, global bengal) — all via `data/pages.js`
- Bengali (`bn`) locale — the type stack is already in place
- Authenticated portal (Grid explorer, dashboard, meetings) — separate app surface
- Real content and sourced statistics: every number on the site is currently a
  placeholder from the pitch deck and needs a verified source before launch

## Deploy

`.github/workflows/deploy.yml` builds on push to `main` and publishes to GitHub Pages.
If deploying to a project path, set `base: '/<repo-name>/'` in `vite.config.js`.
