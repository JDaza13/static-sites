import { useEffect, useMemo, useState, type ReactNode } from "react";
import { I18nContext } from "./context";
import {
  STORAGE_KEY,
  defaultLanguage,
  detectLanguage,
  languages,
  type Language,
} from "./languages";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectLanguage);

  useEffect(() => {
    const { htmlLang, messages } = languages[language];

    document.documentElement.lang = htmlLang;
    document.title = messages.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", messages.meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage blocked: the choice just won't be remembered.
    }

    // Keep ?lang= in the address so a link opens in the same language.
    const url = new URL(window.location.href);
    if (language === defaultLanguage) url.searchParams.delete("lang");
    else url.searchParams.set("lang", language);
    window.history.replaceState(window.history.state, "", url);
  }, [language]);

  const value = useMemo(
    () => ({ language, t: languages[language].messages, setLanguage }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
