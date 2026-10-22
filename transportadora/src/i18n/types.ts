// Shape every language file must follow. If you add a key here, TypeScript
// points at each language file that still needs the translation.

type Parada = { titulo: string; texto: string };

type Servicio = {
  titulo: string;
  resumen: string;
  puntos: string[];
  nota?: string;
};

type Paso = { titulo: string; texto: string };

// Fixed-length lists: each language must have exactly this many items, in the
// same order as the icons/ids in App.tsx.
type Tres<T> = [T, T, T];

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    label: string;
    servicios: string;
    comoTrabajamos: string;
    contacto: string;
  };
  idioma: { label: string };
  cta: {
    cotizar: string;
    pedirCotizacion: string;
    verServicios: string;
    /** Pre-filled WhatsApp message. */
    mensajeWhatsapp: string;
  };
  ubicacion: string;
  hero: { titulo: string; texto: string };
  /** Route stops: schools, oil fields, air. */
  ruta: Tres<Parada>;
  servicios: {
    titulo: string;
    /** School, oil sector, air. */
    items: Tres<Servicio>;
  };
  pasos: {
    titulo: string;
    etiqueta: (n: number) => string;
    items: Tres<Paso>;
  };
  contacto: {
    titulo: string;
    texto: string;
    telefono: string;
    correo: string;
    oficina: string;
  };
  pie: { banderaCasanare: string };
};
