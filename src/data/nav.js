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
  logIn: { label: 'LOG IN', to: '/login' },
}

export const FOOTER = [
  { heading: 'Why Bengal',   links: [
    { label: 'Investment advantage', to: '/why-bengal' },
    { label: 'Economic corridors',   to: '/why-bengal' },
    { label: 'Infrastructure',       to: '/why-bengal' },
    { label: 'Policy & facilitation',to: '/policies' },
  ]},
  { heading: 'Opportunities', links: [
    { label: 'Bengal Investment Grid', to: '/investment-grid' },
    { label: 'Priority sectors',       to: '/sectors' },
    { label: 'District opportunities', to: '/districts' },
    { label: 'Industrial parks',       to: '/industrial-parks' },
  ]},
  { heading: 'Engagements', links: [
    { label: 'Campaign calendar', to: '/calendar' },
    { label: 'Regional summits',  to: '/calendar' },
    { label: 'Roadshows',         to: '/calendar' },
    { label: 'Grand Summit 2027', to: '/grand-summit' },
  ]},
  { heading: 'MSME & Partners', links: [
    { label: 'Register your MSME',    to: '/register' },
    { label: 'Certification clinics', to: '/msme-odop' },
    { label: 'ODOP directory',        to: '/odop-directory' },
    { label: 'Chambers & councils',   to: '/chambers-partners' },
  ]},
]
