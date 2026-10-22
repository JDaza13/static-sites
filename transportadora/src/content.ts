// All copy and contact details live here so they can be edited in one place.

export const marca = "Transporte Chaparral";

export const contacto = {
  telefono: "+57 312 840 4143",
  telefonoHref: "tel:+573128404143",
  whatsappHref:
    "https://wa.me/573128404143?text=" +
    encodeURIComponent("Hola, quisiera una cotización de transporte."),
  // Optional: set an address to show it in the contact section.
  email: "",
  ciudad: "Tauramena, Casanare",
};

export type Servicio = {
  id: string;
  titulo: string;
  resumen: string;
  puntos: string[];
  nota?: string;
};

export const servicios: Servicio[] = [
  {
    id: "escolar",
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
    id: "petrolero",
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
    id: "aereo",
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
];

export const pasos = [
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
];
