import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, CardGrid, tone } from '../components/UI.jsx'

const PILLARS = [
  { eyebrow: '01', t: 'orange',  title: 'Eastern gateway',       desc: 'Land borders with Bangladesh, Nepal and Bhutan. Road and rail access to the entire North-East.' },
  { eyebrow: '02', t: 'magenta', title: 'Investment advantage',  desc: 'Competitive land, power and labour costs against every comparable industrial state.' },
  { eyebrow: '03', t: 'purple',  title: 'Economic corridors',    desc: 'Six corridors linking ports, industrial belts, agri clusters and the Kolkata metro economy.' },
  { eyebrow: '04', t: 'blue',    title: 'Infrastructure',        desc: 'Two major ports, an international airport, dedicated freight corridor access and surplus power.' },
  { eyebrow: '05', t: 'green',   title: 'Policy & facilitation', desc: 'Single-window clearance, a dedicated facilitation desk and a nodal officer for every project.' },
  { eyebrow: '06', t: 'orange',  title: 'Talent',                desc: 'India’s densest concentration of engineering and management institutions outside the south.' },
]

const NUMBERS = [
  { n: '₹18.2L Cr', l: 'Gross state domestic product', t: 'orange' },
  { n: '2',   l: 'Major ports', t: 'magenta' },
  { n: '23',  l: 'Districts', t: 'purple' },
  { n: '500M',l: 'Regional market reach', t: 'blue' },
  { n: '#1',  l: 'Jute & tea output in India', t: 'green' },
]

export default function WhyBengal() {
  return (
    <>
      <PageHero
        eyebrow="Why Bengal" t="orange" accent="green"
        title="The eastern gateway to a market of 500 million."
        intro="Bengal sits at the meeting point of India’s east, the North-East, and the Bay of Bengal economies — with the port, the power and the people to serve all three."
        proof={[
          { value: '₹18.2L Cr', label: 'Gross state product' },
          { value: '500M', label: 'Regional market reach' },
          { value: '2', label: 'Major ports' },
        ]}
      />
      <Section>
        <SectionHead eyebrow="Six reasons" t="orange" title="Why invest now" />
        <CardGrid cols={3} items={PILLARS} />
      </Section>
      <Section ground="white">
        <SectionHead eyebrow="At a glance" t="purple" title="The state in numbers" />
        <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {NUMBERS.map((s) => (
            <div key={s.l}>
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <span className={`block font-display text-3xl font-extrabold sm:text-4xl ${tone(s.t).text}`}>{s.n}</span>
                <span className="mt-2 block text-sm text-muted">{s.l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
