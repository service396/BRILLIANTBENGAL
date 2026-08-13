// Brilliant Bengal lockup — Figma node I29:1110;10:7.
// Mark box is 67×33, gap 12, "BRILLIANT" 10px/2.2px tracking,
// "bengal" Plus Jakarta Sans ExtraBold 26px/-0.78px tracking.
//
// NOTE: the mark itself is a vector export in Figma
// (I29:1110;2004:7019). This environment's network policy blocks
// figma.com, so the exported SVG could not be downloaded and the
// geometry below is a stand-in at the correct box size. Replace
// src/assets/logo-mark.svg and swap the <svg> for an <img> once the
// asset is available — nothing else in the lockup needs to change.
export function Mark({ className = 'h-[33px] w-[67px]' }) {
  return (
    <svg viewBox="0 0 220 110" className={className} role="img" aria-label="Brilliant Bengal">
      <path fill="#F5931F" d="M104 108C104 52 62 6 4 10c4 60 42 98 100 98Z" />
      <path fill="#16A05E" d="M116 108c0-56 42-102 100-98-4 60-42 98-100 98Z" />
      <path fill="#6B4FB8" d="M110 2c34 34 34 74 0 106-34-32-34-72 0-106Z" />
      <path fill="#E62B7C" d="M110 16c20 22 20 50 0 72-20-22-20-50 0-72Z" />
    </svg>
  )
}

export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-[12px]">
      <Mark className={compact ? 'h-[26px] w-[53px]' : 'h-[33px] w-[67px]'} />
      <span className="flex flex-col items-start whitespace-nowrap leading-none text-ink">
        <span className="text-[10px] font-bold tracking-[2.2px]">BRILLIANT</span>
        <span className="font-display text-[26px] font-extrabold tracking-[-0.78px]">bengal</span>
      </span>
    </span>
  )
}
