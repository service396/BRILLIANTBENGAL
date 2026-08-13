import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, CardGrid, Button } from '../components/UI.jsx'
import { SECTORS } from '../data/sectors.js'

export default function SectorDetail() {
  const { slug } = useParams()
  const sector = SECTORS.find((s) => s.slug === slug)
  if (!sector) {
    return (
      <Section>
        <h1 className="font-display text-3xl font-extrabold">Sector not found</h1>
        <p className="mt-3 text-muted">That sector isn’t in the priority list.</p>
        <Link to="/sectors" className="mt-6 inline-block font-semibold text-purple">Back to all sectors →</Link>
      </Section>
    )
  }
  return (
    <>
      <PageHero
        eyebrow={sector.cluster} t={sector.t} accent="blue"
        title={sector.name}
        intro={`Live opportunities, incentives and facilitation for ${sector.name.toLowerCase()} across West Bengal’s six economic corridors.`}
        proof={[
          { value: '9', label: 'Live projects' },
          { value: '1.2 lakh', label: 'Engineering graduates a year' },
          { value: '34%', label: 'Below Bengaluru cost base' },
        ]}
      >
        <Button to="/investment-grid">Open the Grid, filtered</Button>
        <Button to="/contact" variant="secondary">Request a meeting</Button>
      </PageHero>
      <Section>
        <SectionHead eyebrow="The case" t={sector.t} title={`Why ${sector.name} in Bengal`} />
        <CardGrid cols={3} items={[
          { t: sector.t, title: 'Cost advantage', desc: 'Operating costs 30–40% below comparable metros across real estate, salary and utilities.' },
          { t: sector.t, title: 'Talent pipeline', desc: '1.2 lakh engineering graduates a year from IIT Kharagpur, Jadavpur, IIEST and the state technical network.' },
          { t: sector.t, title: 'Ready infrastructure', desc: 'Notified parks with sanctioned power, pre-cleared land parcels and single-window approvals.' },
        ]} />
      </Section>
    </>
  )
}
