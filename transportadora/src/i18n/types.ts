// Shape every language file must follow. If you add a key here, TypeScript
// points at each language file that still needs the translation.

type Stop = { title: string; text: string };

type Service = {
  title: string;
  summary: string;
  points: string[];
  note?: string;
};

type Step = { title: string; text: string };

// Fixed-length lists: each language must have exactly this many items, in the
// same order as the icons/ids in App.tsx.
type Three<T> = [T, T, T];

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    label: string;
    services: string;
    howItWorks: string;
    contact: string;
  };
  language: { label: string };
  cta: {
    /** Short label for the header button. */
    quote: string;
    requestQuote: string;
    seeServices: string;
    /** Pre-filled WhatsApp message. */
    whatsappMessage: string;
  };
  location: string;
  hero: { title: string; text: string };
  /** Route stops: schools, oil fields, air. */
  route: Three<Stop>;
  services: {
    title: string;
    /** School, oil sector, air. */
    items: Three<Service>;
  };
  steps: {
    title: string;
    label: (n: number) => string;
    items: Three<Step>;
  };
  contact: {
    title: string;
    text: string;
    phone: string;
    email: string;
    office: string;
  };
  footer: { casanareFlag: string };
};
