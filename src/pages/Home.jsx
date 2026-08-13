import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Section, SectionHead, Eyebrow, tone } from '../components/UI.jsx'
import { ClusterBoard } from './SectorsBoard.jsx'
import { ENGAGEMENTS, CALENDAR_MONTHS } from '../data/calendar.js'

// Homepage — Figma node 3:2 ("Homepage · Desktop 1440").
// Section numbering below follows the frame names in the design.

const STATUS = [
  { k: 'Next engagement',     v: 'North Bengal Summit', s: 'Siliguri · 12–13 January', t: 'magenta', to: '/calendar/north-bengal-summit' },
  { k: 'Districts engaged',   v: '23',    s: 'of 23',            t: 'orange',  to: '/investment-grid' },
  { k: 'Registered investors', v: '1,847', s: 'and counting',    t: 'purple',  to: '/register' },
  { k: 'Engagements delivered', v: '9',   s: 'of 14 scheduled',  t: 'green',   to: '/calendar' },
]

const DOORS = [
  { title: 'Invest in Bengal', t: 'purple',
    desc: 'Land, parks and projects across 23 districts — searchable now.', to: '/investment-grid' },
  { title: 'Grow my MSME', t: 'magenta',
    desc: 'ODOP, GI tagging, certification clinics and buyer connects.', to: '/msme-odop' },
  { title: 'Attend an event', t: 'orange',
    desc: 'Fifteen engagements. One pipeline.', to: '/calendar' },
  { title: 'Partner with us', t: 'green',
    desc: 'Chambers, sponsors and international trade bodies.', to: '/chambers-partners' },
]

const PROOF = [
  { n: '23', t: 'orange',  l: 'Districts, each with an assigned nodal officer' },
  { n: '58', t: 'magenta', l: 'ODOP products already identified and catalogued' },
  { n: '4',  t: 'purple',  l: 'International borders — Nepal, Bhutan, Bangladesh, Sikkim' },
  { n: '2',  t: 'green',   l: 'Deep-water ports at Kolkata and Haldia' },
]

const GRID_CHIPS = [
  { label: 'Industrial parks', t: 'orange' },
  { label: 'Land parcels',     t: 'green' },
  { label: 'MSME clusters',    t: 'magenta' },
  { label: 'ODOP & GI',        t: 'blue' },
]

const PRODUCTS = [
  { title: 'Baluchari silk',            place: 'Bankura',          t: 'magenta', plate: 'linear-gradient(135deg,#7d1e2d,#b8863b)' },
  { title: 'Darjeeling tea',            place: 'Darjeeling',       t: 'green',   plate: 'linear-gradient(135deg,#3f6b2f,#c9a227)' },
  { title: 'Dokra metalcraft',          place: 'Purba Bardhaman',  t: 'orange',  plate: 'linear-gradient(135deg,#5a4326,#c08a3e)' },
  { title: 'Fragrant Gobindobhog rice', place: 'Purba Bardhaman',  t: 'purple',  plate: 'linear-gradient(135deg,#8a6a45,#efe3cf)' },
]

function HeroArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] md:block">
      <svg viewBox="0 0 620 693" preserveAspectRatio="xMaxYMid slice" className="h-full w-full">
        <defs>
          <linearGradient id="hpA" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#F5931F" stopOpacity=".30" />
            <stop offset="1" stopColor="#F5931F" stopOpacity=".78" />
          </linearGradient>
          <linearGradient id="hpB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#E62B7C" stopOpacity=".22" />
            <stop offset="1" stopColor="#E62B7C" stopOpacity=".55" />
          </linearGradient>
          <linearGradient id="hpC" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#6B4FB8" stopOpacity=".20" />
            <stop offset="1" stopColor="#6B4FB8" stopOpacity=".48" />
          </linearGradient>
        </defs>
        <path fill="url(#hpA)" d="M120 693C120 350 300 90 610 60c-18 372-208 633-490 633Z" />
        <path fill="url(#hpC)" d="M330 693c0-300 120-500 300-560-10 330-120 560-300 560Z" />
        <path fill="url(#hpB)" d="M470 693c0-250 60-430 150-500-4 280-52 470-150 500Z" />
      </svg>
    </div>
  )
}

