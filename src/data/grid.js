// Bengal Investment Grid. The Figma board (node 58:4577) is composed of
// component variants — View=All, View=Industrial parks, View=Land parcels,
// View=MSME clusters, View=ODOP & GI, View=Live projects, plus district
// variants and the four dropdowns — whose rows the metadata dump does not
// expand. The taxonomy below is taken from those variant names; the listings
// are representative records in the shape the board displays.
export const GRID_TYPES = [
  'All', 'Industrial parks', 'Land parcels', 'MSME clusters', 'ODOP & GI', 'Live projects',
]

export const GRID_DISTRICTS = [
  'All districts', 'Purba Bardhaman', 'Paschim Medinipur', 'Darjeeling', 'Howrah',
  'Purba Medinipur', 'Bankura', 'Nadia', 'Hooghly',
]

export const GRID_STATUS = ['Any status', 'Open', 'Allocating', 'Grounded']

export const LISTINGS = [
  { title: 'Panagarh Industrial Park', type: 'Industrial parks', district: 'Purba Bardhaman',
    sector: 'Future Manufacturing', status: 'Open', tone: 'orange',
    meta: '412 acres · sanctioned power · NH-19 frontage' },
  { title: 'Kharagpur Engineering Cluster', type: 'MSME clusters', district: 'Paschim Medinipur',
    sector: 'Industrial & Trade Economy', status: 'Open', tone: 'blue',
    meta: '186 units · vendor development programme' },
  { title: 'Darjeeling Tea Value-Add Zone', type: 'ODOP & GI', district: 'Darjeeling',
    sector: 'Inclusive Enterprise Economy', status: 'Allocating', tone: 'magenta',
    meta: 'GI tagged · blending, packaging and export' },
  { title: 'Howrah Electrical Equipment Facility', type: 'Live projects', district: 'Howrah',
    sector: 'Future Manufacturing', status: 'Grounded', tone: 'orange',
    meta: '₹420 Cr committed · 1,800 jobs' },
  { title: 'Haldia Petrochemical Downstream Parcel', type: 'Land parcels', district: 'Purba Medinipur',
    sector: 'Industrial & Trade Economy', status: 'Open', tone: 'blue',
    meta: '96 acres · pipeline corridor access' },
  { title: 'Bankura Dokra Craft Cluster', type: 'MSME clusters', district: 'Bankura',
    sector: 'Inclusive Enterprise Economy', status: 'Open', tone: 'magenta',
    meta: '240 artisan units · GI tagged' },
  { title: 'Kalyani Biotech & Pharma Park', type: 'Industrial parks', district: 'Nadia',
    sector: 'Digital & Knowledge Economy', status: 'Allocating', tone: 'purple',
    meta: '128 acres · effluent treatment in place' },
  { title: 'Singur Food Processing Parcel', type: 'Land parcels', district: 'Hooghly',
    sector: 'Industrial & Trade Economy', status: 'Open', tone: 'blue',
    meta: '74 acres · cold chain ready' },
  { title: 'Purba Bardhaman Gobindobhog Rice Cluster', type: 'ODOP & GI', district: 'Purba Bardhaman',
    sector: 'Inclusive Enterprise Economy', status: 'Open', tone: 'magenta',
    meta: 'GI tagged · 1,100 registered growers' },
  { title: 'Salt Lake Data Centre & Cloud Campus', type: 'Live projects', district: 'Howrah',
    sector: 'Digital & Knowledge Economy', status: 'Grounded', tone: 'purple',
    meta: '₹1,240 Cr committed · 3,100 jobs' },
  { title: 'Siliguri Logistics & Border Trade Hub', type: 'Industrial parks', district: 'Darjeeling',
    sector: 'Industrial & Trade Economy', status: 'Open', tone: 'blue',
    meta: '210 acres · four-nation catchment' },
  { title: 'Medinipur Solar Manufacturing Parcel', type: 'Land parcels', district: 'Paschim Medinipur',
    sector: 'Green & Sustainable Growth', status: 'Allocating', tone: 'green',
    meta: '150 acres · 40 MW sanctioned load' },
]
