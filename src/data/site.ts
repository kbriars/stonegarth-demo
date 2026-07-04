/**
 * ─── SITE CONTENT & SETTINGS ─────────────────────────────────────────────
 * Everything client-specific lives in this one file. To re-skin this
 * template for a new business: edit this file, swap the photos in
 * src/assets/images/, and adjust the colour tokens in src/styles/global.css.
 * No component code needs touching.
 */

export type GalleryItem = {
  caption: string;
  image: string;
  imageAlt: string;
  /** Set a before image to render the item as a labelled Before/After pair */
  before?: string;
  beforeAlt?: string;
};

export const site = {
  // ── Business identity ──────────────────────────────────────────────────
  name: "Stonegarth Landscapes & Driveways",
  shortName: "Stonegarth",
  established: 2014,

  // Phone shown to visitors, and the tel: form dialers actually use
  phone: "01925 000 000",
  phoneHref: "tel:+441925000000",
  email: "info@stonegarth.co.uk",

  // ── External services: paste real values here when ready ───────────────
  // Formspree: create a form at https://formspree.io and paste the endpoint,
  // e.g. "https://formspree.io/f/xyzabcdw". Empty = form shows a demo notice.
  formspreeEndpoint: "https://formspree.io/f/mdaryjbq",
  // Cloudflare Web Analytics: enable in the Cloudflare dashboard after
  // deploying, then paste the beacon token. Empty = no analytics script.
  analyticsToken: "",

  // ── SEO ─────────────────────────────────────────────────────────────────
  seo: {
    title: "Driveways & Landscaping Warrington | Stonegarth Landscapes & Driveways",
    description:
      "Driveways, patios, turfing and fencing across Warrington, Lymm, Stockton Heath and Cheshire. Family-run, fully insured, free written quotes. Call 01925 000 000.",
  },

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    image: "hero",
    imageAlt: "Newly block-paved driveway in front of a house in Warrington",
    headline: "Driveways, patios & garden transformations across Warrington & Cheshire",
    subline:
      "Family-run and fully insured. Free written quotes, fair prices, and a tidy site every time.",
    cta: "Get a free quote",
  },

  // ── Trust bar ───────────────────────────────────────────────────────────
  trust: {
    years: "12+ years in business",
    insured: "Fully insured",
    rating: 4.9,
    ratingText: "50+ reviews",
    coverage: "Covering Warrington & surrounding areas",
  },

  // ── Services (4 max) ───────────────────────────────────────────────────
  services: [
    {
      title: "Driveways",
      image: "service-driveways",
      imageAlt: "Block-paved driveway with clean edging",
      blurb:
        "Block paving, resin and gravel driveways built on a proper sub-base. A clean finish that lifts the whole front of the house.",
    },
    {
      title: "Patios & Paving",
      image: "service-patios",
      imageAlt: "Indian stone patio in a back garden",
      blurb:
        "Indian stone and porcelain patios, laid level and true. Somewhere decent to sit when the sun's out.",
    },
    {
      title: "Turfing & Lawns",
      image: "service-turfing",
      imageAlt: "Freshly laid striped lawn",
      blurb:
        "Old lawns stripped out, ground prepared properly, fresh turf laid. Green and even from day one.",
    },
    {
      title: "Fencing & Garden Walls",
      image: "service-fencing",
      imageAlt: "New timber fence along a garden boundary",
      blurb:
        "Sturdy fencing and brick or stone garden walls. Straight lines, solid posts, built to take the weather.",
    },
  ],

  // ── Recent work gallery ────────────────────────────────────────────────
  gallery: [
    {
      caption: "Full garden landscaping, Appleton",
      image: "gallery-after",
      imageAlt: "Finished garden in Appleton after full landscaping",
      before: "gallery-before",
      beforeAlt: "Overgrown garden in Appleton before landscaping work",
    },
    {
      caption: "Block paved driveway, Stockton Heath",
      image: "gallery-driveway",
      imageAlt: "Block paved driveway in Stockton Heath",
    },
    {
      caption: "Indian stone patio, Lymm",
      image: "gallery-patio",
      imageAlt: "Indian stone patio with garden furniture in Lymm",
    },
    {
      caption: "New lawn & borders, Great Sankey",
      image: "gallery-garden",
      imageAlt: "New lawn and planted borders in Great Sankey",
    },
    {
      caption: "Garden wall & raised beds, Culcheth",
      image: "gallery-walling",
      imageAlt: "Stone garden wall and raised beds in Culcheth",
    },
  ] as GalleryItem[],

  // ── Reviews ────────────────────────────────────────────────────────────
  reviews: [
    {
      quote:
        "Absolutely made up with the new driveway. Tidy job start to finish, and they swept up every day before they left.",
      name: "Dave",
      town: "Great Sankey",
    },
    {
      quote:
        "The quote was clear, the price didn't change, and the patio was done when they said it would be. Can't ask for more than that.",
      name: "Karen",
      town: "Lymm",
    },
    {
      quote:
        "Our back garden was a state. Two weeks later it's the best on the street. Grafters, and no mess left behind.",
      name: "Steve",
      town: "Orford",
    },
  ],

  // ── How it works ───────────────────────────────────────────────────────
  steps: [
    {
      title: "Free, no-obligation quote",
      text: "We come out, look at the job, and give you a written quote. No pressure, no hard sell.",
    },
    {
      title: "Price and dates in writing",
      text: "You know exactly what it costs and when we start before any work begins. No surprises.",
    },
    {
      title: "Job done, site left tidy",
      text: "We finish on schedule, clear all the waste, and leave the place clean.",
    },
  ],

  // ── Service area (local SEO: real text town list) ──────────────────────
  areaLead: "Based in Warrington, we cover:",
  towns: [
    "Warrington",
    "Lymm",
    "Stockton Heath",
    "Appleton",
    "Grappenhall",
    "Great Sankey",
    "Culcheth",
    "Birchwood",
    "Widnes",
    "Leigh",
    "Golborne",
    "Frodsham",
  ],
  areaNote: "Not on the list? If you're nearby, give us a ring. We can usually help.",

  // ── Contact ────────────────────────────────────────────────────────────
  contact: {
    heading: "Get your free quote",
    lead: "Tell us a bit about the job and we'll get back to you within one working day. Or just ring, we're happy to talk it through.",
    promise: "You'll deal with the same person from first visit to final sweep-up.",
    hours: [
      { days: "Monday – Saturday", time: "8am – 6pm" },
      { days: "Sunday", time: "Closed" },
    ],
  },

  // ── Footer ─────────────────────────────────────────────────────────────
  footer: {
    strapline: "Driveways, patios & landscaping across Warrington & Cheshire.",
    demoNote: "Stonegarth is a fictional company created for demonstration.",
    credit: "Demo site by Kyle Briars",
    creditHref: "mailto:kylebriars@gmail.com",
  },
};
