import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { NAV } from '../data/nav.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="shell flex items-center gap-8 py-4">
        <Link to="/" aria-label="Brilliant Bengal, home"><Logo /></Link>

        <nav className="ml-auto hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative py-1 text-sm font-semibold transition-colors ${
                  isActive ? 'text-purple' : 'text-ink hover:text-purple'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1 left-0 h-[3px] w-full rounded ${isActive ? 'bg-purple' : 'bg-transparent'}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/register"
          className="ml-auto lg:ml-0 hidden sm:inline-flex items-center rounded-pill bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-[#4d3fa0] transition-colors"
        >
          Register
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="lg:hidden ml-auto sm:ml-0 inline-flex h-11 w-11 items-center justify-center rounded-pill border border-line"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-line bg-paper">
          <nav className="shell flex flex-col py-4" aria-label="Primary, mobile">
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
            <Link to="/register" className="mt-5 inline-flex justify-center rounded-pill bg-purple px-6 py-3.5 text-sm font-semibold text-white">
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
