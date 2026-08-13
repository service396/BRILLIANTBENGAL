// The Brilliant Bengal mark. Four flat petals — no blend modes, no transparency.
// The purple is drawn, never produced by overlap.
export function Mark({ className = 'h-10 w-auto' }) {
  return (
    <svg viewBox="0 0 220 190" className={className} role="img" aria-label="Brilliant Bengal">
      <path fill="#F2911D" transform="translate(8 60)"  d="M105 115C105 50 60 0 0 5c5 70 45 110 105 110Z" />
      <path fill="#16A05E" transform="translate(107 60)" d="M0 115C0 50 45 0 105 5c-5 70-45 110-105 110Z" />
      <path fill="#5B4BB7" transform="translate(72 35)"  d="M38 0c38 45 38 100 0 140C0 100 0 45 38 0Z" />
      <path fill="#E62B7C" transform="translate(85 30)"  d="M25 0c25 27 25 58 0 85C0 58 0 27 25 0Z" />
    </svg>
  )
}

export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <Mark className={compact ? 'h-8 w-auto' : 'h-10 w-auto'} />
      <span className="leading-none">
        <span className="block eyebrow text-ink">Brilliant</span>
        <span className="block font-display font-extrabold tracking-tight text-ink text-[20px] sm:text-[24px] -mt-0.5">
          bengal
        </span>
      </span>
    </span>
  )
}
