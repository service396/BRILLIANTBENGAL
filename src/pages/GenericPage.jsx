import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, CardGrid, Button } from '../components/UI.jsx'
import { PAGES, SECTORS } from '../data/site.js'
import NotFound from './NotFound.jsx'

const ACCENT = { orange: 'magenta', magenta: 'purple', purple: 'orange', blue: 'green', green: 'blue' }

// Cards whose title names a sector deep-link to that sector's page; this is
// what makes the cluster and directory boards behave like the prototype.
const SECTOR_BY_LABEL = Object.fromEntries(SECTORS.map((s) => [s.label.toLowerCase(), s.slug]))

function linkFor(item) {
  const slug = SECTOR_BY_LABEL[item.title?.toLowerCase()]
  return slug ? `/sectors/${slug}` : undefined
}

function colsFor(n) {
  if (n % 4 === 0) return 4
  if (n % 3 === 0 || n > 4) return 3
  return 2
}

export function PageBody({ page }) {
  const [hero, ...rest] = page.sections
  const t = page.tone ?? 'purple'
  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow}
        t={t}
        accent={ACCENT[t] ?? 'orange'}
        title={hero?.title ?? page.label}
        intro={hero?.intro}
      >
        {page.route !== '/register' && (
          <>
            <Button to="/register">Register your interest</Button>
            <Button to="/contact" variant="secondary">Talk to the Facilitation Desk</Button>
          </>
        )}
      </PageHero>

      {hero?.items?.length > 0 && (
        <Section>
          <CardGrid items={hero.items} cols={colsFor(hero.items.length)} linkFor={linkFor} />
        </Section>
      )}

      {rest.map((s, i) => (
        <Section key={`${s.title ?? 'section'}-${i}`} ground={i % 2 === 0 ? 'white' : 'paper'}>
          <SectionHead
            eyebrow={s.eyebrow}
            t={t}
            title={s.title}
            intro={s.intro}
            notes={s.notes}
            link={s.link}
            linkTo={page.route}
          />
          {s.items?.length > 0 && (
            <CardGrid items={s.items} cols={colsFor(s.items.length)} linkFor={linkFor} />
          )}
        </Section>
      ))}
    </>
  )
}

// Route-driven: every entry in PAGES renders through here unless a bespoke
// component is registered for it in App.jsx.
export default function GenericPage({ route }) {
  const params = useParams()
  const key = route ?? (params.slug ? `/sectors/${params.slug}` : null)
  const page = key ? PAGES[key] : null
  if (!page) return <NotFound />
  return <PageBody page={page} />
}
