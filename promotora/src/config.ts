// Settings that are the same in every language. Text lives in src/i18n/.

export const brand = "Promotora Rumba";

export const contact = {
  phone: "+57 312 840 4143",
  /** WhatsApp number in international format, digits only. */
  whatsapp: "573128404143",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Event types, in the order they are offered. Text per type is in i18n. */
export const eventTypeIds = [
  "company",
  "wedding",
  "rave",
  "birthday",
  "graduation",
  "quinceanera",
] as const;
export type EventTypeId = (typeof eventTypeIds)[number];

/** Moods offered in the request sentence. */
export const moodIds = [
  "festive",
  "elegant",
  "laidBack",
  "intimate",
  "bohemian",
  "tropical",
  "underground",
] as const;
export type MoodId = (typeof moodIds)[number];

export const initialRequest = {
  eventType: "company" as EventTypeId,
  mood: "festive" as MoodId,
  guests: "80",
};
