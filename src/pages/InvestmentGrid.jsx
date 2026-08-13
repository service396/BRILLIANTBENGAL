import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, tone } from '../components/UI.jsx'
import { GRID_TYPES, GRID_DISTRICTS, GRID_STATUS, LISTINGS } from '../data/grid.js'

// Bengal Investment Grid — Figma node 16:320. The design's controls are a
// free-text search, a type view, and district/status dropdowns. All are live.
export default function InvestmentGrid() {
  const [q, setQ] = useState('')
  const [type, setType] = useState(GRID_TYPES[0])
  const [district, setDistrict] = useState(GRID_DISTRICTS[0])
  const [status, setStatus] = useState(GRID_STATUS[0])

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return LISTINGS.filter((l) => {
      if (type !== GRID_TYPES[0] && l.type !== type) return false
      if (district !== GRID_DISTRICTS[0] && l.district !== district) return false
      if (status !== GRID_STATUS[0] && l.status !== status) return false
      if (!needle) return true
      return [l.title, l.district, l.sector, l.type, l.meta]
        .join(' ').toLowerCase().includes(needle)
    })
  }, [q, type, district, status])

  const reset = () => { setQ(''); setType(GRID_TYPES[0]); setDistrict(GRID_DISTRICTS[0]); setStatus(GRID_STATUS[0]) }
  const selectCls = 'rounded-field border border-line bg-white px-4 py-3 text-sm font-semibold text-ink'

  return (
    <>
      <PageHero
        eyebrow="Bengal Investment Grid"
        t="orange"
        accent="purple"
        title="Find land, parks and projects — before you ever board a flight."
        intro="Every industrial park, land parcel, MSME cluster, ODOP product and live project across 23 districts — searchable today, not at the summit."
      />

      <Section>
        <SectionHead eyebrow="Search the Grid" t="orange" title="Filter the register" />

        <form className="mt-8" onSubmit={(e) => e.preventDefault()} role="search">
          <div className="flex max-w-2xl items-center rounded-pill border border-line bg-white py-1.5 pl-[22px] pr-1.5">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search a district, sector or product"
              placeholder="Search a district, sector or product…"
              className="min-w-0 flex-1 bg-transparent py-3 text-[15px] outline-none placeholder:text-[#8a8f97]"
            />
            <span className="rounded-pill bg-purple px-[24px] py-[13px] text-[15px] font-bold text-white">Search</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by type">
            {GRID_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={type === t}
                onClick={() => setType(t)}
                className={`rounded-pill px-4 py-2 text-[13px] font-semibold transition-colors ${
                  type === t ? 'bg-ink text-white' : 'border border-line bg-white hover:border-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <label className="sr-only" htmlFor="grid-district">District</label>
            <select id="grid-district" className={selectCls} value={district} onChange={(e) => setDistrict(e.target.value)}>
              {GRID_DISTRICTS.map((d) => <option key={d}>{d}</option>)}
            </select>
            <label className="sr-only" htmlFor="grid-status">Status</label>
            <select id="grid-status" className={selectCls} value={status} onChange={(e) => setStatus(e.target.value)}>
              {GRID_STATUS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </form>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          {results.length} of {LISTINGS.length} records
        </p>

        {results.length === 0 ? (
          <p className="mt-8 rounded-card border border-line bg-white p-10 text-center text-muted">
            Nothing matches those filters.{' '}
            <button type="button" className="font-bold text-purple" onClick={reset}>Clear all filters</button>
          </p>
        ) : (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((l) => {
              const k = tone(l.tone)
              return (
                <li key={l.title}>
                  <Link
                    to="/enquiry"
                    className="flex h-full flex-col rounded-card border border-line bg-white p-6 transition-shadow hover:shadow-[0_2px_20px_rgba(22,24,28,.09)]"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className={`eyebrow ${k.text}`}>{l.type}</span>
                      <span className={`rounded-pill px-2.5 py-1 text-[11px] font-semibold ${k.wash} ${k.text}`}>{l.status}</span>
                    </span>
                    <h3 className="mt-3 font-display text-[19px] font-bold leading-snug">{l.title}</h3>
                    <p className="mt-3 text-[13px] text-muted">{l.district} · {l.sector}</p>
                    <p className="mt-1 text-[13px] text-muted">{l.meta}</p>
                    <p className={`mt-5 text-[13px] font-bold ${k.text}`}>Raise an enquiry →</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </Section>
    </>
  )
}
