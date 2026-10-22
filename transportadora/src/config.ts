// Settings that are the same in every language. Text lives in src/i18n/.

export const brand = "Transporte Chaparral";

export const contact = {
  phone: "+57 312 840 4143",
  /** WhatsApp number in international format, digits only. */
  whatsapp: "573128404143",
  /** Optional: set an address to show it in the contact section. */
  email: "",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
