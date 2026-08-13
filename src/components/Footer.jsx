import { Link } from 'react-router-dom'
import { Mark } from './Logo.jsx'
import { FOOTER, LEGAL } from '../data/nav.js'

// Site footer — Figma node 29:1146. Brand block plus four link columns on
// the near-black ground, over a hairline legal bar.
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="shell py-[52px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <span className="flex items-center gap-[12px]">
              <Mark className="h-[33px] w-[67px]" />
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-bold tracking-[2.2px]">BRILLIANT</span>
                <span className="font-display text-[26px] font-extrabold tracking-[-0.78px]">bengal</span>
              </span>
            </span>
            <p className="mt-[18px] max-w-[230px] text-sm leading-relaxed text-white/60">
              West Bengal Investment Summit 2027 — a year-long investment campaign of the
              Government of West Bengal.
            </p>
          </div>

          {FOOTER.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow text-orange">{col.heading}</h2>
              <ul className="mt-4 flex flex-col gap-[11px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] text-white/[.88] hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-5 border-t border-white/[.14] pt-[22px] text-[13px] text-white/60">
          <p>© 2026 Government of West Bengal &nbsp;·&nbsp; Department of Industry, Commerce &amp; Enterprises</p>
          <p className="flex gap-[14px]">
            {LEGAL.map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-white hover:underline">{l.label}</Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
