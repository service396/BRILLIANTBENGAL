import { tone } from './UI.jsx'

// The banner. One petal arc cropped by the right edge, one accent petal over it,
// and — where the page has them — three proof metrics on a hairline strip.
export default function PageHero({ eyebrow, t = 'purple', accent = 'orange', title, intro, proof = [], children }) {
  const c = tone(t)
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] md:block">
        <svg viewBox="0 0 520 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <path className={c.text} fill="currentColor"
            d="M0 600C0 260 220 0 520 25c-25 350-245 575-520 575Z" />
          <path className={tone(accent).text} fill="currentColor" transform="translate(180 320)"
            d="M66 0c44 52 44 116 0 168C22 116 22 52 66 0Z" />
        </svg>
      </div>

      <div className="shell relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          {eyebrow && <p className={`eyebrow ${c.text}`}>{eyebrow}</p>}
          <h1 className="mt-4 font-display text-[32px] font-extrabold leading-[1.08] tracking-tight sm:text-[42px] lg:text-[52px]">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </div>

        {proof.length > 0 && (
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-6 xs:grid-cols-3 sm:mt-12">
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
