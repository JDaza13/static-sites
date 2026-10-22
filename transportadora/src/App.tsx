import { contacto, marca, pasos, servicios } from "./content";
import { IconBus, IconHeli, IconTruck, IconWhatsApp } from "./icons";

const paradas = [
  {
    Icono: IconBus,
    titulo: "Colegios",
    texto: "Rutas diarias puerta a puerta",
    tramo: "tierra",
  },
  {
    Icono: IconTruck,
    titulo: "Campos petroleros",
    texto: "Cambios de turno y traslado de personal",
    tramo: "aire",
  },
  {
    Icono: IconHeli,
    titulo: "Donde no llega la carretera",
    texto: "Helicóptero o avioneta bajo solicitud especial",
    tramo: null,
  },
] as const;

function BotonCotizar({
  className = "",
  compacto = false,
}: {
  className?: string;
  compacto?: boolean;
}) {
  return (
    <a
      href={contacto.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-senal font-semibold whitespace-nowrap text-asfalto transition-colors hover:bg-[#ffc61a] ${
        compacto ? "px-4 py-2.5 text-[13px]" : "px-5 py-3 text-sm"
      } ${className}`}
    >
      <IconWhatsApp className="size-4" />
      {compacto ? "Cotizar" : "Pedir cotización"}
    </a>
  );
}

function Encabezado() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#inicio" className="flex items-center gap-2.5">
        <span aria-hidden className="size-3 rounded-sm bg-senal" />
        <span className="font-ancha text-[15px] font-bold tracking-tight whitespace-nowrap">
          {marca}
        </span>
      </a>
      <nav aria-label="Principal" className="flex items-center gap-7 text-sm">
        <a href="#servicios" className="hidden text-gris hover:text-asfalto md:inline">
          Servicios
        </a>
        <a href="#como-trabajamos" className="hidden text-gris hover:text-asfalto md:inline">
          Cómo trabajamos
        </a>
        <a href="#contacto" className="hidden text-gris hover:text-asfalto md:inline">
          Contacto
        </a>
        <BotonCotizar compacto />
      </nav>
    </header>
  );
}

function Ruta() {
  return (
    <ol className="grid gap-9 md:grid-cols-3 md:gap-8">
      {paradas.map(({ Icono, titulo, texto, tramo }, i) => (
        <li key={titulo} className="relative pl-10 md:pl-0 md:pt-10">
          {/* Stop marker */}
          <span
            aria-hidden
            className="absolute top-0.5 left-0 z-10 grid size-6 place-items-center rounded-full bg-senal ring-4 ring-niebla md:top-0"
          >
            <span className="size-2 rounded-full bg-asfalto" />
          </span>
          {/* Leg to the next stop: solid on land, dashed in the air */}
          {tramo && (
            <span
              aria-hidden
              style={{ animationDelay: `${150 + i * 450}ms` }}
              className={`absolute top-6 -bottom-9 left-[11px] origin-top border-l-2 border-senal motion-safe:animate-trazo md:top-[11px] md:-right-8 md:bottom-auto md:left-6 md:origin-left md:border-t-2 md:border-l-0 ${
                tramo === "aire" ? "border-dashed" : ""
              }`}
            />
          )}
          <Icono className="mb-3 size-7 text-llano" />
          <p className="font-ancha text-lg font-bold leading-tight">{titulo}</p>
          <p className="mt-1 text-[15px] text-gris">{texto}</p>
        </li>
      ))}
    </ol>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto max-w-6xl px-5 pt-14 pb-20 sm:px-8 md:pt-24 md:pb-28"
    >
      <h1 className="font-ancha max-w-[17ch] text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[4.25rem]">
        Transporte por tierra para colegios y petroleras. Por aire, cuando hace
        falta.
      </h1>
      <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-gris">
        Desde Tauramena, Casanare: rutas escolares, traslado privado de
        personal a campo y vuelos en helicóptero o avioneta bajo solicitud
        especial, con un solo equipo coordinando todo el trayecto.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
        <BotonCotizar />
        <a
          href="#servicios"
          className="text-sm font-semibold underline decoration-linea decoration-2 underline-offset-[6px] hover:decoration-asfalto"
        >
          Ver servicios
        </a>
      </div>
      <div className="mt-16 md:mt-24">
        <Ruta />
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="font-ancha max-w-[20ch] text-3xl font-bold tracking-tight sm:text-4xl">
          Tres servicios, una sola coordinación
        </h2>
        <div className="mt-12 divide-y divide-linea border-y border-linea">
          {servicios.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="grid gap-6 py-10 md:grid-cols-[1fr_1.1fr] md:gap-16 md:py-14"
            >
              <div>
                <h3 className="font-ancha text-2xl font-bold tracking-tight">
                  {s.titulo}
                </h3>
                <p className="mt-3 max-w-[46ch] leading-relaxed text-gris">
                  {s.resumen}
                </p>
                {s.nota && (
                  <p className="mt-4 text-sm text-gris italic">{s.nota}</p>
                )}
              </div>
              <ul className="space-y-3 self-start">
                {s.puntos.map((p) => (
                  <li key={p} className="flex gap-3 leading-snug">
                    <span
                      aria-hidden
                      className="mt-[7px] h-0.5 w-3 shrink-0 bg-senal"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoTrabajamos() {
  return (
    <section
      id="como-trabajamos"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <h2 className="font-ancha text-3xl font-bold tracking-tight sm:text-4xl">
        Cómo contratar
      </h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {pasos.map((p, i) => (
          <li key={p.titulo} className="border-t-2 border-asfalto pt-5">
            <span className="font-ancha text-sm font-bold text-gris">
              Paso {i + 1}
            </span>
            <h3 className="mt-2 text-xl font-semibold">{p.titulo}</h3>
            <p className="mt-2 max-w-[38ch] leading-relaxed text-gris">
              {p.texto}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contacto() {
  const enlace =
    "block py-1 text-lg font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-[6px] hover:decoration-senal";
  return (
    <section id="contacto" className="bg-llano text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div>
          <h2 className="font-ancha max-w-[16ch] text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Tiene una ruta en mente?
          </h2>
          <p className="mt-5 max-w-[44ch] leading-relaxed text-white/75">
            Escríbanos con el origen, el destino y la cantidad de pasajeros. Para
            vuelos en helicóptero o avioneta, incluya la fecha tentativa.
          </p>
          <BotonCotizar className="mt-8" />
        </div>
        <dl className="grid content-start gap-7 md:pt-2">
          <div>
            <dt className="text-sm text-white/60">Teléfono y WhatsApp</dt>
            <dd>
              <a
                href={contacto.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={enlace}
              >
                {contacto.telefono}
              </a>
            </dd>
          </div>
          {contacto.email && (
            <div>
              <dt className="text-sm text-white/60">Correo</dt>
              <dd>
                <a href={`mailto:${contacto.email}`} className={enlace}>
                  {contacto.email}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm text-white/60">Oficina</dt>
            <dd className="py-1 text-lg font-semibold">{contacto.ciudad}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

// Flag of Casanare: red upper-left, green lower-right, eight-pointed yellow star.
function BanderaCasanare({ className }: { className?: string }) {
  const cx = 450;
  const cy = 300;
  const puntas = Array.from({ length: 16 }, (_, i) => {
    const r = i % 2 === 0 ? 120 : 52;
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return (
    <svg
      viewBox="0 0 900 600"
      className={className}
      role="img"
      aria-label="Bandera del Casanare"
    >
      <polygon points="0,0 900,0 0,600" fill="#D91218" />
      <polygon points="900,0 900,600 0,600" fill="#088B30" />
      <polygon points={puntas} fill="#FDDB00" />
    </svg>
  );
}

function Pie() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-gris sm:px-8">
      <span>
        © {new Date().getFullYear()} {marca}
      </span>
      <span className="flex items-center gap-3">
        Tauramena, Casanare
        <BanderaCasanare className="h-8 w-12 rounded-[3px] shadow-[0_0_0_1px_rgb(0_0_0/0.08)]" />
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Hero />
        <Servicios />
        <ComoTrabajamos />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
