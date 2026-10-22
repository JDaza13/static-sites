import type { Messages } from "./types";

// Spanish (default language).
export const es: Messages = {
  meta: {
    title:
      "Transporte Chaparral: transporte escolar, petrolero y aéreo en Tauramena, Casanare",
    description:
      "Transporte escolar y de personal petrolero desde Tauramena, Casanare, y vuelos en helicóptero o avioneta bajo solicitud especial.",
  },
  nav: {
    label: "Principal",
    services: "Servicios",
    howItWorks: "Cómo trabajamos",
    contact: "Contacto",
  },
  language: { label: "Idioma" },
  cta: {
    quote: "Cotizar",
    requestQuote: "Pedir cotización",
    seeServices: "Ver servicios",
    whatsappMessage: "Hola, quisiera una cotización de transporte.",
  },
  location: "Tauramena, Casanare",
  hero: {
    title:
      "Transporte por tierra para colegios y petroleras. Por aire, cuando hace falta.",
    text:
      "Desde Tauramena, Casanare: rutas escolares, traslado privado de personal a campo y vuelos en helicóptero o avioneta bajo solicitud especial, con un solo equipo coordinando todo el trayecto.",
  },
  route: [
    { title: "Colegios", text: "Rutas diarias puerta a puerta" },
    {
      title: "Campos petroleros",
      text: "Cambios de turno y traslado de personal",
    },
    {
      title: "Donde no llega la carretera",
      text: "Helicóptero o avioneta bajo solicitud especial",
    },
  ],
  services: {
    title: "Tres servicios, una sola coordinación",
    items: [
      {
        title: "Transporte escolar",
        summary:
          "Rutas diarias para colegios y jardines, diseñadas con la institución y con información clara para cada familia.",
        points: [
          "Recogida y entrega puerta a puerta",
          "Acompañante en cada ruta",
          "Seguimiento GPS para el colegio y los padres",
          "Conductores con licencia vigente y capacitación en seguridad vial",
          "Busetas y microbuses con revisión técnico-mecánica al día",
        ],
      },
      {
        title: "Transporte para el sector petrolero",
        summary:
          "Traslado privado de personal entre ciudades, bases y campos de operación del Casanare y la región, ajustado a los turnos de cada contrato.",
        points: [
          "Camionetas 4x4, vans y buses según el número de pasajeros",
          "Cambios de guardia y turnos programados",
          "Planes de viaje y protocolos HSE del cliente",
          "Monitoreo satelital en ruta",
          "Atención las 24 horas, todos los días",
        ],
      },
      {
        title: "Helicóptero y avioneta bajo solicitud",
        summary:
          "Para traslados urgentes o a zonas sin acceso por carretera, coordinamos vuelos con operadores aéreos certificados.",
        points: [
          "Helicóptero para llegar directo a campo o a zonas apartadas",
          "Avioneta para hasta 3 pasajeros entre pistas y aeródromos",
          "Cotización por trayecto y número de pasajeros",
          "Coordinación de la logística en tierra antes y después del vuelo",
        ],
        note: "Sujeto a disponibilidad de aeronave y condiciones del clima.",
      },
    ],
  },
  steps: {
    title: "Cómo contratar",
    label: (n) => `Paso ${n}`,
    items: [
      {
        title: "Cuéntenos qué necesita",
        text:
          "Origen, destino, horarios y número de pasajeros. Si es una ruta escolar, el listado de direcciones.",
      },
      {
        title: "Reciba una propuesta",
        text:
          "Le enviamos la ruta, el tipo de vehículo, los conductores asignados y la tarifa.",
      },
      {
        title: "Empezamos a operar",
        text:
          "Confirmamos fechas y un contacto directo para el día a día del servicio.",
      },
    ],
  },
  contact: {
    title: "¿Tiene una ruta en mente?",
    text:
      "Escríbanos con el origen, el destino y la cantidad de pasajeros. Para vuelos en helicóptero o avioneta, incluya la fecha tentativa.",
    phone: "Teléfono y WhatsApp",
    email: "Correo",
    office: "Oficina",
  },
  footer: { casanareFlag: "Bandera del Casanare" },
};
