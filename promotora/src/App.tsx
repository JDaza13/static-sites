import { contacto, marca, tipos } from "./config";
import { useI18n } from "./i18n/context";
import { LanguagePicker } from "./LanguagePicker";
import { Pedido } from "./Pedido";

function Encabezado() {
  const { t } = useI18n();
  const enlace = "hidden text-humo hover:text-tinta lg:inline";
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-5 sm:px-8">
      <a href="#planear" className="flex items-center gap-2">
        <span aria-hidden className="size-2.5 rounded-full bg-fucsia" />
        <span className="text-lg font-extrabold tracking-tight whitespace-nowrap">
          {marca}
        </span>
      </a>
      <div className="flex items-center gap-1 sm:gap-4">
        <nav aria-label={t.nav.label} className="flex items-center gap-7 text-sm lg:mr-3">
          <a href="#eventos" className={enlace}>
            {t.nav.eventos}
          </a>
          <a href="#como-funciona" className={enlace}>
            {t.nav.comoFunciona}
          </a>
          <a href="#contacto" className={enlace}>
            {t.nav.contacto}
          </a>
        </nav>
        <LanguagePicker />
        <a
          href="#planear"
          className="hidden rounded-full bg-fucsia px-4 py-2.5 text-[13px] font-bold whitespace-nowrap text-white hover:bg-[#b81d5e] sm:inline-flex"
        >
          {t.cta.planear}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="planear" className="scroll-mt-4 bg-noche">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 md:pt-20 md:pb-24">
        <h1 className="text-lg font-semibold text-rosa">{t.hero.titulo}</h1>
        <p className="mt-2 max-w-[58ch] text-white/70">{t.hero.texto}</p>
        <div className="mt-10 md:mt-14">
          <Pedido />
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  const { t } = useI18n();
  return (
    <section id="eventos" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {t.eventos.titulo}
      </h2>
      <p className="mt-3 text-humo">{t.eventos.texto}</p>
      <dl className="mt-12 grid gap-x-12 md:grid-cols-2">
        {tipos.map((id) => (
          <div key={id} className="border-t border-borde py-6">
            <dt className="text-xl font-bold">{t.tipos[id].nombre}</dt>
            <dd className="mt-1.5 max-w-[48ch] leading-relaxed text-humo">
              {t.tipos[id].descripcion}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ComoFunciona() {
  const { t } = useI18n();
  return (
    <section id="como-funciona" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.pasos.titulo}
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
          {t.pasos.items.map((paso, i) => (
            <li key={i} className="border-l-[3px] border-fucsia pl-5">
              <span className="text-sm font-semibold text-fucsia">
                {t.pasos.etiqueta(i + 1)}
              </span>
              <h3 className="mt-1 text-xl font-bold">{paso.titulo}</h3>
              <p className="mt-2 max-w-[36ch] leading-relaxed text-humo">
                {paso.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contacto() {
  const { t } = useI18n();
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.contacto.titulo}
          </h2>
          <p className="mt-4 max-w-[46ch] leading-relaxed text-humo">
            {t.contacto.texto}
          </p>
        </div>
        <div>
          <p className="text-sm text-humo">{t.contacto.whatsapp}</p>
          <a
            href={`https://wa.me/${contacto.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-2xl font-bold underline decoration-fucsia decoration-[3px] underline-offset-[6px] hover:text-fucsia"
          >
            {contacto.telefono}
          </a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-borde">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 py-8 text-sm text-humo sm:px-8">
        <span>
          © {new Date().getFullYear()} {marca}
        </span>
        <span>{t.pie.lema}</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Hero />
        <Eventos />
        <ComoFunciona />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
