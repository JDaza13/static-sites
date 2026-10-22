import type { ComponentType } from "react";
import { FlagCN, FlagES, FlagUK } from "../flags";
import { en } from "./en";
import { es } from "./es";
import type { Messages } from "./types";
import { zh } from "./zh";

type LanguageDefinition = {
  /** Name shown in the picker, written in its own language. */
  name: string;
  /** Short label for the picker button. */
  shortLabel: string;
  /** Value for <html lang>. */
  htmlLang: string;
  Flag: ComponentType<{ className?: string; title?: string }>;
  messages: Messages;
};

// To add a language: create <code>.ts next to es.ts typed as `Messages`,
// then add one entry here. The first entry is the default.
export const languages = {
  es: { name: "Español", shortLabel: "ES", htmlLang: "es", Flag: FlagES, messages: es },
  en: { name: "English", shortLabel: "EN", htmlLang: "en", Flag: FlagUK, messages: en },
  zh: { name: "简体中文", shortLabel: "中文", htmlLang: "zh-Hans", Flag: FlagCN, messages: zh },
} satisfies Record<string, LanguageDefinition>;

export type Language = keyof typeof languages;

export const languageCodes = Object.keys(languages) as Language[];
export const defaultLanguage: Language = languageCodes[0];

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && value in languages;
}

/** Sites share one origin (github.io), so the key is namespaced per site. */
export const STORAGE_KEY = "promotora:language";

/** Language from ?lang=, then the saved choice, then the default. */
export function detectLanguage(): Language {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(fromUrl)) return fromUrl;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage blocked (private mode, sandboxed iframe): fall through.
  }
  return defaultLanguage;
}
