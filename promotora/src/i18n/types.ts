// Shape every language file must follow. If you add a key here, TypeScript
// points at each language file that still needs the translation.
import type { EventTypeId, MoodId } from "../config";

type EventType = {
  /** How the type reads inside the request sentence, with its article. */
  inSentence: string;
  /** Plain name, used in headings and lists. */
  name: string;
  description: string;
  food: string[];
  drinks: string[];
};

type Step = { title: string; text: string };

export type Messages = {
  meta: { title: string; description: string };
  nav: { label: string; events: string; howItWorks: string; contact: string };
  language: { label: string };
  cta: { plan: string; send: string };
  hero: { title: string; text: string };
  request: {
    /**
     * The request sentence. Keep the four slots, in any order:
     * {eventType} {mood} {area} {guests}
     */
    sentence: string;
    labels: { eventType: string; mood: string; area: string; guests: string };
    areaExample: string;
    areaHint: string;
    areaError: string;
    guestsError: string;
    date: string;
    /** Heading above the food/drink suggestions for the chosen type. */
    menuTitle: (type: EventType) => string;
    food: string;
    drinks: string;
    menuNote: string;
    /** WhatsApp message pieces. */
    messageGreeting: string;
    messageDate: (date: string) => string;
    messageMenu: string;
  };
  /** Every event type must be described, keyed by id from config.ts. */
  eventTypes: Record<EventTypeId, EventType>;
  /** Mood words as they read inside the sentence. */
  moods: Record<MoodId, string>;
  events: { title: string; text: string };
  steps: { title: string; label: (n: number) => string; items: [Step, Step, Step] };
  contact: { title: string; text: string; whatsapp: string };
  footer: { tagline: string };
};
