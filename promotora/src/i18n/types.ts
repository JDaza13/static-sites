// Shape every language file must follow. If you add a key here, TypeScript
// points at each language file that still needs the translation.
import type { AmbienteId, TipoId } from "../config";

type Tipo = {
  /** How the type reads inside the request sentence, with its article. */
  enFrase: string;
  /** Plain name, used in headings and lists. */
  nombre: string;
  descripcion: string;
  comida: string[];
  bebida: string[];
};

type Paso = { titulo: string; texto: string };

export type Messages = {
  meta: { title: string; description: string };
  nav: { label: string; eventos: string; comoFunciona: string; contacto: string };
  idioma: { label: string };
  cta: { planear: string; enviar: string };
  hero: { titulo: string; texto: string };
  pedido: {
    /**
     * The request sentence. Keep the four slots, in any order:
     * {tipo} {ambiente} {zona} {personas}
     */
    frase: string;
    etiquetas: { tipo: string; ambiente: string; zona: string; personas: string };
    zonaEjemplo: string;
    zonaAyuda: string;
    zonaError: string;
    personasError: string;
    fecha: string;
    /** Heading above the food/drink suggestions for the chosen type. */
    menuTitulo: (tipo: { enFrase: string; nombre: string }) => string;
    comida: string;
    bebida: string;
    menuNota: string;
    /** WhatsApp message pieces. */
    mensajeSaludo: string;
    mensajeFecha: (fecha: string) => string;
    mensajeMenu: string;
  };
  /** Every event type must be described, keyed by id from config.ts. */
  tipos: Record<TipoId, Tipo>;
  /** Mood words as they read inside the sentence. */
  ambientes: Record<AmbienteId, string>;
  eventos: { titulo: string; texto: string };
  pasos: { titulo: string; etiqueta: (n: number) => string; items: [Paso, Paso, Paso] };
  contacto: { titulo: string; texto: string; whatsapp: string };
  pie: { lema: string };
};