export default function Home() {
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const upcoming = ENGAGEMENTS.slice(2, 5)

  return (
    <>
      {/* 3 · Hero */}
      <section className="relative flex min-h-[560px] flex-col justify-center overflow-hidden lg:min-h-[693px]">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,#dfe7ea 0%,#f2e4d2 46%,#e9d9c4 74%,#cbb9a4 100%)' }}
        />
        <HeroArt />
        <div className="shell relative py-16">
          <Eyebrow t="magenta">West Bengal Investment Summit · November 2027</Eyebrow>
          <h1 className="mt-5 max-w-[640px] font-display text-[38px] font-extrabold leading-[1.02] tracking-[-.03em] sm:text-[52px] lg:text-[68px]">
            A brilliant future,<br />built together.
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-[#2b2f36] sm:text-[17px]">
            A year-long investment campaign across 23 districts — from the Grand Curtain Raiser
            in November 2026 to the Grand Summit in November 2027.
          </p>
          <div className="mt-8 flex flex-wrap gap-[14px]">
            <Button to="/register">Register your interest</Button>
            <Button to="/investment-grid" variant="light">Explore the Investment Grid</Button>
          </div>
        </div>
        <div className="relative mt-auto bg-orange">
          <div className="shell flex flex-wrap justify-end gap-8 py-[18px] text-center sm:gap-20">
            <div>
              <p className="font-display text-[19px] font-bold text-white">Shri Narendra Modi</p>
              <p className="mt-0.5 text-sm text-white/[.92]">Hon'ble Prime Minister</p>
            </div>
            <div>
              <p className="font-display text-[19px] font-bold text-white">Shri Suvendu Adhikari</p>
              <p className="mt-0.5 text-sm text-white/[.92]">Hon'ble Chief Minister of West Bengal</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Live status strip */}
      <div className="border-b border-line bg-paper">
        <div className="shell grid gap-8 py-[26px] sm:grid-cols-2 lg:grid-cols-4">
          {STATUS.map((s) => (
            <Link key={s.k} to={s.to} className="group">
              <p className="eyebrow font-semibold text-muted">{s.k}</p>
              <p className={`mt-2 font-display text-2xl font-extrabold group-hover:underline ${tone(s.t).text}`}>{s.v}</p>
              <p className="mt-1 text-[13px] text-muted">{s.s}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 5 · Audience routing */}
      <Section>
        <Eyebrow t="purple" className="!text-muted">I am here to</Eyebrow>
        <ul className="mt-6 grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {DOORS.map((d) => {
            const k = tone(d.t)
            return (
              <li key={d.title}>
                <Link
                  to={d.to}
                  className="flex h-full flex-col rounded-[14px] border border-line bg-white p-6 transition-shadow hover:shadow-[0_2px_20px_rgba(22,24,28,.09)]"
                >
                  <span aria-hidden="true" className={`h-1 w-[30px] rounded ${k.bg}`} />
                  <h3 className="mt-4 font-display text-xl font-extrabold">{d.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{d.desc}</p>
                  <p className={`mt-4 text-[13px] font-semibold ${k.text}`}>Start here →</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </Section>

      {/* 6 · Why Bengal */}
      <Section ground="white">
        <SectionHead
          eyebrow="Why Bengal, why now"
          t="green"
          title="The eastern gateway — to India, and to everything east of it."
          intro="Four international borders, two major ports, the largest MSME base in eastern India and a land bank ready for allocation. Every figure below is sourced."
          link="Read the full case →"
          linkTo="/why-bengal"
        />
        <dl className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.n + p.l}>
              <dt className="sr-only">{p.l}</dt>
              <dd>
                <span className={`block font-display text-[44px] font-extrabold leading-none ${tone(p.t).text}`}>{p.n}</span>
                <span className="mt-2.5 block text-sm leading-snug">{p.l}</span>
                <span className="mt-2 block text-[11px] text-muted">Source · Industries Dept, 2026</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* 7 · Sector clusters */}
      <Section>
        <SectionHead
          eyebrow="Five clusters · Twenty sectors"
          t="purple"
          title="Where Bengal is open for business"
          link="All twenty sectors →"
          linkTo="/sectors"
        />
        <ClusterBoard />
      </Section>

      {/* 8 · Investment Grid teaser */}
      <section className="bg-ink text-white">
        <div className="shell grid items-center gap-14 py-16 lg:grid-cols-[1fr_420px]">
          <div>
            <Eyebrow t="orange">Bengal Investment Grid</Eyebrow>
            <h2 className="mt-4 font-display text-[30px] font-extrabold leading-[1.14] sm:text-[42px]">
              Find land, parks and projects — before you ever board a flight.
            </h2>
            <p className="mt-4 max-w-[560px] text-base leading-relaxed text-white/70">
              Every industrial park, land parcel, MSME cluster, ODOP product and live project
              across 23 districts — searchable today, not at the summit.
            </p>
            <form
              className="mt-7 flex max-w-[565px] items-center rounded-pill bg-white py-1.5 pl-[22px] pr-1.5"
              onSubmit={(e) => { e.preventDefault(); navigate('/investment-grid') }}
            >
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search a district, sector or product"
                placeholder="Search a district, sector or product…"
                className="min-w-0 flex-1 bg-transparent py-3 text-[15px] text-ink outline-none placeholder:text-[#8a8f97]"
              />
              <button type="submit" className="rounded-pill bg-purple px-[24px] py-[13px] text-[15px] font-bold text-white hover:bg-[#5c43a1]">
                Search
              </button>
            </form>
            <div className="mt-[18px] flex flex-wrap gap-2.5">
              {GRID_CHIPS.map((c) => (
                <Link
                  key={c.label}
                  to="/investment-grid"
                  className={`rounded-pill border px-3.5 py-1.5 text-xs font-semibold ${tone(c.t).text} ${tone(c.t).border}`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/investment-grid" className="flex min-h-[290px] flex-col rounded-2xl bg-[#232529] p-6 hover:ring-1 hover:ring-white/20">
            <p className="eyebrow text-white/60">Interactive district map</p>
            <p className="mt-1.5 text-xs text-white/50">23 districts · tap to filter</p>
            <span
              aria-hidden="true"
              className="mt-3.5 flex flex-1 items-end rounded-xl border border-dashed border-white/[.16] p-3.5 text-[11px] uppercase tracking-wider text-white/45"
              style={{ backgroundImage: 'radial-gradient(rgba(197,143,232,.30) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
            >
              District map — pending asset export
            </span>
          </Link>
        </div>
      </section>

      {/* 9 · Campaign timeline */}
      <Section ground="white">
        <SectionHead eyebrow="The road to November 2027" t="purple" title="Fifteen engagements. One pipeline." />
        <div className="mt-7 flex items-center gap-1 overflow-x-auto rounded-pill bg-paper p-2">
          {CALENDAR_MONTHS.map((m, i) => (
            <Link
              key={m}
              to="/calendar"
              className={`flex-1 whitespace-nowrap rounded-pill px-3 py-2.5 text-center text-[11px] font-bold tracking-[0.1em] ${
                i === 0 || i === CALENDAR_MONTHS.length - 1
                  ? 'bg-ink text-white'
                  : i === 2 ? 'bg-purple text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {m}
            </Link>
          ))}
        </div>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e) => {
            const k = tone(e.tone)
            return (
              <li key={e.title}>
                <Link
                  to={e.to ?? '/calendar'}
                  className="flex h-full flex-col rounded-xl border border-line bg-white p-[22px] transition-shadow hover:shadow-[0_2px_20px_rgba(22,24,28,.09)]"
                >
                  <p className={`eyebrow ${k.text}`}>{e.month} {e.year}</p>
                  <h3 className="mt-3 font-display text-[19px] font-bold leading-snug">{e.title}</h3>
                  <p className="mt-3 text-[13px] text-muted">{e.place} · {e.focus}</p>
                  <p className={`mt-3.5 text-[13px] font-bold ${k.text}`}>Register →</p>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-4 flex flex-wrap justify-between gap-5">
          <p className="text-[13px] text-muted">Showing three of fifteen engagements from JAN 2027</p>
          <Link to="/calendar" className="text-[13px] font-bold text-purple">See the full calendar →</Link>
        </div>
      </Section>

      {/* 10 · MSME & ODOP */}
      <Section>
        <SectionHead
          eyebrow="MSME & ODOP · 58 products · 23 districts"
          t="magenta"
          title="Every district has something to sell"
          link="See the full directory →"
          linkTo="/msme-odop/directory"
        />
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <li key={p.title}>
              <Link
                to="/msme-odop/directory"
                className="block overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-[0_2px_20px_rgba(22,24,28,.09)]"
              >
                {/* Product photography is an image fill in Figma; the export is
                    unavailable here, so each card carries a tonal plate. */}
                <span aria-hidden="true" className="block h-[150px]" style={{ background: p.plate }} />
                <span className="block px-[18px] pb-[18px] pt-4">
                  <span className="block font-display text-base font-bold">{p.title}</span>
                  <span className={`mt-1.5 block text-xs font-semibold ${tone(p.t).text}`}>{p.place} · GI tagged</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 11 · Closing CTA */}
      <section className="border-t border-line bg-paper">
        <div className="shell py-16 text-center">
          <h2 className="mx-auto max-w-[760px] font-display text-[30px] font-extrabold leading-tight sm:text-[40px]">
            Tell us what you want to build in Bengal.
          </h2>
          <p className="mt-4 text-base text-muted">
            Three minutes to register. A named facilitation officer within two working days.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button to="/register">Register your interest</Button>
            <Button to="/facilitation-desk" variant="secondary">Facilitation Desk</Button>
          </div>
        </div>
      </section>
    </>
  )
}
