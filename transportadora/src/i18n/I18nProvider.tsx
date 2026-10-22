import { useEffect, useMemo, useState, type ReactNode } from "react";
import { I18nContext } from "./context";
import {
  CLAVE_ALMACEN,
  detectarIdioma,
  idiomaPorDefecto,
  idiomas,
  type Idioma,
} from "./idiomas";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [idioma, cambiarIdioma] = useState<Idioma>(detectarIdioma);

  useEffect(() => {
    const { htmlLang, mensajes } = idiomas[idioma];

    document.documentElement.lang = htmlLang;
    document.title = mensajes.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", mensajes.meta.description);

    try {
      window.localStorage.setItem(CLAVE_ALMACEN, idioma);
    } catch {
      // Storage blocked: the choice just won't be remembered.
    }

    // Keep ?lang= in the address so a link opens in the same language.
    const url = new URL(window.location.href);
    if (idioma === idiomaPorDefecto) url.searchParams.delete("lang");
    else url.searchParams.set("lang", idioma);
    window.history.replaceState(window.history.state, "", url);
  }, [idioma]);

  const valor = useMemo(
    () => ({ idioma, t: idiomas[idioma].mensajes, cambiarIdioma }),
    [idioma],
  );

  return <I18nContext.Provider value={valor}>{children}</I18nContext.Provider>;
}
