import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { useI18n } from "./i18n/context";
import { codigos, idiomas, type Idioma } from "./i18n/idiomas";

const banderaClase =
  "h-3.5 w-5 shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgb(0_0_0/0.12)]";

export function LanguagePicker() {
  const { idioma, t, cambiarIdioma } = useI18n();
  const [abierto, setAbierto] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const boton = useRef<HTMLButtonElement>(null);
  const opciones = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();

  // Close on click outside.
  useEffect(() => {
    if (!abierto) return;
    const fuera = (e: PointerEvent) => {
      if (!raiz.current?.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("pointerdown", fuera);
    return () => document.removeEventListener("pointerdown", fuera);
  }, [abierto]);

  // Focus the current language when the menu opens.
  useEffect(() => {
    if (abierto) opciones.current[codigos.indexOf(idioma)]?.focus();
  }, [abierto, idioma]);

  const cerrar = () => {
    setAbierto(false);
    boton.current?.focus();
  };

  const elegir = (codigo: Idioma) => {
    cambiarIdioma(codigo);
    cerrar();
  };

  const teclas = (e: KeyboardEvent) => {
    if (e.key === "Escape") return cerrar();
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const actual = opciones.current.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const paso = e.key === "ArrowDown" ? 1 : -1;
    const siguiente = (actual + paso + codigos.length) % codigos.length;
    opciones.current[siguiente]?.focus();
  };

  const { Bandera, corto } = idiomas[idioma];

  return (
    <div ref={raiz} className="relative" onKeyDown={abierto ? teclas : undefined}>
      <button
        ref={boton}
        type="button"
        aria-haspopup="menu"
        aria-expanded={abierto}
        aria-controls={menuId}
        aria-label={`${t.idioma.label}: ${idiomas[idioma].nombre}`}
        onClick={() => setAbierto((v) => !v)}
        className="flex items-center gap-2 rounded-full px-2 py-2 text-[13px] sm:px-2.5 font-semibold hover:bg-black/5"
      >
        <Bandera className={banderaClase} />
        <span className="hidden whitespace-nowrap sm:inline">{corto}</span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className={`size-2.5 text-humo transition-transform ${abierto ? "rotate-180" : ""}`}
        >
          <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      {abierto && (
        <ul
          id={menuId}
          role="menu"
          aria-label={t.idioma.label}
          className="absolute right-0 z-20 mt-2 min-w-44 rounded-xl border border-borde bg-white p-1.5 shadow-lg"
        >
          {codigos.map((codigo, i) => {
            const { Bandera: B, nombre, htmlLang } = idiomas[codigo];
            const activo = codigo === idioma;
            return (
              <li key={codigo} role="none">
                <button
                  ref={(el) => {
                    opciones.current[i] = el;
                  }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={activo}
                  lang={htmlLang}
                  onClick={() => elegir(codigo)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-lavanda focus-visible:bg-lavanda ${
                    activo ? "font-semibold" : ""
                  }`}
                >
                  <B className={banderaClase} />
                  <span className="flex-1">{nombre}</span>
                  {activo && (
                    <svg viewBox="0 0 16 16" aria-hidden className="size-3.5 text-fucsia">
                      <path
                        d="m3 8.5 3 3 7-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
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
