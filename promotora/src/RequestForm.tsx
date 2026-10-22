import { useId, useRef, useState, type FormEvent } from "react";
import {
  eventTypeIds,
  initialRequest,
  moodIds,
  whatsappLink,
  type EventTypeId,
  type MoodId,
} from "./config";
import { useI18n } from "./i18n/context";
import { languages } from "./i18n/languages";

type RequiredField = "area" | "guests";

// Shared look of the fill-in fields inside the sentence.
const fieldClass =
  "field-fit inline max-w-full rounded-none border-0 border-b-[3px] border-accent-soft bg-transparent px-0.5 font-bold text-accent-soft transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.08] focus-visible:outline-accent-soft";

const selectClass = `${fieldClass} cursor-pointer appearance-none [&>option]:bg-white [&>option]:text-ink`;

/** "2026-12-12" -> "12 de diciembre de 2026" (or the visitor's language). */
function formatDate(iso: string, lang: string) {
  const date = new Date(`${iso}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? iso
    : new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(date);
}

/** Splits "... {eventType} ... {area} ..." into text and slot names. */
function splitSentence(sentence: string) {
  return sentence
    .split(/(\{\w+\})/)
    .filter(Boolean)
    .map((part) => {
      const slot = part.match(/^\{(\w+)\}$/)?.[1];
      return slot ? { slot } : { text: part };
    });
}

export function RequestForm() {
  const { t, language } = useI18n();
  const [eventType, setEventType] = useState<EventTypeId>(initialRequest.eventType);
  const [mood, setMood] = useState<MoodId>(initialRequest.mood);
  const [area, setArea] = useState("");
  const [guests, setGuests] = useState(initialRequest.guests);
  const [date, setDate] = useState("");
  const [error, setError] = useState<RequiredField | null>(null);
  const areaRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLInputElement>(null);
  const hintId = useId();
  const errorId = useId();
  const dateId = useId();

  const r = t.request;
  const type = t.eventTypes[eventType];

  const slotValues: Record<string, string> = {
    eventType: type.inSentence,
    mood: t.moods[mood],
    area: area.trim(),
    guests,
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const missing: RequiredField | null = !area.trim()
      ? "area"
      : !(Number(guests) > 0)
        ? "guests"
        : null;
    setError(missing);
    if (missing) {
      (missing === "area" ? areaRef : guestsRef).current?.focus();
      return;
    }
    const sentence = r.sentence.replace(
      /\{(\w+)\}/g,
      (_, key: string) => slotValues[key] ?? "",
    );
    const message = [
      r.messageGreeting,
      "",
      sentence,
      ...(date ? [r.messageDate(formatDate(date, languages[language].htmlLang))] : []),
      r.messageMenu,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const renderSlot = (slot: string) => {
    switch (slot) {
      case "eventType":
        return (
          <select
            aria-label={r.labels.eventType}
            value={eventType}
            onChange={(e) => setEventType(e.target.value as EventTypeId)}
            className={selectClass}
          >
            {eventTypeIds.map((id) => (
              <option key={id} value={id}>
                {t.eventTypes[id].inSentence}
              </option>
            ))}
          </select>
        );
      case "mood":
        return (
          <select
            aria-label={r.labels.mood}
            value={mood}
            onChange={(e) => setMood(e.target.value as MoodId)}
            className={selectClass}
          >
            {moodIds.map((id) => (
              <option key={id} value={id}>
                {t.moods[id]}
              </option>
            ))}
          </select>
        );
      case "area":
        return (
          <input
            ref={areaRef}
            type="text"
            autoComplete="address-level2"
            aria-label={r.labels.area}
            aria-invalid={error === "area"}
            aria-describedby={error === "area" ? errorId : hintId}
            placeholder={r.areaExample}
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
              if (error === "area") setError(null);
            }}
            className={`${fieldClass} min-w-[4ch] placeholder:font-semibold placeholder:text-accent-soft/45`}
          />
        );
      case "guests":
        return (
          <input
            ref={guestsRef}
            type="text"
            inputMode="numeric"
            aria-label={r.labels.guests}
            aria-invalid={error === "guests"}
            aria-describedby={error === "guests" ? errorId : undefined}
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value.replace(/\D/g, "").slice(0, 5));
              if (error === "guests") setError(null);
            }}
            className={`${fieldClass} min-w-[2ch] text-center`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={submit} noValidate>
      <p className="text-[clamp(1.75rem,4.6vw,3.6rem)] leading-[1.45] font-semibold tracking-tight text-white [&:lang(zh)]:leading-[1.6]">
        {splitSentence(r.sentence).map((part, i) => (
          <span key={i}>{"slot" in part ? renderSlot(part.slot!) : part.text}</span>
        ))}
      </p>

      <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-6">
        <div>
          <label htmlFor={dateId} className="block text-sm text-white/65">
            {r.date}
          </label>
          <input
            id={dateId}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-2 rounded-lg border border-white/20 bg-white/[0.06] px-3 py-2 text-white [color-scheme:dark]"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-accent-soft px-7 py-3.5 text-base font-bold text-deep transition-colors hover:bg-[#ffa6cd]"
        >
          {t.cta.send}
        </button>
      </div>

      <p
        id={error ? errorId : hintId}
        role={error ? "alert" : undefined}
        className={`mt-4 text-sm ${error ? "font-semibold text-accent-soft" : "text-white/65"}`}
      >
        {error === "area" ? r.areaError : error === "guests" ? r.guestsError : r.areaHint}
      </p>

      <section aria-live="polite" className="mt-14 border-t border-white/15 pt-10">
        <h2 className="text-lg font-semibold text-white">{r.menuTitle(type)}</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
          {(
            [
              [r.food, type.food],
              [r.drinks, type.drinks],
            ] as const
          ).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-accent-soft">{heading}</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[60ch] text-sm text-white/60">{r.menuNote}</p>
      </section>
    </form>
  );
}
