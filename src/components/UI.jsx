import { Link } from 'react-router-dom'

const TOKENS = {
  orange:  { text: 'text-orange',  bg: 'bg-orange',  wash: 'bg-wash-orange',  dot: 'bg-orange' },
  magenta: { text: 'text-magenta', bg: 'bg-magenta', wash: 'bg-wash-magenta', dot: 'bg-magenta' },
  purple:  { text: 'text-purple',  bg: 'bg-purple',  wash: 'bg-wash-purple',  dot: 'bg-purple' },
  blue:    { text: 'text-blue',    bg: 'bg-blue',    wash: 'bg-wash-blue',    dot: 'bg-blue' },
  green:   { text: 'text-green',   bg: 'bg-green',   wash: 'bg-wash-green',   dot: 'bg-green' },
}
export const tone = (t) => TOKENS[t] ?? TOKENS.purple

export function Button({ to, href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition-colors'
  const style = variant === 'primary'
    ? 'bg-purple text-white hover:bg-[#4d3fa0]'
    : 'border border-line text-ink hover:border-ink'
  const cls = `${base} ${style} ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <Link to={to ?? '#'} className={cls}>{children}</Link>
}

export function Chip({ children, t = 'green' }) {
  const c = tone(t)
  return (
    <span className={`inline-flex items-center gap-2 rounded-pill ${c.wash} px-3 py-1.5 text-xs font-semibold ${c.text}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {children}
    </span>
  )
}

export function Eyebrow({ children, t = 'purple' }) {
  return <p className={`eyebrow ${tone(t).text}`}>{children}</p>
}

export function Section({ children, ground = 'paper', className = '' }) {
  const bg = ground === 'white' ? 'bg-white' : ground === 'ink' ? 'bg-ink text-paper' : 'bg-paper'
  return (
    <section className={`${bg} ${className}`}>
      <div className="shell py-14 sm:py-16 lg:py-20">{children}</div>
    </section>
  )
}

export function SectionHead({ eyebrow, t = 'purple', title, intro }) {
  return (
    <header className="max-w-3xl">
      {eyebrow && <Eyebrow t={t}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-[28px] font-extrabold leading-tight sm:text-[34px] lg:text-[40px]">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </header>
  )
}

export function CardGrid({ items, cols = 3 }) {
  const grid = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[cols]
  return (
    <ul className={`mt-10 grid gap-5 ${grid}`}>
      {items.map((it) => {
        const c = tone(it.t)
        const body = (
          <>
            {it.eyebrow && <p className={`eyebrow ${c.text}`}>{it.eyebrow}</p>}
            <h3 className="mt-2 font-display text-lg font-bold leading-snug sm:text-xl">{it.title}</h3>
            {it.desc && <p className="mt-2 text-sm leading-relaxed text-muted">{it.desc}</p>}
            {it.meta && <p className={`mt-5 text-sm font-semibold ${c.text}`}>{it.meta} →</p>}
          </>
        )
        return (
          <li key={it.title} className={`card ${it.wash ? c.wash : ''} ${it.to ? 'transition-shadow hover:shadow-[0_2px_20px_rgba(35,31,32,.08)]' : ''}`}>
            {it.to ? <Link to={it.to} className="block h-full">{body}</Link> : body}
          </li>
        )
      })}
    </ul>
  )
}
