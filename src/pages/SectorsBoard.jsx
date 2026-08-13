import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, tone } from '../components/UI.jsx'
import { CLUSTERS, SECTORS, PAGES } from '../data/site.js'

// Sector cluster board — Figma node 12:72. Five columns, each a cluster with
// its four sectors listed and a coloured overview bar.
export function ClusterBoard() {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {CLUSTERS.map((c) => {
        const k = tone(c.tone)
        return (
          <li
            key={c.num}
            className="flex flex-col overflow-hidden rounded-[10px] border border-t-4 border-line bg-white"
            style={{ borderTopColor: k.hex }}
          >
            <div className="px-[18px] pb-3 pt-[18px]">
              <p className={`font-display text-[26px] font-extrabold ${k.text}`}>{c.num}</p>
              <p className="mt-2 text-[16px] font-bold leading-tight">{c.name}</p>
              <p className="mt-2 flex items-center justify-between text-xs text-muted">
                <span>{c.sectors.length} sectors</span>
                <span aria-hidden="true" className={k.text}>▲</span>
              </p>
            </div>
            <ul className="border-t border-line">
              {c.sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/sectors/${s.slug}`}
                    className="flex items-center justify-between gap-2 border-b border-line px-[18px] py-[11px] text-[13px] hover:bg-paper"
                  >
                    <span>{s.label}</span>
                    <span aria-hidden="true" className={k.text}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={`/sectors/${c.sectors[0].slug}`}
              className={`mt-auto block px-[18px] py-3 text-[13px] font-bold text-white ${k.bg}`}
            >
              Cluster overview →
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function SectorsBoard() {
  const page = PAGES['/sectors']
  const hero = page?.sections?.[0]
  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow ?? 'Five clusters · Twenty sectors'}
        t="magenta"
        accent="blue"
        title={hero?.title ?? 'Where Bengal is open for business'}
        intro={hero?.intro ?? 'Twenty priority sectors grouped into five strategic clusters. Each cluster drives its own outreach format, chamber partnerships and roadshow programming across the twelve-month campaign.'}
      />
      <Section>
        <SectionHead
          eyebrow="Five clusters · Twenty sectors"
          t="magenta"
          title="Choose a cluster"
          link="All sectors A–Z →"
          linkTo="/sectors/all"
        />
        <ClusterBoard />
      </Section>
    </>
  )
}

// Sectors A–Z — Figma node 73:6458.
export function SectorsAZ() {
  return (
    <>
      <PageHero
        eyebrow="All sectors"
        t="blue"
        accent="green"
        title="All twenty sectors, A to Z"
        intro="Every priority sector with its cluster, opportunity map, incentives and named nodal officer."
      />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SECTORS.map((s) => {
            const k = tone(s.tone)
            return (
              <li key={s.slug}>
                <Link
                  to={`/sectors/${s.slug}`}
                  className="flex h-full items-center justify-between gap-3 rounded-card border border-line bg-white p-5 transition-shadow hover:shadow-[0_2px_20px_rgba(22,24,28,.09)]"
                >
                  <span className="font-display text-[17px] font-bold leading-snug">{s.label}</span>
                  <span aria-hidden="true" className={`text-lg ${k.text}`}>→</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Section>
    </>
  )
}
