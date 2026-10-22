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
    events: "Events",
    howItWorks: "How it works",
    contact: "Contact",
  },
  language: { label: "Language" },
  cta: { plan: "Plan my event", send: "Send on WhatsApp" },
  hero: {
    title: "Tell us about your event in one sentence.",
    text:
      "We find the exact venue in the area you choose and handle the rest: food, drinks, music, décor and staff.",
  },
  request: {
    sentence:
      "We're planning {eventType} in {area} for {guests} guests, and we want it to feel {mood}.",
    labels: {
      eventType: "Event type",
      mood: "Vibe",
      area: "Area or city",
      guests: "Number of guests",
    },
    areaExample: "Chía or north Bogotá",
    areaHint: "The area is enough: we'll find the venue.",
    areaError: "Enter an area or city to send the request.",
    guestsError: "Enter how many guests are coming, as a number.",
    date: "Approximate date (optional)",
    menuTitle: (type) => `For ${type.inSentence}, we usually serve`,
    food: "Food",
    drinks: "Drinks",
    menuNote:
      "We adapt the menu to your budget, the event's schedule and your guests' dietary needs.",
    messageGreeting: "Hi, I'd like a quote for an event.",
    messageDate: (date) => `Approximate date: ${date}`,
    messageMenu: "Food and drinks: whatever you recommend for this type of event.",
  },
  eventTypes: {
    company: {
      inSentence: "a company party",
      name: "Company party",
      description:
        "End-of-year parties, anniversaries, launches and team events of any size.",
      food: [
        "Welcome canapés and appetizers",
        "Food stations or a served dinner",
        "Vegetarian and gluten-free options",
      ],
      drinks: [
        "Cocktail, wine and beer bar",
        "Non-alcoholic drinks and coffee",
        "A toast for the closing speech",
      ],
    },
    wedding: {
      inSentence: "a wedding",
      name: "Wedding",
      description:
        "Ceremony, reception and party, with a coordinator in charge all day.",
      food: [
        "Welcome cocktail hour with appetizers",
        "Three-course dinner or buffet",
        "Cake and dessert table",
        "Late-night snacks",
      ],
      drinks: [
        "Sparkling wine for the toast",
        "Wine at the table",
        "Open bar",
        "Non-alcoholic drinks",
      ],
    },
    rave: {
      inSentence: "a rave",
      name: "Rave",
      description:
        "Electronic music with sound, lights, permits and entry logistics taken care of.",
      food: ["Food trucks and street food", "Snacks all night long"],
      drinks: [
        "Hydration points with free water",
        "Fast bar with beer and simple cocktails",
        "Energy drinks and non-alcoholic options",
      ],
    },
    birthday: {
      inSentence: "a birthday party",
      name: "Birthday party",
      description: "From a small dinner to a big party.",
      food: ["Sharing platters or food stations", "Custom cake"],
      drinks: ["House cocktails", "Beer and non-alcoholic drinks"],
    },
    graduation: {
      inSentence: "a graduation party",
      name: "Graduation party",
      description: "Celebrations for one family or a whole graduating class.",
      food: [
        "Buffet lunch or dinner",
        "Sharing platters for the party",
        "Cake or desserts",
      ],
      drinks: ["A toast for the graduates", "Bar with and without alcohol"],
    },
    quinceanera: {
      inSentence: "a quinceañera",
      name: "Quinceañera",
      description:
        "Waltz, \"hora loca\" party hour and a menu for guests of all ages.",
      food: ["Served dinner", "Dessert table and cake", "Snacks for the party hour"],
      drinks: [
        "Mocktails for underage guests",
        "Adult bar",
        "A toast",
      ],
    },
  },
  moods: {
    festive: "festive",
    elegant: "elegant",
    laidBack: "laid-back",
    intimate: "intimate",
    bohemian: "bohemian",
    tropical: "tropical",
    underground: "underground",
  },
  events: {
    title: "What we plan",
    text: "If your event isn't on the list, tell us anyway.",
  },
  steps: {
    title: "How it works",
    label: (n) => `Step ${n}`,
    items: [
      {
        title: "Tell us the idea",
        text:
          "Event type, vibe, area and number of guests. The sentence above is enough.",
      },
      {
        title: "Get a proposal",
        text:
          "We send you venue options in the area, plus menu, music, décor and budget.",
      },
      {
        title: "Enjoy the event",
        text:
          "We coordinate suppliers, setup and staff on the day of the event.",
      },
    ],
  },
  contact: {
    title: "Rather talk to someone?",
    text:
      "Message us on WhatsApp and we'll reply with a few questions to refine the idea.",
    whatsapp: "WhatsApp",
  },
  footer: { tagline: "Events from start to finish" },
};
