import { createContext, useContext } from "react";
import type { Language } from "./languages";
import type { Messages } from "./types";

export type I18n = {
  language: Language;
  t: Messages;
  setLanguage: (language: Language) => void;
};

export const I18nContext = createContext<I18n | null>(null);

/** Current language, its messages (`t`) and a setter. */
export function useI18n(): I18n {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
}
