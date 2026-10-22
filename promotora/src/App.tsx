import { brand, contact, eventTypeIds, whatsappLink } from "./config";
import { useI18n } from "./i18n/context";
import { LanguagePicker } from "./LanguagePicker";
import { RequestForm } from "./RequestForm";

function Header() {
  const { t } = useI18n();
  const link = "hidden text-muted hover:text-ink lg:inline";
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-5 sm:px-8">
      <a href="#plan" className="flex items-center gap-2">
        <span aria-hidden className="size-2.5 rounded-full bg-accent" />
        <span className="text-lg font-extrabold tracking-tight whitespace-nowrap">
          {brand}
        </span>
      </a>
      <div className="flex items-center gap-1 sm:gap-4">
        <nav aria-label={t.nav.label} className="flex items-center gap-7 text-sm lg:mr-3">
          <a href="#events" className={link}>
            {t.nav.events}
          </a>
          <a href="#how-it-works" className={link}>
            {t.nav.howItWorks}
          </a>
          <a href="#contact" className={link}>
            {t.nav.contact}
          </a>
        </nav>
        <LanguagePicker />
        <a
          href="#plan"
          className="hidden rounded-full bg-accent px-4 py-2.5 text-[13px] font-bold whitespace-nowrap text-white hover:bg-[#b81d5e] sm:inline-flex"
        >
          {t.cta.plan}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="plan" className="scroll-mt-4 bg-deep">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 md:pt-20 md:pb-24">
        <h1 className="text-lg font-semibold text-accent-soft">{t.hero.title}</h1>
        <p className="mt-2 max-w-[58ch] text-white/70">{t.hero.text}</p>
        <div className="mt-10 md:mt-14">
          <RequestForm />
        </div>
      </div>
    </section>
  );
}

function Events() {
  const { t } = useI18n();
  return (
    <section id="events" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {t.events.title}
      </h2>
      <p className="mt-3 text-muted">{t.events.text}</p>
      <dl className="mt-12 grid gap-x-12 md:grid-cols-2">
        {eventTypeIds.map((id) => (
          <div key={id} className="border-t border-line py-6">
            <dt className="text-xl font-bold">{t.eventTypes[id].name}</dt>
            <dd className="mt-1.5 max-w-[48ch] leading-relaxed text-muted">
              {t.eventTypes[id].description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.steps.title}
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
          {t.steps.items.map((step, i) => (
            <li key={i} className="border-l-[3px] border-accent pl-5">
              <span className="text-sm font-semibold text-accent">
                {t.steps.label(i + 1)}
              </span>
              <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 max-w-[36ch] leading-relaxed text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-[46ch] leading-relaxed text-muted">
            {t.contact.text}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted">{t.contact.whatsapp}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-2xl font-bold underline decoration-accent decoration-[3px] underline-offset-[6px] hover:text-accent"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 py-8 text-sm text-muted sm:px-8">
        <span>
          © {new Date().getFullYear()} {brand}
        </span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Events />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
