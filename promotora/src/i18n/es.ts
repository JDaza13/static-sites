import type { Messages } from "./types";

// Spanish (default language).
export const es: Messages = {
  meta: {
    title: "Promotora Rumba: bodas, fiestas de empresa, raves y más",
    description:
      "Organizamos bodas, fiestas de empresa, raves, cumpleaños, grados y quinces. Cuéntanos el ambiente, la zona y cuántas personas van.",
  },
  nav: {
    label: "Principal",
    events: "Eventos",
    howItWorks: "Cómo funciona",
    contact: "Contacto",
  },
  language: { label: "Idioma" },
  cta: { plan: "Planear mi evento", send: "Enviar por WhatsApp" },
  hero: {
    title: "Cuéntanos tu evento en una frase.",
    text:
      "Nosotros encontramos el lugar exacto en la zona que elijas y armamos el resto: comida, bebida, música, decoración y personal.",
  },
  request: {
    sentence:
      "Queremos organizar {eventType} con un ambiente {mood} en {area} para {guests} personas.",
    labels: {
      eventType: "Tipo de evento",
      mood: "Ambiente",
      area: "Zona o ciudad",
      guests: "Número de personas",
    },
    areaExample: "Chía o el norte de Bogotá",
    areaHint: "Basta con la zona: nosotros buscamos el lugar.",
    areaError: "Escribe una zona o ciudad para enviar la solicitud.",
    guestsError: "Escribe cuántas personas van, en números.",
    date: "Fecha aproximada (opcional)",
    menuTitle: (type) => `Para ${type.inSentence}, solemos servir`,
    food: "Comida",
    drinks: "Bebida",
    menuNote:
      "Ajustamos el menú al presupuesto, al horario y a las restricciones alimentarias de tus invitados.",
    messageGreeting: "Hola, quiero cotizar un evento.",
    messageDate: (date) => `Fecha aproximada: ${date}`,
    messageMenu: "Comida y bebida: lo que recomienden para este tipo de evento.",
  },
  eventTypes: {
    company: {
      inSentence: "una fiesta de empresa",
      name: "Fiesta de empresa",
      description:
        "Fin de año, aniversarios, lanzamientos e integraciones para equipos de cualquier tamaño.",
      food: [
        "Pasabocas y canapés de bienvenida",
        "Estaciones de comida o cena servida",
        "Opciones vegetarianas y sin gluten",
      ],
      drinks: [
        "Barra de cócteles, vino y cerveza",
        "Bebidas sin alcohol y café",
        "Brindis para el discurso de cierre",
      ],
    },
    wedding: {
      inSentence: "una boda",
      name: "Boda",
      description:
        "Ceremonia, recepción y fiesta, con una coordinadora a cargo durante todo el día.",
      food: [
        "Cóctel de bienvenida con pasabocas",
        "Cena de tres tiempos o buffet",
        "Torta y mesa de postres",
        "Comida para la madrugada",
      ],
      drinks: [
        "Espumoso para el brindis",
        "Vino en la mesa",
        "Barra libre",
        "Bebidas sin alcohol",
      ],
    },
    rave: {
      inSentence: "una rave",
      name: "Rave",
      description:
        "Música electrónica con sonido, luces, permisos y logística de acceso resueltos.",
      food: ["Food trucks y comida callejera", "Snacks para toda la noche"],
      drinks: [
        "Puntos de hidratación con agua gratis",
        "Barra rápida de cerveza y cócteles sencillos",
        "Bebidas energizantes y sin alcohol",
      ],
    },
    birthday: {
      inSentence: "un cumpleaños",
      name: "Cumpleaños",
      description: "Desde una cena para pocos hasta una fiesta grande.",
      food: ["Picadas o estaciones de comida", "Torta personalizada"],
      drinks: ["Cócteles de la casa", "Cerveza y bebidas sin alcohol"],
    },
    graduation: {
      inSentence: "un grado",
      name: "Grado",
      description:
        "Celebraciones para una familia o para una promoción completa.",
      food: [
        "Almuerzo o cena tipo buffet",
        "Picadas para la fiesta",
        "Torta o postres",
      ],
      drinks: ["Brindis para los graduados", "Barra con y sin alcohol"],
    },
    quinceanera: {
      inSentence: "unos quince",
      name: "Quinces",
      description:
        "Vals, hora loca y un menú pensado para invitados de todas las edades.",
      food: ["Cena servida", "Mesa de postres y torta", "Snacks para la hora loca"],
      drinks: [
        "Cócteles sin alcohol para los invitados menores",
        "Barra para adultos",
        "Brindis",
      ],
    },
  },
  moods: {
    festive: "festivo",
    elegant: "elegante",
    laidBack: "relajado",
    intimate: "íntimo",
    bohemian: "bohemio",
    tropical: "tropical",
    underground: "underground",
  },
  events: {
    title: "Lo que organizamos",
    text: "Si tu evento no está en la lista, igual cuéntanos.",
  },
  steps: {
    title: "Cómo funciona",
    label: (n) => `Paso ${n}`,
    items: [
      {
        title: "Cuéntanos la idea",
        text:
          "Tipo de evento, ambiente, zona y número de personas. Con la frase de arriba es suficiente.",
      },
      {
        title: "Recibe una propuesta",
        text:
          "Te enviamos opciones de lugar en la zona, menú, música, decoración y presupuesto.",
      },
      {
        title: "Disfruta el evento",
        text:
          "Coordinamos proveedores, montaje y personal el día del evento.",
      },
    ],
  },
  contact: {
    title: "¿Prefieres hablar directamente?",
    text:
      "Escríbenos por WhatsApp y te respondemos con algunas preguntas para afinar la idea.",
    whatsapp: "WhatsApp",
  },
  footer: { tagline: "Eventos de principio a fin" },
};
