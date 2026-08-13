// Primary navigation, transcribed from the Figma "Site / Header" component
// (node I29:1110;10:16). Order and labels match the design exactly.
export const NAV = [
  { label: 'Summit',              to: '/summit' },
  { label: 'Sectors',             to: '/sectors' },
  { label: 'Calendar',            to: '/calendar' },
  { label: 'Investment Grid',     to: '/investment-grid' },
  { label: 'MSME & ODOP',         to: '/msme-odop' },
  { label: 'Participate',         to: '/participate' },
  { label: 'Chambers & Partners', to: '/chambers-partners' },
  { label: 'Media',               to: '/media' },
]

// Utility bar, node I29:1110;10:3.
export const UTILITY = {
  masthead: 'GOVERNMENT OF WEST BENGAL  ·  DEPARTMENT OF INDUSTRY, COMMERCE & ENTERPRISES',
  facilitationDesk: { label: 'FACILITATION DESK', to: '/facilitation-desk' },
  languages: ['বাংলা', 'ENGLISH'],
  textSizes: ['A−', 'A', 'A+'],
  logIn: { label: 'LOG IN', to: '/account' },
}

export const FOOTER = [
  { heading: 'The Summit', links: [
    { label: 'Campaign overview',  to: '/summit' },
    { label: 'Curtain Raiser 2026', to: '/summit/curtain-raiser' },
    { label: 'Grand Summit 2027',  to: '/summit/grand-summit-2027' },
    { label: 'Why Bengal',         to: '/why-bengal' },
  ]},
  { heading: 'Participate', links: [
    { label: 'Investor registration', to: '/register/investor' },
    { label: 'MSME registration',     to: '/register/msme' },
    { label: 'Exhibitor & sponsor',   to: '/register/exhibitor' },
    { label: 'Media accreditation',   to: '/register/media' },
  ]},
  { heading: 'Resources', links: [
    { label: 'Investment Grid',      to: '/investment-grid' },
    { label: 'Sector profiles',      to: '/sectors' },
    { label: 'Policies & incentives', to: '/policies' },
    { label: 'Downloads',            to: '/downloads' },
  ]},
  { heading: 'Facilitation Desk', links: [
    { label: 'Nodal officers',        to: '/facilitation-desk' },
    { label: 'Single-window portal',  to: '/single-window' },
    { label: 'Contact us',            to: '/contact' },
    { label: 'FAQ',                   to: '/faq' },
  ]},
]

export const LEGAL = [
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'RTI',           to: '/accessibility' },
  { label: 'Privacy',       to: '/accessibility' },
  { label: 'Terms',         to: '/accessibility' },
]
