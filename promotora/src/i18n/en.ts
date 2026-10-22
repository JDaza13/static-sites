import type { Messages } from "./types";

// English.
export const en: Messages = {
  meta: {
    title: "Promotora Rumba: weddings, company parties, raves and more",
    description:
      "We plan weddings, company parties, raves, birthdays, graduations and quinceañeras. Tell us the vibe, the area and how many people are coming.",
  },
  nav: {
    label: "Main",
    eventos: "Events",
    comoFunciona: "How it works",
    contacto: "Contact",
  },
  idioma: { label: "Language" },
  cta: { planear: "Plan my event", enviar: "Send on WhatsApp" },
  hero: {
    titulo: "Tell us about your event in one sentence.",
    texto:
      "We find the exact venue in the area you choose and handle the rest: food, drinks, music, décor and staff.",
  },
  pedido: {
    frase:
      "We're planning {tipo} in {zona} for {personas} guests, and we want it to feel {ambiente}.",
    etiquetas: {
      tipo: "Event type",
      ambiente: "Vibe",
      zona: "Area or city",
      personas: "Number of guests",
    },
    zonaEjemplo: "Chía or north Bogotá",
    zonaAyuda: "The area is enough: we'll find the venue.",
    zonaError: "Enter an area or city to send the request.",
    personasError: "Enter how many guests are coming, as a number.",
    fecha: "Approximate date (optional)",
    menuTitulo: (tipo) => `For ${tipo.enFrase}, we usually serve`,
    comida: "Food",
    bebida: "Drinks",
    menuNota:
      "We adapt the menu to your budget, the event's schedule and your guests' dietary needs.",
    mensajeSaludo: "Hi, I'd like a quote for an event.",
    mensajeFecha: (fecha) => `Approximate date: ${fecha}`,
    mensajeMenu: "Food and drinks: whatever you recommend for this type of event.",
  },
  tipos: {
    empresa: {
      enFrase: "a company party",
      nombre: "Company party",
      descripcion:
        "End-of-year parties, anniversaries, launches and team events of any size.",
      comida: [
        "Welcome canapés and appetizers",
        "Food stations or a served dinner",
        "Vegetarian and gluten-free options",
      ],
      bebida: [
        "Cocktail, wine and beer bar",
        "Non-alcoholic drinks and coffee",
        "A toast for the closing speech",
      ],
    },
    boda: {
      enFrase: "a wedding",
      nombre: "Wedding",
      descripcion:
        "Ceremony, reception and party, with a coordinator in charge all day.",
      comida: [
        "Welcome cocktail hour with appetizers",
        "Three-course dinner or buffet",
        "Cake and dessert table",
        "Late-night snacks",
      ],
      bebida: [
        "Sparkling wine for the toast",
        "Wine at the table",
        "Open bar",
        "Non-alcoholic drinks",
      ],
    },
    rave: {
      enFrase: "a rave",
      nombre: "Rave",
      descripcion:
        "Electronic music with sound, lights, permits and entry logistics taken care of.",
      comida: ["Food trucks and street food", "Snacks all night long"],
      bebida: [
        "Hydration points with free water",
        "Fast bar with beer and simple cocktails",
        "Energy drinks and non-alcoholic options",
      ],
    },
    cumpleanos: {
      enFrase: "a birthday party",
      nombre: "Birthday party",
      descripcion: "From a small dinner to a big party.",
      comida: ["Sharing platters or food stations", "Custom cake"],
      bebida: ["House cocktails", "Beer and non-alcoholic drinks"],
    },
    grado: {
      enFrase: "a graduation party",
      nombre: "Graduation party",
      descripcion: "Celebrations for one family or a whole graduating class.",
      comida: [
        "Buffet lunch or dinner",
        "Sharing platters for the party",
        "Cake or desserts",
      ],
      bebida: ["A toast for the graduates", "Bar with and without alcohol"],
    },
    quince: {
      enFrase: "a quinceañera",
      nombre: "Quinceañera",
      descripcion:
        "Waltz, \"hora loca\" party hour and a menu for guests of all ages.",
      comida: ["Served dinner", "Dessert table and cake", "Snacks for the party hour"],
      bebida: [
        "Mocktails for underage guests",
        "Adult bar",
        "A toast",
      ],
    },
  },
  ambientes: {
    festivo: "festive",
    elegante: "elegant",
    relajado: "laid-back",
    intimo: "intimate",
    bohemio: "bohemian",
    tropical: "tropical",
    underground: "underground",
  },
  eventos: {
    titulo: "What we plan",
    texto: "If your event isn't on the list, tell us anyway.",
  },
  pasos: {
    titulo: "How it works",
    etiqueta: (n) => `Step ${n}`,
    items: [
      {
        titulo: "Tell us the idea",
        texto:
          "Event type, vibe, area and number of guests. The sentence above is enough.",
      },
      {
        titulo: "Get a proposal",
        texto:
          "We send you venue options in the area, plus menu, music, décor and budget.",
      },
      {
        titulo: "Enjoy the event",
        texto:
          "We coordinate suppliers, setup and staff on the day of the event.",
      },
    ],
  },
  contacto: {
    titulo: "Rather talk to someone?",
    texto:
      "Message us on WhatsApp and we'll reply with a few questions to refine the idea.",
    whatsapp: "WhatsApp",
  },
  pie: { lema: "Events from start to finish" },
};
