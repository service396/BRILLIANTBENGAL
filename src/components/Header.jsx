import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { NAV, UTILITY } from '../data/nav.js'

// Site header — Figma node 29:1110 ("1 · Site header").
// Two tiers: a near-black government utility bar over a white primary nav.

function PillToggle({ options, value, onChange, activeClass, label, padding }) {
  return (
    <div role="group" aria-label={label} className="flex items-center gap-[3px]">
      {options.map((opt) => {
        const active = opt === value
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt)}
            className={`${padding} rounded-pill text-[11px] leading-none transition-colors ${
              active ? `${activeClass} font-bold` : 'bg-ink text-white font-semibold hover:bg-[#24272d]'
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

const Dot = () => (
  <span aria-hidden="true" className="text-[11px] font-normal text-muted">·</span>
)

export default function Header() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('ENGLISH')
  const [size, setSize] = useState('A')
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // A− / A / A+ scale the root font size, which every rem-based size follows.
  useEffect(() => {
    const scale = { 'A−': '93.75%', A: '100%', 'A+': '112.5%' }[size] ?? '100%'
    document.documentElement.style.fontSize = scale
  }, [size])

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar — node I29:1110;10:3 */}
      <div className="hidden bg-ink lg:block">
        <div className="mx-auto flex w-full max-w-shell items-center px-shell py-[11px]">
          <p className="min-w-px flex-1 whitespace-pre-wrap text-[11px] font-semibold tracking-[0.66px] text-white">
            {UTILITY.masthead}
          </p>
          <div className="flex shrink-0 items-center gap-[4px]">
            <Link
              to={UTILITY.facilitationDesk.to}
              className="px-[12px] text-[11px] font-bold tracking-[0.66px] text-orange hover:underline"
            >
              {UTILITY.facilitationDesk.label}
            </Link>
            <Dot />
            <PillToggle
              label="Language"
              options={UTILITY.languages}
              value={lang}
              onChange={setLang}
              activeClass="bg-orange text-ink"
              padding="px-[11px] py-[5px]"
            />
            <Dot />
            <PillToggle
              label="Text size"
              options={UTILITY.textSizes}
              value={size}
              onChange={setSize}
              activeClass="bg-white text-ink"
              padding="px-[9px] py-[5px]"
            />
            <Dot />
            <Link
              to={UTILITY.logIn.to}
              className="pl-[12px] pr-[4px] text-[11px] font-bold tracking-[0.66px] text-white hover:underline"
            >
              {UTILITY.logIn.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Primary nav — node I29:1110;10:6 */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex w-full max-w-shell items-center gap-[36px] px-5 py-[20px] sm:px-8 lg:px-shell">
          <Link to="/" aria-label="Brilliant Bengal, home" className="shrink-0">
            <Logo />
          </Link>

          <nav
            className="hidden min-w-px flex-1 items-center gap-[26px] xl:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[15px] font-semibold transition-colors ${
                    isActive ? 'text-purple' : 'text-ink hover:text-purple'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/register"
            className="ml-auto hidden shrink-0 items-center rounded-pill bg-purple px-[24px] py-[13px] text-[15px] font-bold text-white transition-colors hover:bg-[#5c43a1] sm:inline-flex xl:ml-0"
          >
            Register
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-pill border border-line sm:ml-0 xl:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-b border-line bg-white xl:hidden">
          <nav className="mx-auto w-full max-w-shell px-5 py-4 sm:px-8" aria-label="Primary, mobile">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `border-b border-line py-4 text-base font-semibold ${isActive ? 'text-purple' : 'text-ink'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link to="/register" className="inline-flex rounded-pill bg-purple px-[24px] py-[13px] text-[15px] font-bold text-white">
                Register
              </Link>
              <Link to={UTILITY.logIn.to} className="text-[13px] font-bold tracking-[0.66px] text-ink">
                {UTILITY.logIn.label}
              </Link>
              <Link to={UTILITY.facilitationDesk.to} className="text-[13px] font-bold tracking-[0.66px] text-orange">
                {UTILITY.facilitationDesk.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
