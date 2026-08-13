import { Link } from 'react-router-dom'

const TOKENS = {
  orange:  { text: 'text-orange',  bg: 'bg-orange',  wash: 'bg-wash-orange',  dot: 'bg-orange',  border: 'border-orange',  hex: '#F5931F' },
  magenta: { text: 'text-magenta', bg: 'bg-magenta', wash: 'bg-wash-magenta', dot: 'bg-magenta', border: 'border-magenta', hex: '#E62B7C' },
  purple:  { text: 'text-purple',  bg: 'bg-purple',  wash: 'bg-wash-purple',  dot: 'bg-purple',  border: 'border-purple',  hex: '#6B4FB8' },
  blue:    { text: 'text-blue',    bg: 'bg-blue',    wash: 'bg-wash-blue',    dot: 'bg-blue',    border: 'border-blue',    hex: '#3457C4' },
  green:   { text: 'text-green',   bg: 'bg-green',   wash: 'bg-wash-green',   dot: 'bg-green',   border: 'border-green',   hex: '#16A05E' },
}
export const tone = (t) => TOKENS[t] ?? TOKENS.purple

export function Button({ to, href, children, variant = 'primary', className = '', ...rest }) {
  const base = 'inline-flex items-center justify-center rounded-pill px-[24px] py-[13px] text-[15px] font-bold transition-colors'
  const style = variant === 'primary'
    ? 'bg-purple text-white hover:bg-[#5c43a1]'
    : variant === 'light'
      ? 'bg-white text-ink hover:bg-[#f1efea]'
      : 'border border-line text-ink hover:border-ink'
  const cls = `${base} ${style} ${className}`
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <Link to={to ?? '/'} className={cls} {...rest}>{children}</Link>
}

export function Eyebrow({ children, t = 'purple', className = '' }) {
  return <p className={`eyebrow ${tone(t).text} ${className}`}>{children}</p>
}

export function Section({ children, ground = 'paper', className = '', id }) {
  const bg = ground === 'white' ? 'bg-white border-y border-line'
    : ground === 'ink' ? 'bg-ink text-white' : 'bg-paper'
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="shell py-14 sm:py-16">{children}</div>
    </section>
  )
}

export function SectionHead({ eyebrow, t = 'purple', title, intro, link, linkTo, notes }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow t={t}>{eyebrow}</Eyebrow>}
        {title && (
          <h2 className="mt-3 font-display text-[28px] font-extrabold leading-[1.14] tracking-tight sm:text-[34px] lg:text-[40px]">
            {title}
          </h2>
        )}
        {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">{intro}</p>}
        {notes?.map((n) => (
          <p key={n} className="mt-2 text-sm leading-relaxed text-muted">{n}</p>
        ))}
      </div>
      {link && (
        <Link to={linkTo ?? '#'} className={`whitespace-nowrap text-[13px] font-bold ${tone(t).text}`}>
          {link}
        </Link>
      )}
    </header>
  )
}

export function Card({ item, to }) {
  const c = tone(item.tone)
  const body = (
    <>
      {item.eyebrow && <p className={`eyebrow ${c.text}`}>{item.eyebrow}</p>}
      <h3 className="font-display text-[19px] font-bold leading-snug">{item.title}</h3>
      {item.desc && <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>}
      {item.bullets && (
        <ul className="mt-4 space-y-2">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className={c.text}>—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {item.meta && <p className="mt-3 text-[13px] text-muted">{item.meta}</p>}
      {item.cta && <p className={`mt-5 text-[13px] font-bold ${c.text}`}>{item.cta}</p>}
    </>
  )
  const cls = 'flex h-full flex-col rounded-card border border-line bg-white p-6'
  if (to) {
    return (
      <li>
        <Link to={to} className={`${cls} transition-shadow hover:shadow-[0_2px_20px_rgba(22,24,28,.09)]`}>
          {body}
        </Link>
      </li>
    )
  }
  return <li className={cls}>{body}</li>
}

export function CardGrid({ items, cols = 3, linkFor }) {
  const grid = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[cols] ?? 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <ul className={`mt-10 grid gap-5 ${grid}`}>
      {items.map((it, i) => (
        <Card key={`${it.title}-${i}`} item={it} to={linkFor?.(it)} />
      ))}
    </ul>
  )
}
