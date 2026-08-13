// Content for the template-driven pages. Add a page here and it exists —
// no new component required.
export const PAGES = {
  engagements: {
    path: '/engagements',
    hero: { eyebrow:'Engagements', t:'purple', accent:'magenta',
      title:'Twelve months. Thirteen engagements.',
      intro:'One major engagement every month from the Curtain Raiser in November 2026 to the Grand Summit in November 2027. Each feeds the same investor pipeline.',
      proof:[{value:'13',label:'Engagements'},{value:'12',label:'Months'},{value:'Nov 2027',label:'Grand Summit'}] },
    sections: [{
      eyebrow:'Campaign calendar', t:'purple', title:'The twelve-month calendar', cols:3,
      items:[
        {eyebrow:'Nov 2026', t:'orange',  title:'Grand Curtain Raiser', desc:'Kolkata · Campaign launch, website and dashboard go live', meta:'Registration open'},
        {eyebrow:'Dec 2026', t:'blue',    title:'Industry Chambers Roundtable', desc:'Kolkata · National trade association outreach'},
        {eyebrow:'Jan 2027', t:'green',   title:'North Bengal Regional Summit', desc:'Siliguri · Tea, tourism, border trade, logistics', meta:'Registration open'},
        {eyebrow:'Feb 2027', t:'orange',  title:'Western Industrial Belt Summit', desc:'Durgapur · Steel, engineering, vendor development'},
        {eyebrow:'Mar 2027', t:'blue',    title:'Haldia–Coastal Bengal Summit', desc:'Haldia · Port-led growth, marine economy'},
        {eyebrow:'Apr 2027', t:'purple',  title:'Kolkata–Howrah–Hooghly Summit', desc:'Kolkata · Legacy industry to future economy'},
        {eyebrow:'May 2027', t:'magenta', title:'South Bengal Agri & Food Summit', desc:'Bardhaman · ODOP, GI, agri-export'},
        {eyebrow:'Jun 2027', t:'green',   title:'EV, Renewable & Green Growth', desc:'Kolkata · Investor conference'},
        {eyebrow:'Nov 2027', t:'magenta', title:'Grand Investment Summit', desc:'Kolkata · Two working days, MoU signing', meta:'Register interest'},
      ],
    }],
  },

  msme: {
    path: '/msme',
    hero: { eyebrow:'MSME & Enterprise', t:'magenta', accent:'orange',
      title:'Everything your enterprise needs, in one place.',
      intro:'Registration, certification, finance, packaging, e-commerce onboarding and buyer connect — delivered through clinics at every regional summit and online year-round.',
      proof:[{value:'7',label:'Support paths'},{value:'Free',label:'Every clinic'},{value:'11',label:'Regional summits'}] },
    actions:[{label:'Register your MSME', to:'/msme/register'},{label:'Browse suppliers', to:'/suppliers', variant:'secondary'}],
    sections: [{
      eyebrow:'Seven support paths', t:'magenta', title:'What do you need?', cols:4,
      intro:'Select a path and the platform recommends the right programmes, clinics and documents for your enterprise.',
      items:[
        {eyebrow:'01', t:'magenta', title:'Certification', desc:'BIS standards, ISO and quality systems, FSSAI food compliance, testing and inspection.', meta:'Book a clinic'},
        {eyebrow:'02', t:'blue',    title:'Finance', desc:'Working capital, term loans, MUDRA, subsidy and incentive mapping.', meta:'Find schemes'},
        {eyebrow:'03', t:'orange',  title:'Vendor development', desc:'Anchor industry registration, GeM and PSU vendor process.', meta:'Register as vendor'},
        {eyebrow:'04', t:'green',   title:'Export', desc:'IEC, HS codes, RoDTEP, export documentation and Market Development Assistance.', meta:'Export desk'},
        {eyebrow:'05', t:'purple',  title:'Packaging', desc:'Design, labelling, GTIN barcoding and retail-ready presentation.', meta:'Packaging clinic'},
        {eyebrow:'06', t:'magenta', title:'E-commerce', desc:'ONDC, GeM and marketplace onboarding with catalogue support.', meta:'Onboard'},
        {eyebrow:'07', t:'blue',    title:'Buyer connect', desc:'Reverse buyer–seller meets with corporates, exporters and retail chains.', meta:'Meet buyers'},
      ],
    }],
  },

  partners: {
    path: '/partners',
    hero: { eyebrow:'Partners', t:'blue', accent:'green',
      title:'Chambers, councils and countries.',
      intro:'National chambers, state bodies, sector councils, export promotion councils and foreign missions — each with a named engagement track through the twelve-month campaign.',
      proof:[{value:'8',label:'Partner categories'},{value:'4',label:'Partnership tracks'},{value:'Global',label:'Chambers and councils'}] },
    sections: [{
      eyebrow:'Eight categories', t:'blue', title:'Who we work with', cols:4,
      items:[
        {eyebrow:'01', t:'blue',    title:'National chambers', desc:'CII, FICCI, ASSOCHAM, PHDCCI'},
        {eyebrow:'02', t:'purple',  title:'State chambers', desc:'Indian Chamber of Commerce, Bengal Chamber of Commerce and Industry'},
        {eyebrow:'03', t:'orange',  title:'Sector associations', desc:'NASSCOM, SIAM, ACMA, IEEMA, EEPC India'},
        {eyebrow:'04', t:'green',   title:'Export promotion councils', desc:'FIEO, EEPC India and sector EPCs'},
        {eyebrow:'05', t:'magenta', title:'MSME associations', desc:'District MSME bodies and industry clusters'},
        {eyebrow:'06', t:'purple',  title:'Start-up & tech networks', desc:'Innovation hubs and accelerators'},
        {eyebrow:'07', t:'blue',    title:'International chambers', desc:'Foreign chambers in India and bilateral councils'},
        {eyebrow:'08', t:'orange',  title:'Regional business bodies', desc:'District chambers and eastern-India networks'},
      ],
    }],
  },

  media: {
    path: '/media',
    hero: { eyebrow:'Media', t:'orange', accent:'magenta',
      title:'News, releases and resources.',
      intro:'Announcements, press releases, stories from the districts, the photo and video library, and downloadable brochures for every sector.' },
    sections: [{
      eyebrow:'For journalists', t:'orange', title:'Media resources', cols:4,
      items:[
        {t:'orange',  title:'Press releases', desc:'Full archive, embargoed and published.', meta:'Browse'},
        {t:'magenta', title:'Media accreditation', desc:'Apply for summit and regional event access.', meta:'Apply'},
        {t:'purple',  title:'Photo & video gallery', desc:'High-resolution assets from every engagement.', meta:'Open library'},
        {t:'blue',    title:'Downloads', desc:'Sector brochures, district profiles and policy documents.', meta:'Download'},
      ],
    }],
  },

  grid: {
    path: '/grid',
    hero: { eyebrow:'For investors', t:'orange', accent:'purple',
      title:'Two hundred and forty-seven opportunities. One place.',
      intro:'Filter by sector, district, industrial park, infrastructure or investment size. Shortlist projects, request a meeting with the nodal department, and track your file to grounding.',
      proof:[{value:'247',label:'Live opportunities'},{value:'23',label:'Districts'},{value:'₹48,200 Cr',label:'Committed value'}] },
    actions:[{label:'Register to open the Grid', to:'/register'},{label:'Ask the facilitation desk', to:'/contact', variant:'secondary'}],
    sections: [{
      eyebrow:'Five ways to search', t:'orange', title:'How do you want to explore?', cols:3,
      items:[
        {eyebrow:'01', t:'orange',  title:'By sector', desc:'Fourteen priority sectors across five strategic clusters.', meta:'Browse sectors', to:'/opportunities'},
        {eyebrow:'02', t:'magenta', title:'By district', desc:'Twenty-three district profiles with industrial base, infrastructure and nodal officer.', meta:'Browse districts', to:'/districts'},
        {eyebrow:'03', t:'blue',    title:'By industrial park', desc:'Thirty-one parks with parcel-level availability and utility readiness.', meta:'Browse parks', to:'/industrial-parks'},
        {eyebrow:'04', t:'purple',  title:'By infrastructure', desc:'Filter on port access, freight corridor, sanctioned power and airport distance.'},
        {eyebrow:'05', t:'green',   title:'By investment size', desc:'From under ₹100 Cr to above ₹1,000 Cr, with employment banding.'},
      ],
    }],
  },
}
