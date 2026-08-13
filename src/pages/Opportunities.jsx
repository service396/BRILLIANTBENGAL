import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, CardGrid } from '../components/UI.jsx'
import { SECTORS } from '../data/sectors.js'

export default function Opportunities() {
  const items = SECTORS.map((s, i) => ({
    eyebrow: String(i + 1).padStart(2, '0'),
    t: s.t, title: s.name, desc: s.cluster,
    meta: 'View opportunities', to: `/sectors/${s.slug}`,
  }))
  return (
    <>
      <PageHero
        eyebrow="Opportunities" t="magenta" accent="blue"
        title="Fourteen sectors. Five clusters."
        intro="Sector clusters drive outreach format, chamber partnerships and roadshow programming across the twelve-month campaign."
        proof={[
          { value: '14', label: 'Priority sectors' },
          { value: '5', label: 'Strategic clusters' },
          { value: '247', label: 'Live opportunities' },
        ]}
      />
      <Section>
        <SectionHead eyebrow="All sectors" t="magenta" title="Choose a sector" />
        <CardGrid cols={4} items={items} />
      </Section>
    </>
  )
}
