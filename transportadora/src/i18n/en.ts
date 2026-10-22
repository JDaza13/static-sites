import type { Messages } from "./types";

// English.
export const en: Messages = {
  meta: {
    title:
      "Transporte Chaparral: school, oil-sector and air transport in Tauramena, Casanare",
    description:
      "School routes and oil-sector crew transport from Tauramena, Casanare, plus helicopter or small-plane flights on special request.",
  },
  nav: {
    label: "Main",
    services: "Services",
    howItWorks: "How it works",
    contact: "Contact",
  },
  language: { label: "Language" },
  cta: {
    quote: "Quote",
    requestQuote: "Request a quote",
    seeServices: "See services",
    whatsappMessage: "Hi, I'd like a quote for transport services.",
  },
  location: "Tauramena, Casanare, Colombia",
  hero: {
    title:
      "Ground transport for schools and oil companies. By air, when it's needed.",
    text:
      "Based in Tauramena, Casanare: school routes, private crew transport to the field, and helicopter or small-plane flights on special request, with one team coordinating the whole trip.",
  },
  route: [
    { title: "Schools", text: "Daily door-to-door routes" },
    { title: "Oil fields", text: "Shift changes and crew transport" },
    {
      title: "Where the road ends",
      text: "Helicopter or small plane on special request",
    },
  ],
  services: {
    title: "Three services, one point of coordination",
    items: [
      {
        title: "School transport",
        summary:
          "Daily routes for schools and kindergartens, planned with each school and with clear information for every family.",
        points: [
          "Door-to-door pick-up and drop-off",
          "An escort on every route",
          "GPS tracking for the school and parents",
          "Drivers with valid licenses and road-safety training",
          "Minibuses and vans with up-to-date technical inspections",
        ],
      },
      {
        title: "Oil-sector crew transport",
        summary:
          "Private crew transport between cities, bases and operating fields across Casanare and the region, scheduled around each contract's shifts.",
        points: [
          "4x4 pickups, vans and buses sized to your headcount",
          "Scheduled crew changes and shift rotations",
          "Client travel plans and HSE protocols",
          "Satellite tracking en route",
          "Available 24 hours a day, every day",
        ],
      },
      {
        title: "Helicopter and small plane on request",
        summary:
          "For urgent transfers or places with no road access, we coordinate flights with certified air operators.",
        points: [
          "Helicopter straight to the field or to remote areas",
          "Small plane for up to 3 passengers between airstrips and airports",
          "Quotes by route and number of passengers",
          "Ground logistics handled before and after the flight",
        ],
        note: "Subject to aircraft availability and weather.",
      },
    ],
  },
  steps: {
    title: "How to hire us",
    label: (n) => `Step ${n}`,
    items: [
      {
        title: "Tell us what you need",
        text:
          "Origin, destination, schedule and number of passengers. For school routes, the list of addresses.",
      },
      {
        title: "Get a proposal",
        text:
          "We send you the route, vehicle type, assigned drivers and rate.",
      },
      {
        title: "We get rolling",
        text:
          "We confirm dates and give you a direct contact for day-to-day service.",
      },
    ],
  },
  contact: {
    title: "Have a route in mind?",
    text:
      "Send us the origin, destination and number of passengers. For helicopter or small-plane flights, include a tentative date.",
    phone: "Phone and WhatsApp",
    email: "Email",
    office: "Office",
  },
  footer: { casanareFlag: "Flag of Casanare" },
};
