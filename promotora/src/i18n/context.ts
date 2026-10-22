import { createContext, useContext } from "react";
import type { Idioma } from "./idiomas";
import type { Messages } from "./types";

export type I18n = {
  idioma: Idioma;
  t: Messages;
  cambiarIdioma: (idioma: Idioma) => void;
};

export const I18nContext = createContext<I18n | null>(null);

/** Current language, its messages (`t`) and a setter. */
export function useI18n(): I18n {
  const valor = useContext(I18nContext);
  if (!valor) throw new Error("useI18n must be used inside <I18nProvider>");
  return valor;
}
