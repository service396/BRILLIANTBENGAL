// Engagement calendar. The Figma calendar board is built from component
// variants (View=All engagements … View=NOV 27) whose rows the metadata dump
// does not expand, so the schedule below is assembled from the engagements
// named across the homepage timeline, the Summit overview and the event
// detail page.
export const CALENDAR_FILTERS = [
  'All engagements',
  'Regional summits',
  'Roadshows',
  'Chamber roundtables',
  'International',
]

export const CALENDAR_MONTHS = [
  'NOV 26', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY',
  'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV 27',
]

export const ENGAGEMENTS = [
  { month: 'NOV 26', year: '2026', kind: 'Regional summits', tone: 'orange',
    title: 'Grand Curtain Raiser', place: 'Kolkata',
    focus: 'Campaign launch, website and Investment Grid go live',
    to: '/summit/curtain-raiser' },
  { month: 'DEC', year: '2026', kind: 'Chamber roundtables', tone: 'blue',
    title: 'Industry Chambers Roundtable', place: 'Kolkata',
    focus: 'National trade association outreach' },
  { month: 'JAN', year: '2027', kind: 'Regional summits', tone: 'green',
    title: 'North Bengal Investment & MSME Summit', place: 'Siliguri',
    focus: 'Tea, tourism, border trade, logistics',
    to: '/calendar/north-bengal-summit' },
  { month: 'FEB', year: '2027', kind: 'Regional summits', tone: 'orange',
    title: 'Western Industrial Belt Regional Summit', place: 'Durgapur',
    focus: 'Steel, engineering, manufacturing MSMEs' },
  { month: 'FEB', year: '2027', kind: 'Chamber roundtables', tone: 'magenta',
    title: 'EEPC India Engineering Exports Roundtable', place: 'Durgapur',
    focus: 'Engineering exports & market access' },
  { month: 'MAR', year: '2027', kind: 'Regional summits', tone: 'blue',
    title: 'Haldia–Coastal Bengal Summit', place: 'Haldia',
    focus: 'Port-led growth, marine economy' },
  { month: 'APR', year: '2027', kind: 'Regional summits', tone: 'purple',
    title: 'Kolkata–Howrah–Hooghly Summit', place: 'Kolkata',
    focus: 'Legacy industry to future economy' },
  { month: 'MAY', year: '2027', kind: 'Regional summits', tone: 'magenta',
    title: 'South Bengal Agri & Food Summit', place: 'Bardhaman',
    focus: 'ODOP, GI, agri-export' },
  { month: 'JUN', year: '2027', kind: 'Roadshows', tone: 'green',
    title: 'EV, Renewable & Green Growth Conference', place: 'Kolkata',
    focus: 'Investor conference' },
  { month: 'JUL', year: '2027', kind: 'Roadshows', tone: 'purple',
    title: 'Digital & Knowledge Economy Roadshow', place: 'Bengaluru',
    focus: 'IT & ITeS, AI, deep tech' },
  { month: 'AUG', year: '2027', kind: 'International', tone: 'blue',
    title: 'Global Bengal Investor Outreach', place: 'Singapore',
    focus: 'Diaspora and bilateral councils' },
  { month: 'SEP', year: '2027', kind: 'International', tone: 'orange',
    title: 'Partner Country Roundtables', place: 'Kolkata',
    focus: 'Foreign missions and chambers' },
  { month: 'OCT', year: '2027', kind: 'Roadshows', tone: 'magenta',
    title: 'MSME Marketplace Preview', place: 'Kolkata',
    focus: 'Buyer–seller meets, ODOP showcase' },
  { month: 'OCT', year: '2027', kind: 'Chamber roundtables', tone: 'green',
    title: 'Pre-Summit Chambers Convergence', place: 'Kolkata',
    focus: 'CII, FICCI, ASSOCHAM, ICC, BCC&I' },
  { month: 'NOV 27', year: '2027', kind: 'Regional summits', tone: 'magenta',
    title: 'Grand Investment Summit 2027', place: 'Kolkata',
    focus: 'Two working days, verified MoU signing',
    to: '/summit/grand-summit-2027' },
]
