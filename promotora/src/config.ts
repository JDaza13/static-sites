// Settings that are the same in every language. Text lives in src/i18n/.

export const marca = "Promotora Rumba";

export const contacto = {
  telefono: "+57 312 840 4143",
  /** WhatsApp number in international format, digits only. */
  whatsapp: "573128404143",
};

/** Event types, in the order they are offered. Text per type is in i18n. */
export const tipos = [
  "empresa",
  "boda",
  "rave",
  "cumpleanos",
  "grado",
  "quince",
] as const;
export type TipoId = (typeof tipos)[number];

/** Moods offered in the request sentence. */
export const ambientes = [
  "festivo",
  "elegante",
  "relajado",
  "intimo",
  "bohemio",
  "tropical",
  "underground",
] as const;
export type AmbienteId = (typeof ambientes)[number];

export const pedidoInicial = {
  tipo: "empresa" as TipoId,
  ambiente: "festivo" as AmbienteId,
  personas: "80",
};
