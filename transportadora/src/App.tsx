import { brand, contact, whatsappLink } from "./config";
import { FlagCasanare } from "./flags";
import { useI18n } from "./i18n/context";
import { IconBus, IconHeli, IconTruck, IconWhatsApp } from "./icons";
import { LanguagePicker } from "./LanguagePicker";

// Non-text parts of each list; text comes from the language files, same order.
const stops = [
  { Icon: IconBus, leg: "land" },
  { Icon: IconTruck, leg: "air" },
  { Icon: IconHeli, leg: null },
] as const;

const serviceIds = ["school", "oil", "air"] as const;

function QuoteButton({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { t } = useI18n();
  return (
    <a
      href={whatsappLink(t.cta.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-accent font-semibold whitespace-nowrap text-ink transition-colors hover:bg-[#ffc61a] ${
        compact ? "px-3 py-2.5 text-[13px] sm:px-4" : "px-5 py-3 text-sm"
      } ${className}`}
    >
      <IconWhatsApp
        className={`size-4 ${compact ? "hidden min-[360px]:block" : ""}`}
      />
      {compact ? t.cta.quote : t.cta.requestQuote}
    </a>
  );
}

function Header() {
  const { t } = useI18n();
  const link = "hidden text-muted hover:text-ink lg:inline";
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-5 sm:gap-3 sm:px-8">
      <a href="#top" className="flex items-center gap-2.5">
        <span aria-hidden className="size-3 rounded-sm bg-accent" />
        <span className="font-wide text-[14px] font-bold tracking-tight whitespace-nowrap sm:text-[15px]">
          {brand}
        </span>
      </a>
      <div className="flex items-center gap-1 sm:gap-4">
        <nav aria-label={t.nav.label} className="flex items-center gap-7 text-sm lg:mr-3">
          <a href="#services" className={link}>
            {t.nav.services}
          </a>
          <a href="#how-it-works" className={link}>
            {t.nav.howItWorks}
          </a>
          <a href="#contact" className={link}>
            {t.nav.contact}
          </a>
        </nav>
        <LanguagePicker />
        <QuoteButton compact />
      </div>
    </header>
  );
}

function Route() {
  const { t } = useI18n();
  return (
    <ol className="grid gap-9 md:grid-cols-3 md:gap-8">
      {stops.map(({ Icon, leg }, i) => (
        <li key={i} className="relative pl-10 md:pl-0 md:pt-10">
          {/* Stop marker */}
          <span
            aria-hidden
            className="absolute top-0.5 left-0 z-10 grid size-6 place-items-center rounded-full bg-accent ring-4 ring-surface md:top-0"
          >
            <span className="size-2 rounded-full bg-ink" />
          </span>
          {/* Leg to the next stop: solid on land, dashed in the air */}
          {leg && (
            <span
              aria-hidden
              style={{ animationDelay: `${150 + i * 450}ms` }}
              className={`absolute top-6 -bottom-9 left-[11px] origin-top border-l-2 border-accent motion-safe:animate-draw md:top-[11px] md:-right-8 md:bottom-auto md:left-6 md:origin-left md:border-t-2 md:border-l-0 ${
                leg === "air" ? "border-dashed" : ""
              }`}
            />
          )}
          <Icon className="mb-3 size-7 text-deep" />
          <p className="font-wide text-lg leading-tight font-bold">
            {t.route[i].title}
          </p>
          <p className="mt-1 text-[15px] text-muted">{t.route[i].text}</p>
        </li>
      ))}
    </ol>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-5 pt-14 pb-20 sm:px-8 md:pt-24 md:pb-28"
    >
      <h1 className="font-wide max-w-[17ch] text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[4.25rem] [&:lang(zh)]:max-w-[13em] [&:lang(zh)]:leading-[1.2] [&:lang(zh)]:lg:break-keep">
        {t.hero.title}
      </h1>
      <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted">
        {t.hero.text}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
        <QuoteButton />
        <a
          href="#services"
          className="text-sm font-semibold underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink"
        >
          {t.cta.seeServices}
        </a>
      </div>
      <div className="mt-16 md:mt-24">
        <Route />
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="font-wide max-w-[20ch] text-3xl font-bold tracking-tight sm:text-4xl [&:lang(zh)]:max-w-none">
          {t.services.title}
        </h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {t.services.items.map((service, i) => (
            <article
              key={serviceIds[i]}
              id={serviceIds[i]}
              className="grid gap-6 py-10 md:grid-cols-[1fr_1.1fr] md:gap-16 md:py-14"
            >
              <div>
                <h3 className="font-wide text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[46ch] leading-relaxed text-muted">
                  {service.summary}
                </p>
                {service.note && (
                  <p className="mt-4 text-sm text-muted italic">{service.note}</p>
                )}
              </div>
              <ul className="space-y-3 self-start">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-snug">
                    <span
                      aria-hidden
                      className="mt-[7px] h-0.5 w-3 shrink-0 bg-accent"
                    />
                    {point}
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

function HowItWorks() {
  const { t } = useI18n();
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <h2 className="font-wide text-3xl font-bold tracking-tight sm:text-4xl">
        {t.steps.title}
      </h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {t.steps.items.map((step, i) => (
          <li key={i} className="border-t-2 border-ink pt-5">
            <span className="font-wide text-sm font-bold text-muted">
              {t.steps.label(i + 1)}
            </span>
            <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 max-w-[38ch] leading-relaxed text-muted">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  const link =
    "block py-1 text-lg font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-[6px] hover:decoration-accent";
  return (
    <section id="contact" className="bg-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div>
          <h2 className="font-wide max-w-[16ch] text-3xl font-bold tracking-tight sm:text-4xl [&:lang(zh)]:max-w-none">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-[44ch] leading-relaxed text-white/75">
            {t.contact.text}
          </p>
          <QuoteButton className="mt-8" />
        </div>
        <dl className="grid content-start gap-7 md:pt-2">
          <div>
            <dt className="text-sm text-white/60">{t.contact.phone}</dt>
            <dd>
              <a
                href={whatsappLink(t.cta.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                {contact.phone}
              </a>
            </dd>
          </div>
          {contact.email && (
            <div>
              <dt className="text-sm text-white/60">{t.contact.email}</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className={link}>
                  {contact.email}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm text-white/60">{t.contact.office}</dt>
            <dd className="py-1 text-lg font-semibold">{t.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:px-8">
      <span>
        © {new Date().getFullYear()} {brand}
      </span>
      <span className="flex items-center gap-3">
        {t.location}
        <FlagCasanare
          title={t.footer.casanareFlag}
          className="h-8 w-12 rounded-[3px] shadow-[0_0_0_1px_rgb(0_0_0/0.08)]"
        />
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
