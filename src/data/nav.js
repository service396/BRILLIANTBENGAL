// Navigation follows the WBIS 2027 flowchart taxonomy.
export const NAV = [
  { label: 'Why Bengal',   to: '/why-bengal' },
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'Engagements',  to: '/engagements' },
  { label: 'MSME',         to: '/msme' },
  { label: 'Partners',     to: '/partners' },
  { label: 'Media',        to: '/media' },
]

export const FOOTER = [
  { heading: 'Why Bengal',   links: [
    { label: 'Investment advantage', to: '/why-bengal' },
    { label: 'Economic corridors',   to: '/why-bengal' },
    { label: 'Infrastructure',       to: '/why-bengal' },
    { label: 'Policy & facilitation',to: '/why-bengal' },
  ]},
  { heading: 'Opportunities', links: [
    { label: 'Bengal Investment Grid', to: '/grid' },
    { label: 'Priority sectors',       to: '/opportunities' },
    { label: 'District opportunities', to: '/districts' },
    { label: 'Industrial parks',       to: '/industrial-parks' },
  ]},
  { heading: 'Engagements', links: [
    { label: 'Campaign calendar', to: '/engagements' },
    { label: 'Regional summits',  to: '/engagements' },
    { label: 'Roadshows',         to: '/engagements' },
    { label: 'Grand Summit 2027', to: '/grand-summit' },
  ]},
  { heading: 'MSME & Partners', links: [
    { label: 'Register your MSME',  to: '/msme/register' },
    { label: 'Certification clinics', to: '/msme' },
    { label: 'Supplier directory',  to: '/suppliers' },
    { label: 'Chambers & councils', to: '/partners' },
  ]},
]
