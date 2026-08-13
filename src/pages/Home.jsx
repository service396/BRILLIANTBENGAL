import { Link } from 'react-router-dom'
import { Button, Section, SectionHead, CardGrid, Eyebrow, Chip, tone } from '../components/UI.jsx'

const AUDIENCES = [
  { title: 'Investors', t: 'orange', to: '/grid', meta: 'Explore the Grid',
    desc: 'Search 247 live opportunities across 23 districts. Shortlist projects, request a meeting with the nodal department, and track your file to grounding.' },
  { title: 'MSMEs', t: 'magenta', to: '/msme/register', meta: 'Register your MSME',
    desc: 'Register your enterprise, book a certification or finance clinic, showcase an ODOP or GI product, and meet buyers face to face.' },
  { title: 'Buyers & anchors', t: 'blue', to: '/suppliers', meta: 'Browse suppliers',
    desc: 'Browse verified suppliers by capability and district. Run vendor development programmes and source from Bengal’s clusters.' },
  { title: 'Global Bengal', t: 'green', to: '/global-bengal', meta: 'Join the network',
    desc: 'Diaspora investors, foreign chambers and bilateral bodies. Partner-country roundtables and cross-border trade sessions.' },
]

const STATS = [
  { n: '14', l: 'Priority sectors', t: 'orange' },
  { n: '23', l: 'Districts mapped', t: 'magenta' },
  { n: '13', l: 'Engagements', t: 'purple' },
  { n: '10', l: 'Roadshow cities', t: 'blue' },
  { n: '58', l: 'ODOP products', t: 'green' },
]

const DATES = [
  { k: 'Curtain Raiser',   v: 'Nov 2026 · Kolkata', t: 'orange' },
  { k: 'Regional Summits', v: 'Jan–Sep 2027 · Six corridors', t: 'blue' },
  { k: 'Grand Summit',     v: '7–8 Nov 2027 · Kolkata', t: 'green' },
]

const STRANDS = [
  { title: 'Manufacturing', t: 'orange', wash: true, eyebrow: 'Bengal 365', desc: 'EV · Semiconductors · Electronics · Aerospace & Defence', meta: 'Feb · Jun 2027' },
  { title: 'Green', t: 'green', wash: true, eyebrow: 'Bengal 365', desc: 'Renewable energy · Solar · Circular economy', meta: 'Jun 2027' },
  { title: 'Trade', t: 'blue', wash: true, eyebrow: 'Bengal 365', desc: 'Chemicals · Logistics · Textiles · Food processing', meta: 'Mar · May 2027' },
  { title: 'Digital', t: 'purple', wash: true, eyebrow: 'Bengal 365', desc: 'IT & ITeS · AI & Deep Tech · Biotech · Data & Cloud', meta: 'Jul 2027' },
  { title: 'Enterprise', t: 'magenta', wash: true, eyebrow: 'Bengal 365', desc: 'MSME · Start-ups · Tourism · ODOP & GI districts', meta: 'Jan–Sep 2027' },
  { title: 'Fringe', t: 'purple', wash: true, eyebrow: 'Bengal 365', desc: 'District chamber events, clinics and roadshows statewide', meta: 'Open calendar' },
]

const GROUNDED = [
  { title: 'Purba Medinipur Agri-Export Cluster', t: 'green', eyebrow: 'Food Processing × WBSIDCL', desc: '₹310 Cr committed · 1,200 jobs' },
  { title: 'Howrah Electrical Equipment Facility', t: 'orange', eyebrow: 'Manufacturing × HIDCO', desc: '₹420 Cr committed · 1,800 jobs' },
  { title: 'Salt Lake Data Centre & Cloud Campus', t: 'purple', eyebrow: 'IT & ITeS × WBIDC', desc: '₹1,240 Cr committed · 3,100 jobs' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[45%] md:block">
          <svg viewBox="0 0 560 660" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <path fill="#F2911D" d="M300 660C300 300 150 40 0 70c30 340 160 590 300 590Z" transform="translate(20 0)" />
            <path fill="#16A05E" d="M0 660C0 300 150 40 300 70c-30 340-160 590-300 590Z" transform="translate(260 -30)" />
            <path fill="#5B4BB7" d="M155 0c95 120 95 300 0 430C60 300 60 120 155 0Z" transform="translate(180 60)" />
            <path fill="#E62B7C" d="M102 0c62 78 62 174 0 254C40 174 40 78 102 0Z" transform="translate(235 40)" />
          </svg>
        </div>

        <div className="shell relative py-14 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <Eyebrow t="magenta">West Bengal Investment Summit · 2027</Eyebrow>
            <h1 className="mt-4 font-display text-[38px] font-extrabold leading-[1.05] tracking-tight sm:text-[54px] lg:text-[64px]">
              A brilliant future,<br className="hidden sm:block" /> built together.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Fourteen priority sectors. Six economic corridors. Twelve months of engagements
              across the state, ending in the Grand Summit at Kolkata.
            </p>

            <dl className="mt-9 grid gap-6 sm:grid-cols-3">
              {DATES.map((d) => (
                <div key={d.k}>
                  <span aria-hidden="true" className={`block h-2.5 w-2.5 rounded-full ${tone(d.t).dot}`} />
                  <dt className="mt-2.5 text-sm font-semibold">{d.k}</dt>
                  <dd className="mt-1 text-sm text-muted">{d.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/opportunities">Explore opportunities</Button>
              <Button to="/partners" variant="secondary">Partner with us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <Section ground="white">
        <h2 className="font-display text-[26px] font-extrabold sm:text-[34px] lg:text-[40px]">The scale of the opportunity</h2>
        <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <div key={s.l}>
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <span className={`block font-display text-4xl font-extrabold sm:text-5xl ${tone(s.t).text}`}>{s.n}</span>
                <span className="mt-2 block text-sm text-muted">{s.l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Audience router */}
      <Section>
        <SectionHead eyebrow="Who you are" t="magenta" title="Four ways in"
          intro="The site routes by intent. Every path ends in a registration and a record in the implementation pipeline." />
        <CardGrid cols={4} items={AUDIENCES} />
      </Section>

      {/* Bengal 365 */}
      <Section ground="white">
        <SectionHead eyebrow="The year-round programme" t="purple" title="Bengal 365"
          intro="The summit is two days. The campaign is twelve months. Each strand runs its own engagements, chamber partnerships and investor pipeline — all consolidating into November 2027." />
        <CardGrid cols={3} items={STRANDS} />
      </Section>

      {/* Grounded proof */}
      <Section>
        <SectionHead eyebrow="Proof, not promises" t="green" title="What has already been grounded"
          intro="Every card is a Category A project drawn live from the implementation dashboard. The record the department tracks is the record the public sees." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUNDED.map((g) => (
            <li key={g.title} className="card">
              <Chip t="green">Category A · Grounded</Chip>
              <p className={`eyebrow mt-4 ${tone(g.t).text}`}>{g.eyebrow}</p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug">{g.title}</h3>
              <p className="mt-2 font-data text-sm text-muted">{g.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Closing CTA */}
      <Section ground="white">
        <div className="max-w-2xl">
          <h2 className="font-display text-[26px] font-extrabold sm:text-[34px] lg:text-[40px]">Bring your project to Bengal.</h2>
          <p className="mt-4 text-base text-muted sm:text-lg">Registration opens with the Curtain Raiser in November 2026.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/register">Register</Button>
            <Button to="/opportunities" variant="secondary">Explore opportunities</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
