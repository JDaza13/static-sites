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
    servicios: "Services",
    comoTrabajamos: "How it works",
    contacto: "Contact",
  },
  idioma: { label: "Language" },
  cta: {
    cotizar: "Quote",
    pedirCotizacion: "Request a quote",
    verServicios: "See services",
    mensajeWhatsapp: "Hi, I'd like a quote for transport services.",
  },
  ubicacion: "Tauramena, Casanare, Colombia",
  hero: {
    titulo:
      "Ground transport for schools and oil companies. By air, when it's needed.",
    texto:
      "Based in Tauramena, Casanare: school routes, private crew transport to the field, and helicopter or small-plane flights on special request, with one team coordinating the whole trip.",
  },
  ruta: [
    { titulo: "Schools", texto: "Daily door-to-door routes" },
    { titulo: "Oil fields", texto: "Shift changes and crew transport" },
    {
      titulo: "Where the road ends",
      texto: "Helicopter or small plane on special request",
    },
  ],
  servicios: {
    titulo: "Three services, one point of coordination",
    items: [
      {
        titulo: "School transport",
        resumen:
          "Daily routes for schools and kindergartens, planned with each school and with clear information for every family.",
        puntos: [
          "Door-to-door pick-up and drop-off",
          "An escort on every route",
          "GPS tracking for the school and parents",
          "Drivers with valid licenses and road-safety training",
          "Minibuses and vans with up-to-date technical inspections",
        ],
      },
      {
        titulo: "Oil-sector crew transport",
        resumen:
          "Private crew transport between cities, bases and operating fields across Casanare and the region, scheduled around each contract's shifts.",
        puntos: [
          "4x4 pickups, vans and buses sized to your headcount",
          "Scheduled crew changes and shift rotations",
          "Client travel plans and HSE protocols",
          "Satellite tracking en route",
          "Available 24 hours a day, every day",
        ],
      },
      {
        titulo: "Helicopter and small plane on request",
        resumen:
          "For urgent transfers or places with no road access, we coordinate flights with certified air operators.",
        puntos: [
          "Helicopter straight to the field or to remote areas",
          "Small plane for up to 3 passengers between airstrips and airports",
          "Quotes by route and number of passengers",
          "Ground logistics handled before and after the flight",
        ],
        nota: "Subject to aircraft availability and weather.",
      },
    ],
  },
  pasos: {
    titulo: "How to hire us",
    etiqueta: (n) => `Step ${n}`,
    items: [
      {
        titulo: "Tell us what you need",
        texto:
          "Origin, destination, schedule and number of passengers. For school routes, the list of addresses.",
      },
      {
        titulo: "Get a proposal",
        texto:
          "We send you the route, vehicle type, assigned drivers and rate.",
      },
      {
        titulo: "We get rolling",
        texto:
          "We confirm dates and give you a direct contact for day-to-day service.",
      },
    ],
  },
  contacto: {
    titulo: "Have a route in mind?",
    texto:
      "Send us the origin, destination and number of passengers. For helicopter or small-plane flights, include a tentative date.",
    telefono: "Phone and WhatsApp",
    correo: "Email",
    oficina: "Office",
  },
  pie: { banderaCasanare: "Flag of Casanare" },
};
