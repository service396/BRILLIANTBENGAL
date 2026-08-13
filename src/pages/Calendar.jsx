import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, tone } from '../components/UI.jsx'
import { ENGAGEMENTS, CALENDAR_FILTERS, CALENDAR_MONTHS } from '../data/calendar.js'

// Calendar — Figma node 14:196. The design drives this off two controls:
// a view filter and a month rail. Both are wired here.
export default function Calendar() {
  const [view, setView] = useState(CALENDAR_FILTERS[0])
  const [month, setMonth] = useState(null)

  const shown = ENGAGEMENTS.filter(
    (e) => (view === CALENDAR_FILTERS[0] || e.kind === view) && (!month || e.month === month),
  )

  return (
    <>
      <PageHero
        eyebrow="Calendar"
        t="purple"
        accent="magenta"
        title="Fifteen engagements. One pipeline."
        intro="One major engagement every month from the Grand Curtain Raiser in November 2026 to the Grand Summit in November 2027 — each feeding the same investor pipeline."
      />

      <Section>
        <SectionHead eyebrow="The road to November 2027" t="purple" title="All engagements" />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter engagements">
          {CALENDAR_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={view === f}
              onClick={() => setView(f)}
              className={`rounded-pill px-4 py-2 text-[13px] font-semibold transition-colors ${
                view === f ? 'bg-ink text-white' : 'border border-line bg-white text-ink hover:border-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1 overflow-x-auto rounded-pill bg-paper p-2" role="group" aria-label="Filter by month">
          {CALENDAR_MONTHS.map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={month === m}
              onClick={() => setMonth(month === m ? null : m)}
              className={`flex-1 whitespace-nowrap rounded-pill px-3 py-2 text-[11px] font-bold tracking-[0.1em] transition-colors ${
                month === m ? 'bg-purple text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted" aria-live="polite">
          Showing {shown.length} of {ENGAGEMENTS.length} engagements
          {month ? ` in ${month}` : ''}{view !== CALENDAR_FILTERS[0] ? ` · ${view}` : ''}
        </p>

        {shown.length === 0 ? (
          <p className="mt-8 rounded-card border border-line bg-white p-8 text-center text-muted">
            No engagements match that combination.{' '}
            <button type="button" className="font-bold text-purple" onClick={() => { setMonth(null); setView(CALENDAR_FILTERS[0]) }}>
              Clear the filters
            </button>
          </p>
        ) : (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((e) => {
              const k = tone(e.tone)
              const card = (
                <>
                  <p className={`eyebrow ${k.text}`}>{e.month} {e.year}</p>
                  <h3 className="mt-3 font-display text-[19px] font-bold leading-snug">{e.title}</h3>
                  <p className="mt-3 text-[13px] text-muted">{e.place} · {e.focus}</p>
                  <p className={`mt-4 text-[13px] font-bold ${k.text}`}>
                    {e.to ? 'View programme →' : 'Register →'}
                  </p>
                </>
              )
              return (
                <li key={e.title}>
                  <Link
                    to={e.to ?? '/register'}
                    className="flex h-full flex-col rounded-card border border-line bg-white p-6 transition-shadow hover:shadow-[0_2px_20px_rgba(22,24,28,.09)]"
                  >
                    {card}
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
