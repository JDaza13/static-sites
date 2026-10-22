import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { useI18n } from "./i18n/context";
import { languageCodes, languages, type Language } from "./i18n/languages";

const flagClass =
  "h-3.5 w-5 shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgb(0_0_0/0.12)]";

export function LanguagePicker() {
  const { language, t, setLanguage } = useI18n();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();

  // Close on click outside.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Focus the current language when the menu opens.
  useEffect(() => {
    if (open) options.current[languageCodes.indexOf(language)]?.focus();
  }, [open, language]);

  const close = () => {
    setOpen(false);
    button.current?.focus();
  };

  const choose = (code: Language) => {
    setLanguage(code);
    close();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") return close();
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const current = options.current.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const step = e.key === "ArrowDown" ? 1 : -1;
    const next = (current + step + languageCodes.length) % languageCodes.length;
    options.current[next]?.focus();
  };

  const { Flag, shortLabel, name } = languages[language];

  return (
    <div ref={root} className="relative" onKeyDown={open ? onKeyDown : undefined}>
      <button
        ref={button}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.language.label}: ${name}`}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full px-2 py-2 text-[13px] font-semibold hover:bg-black/5 sm:px-2.5"
      >
        <Flag className={flagClass} />
        <span className="hidden whitespace-nowrap sm:inline">{shortLabel}</span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className={`size-2.5 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label={t.language.label}
          className="absolute right-0 z-20 mt-2 min-w-44 rounded-xl border border-line bg-white p-1.5 shadow-lg"
        >
          {languageCodes.map((code, i) => {
            const { Flag: OptionFlag, name: optionName, htmlLang } = languages[code];
            const active = code === language;
            return (
              <li key={code} role="none">
                <button
                  ref={(el) => {
                    options.current[i] = el;
                  }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  lang={htmlLang}
                  onClick={() => choose(code)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-surface focus-visible:bg-surface ${
                    active ? "font-semibold" : ""
                  }`}
                >
                  <OptionFlag className={flagClass} />
                  <span className="flex-1">{optionName}</span>
                  {active && (
                    <svg viewBox="0 0 16 16" aria-hidden className="size-3.5 text-deep">
                      <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
