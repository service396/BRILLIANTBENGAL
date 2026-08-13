import { tone } from './UI.jsx'

// Page header band — the design gives every interior page an eyebrow, a
// display title, a standfirst and an optional row of proof metrics, over
// the petal artwork cropped by the right edge.
export default function PageHero({ eyebrow, t = 'purple', accent = 'orange', title, intro, proof = [], children }) {
  const c = tone(t)
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] md:block">
        <svg viewBox="0 0 520 420" preserveAspectRatio="xMaxYMid slice" className="h-full w-full">
          <path className={c.text} fill="currentColor" fillOpacity=".22"
            d="M60 420C60 200 190 30 520 10c-14 236-150 410-460 410Z" />
          <path className={tone(accent).text} fill="currentColor" fillOpacity=".30"
            d="M250 420c0-170 80-290 270-330-8 190-96 320-270 330Z" />
        </svg>
      </div>

      <div className="shell relative py-12 sm:py-16">
        <div className="max-w-3xl">
          {eyebrow && <p className={`eyebrow ${c.text}`}>{eyebrow}</p>}
          <h1 className="mt-4 font-display text-[32px] font-extrabold leading-[1.08] tracking-tight sm:text-[42px] lg:text-[50px]">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">{intro}</p>}
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </div>

        {proof.length > 0 && (
          <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-6 xs:grid-cols-3">
            {proof.map((p, i) => (
              <div key={p.label} className={i > 0 ? 'xs:border-l xs:border-line xs:pl-6' : ''}>
                <dt className="sr-only">{p.label}</dt>
                <dd>
                  <span className={`block font-display text-2xl font-extrabold sm:text-[28px] ${c.text}`}>{p.value}</span>
                  <span className="mt-1 block text-xs text-muted">{p.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
