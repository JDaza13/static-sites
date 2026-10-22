import type { ComponentType } from "react";
import { FlagCN, FlagES, FlagUK } from "../flags";
import { en } from "./en";
import { es } from "./es";
import type { Messages } from "./types";
import { zh } from "./zh";

type Definicion = {
  /** Name shown in the picker, written in its own language. */
  nombre: string;
  /** Short label for the picker button. */
  corto: string;
  /** Value for <html lang>. */
  htmlLang: string;
  Bandera: ComponentType<{ className?: string; title?: string }>;
  mensajes: Messages;
};

// To add a language: create <code>.ts next to es.ts typed as `Messages`,
// then add one entry here. The first entry is the default.
export const idiomas = {
  es: { nombre: "Español", corto: "ES", htmlLang: "es", Bandera: FlagES, mensajes: es },
  en: { nombre: "English", corto: "EN", htmlLang: "en", Bandera: FlagUK, mensajes: en },
  zh: { nombre: "简体中文", corto: "中文", htmlLang: "zh-Hans", Bandera: FlagCN, mensajes: zh },
} satisfies Record<string, Definicion>;

export type Idioma = keyof typeof idiomas;

export const codigos = Object.keys(idiomas) as Idioma[];
export const idiomaPorDefecto: Idioma = codigos[0];

export function esIdioma(valor: unknown): valor is Idioma {
  return typeof valor === "string" && valor in idiomas;
}

export const CLAVE_ALMACEN = "idioma";

/** Language from ?lang=, then the saved choice, then the default. */
export function detectarIdioma(): Idioma {
  const deUrl = new URLSearchParams(window.location.search).get("lang");
  if (esIdioma(deUrl)) return deUrl;
  try {
    const guardado = window.localStorage.getItem(CLAVE_ALMACEN);
    if (esIdioma(guardado)) return guardado;
  } catch {
    // Storage blocked (private mode, sandboxed iframe): fall through.
  }
  return idiomaPorDefecto;
}
