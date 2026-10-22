import { useId, useRef, useState, type FormEvent } from "react";
import {
  ambientes,
  contacto,
  pedidoInicial,
  tipos,
  type AmbienteId,
  type TipoId,
} from "./config";
import { useI18n } from "./i18n/context";
import { idiomas } from "./i18n/idiomas";

type Campo = "zona" | "personas";

// Shared look of the fill-in fields inside the sentence.
const campoClase =
  "campo-ajustable inline max-w-full rounded-none border-0 border-b-[3px] border-rosa bg-transparent px-0.5 font-bold text-rosa transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.08] focus-visible:outline-rosa";

/** "2026-12-12" -> "12 de diciembre de 2026" (or the visitor's language). */
function formatearFecha(iso: string, lang: string) {
  const fecha = new Date(`${iso}T12:00:00`);
  return Number.isNaN(fecha.getTime())
    ? iso
    : new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(fecha);
}

/** Splits "... {tipo} ... {zona} ..." into text and slot names. */
function partir(frase: string) {
  return frase.split(/(\{\w+\})/).filter(Boolean).map((parte) => {
    const slot = parte.match(/^\{(\w+)\}$/)?.[1];
    return slot ? { slot } : { texto: parte };
  });
}

export function Pedido() {
  const { t, idioma } = useI18n();
  const [tipo, setTipo] = useState<TipoId>(pedidoInicial.tipo);
  const [ambiente, setAmbiente] = useState<AmbienteId>(pedidoInicial.ambiente);
  const [zona, setZona] = useState("");
  const [personas, setPersonas] = useState(pedidoInicial.personas);
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState<Campo | null>(null);
  const refs = { zona: useRef<HTMLInputElement>(null), personas: useRef<HTMLInputElement>(null) };
  const ayudaId = useId();
  const errorId = useId();
  const fechaId = useId();

  const tipoTexto = t.tipos[tipo];
  const p = t.pedido;

  const valores: Record<string, string> = {
    tipo: tipoTexto.enFrase,
    ambiente: t.ambientes[ambiente],
    zona: zona.trim(),
    personas,
  };

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const falta: Campo | null = !zona.trim()
      ? "zona"
      : !(Number(personas) > 0)
        ? "personas"
        : null;
    setError(falta);
    if (falta) {
      refs[falta].current?.focus();
      return;
    }
    const frase = p.frase.replace(/\{(\w+)\}/g, (_, k: string) => valores[k] ?? "");
    const mensaje = [
      p.mensajeSaludo,
      "",
      frase,
      ...(fecha ? [p.mensajeFecha(formatearFecha(fecha, idiomas[idioma].htmlLang))] : []),
      p.mensajeMenu,
    ].join("\n");
    window.open(
      `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const slot = (nombre: string) => {
    switch (nombre) {
      case "tipo":
        return (
          <select
            aria-label={p.etiquetas.tipo}
            value={tipo}
            onChange={(e) => setTipo(e.target.value as TipoId)}
            className={`${campoClase} cursor-pointer appearance-none [&>option]:bg-white [&>option]:text-tinta`}
          >
            {tipos.map((id) => (
              <option key={id} value={id}>
                {t.tipos[id].enFrase}
              </option>
            ))}
          </select>
        );
      case "ambiente":
        return (
          <select
            aria-label={p.etiquetas.ambiente}
            value={ambiente}
            onChange={(e) => setAmbiente(e.target.value as AmbienteId)}
            className={`${campoClase} cursor-pointer appearance-none [&>option]:bg-white [&>option]:text-tinta`}
          >
            {ambientes.map((id) => (
              <option key={id} value={id}>
                {t.ambientes[id]}
              </option>
            ))}
          </select>
        );
      case "zona":
        return (
          <input
            ref={refs.zona}
            type="text"
            autoComplete="address-level2"
            aria-label={p.etiquetas.zona}
            aria-invalid={error === "zona"}
            aria-describedby={error === "zona" ? errorId : ayudaId}
            placeholder={p.zonaEjemplo}
            value={zona}
            onChange={(e) => {
              setZona(e.target.value);
              if (error === "zona") setError(null);
            }}
            className={`${campoClase} min-w-[4ch] placeholder:font-semibold placeholder:text-rosa/45`}
          />
        );
      case "personas":
        return (
          <input
            ref={refs.personas}
            type="text"
            inputMode="numeric"
            aria-label={p.etiquetas.personas}
            aria-invalid={error === "personas"}
            aria-describedby={error === "personas" ? errorId : undefined}
            value={personas}
            onChange={(e) => {
              setPersonas(e.target.value.replace(/\D/g, "").slice(0, 5));
              if (error === "personas") setError(null);
            }}
            className={`${campoClase} min-w-[2ch] text-center`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={enviar} noValidate>
      <p className="text-[clamp(1.75rem,4.6vw,3.6rem)] leading-[1.45] font-semibold tracking-tight text-white [&:lang(zh)]:leading-[1.6]">
        {partir(p.frase).map((parte, i) =>
          "slot" in parte ? (
            <span key={i}>{slot(parte.slot!)}</span>
          ) : (
            <span key={i}>{parte.texto}</span>
          ),
        )}
      </p>

      <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-6">
        <div>
          <label htmlFor={fechaId} className="block text-sm text-white/65">
            {p.fecha}
          </label>
          <input
            id={fechaId}
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="mt-2 rounded-lg border border-white/20 bg-white/[0.06] px-3 py-2 text-white [color-scheme:dark]"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-rosa px-7 py-3.5 text-base font-bold text-noche transition-colors hover:bg-[#ffa6cd]"
        >
          {t.cta.enviar}
        </button>
      </div>

      <p
        id={error ? errorId : ayudaId}
        role={error ? "alert" : undefined}
        className={`mt-4 text-sm ${error ? "font-semibold text-rosa" : "text-white/65"}`}
      >
        {error === "zona"
          ? p.zonaError
          : error === "personas"
            ? p.personasError
            : p.zonaAyuda}
      </p>

      <section
        aria-live="polite"
        className="mt-14 border-t border-white/15 pt-10"
      >
        <h2 className="text-lg font-semibold text-white">
          {p.menuTitulo(tipoTexto)}
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
          {(
            [
              [p.comida, tipoTexto.comida],
              [p.bebida, tipoTexto.bebida],
            ] as const
          ).map(([titulo, items]) => (
            <div key={titulo}>
              <h3 className="text-sm font-semibold text-rosa">{titulo}</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[60ch] text-sm text-white/60">{p.menuNota}</p>
      </section>
    </form>
  );
}
