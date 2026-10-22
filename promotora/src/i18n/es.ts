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
    eventos: "Eventos",
    comoFunciona: "Cómo funciona",
    contacto: "Contacto",
  },
  idioma: { label: "Idioma" },
  cta: { planear: "Planear mi evento", enviar: "Enviar por WhatsApp" },
  hero: {
    titulo: "Cuéntanos tu evento en una frase.",
    texto:
      "Nosotros encontramos el lugar exacto en la zona que elijas y armamos el resto: comida, bebida, música, decoración y personal.",
  },
  pedido: {
    frase:
      "Queremos organizar {tipo} con un ambiente {ambiente} en {zona} para {personas} personas.",
    etiquetas: {
      tipo: "Tipo de evento",
      ambiente: "Ambiente",
      zona: "Zona o ciudad",
      personas: "Número de personas",
    },
    zonaEjemplo: "Chía o el norte de Bogotá",
    zonaAyuda: "Basta con la zona: nosotros buscamos el lugar.",
    zonaError: "Escribe una zona o ciudad para enviar la solicitud.",
    personasError: "Escribe cuántas personas van, en números.",
    fecha: "Fecha aproximada (opcional)",
    menuTitulo: (tipo) => `Para ${tipo.enFrase}, solemos servir`,
    comida: "Comida",
    bebida: "Bebida",
    menuNota:
      "Ajustamos el menú al presupuesto, al horario y a las restricciones alimentarias de tus invitados.",
    mensajeSaludo: "Hola, quiero cotizar un evento.",
    mensajeFecha: (fecha) => `Fecha aproximada: ${fecha}`,
    mensajeMenu: "Comida y bebida: lo que recomienden para este tipo de evento.",
  },
  tipos: {
    empresa: {
      enFrase: "una fiesta de empresa",
      nombre: "Fiesta de empresa",
      descripcion:
        "Fin de año, aniversarios, lanzamientos e integraciones para equipos de cualquier tamaño.",
      comida: [
        "Pasabocas y canapés de bienvenida",
        "Estaciones de comida o cena servida",
        "Opciones vegetarianas y sin gluten",
      ],
      bebida: [
        "Barra de cócteles, vino y cerveza",
        "Bebidas sin alcohol y café",
        "Brindis para el discurso de cierre",
      ],
    },
    boda: {
      enFrase: "una boda",
      nombre: "Boda",
      descripcion:
        "Ceremonia, recepción y fiesta, con una coordinadora a cargo durante todo el día.",
      comida: [
        "Cóctel de bienvenida con pasabocas",
        "Cena de tres tiempos o buffet",
        "Torta y mesa de postres",
        "Comida para la madrugada",
      ],
      bebida: [
        "Espumoso para el brindis",
        "Vino en la mesa",
        "Barra libre",
        "Bebidas sin alcohol",
      ],
    },
    rave: {
      enFrase: "una rave",
      nombre: "Rave",
      descripcion:
        "Música electrónica con sonido, luces, permisos y logística de acceso resueltos.",
      comida: ["Food trucks y comida callejera", "Snacks para toda la noche"],
      bebida: [
        "Puntos de hidratación con agua gratis",
        "Barra rápida de cerveza y cócteles sencillos",
        "Bebidas energizantes y sin alcohol",
      ],
    },
    cumpleanos: {
      enFrase: "un cumpleaños",
      nombre: "Cumpleaños",
      descripcion: "Desde una cena para pocos hasta una fiesta grande.",
      comida: ["Picadas o estaciones de comida", "Torta personalizada"],
      bebida: ["Cócteles de la casa", "Cerveza y bebidas sin alcohol"],
    },
    grado: {
      enFrase: "un grado",
      nombre: "Grado",
      descripcion:
        "Celebraciones para una familia o para una promoción completa.",
      comida: [
        "Almuerzo o cena tipo buffet",
        "Picadas para la fiesta",
        "Torta o postres",
      ],
      bebida: ["Brindis para los graduados", "Barra con y sin alcohol"],
    },
    quince: {
      enFrase: "unos quince",
      nombre: "Quinces",
      descripcion:
        "Vals, hora loca y un menú pensado para invitados de todas las edades.",
      comida: ["Cena servida", "Mesa de postres y torta", "Snacks para la hora loca"],
      bebida: [
        "Cócteles sin alcohol para los invitados menores",
        "Barra para adultos",
        "Brindis",
      ],
    },
  },
  ambientes: {
    festivo: "festivo",
    elegante: "elegante",
    relajado: "relajado",
    intimo: "íntimo",
    bohemio: "bohemio",
    tropical: "tropical",
    underground: "underground",
  },
  eventos: {
    titulo: "Lo que organizamos",
    texto: "Si tu evento no está en la lista, igual cuéntanos.",
  },
  pasos: {
    titulo: "Cómo funciona",
    etiqueta: (n) => `Paso ${n}`,
    items: [
      {
        titulo: "Cuéntanos la idea",
        texto:
          "Tipo de evento, ambiente, zona y número de personas. Con la frase de arriba es suficiente.",
      },
      {
        titulo: "Recibe una propuesta",
        texto:
          "Te enviamos opciones de lugar en la zona, menú, música, decoración y presupuesto.",
      },
      {
        titulo: "Disfruta el evento",
        texto:
          "Coordinamos proveedores, montaje y personal el día del evento.",
      },
    ],
  },
  contacto: {
    titulo: "¿Prefieres hablar directamente?",
    texto:
      "Escríbenos por WhatsApp y te respondemos con algunas preguntas para afinar la idea.",
    whatsapp: "WhatsApp",
  },
  pie: { lema: "Eventos de principio a fin" },
};
