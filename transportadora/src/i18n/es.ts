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
    servicios: "Servicios",
    comoTrabajamos: "Cómo trabajamos",
    contacto: "Contacto",
  },
  idioma: { label: "Idioma" },
  cta: {
    cotizar: "Cotizar",
    pedirCotizacion: "Pedir cotización",
    verServicios: "Ver servicios",
    mensajeWhatsapp: "Hola, quisiera una cotización de transporte.",
  },
  ubicacion: "Tauramena, Casanare",
  hero: {
    titulo:
      "Transporte por tierra para colegios y petroleras. Por aire, cuando hace falta.",
    texto:
      "Desde Tauramena, Casanare: rutas escolares, traslado privado de personal a campo y vuelos en helicóptero o avioneta bajo solicitud especial, con un solo equipo coordinando todo el trayecto.",
  },
  ruta: [
    { titulo: "Colegios", texto: "Rutas diarias puerta a puerta" },
    {
      titulo: "Campos petroleros",
      texto: "Cambios de turno y traslado de personal",
    },
    {
      titulo: "Donde no llega la carretera",
      texto: "Helicóptero o avioneta bajo solicitud especial",
    },
  ],
  servicios: {
    titulo: "Tres servicios, una sola coordinación",
    items: [
      {
        titulo: "Transporte escolar",
        resumen:
          "Rutas diarias para colegios y jardines, diseñadas con la institución y con información clara para cada familia.",
        puntos: [
          "Recogida y entrega puerta a puerta",
          "Acompañante en cada ruta",
          "Seguimiento GPS para el colegio y los padres",
          "Conductores con licencia vigente y capacitación en seguridad vial",
          "Busetas y microbuses con revisión técnico-mecánica al día",
        ],
      },
      {
        titulo: "Transporte para el sector petrolero",
        resumen:
          "Traslado privado de personal entre ciudades, bases y campos de operación del Casanare y la región, ajustado a los turnos de cada contrato.",
        puntos: [
          "Camionetas 4x4, vans y buses según el número de pasajeros",
          "Cambios de guardia y turnos programados",
          "Planes de viaje y protocolos HSE del cliente",
          "Monitoreo satelital en ruta",
          "Atención las 24 horas, todos los días",
        ],
      },
      {
        titulo: "Helicóptero y avioneta bajo solicitud",
        resumen:
          "Para traslados urgentes o a zonas sin acceso por carretera, coordinamos vuelos con operadores aéreos certificados.",
        puntos: [
          "Helicóptero para llegar directo a campo o a zonas apartadas",
          "Avioneta para hasta 3 pasajeros entre pistas y aeródromos",
          "Cotización por trayecto y número de pasajeros",
          "Coordinación de la logística en tierra antes y después del vuelo",
        ],
        nota: "Sujeto a disponibilidad de aeronave y condiciones del clima.",
      },
    ],
  },
  pasos: {
    titulo: "Cómo contratar",
    etiqueta: (n) => `Paso ${n}`,
    items: [
      {
        titulo: "Cuéntenos qué necesita",
        texto:
          "Origen, destino, horarios y número de pasajeros. Si es una ruta escolar, el listado de direcciones.",
      },
      {
        titulo: "Reciba una propuesta",
        texto:
          "Le enviamos la ruta, el tipo de vehículo, los conductores asignados y la tarifa.",
      },
      {
        titulo: "Empezamos a operar",
        texto:
          "Confirmamos fechas y un contacto directo para el día a día del servicio.",
      },
    ],
  },
  contacto: {
    titulo: "¿Tiene una ruta en mente?",
    texto:
      "Escríbanos con el origen, el destino y la cantidad de pasajeros. Para vuelos en helicóptero o avioneta, incluya la fecha tentativa.",
    telefono: "Teléfono y WhatsApp",
    correo: "Correo",
    oficina: "Oficina",
  },
  pie: { banderaCasanare: "Bandera del Casanare" },
};
