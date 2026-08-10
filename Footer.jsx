import { Link } from 'react-router-dom'
import { Mark } from './Logo.jsx'
import { FOOTER } from '../data/nav.js'

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Mark className="h-12 w-auto" />
            <p className="mt-4 font-display text-xl font-bold leading-snug">
              A brilliant future,<br />built together.
            </p>
            <p className="mt-3 text-sm text-white/60">
              Department of Industry, Commerce &amp; Enterprises<br />
              Government of West Bengal · Nabanna, Howrah 711102
            </p>
          </div>
          {FOOTER.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow text-orange">{col.heading}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/85 hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 Government of West Bengal · Terms · Privacy · Sitemap</p>
          <p className="sm:ml-auto">GIGW 3.0 · WCAG 2.1 AA</p>
        </div>
      </div>
    </footer>
  )
}
