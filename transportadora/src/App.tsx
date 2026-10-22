import { contacto, marca } from "./config";
import { FlagCasanare } from "./flags";
import { useI18n } from "./i18n/context";
import { IconBus, IconHeli, IconTruck, IconWhatsApp } from "./icons";
import { LanguagePicker } from "./LanguagePicker";

// Non-text parts of each list; text comes from the language files, same order.
const paradas = [
  { Icono: IconBus, tramo: "tierra" },
  { Icono: IconTruck, tramo: "aire" },
  { Icono: IconHeli, tramo: null },
] as const;

const idsServicios = ["escolar", "petrolero", "aereo"] as const;

function BotonCotizar({
  className = "",
  compacto = false,
}: {
  className?: string;
  compacto?: boolean;
}) {
  const { t } = useI18n();
  const href = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(t.cta.mensajeWhatsapp)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-senal font-semibold whitespace-nowrap text-asfalto transition-colors hover:bg-[#ffc61a] ${
        compacto ? "px-3 py-2.5 text-[13px] sm:px-4" : "px-5 py-3 text-sm"
      } ${className}`}
    >
      <IconWhatsApp
        className={`size-4 ${compacto ? "hidden min-[360px]:block" : ""}`}
      />
      {compacto ? t.cta.cotizar : t.cta.pedirCotizacion}
    </a>
  );
}

function Encabezado() {
  const { t } = useI18n();
  const enlace = "hidden text-gris hover:text-asfalto lg:inline";
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-5 sm:gap-3 sm:px-8">
      <a href="#inicio" className="flex items-center gap-2.5">
        <span aria-hidden className="size-3 rounded-sm bg-senal" />
        <span className="font-ancha text-[14px] font-bold tracking-tight whitespace-nowrap sm:text-[15px]">
          {marca}
        </span>
      </a>
      <div className="flex items-center gap-1 sm:gap-4">
        <nav aria-label={t.nav.label} className="flex items-center gap-7 text-sm lg:mr-3">
          <a href="#servicios" className={enlace}>
            {t.nav.servicios}
          </a>
          <a href="#como-trabajamos" className={enlace}>
            {t.nav.comoTrabajamos}
          </a>
          <a href="#contacto" className={enlace}>
            {t.nav.contacto}
          </a>
        </nav>
        <LanguagePicker />
        <BotonCotizar compacto />
      </div>
    </header>
  );
}

function Ruta() {
  const { t } = useI18n();
  return (
    <ol className="grid gap-9 md:grid-cols-3 md:gap-8">
      {paradas.map(({ Icono, tramo }, i) => (
        <li key={i} className="relative pl-10 md:pl-0 md:pt-10">
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
          <p className="font-ancha text-lg font-bold leading-tight">
            {t.ruta[i].titulo}
          </p>
          <p className="mt-1 text-[15px] text-gris">{t.ruta[i].texto}</p>
        </li>
      ))}
    </ol>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="inicio"
      className="mx-auto max-w-6xl px-5 pt-14 pb-20 sm:px-8 md:pt-24 md:pb-28"
    >
      <h1 className="font-ancha max-w-[17ch] text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[4.25rem] [&:lang(zh)]:max-w-[13em] [&:lang(zh)]:leading-[1.2] [&:lang(zh)]:lg:break-keep">
        {t.hero.titulo}
      </h1>
      <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-gris">
        {t.hero.texto}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
        <BotonCotizar />
        <a
          href="#servicios"
          className="text-sm font-semibold underline decoration-linea decoration-2 underline-offset-[6px] hover:decoration-asfalto"
        >
          {t.cta.verServicios}
        </a>
      </div>
      <div className="mt-16 md:mt-24">
        <Ruta />
      </div>
    </section>
  );
}

function Servicios() {
  const { t } = useI18n();
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="font-ancha max-w-[20ch] text-3xl font-bold tracking-tight sm:text-4xl [&:lang(zh)]:max-w-none">
          {t.servicios.titulo}
        </h2>
        <div className="mt-12 divide-y divide-linea border-y border-linea">
          {t.servicios.items.map((s, i) => (
            <article
              key={idsServicios[i]}
              id={idsServicios[i]}
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
  const { t } = useI18n();
  return (
    <section
      id="como-trabajamos"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <h2 className="font-ancha text-3xl font-bold tracking-tight sm:text-4xl">
        {t.pasos.titulo}
      </h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {t.pasos.items.map((p, i) => (
          <li key={i} className="border-t-2 border-asfalto pt-5">
            <span className="font-ancha text-sm font-bold text-gris">
              {t.pasos.etiqueta(i + 1)}
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
  const { t } = useI18n();
  const enlace =
    "block py-1 text-lg font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-[6px] hover:decoration-senal";
  const whatsapp = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(t.cta.mensajeWhatsapp)}`;
  return (
    <section id="contacto" className="bg-llano text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div>
          <h2 className="font-ancha max-w-[16ch] text-3xl font-bold tracking-tight sm:text-4xl [&:lang(zh)]:max-w-none">
            {t.contacto.titulo}
          </h2>
          <p className="mt-5 max-w-[44ch] leading-relaxed text-white/75">
            {t.contacto.texto}
          </p>
          <BotonCotizar className="mt-8" />
        </div>
        <dl className="grid content-start gap-7 md:pt-2">
          <div>
            <dt className="text-sm text-white/60">{t.contacto.telefono}</dt>
            <dd>
              <a href={whatsapp} target="_blank" rel="noreferrer" className={enlace}>
                {contacto.telefono}
              </a>
            </dd>
          </div>
          {contacto.email && (
            <div>
              <dt className="text-sm text-white/60">{t.contacto.correo}</dt>
              <dd>
                <a href={`mailto:${contacto.email}`} className={enlace}>
                  {contacto.email}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm text-white/60">{t.contacto.oficina}</dt>
            <dd className="py-1 text-lg font-semibold">{t.ubicacion}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  const { t } = useI18n();
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-gris sm:px-8">
      <span>
        © {new Date().getFullYear()} {marca}
      </span>
      <span className="flex items-center gap-3">
        {t.ubicacion}
        <FlagCasanare
          title={t.pie.banderaCasanare}
          className="h-8 w-12 rounded-[3px] shadow-[0_0_0_1px_rgb(0_0_0/0.08)]"
        />
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
