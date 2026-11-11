import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  newLightWhatsAppHref,
  trackNewLightClick,
  useNewLightPhase,
} from "@/components/NewLightShowcase";
import { NEW_LIGHT, NEW_LIGHT_COPY, newLightPrice } from "@/data/newLight";

const SITE = "https://sabinebistro.com";
const IMG_MAIN = "/new-light/new-light-sabine-31-12-26";
const IMG_INCLUYE = "/new-light/new-light-sabine-que-incluye";
const OG_IMAGE = `${SITE}/new-light/new-light-og.jpg`;
const EV = "/new-light/eventos";
const HERO_BG = `${EV}/evento-sabine-cena-banda-en-vivo`;

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Carrera 11 #39-21, C.C. La Serrezuela",
  addressLocality: "Cartagena de Indias",
  addressRegion: "Bolívar",
  postalCode: "130001",
  addressCountry: "CO",
};

const PAGE = {
  es: {
    title: "Fin de Año en Cartagena 2026 · Cena de San Silvestre | NEW LIGHT Sabine",
    description:
      "Fin de año en Cartagena en el Centro Histórico: cena de San Silvestre por tiempos, orquesta en vivo, DJ y espumoso a medianoche en Sabine, La Serrezuela. Reserva por WhatsApp.",
    eventName: "NEW LIGHT · Cena de San Silvestre y fin de año en Cartagena 2026",
    eyebrow: "Jueves 31 de diciembre de 2026 · 7:30 p. m. · Centro Histórico de Cartagena",
    h1Small: "Fin de año en Cartagena 2026",
    h1Sub: "New Year's Eve by Sabine · Cena de San Silvestre",
    tagline: "Una noche para celebrar un nuevo comienzo",
    orWrite: "o escríbenos al",
    introTitle: "Recibe el año nuevo en Cartagena en Sabine",
    intro: [
      "NEW LIGHT es la cena de San Silvestre de Sabine Bistro & Lounge para despedir el 2026 y recibir el 2027 en Cartagena. Es el jueves 31 de diciembre de 2026, de 7:30 p. m. a 2:00 a. m., en la Terraza del Ruedo del C.C. La Serrezuela, en el Centro Histórico.",
      "La noche empieza con una cena de fin de año por tiempos, con charcutería y quesos para la mesa, y sigue como fiesta de fin de año con orquesta en vivo, DJ y show de mulatas. A medianoche, una copa de espumoso para brindar por el año nuevo.",
    ],
    includesTitle: "Qué incluye la cena de fin de año",
    includesIntro: "Todo lo que necesitas para despedir el 2026 en la mesa y en la pista.",
    priceTitle: "Precio de la cena de San Silvestre 2026",
    priceIntro: "El valor es por persona. Aforo limitado.",
    launchLabel: "Precio de lanzamiento",
    launchWhen: "Hasta el 19 de noviembre",
    regularLabel: "Precio regular",
    regularWhen: "A partir del 20 de noviembre",
    current: "Vigente",
    whereTitle: "Dónde es: Centro Histórico de Cartagena",
    wherePlace: "Terraza del Ruedo · Sabine Bistro & Lounge",
    whereAddress: "C.C. La Serrezuela, Carrera 11 #39-21, Centro Histórico de Cartagena",
    directions: "Cómo llegar",
    galleryTitle: "Eventos anteriores en Sabine",
    galleryIntro: "Así se han vivido otras noches en Sabine y La Serrezuela.",
    gallery: [
      ["evento-sabine-cena-banda-en-vivo", "Cena con banda en vivo en Sabine, La Serrezuela"],
      ["evento-sabine-fiesta-salon", "Fiesta en el salón de Sabine Bistro & Lounge"],
      ["evento-sabine-celebracion", "Celebración con brindis en Sabine"],
      ["evento-sabine-terraza", "Evento en la terraza de Sabine, La Serrezuela"],
      ["sabine-bar-lounge", "Bar y lounge de Sabine"],
      ["sabine-la-serrezuela-entrada", "Entrada de Sabine en La Serrezuela, Cartagena"],
    ] as [string, string][],
    faqTitle: "Preguntas frecuentes sobre el fin de año en Sabine",
    faq: [
      ["¿Dónde recibir el año nuevo en Cartagena?", "En Sabine Bistro & Lounge, en el Centro Histórico, con NEW LIGHT: cena de San Silvestre por tiempos, orquesta en vivo, DJ y copa de espumoso a medianoche en la Terraza del Ruedo del C.C. La Serrezuela."],
      ["¿Cuándo es la cena de San Silvestre 2026?", "El jueves 31 de diciembre de 2026, de 7:30 p. m. a 2:00 a. m., para recibir el 2027."],
      ["¿Dónde es?", "En la Terraza del Ruedo de Sabine Bistro & Lounge, en el C.C. La Serrezuela, Carrera 11 #39-21, Centro Histórico de Cartagena."],
      ["¿Cuánto cuesta la cena de fin de año?", "$695.000 por persona hasta el 19 de noviembre. Desde el 20 de noviembre, $745.000 por persona."],
      ["¿Qué incluye?", "Cena gastronómica por tiempos, charcutería y quesos para la mesa, orquesta en vivo, DJ, show de mulatas, cotillones, globo o ritual de deseos y una copa de espumoso a medianoche."],
      ["¿Es una cena o una fiesta de fin de año?", "Las dos: la noche empieza con la cena por tiempos y sigue con orquesta en vivo y DJ hasta las 2:00 a. m."],
      ["¿Cómo reservo?", `Por WhatsApp al ${NEW_LIGHT.whatsappDisplay}. El aforo es limitado.`],
    ] as [string, string][],
    finalTitle: "El nuevo año comienza aquí",
    backHome: "Volver al inicio",
  },
  en: {
    title: "New Year's Eve in Cartagena 2026 · NYE Dinner & Party | NEW LIGHT Sabine",
    description:
      "New Year's Eve in Cartagena's Old Town: multi-course dinner, live orchestra, DJ and a midnight sparkling wine toast at Sabine, La Serrezuela. Book on WhatsApp.",
    eventName: "NEW LIGHT · New Year's Eve dinner and party in Cartagena 2026",
    eyebrow: "Thursday, December 31, 2026 · 7:30 p.m. · Cartagena Old Town",
    h1Small: "New Year's Eve in Cartagena 2026",
    h1Sub: "New Year's Eve by Sabine · Dinner & Party",
    tagline: "A night to celebrate a new beginning",
    orWrite: "or message us at",
    introTitle: "Ring in the new year in Cartagena at Sabine",
    intro: [
      "NEW LIGHT is Sabine Bistro & Lounge's New Year's Eve dinner and party in Cartagena. It takes place on Thursday, December 31, 2026, from 7:30 p.m. to 2:00 a.m., at Terraza del Ruedo in La Serrezuela, in the heart of the Old Town.",
      "The night starts with a multi-course dinner, with charcuterie and cheese for the table, and turns into a New Year's Eve party with a live orchestra, DJ and a mulatas dance show. At midnight, a glass of sparkling wine to toast the new year.",
    ],
    includesTitle: "What's included in the NYE dinner",
    includesIntro: "Everything you need to say goodbye to 2026, at the table and on the dance floor.",
    priceTitle: "New Year's Eve 2026 price",
    priceIntro: "Prices are per person. Limited capacity.",
    launchLabel: "Launch price",
    launchWhen: "Until November 19",
    regularLabel: "Regular price",
    regularWhen: "From November 20",
    current: "Current",
    whereTitle: "Where: Cartagena Old Town",
    wherePlace: "Terraza del Ruedo · Sabine Bistro & Lounge",
    whereAddress: "La Serrezuela mall, Carrera 11 #39-21, Cartagena Old Town",
    directions: "Get directions",
    galleryTitle: "Past events at Sabine",
    galleryIntro: "A look at other nights at Sabine and La Serrezuela.",
    gallery: [
      ["evento-sabine-cena-banda-en-vivo", "Dinner with a live band at Sabine, La Serrezuela"],
      ["evento-sabine-fiesta-salon", "Party in the Sabine Bistro & Lounge dining room"],
      ["evento-sabine-celebracion", "Celebration and toast at Sabine"],
      ["evento-sabine-terraza", "Event on the Sabine terrace, La Serrezuela"],
      ["sabine-bar-lounge", "Sabine bar and lounge"],
      ["sabine-la-serrezuela-entrada", "Sabine entrance at La Serrezuela, Cartagena"],
    ] as [string, string][],
    faqTitle: "New Year's Eve at Sabine: frequently asked questions",
    faq: [
      ["Where to spend New Year's Eve in Cartagena?", "At Sabine Bistro & Lounge in the Old Town, with NEW LIGHT: a multi-course dinner, live orchestra, DJ and a midnight sparkling wine toast at Terraza del Ruedo, La Serrezuela."],
      ["When is NEW LIGHT?", "On Thursday, December 31, 2026, from 7:30 p.m. to 2:00 a.m., to welcome 2027."],
      ["Where is it?", "At Terraza del Ruedo, Sabine Bistro & Lounge, La Serrezuela mall, Carrera 11 #39-21, Cartagena Old Town."],
      ["How much is the New Year's Eve dinner?", "COP 695,000 per person until November 19. From November 20, COP 745,000 per person."],
      ["Is it a dinner or a party?", "Both: the night starts with a multi-course dinner and continues with a live orchestra and DJ until 2:00 a.m."],
      ["What's included?", "A multi-course gastronomic dinner, charcuterie and cheese for the table, live orchestra, DJ, mulatas dance show, party favors, a wish balloon ritual and a glass of sparkling wine at midnight."],
      ["How do I book?", `On WhatsApp at ${NEW_LIGHT.whatsappDisplay}. Capacity is limited.`],
    ] as [string, string][],
    finalTitle: "The new year starts here",
    backHome: "Back to home",
  },
};

const MAPS = "https://www.google.com/maps/search/?api=1&query=Sabine+Bistro+%26+Lounge+La+Serrezuela+Cartagena";

const Picture = ({ base, alt, className = "" }: { base: string; alt: string; className?: string }) => (
  <picture>
    <source srcSet={`${base}.webp`} type="image/webp" />
    <img src={`${base}.jpg`} alt={alt} width={900} height={1200} loading="lazy" className={className} />
  </picture>
);

const NewLight = () => {
  const { lang } = useLanguage();
  const p = PAGE[lang];
  const c = NEW_LIGHT_COPY[lang];
  const phaseRaw = useNewLightPhase();
  const phase = phaseRaw === "over" ? "regular" : phaseRaw;
  const wa = (loc: string) => newLightWhatsAppHref(lang, loc);
  const ctaLabel = NEW_LIGHT.soldOut ? c.ctaSoldOut : c.cta;
  const canonical = SITE + NEW_LIGHT.rutas[lang];

  const offerBase = {
    "@type": "Offer",
    priceCurrency: "COP",
    url: canonical,
    availability: NEW_LIGHT.soldOut ? "https://schema.org/SoldOut" : "https://schema.org/LimitedAvailability",
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: p.eventName,
    description: p.description,
    url: canonical,
    inLanguage: lang,
    startDate: "2026-12-31T19:30:00-05:00",
    endDate: "2027-01-01T02:00:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: ["1x1", "4x3", "16x9"].map((r) => `${SITE}${EV}/new-light-evento-${r}.jpg`).concat(`${SITE}${IMG_MAIN}.jpg`),
    location: {
      "@type": "Place",
      name: "Terraza del Ruedo · Sabine Bistro & Lounge, C.C. La Serrezuela",
      address: ADDRESS,
      geo: { "@type": "GeoCoordinates", latitude: 10.423, longitude: -75.551 },
    },
    performer: (lang === "en"
      ? ["Live orchestra", "DJ", "Mulatas dance show"]
      : ["Orquesta en vivo", "DJ", "Show de mulatas"]
    ).map((name) => ({ "@type": "PerformingGroup", name })),
    organizer: {
      "@type": "Restaurant",
      name: "Sabine Bistro & Lounge",
      url: `${SITE}/`,
      telephone: "+57 318 353 4907",
      address: ADDRESS,
    },
    offers: [
      { ...offerBase, name: p.launchLabel, price: 695000, validFrom: "2026-10-30T00:00:00-05:00", validThrough: "2026-11-19T23:59:59-05:00" },
      { ...offerBase, name: p.regularLabel, price: 745000, validFrom: "2026-11-20T00:00:00-05:00", validThrough: "2026-12-31T23:59:59-05:00" },
    ],
  };

  const ctaClass =
    "inline-block font-body text-[10px] tracking-[0.35em] uppercase px-9 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300";

  return (
    <>
      <Seo
        lang={lang}
        title={p.title}
        description={p.description}
        canonical={canonical}
        ogImage={OG_IMAGE}
        ogType="website"
        jsonLd={jsonLd}
        alternates={{ es: SITE + NEW_LIGHT.rutas.es, en: SITE + NEW_LIGHT.rutas.en }}
      />
      <main data-nl-phase={phase}>
        <Navbar ctaVariant="newlight" />

        {/* Portada */}
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-5 sm:px-6 overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <picture>
              <source srcSet={`${HERO_BG}.webp`} type="image/webp" />
              <img src={`${HERO_BG}.jpg`} alt="" className="w-full h-full object-cover" />
            </picture>
            <div className="absolute inset-0 bg-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
          </div>
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center md:text-left"
            >
              <p className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-primary mb-5">
                {p.eyebrow}
              </p>
              <h1 className="mb-5">
                <span className="block font-elegant text-xl sm:text-2xl text-foreground/90 mb-3">{p.h1Small}</span>
                <span className="block font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-[0.14em] text-foreground leading-none">
                  NEW LIGHT
                </span>
                <span className="block font-elegant italic text-lg sm:text-xl text-foreground/75 mt-3">{p.h1Sub}</span>
              </h1>
              <p className="font-display italic text-2xl sm:text-3xl text-foreground/90 leading-snug mb-5">
                {p.tagline}
              </p>
              <p className="font-elegant text-base sm:text-lg text-foreground/75 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                {c.highlights}
              </p>

              <div className="mb-8">
                <p className="font-display text-3xl sm:text-4xl text-primary leading-tight">
                  {newLightPrice(phase, lang)}{" "}
                  <span className="font-elegant italic text-base text-foreground/70">{c.perPerson}</span>
                </p>
                <p className="font-body text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-foreground/60 mt-2">
                  {phase === "launch" ? c.launchCondition : c.regularCondition}
                </p>
                {phase === "launch" && <p className="font-elegant italic text-sm text-foreground/50 mt-1">{c.launchNext}</p>}
              </div>

              <a href={wa("page_hero")} target="_blank" rel="noopener noreferrer" onClick={(e) => trackNewLightClick("page_hero", phase, e, lang)} className={ctaClass}>
                {ctaLabel}
              </a>
              <p className="font-elegant italic text-sm text-foreground/55 mt-4">
                {p.orWrite}{" "}
                <a href={wa("page_hero_numero")} target="_blank" rel="noopener noreferrer" onClick={(e) => trackNewLightClick("page_hero_numero", phase, e, lang)} className="text-primary hover:underline">
                  {NEW_LIGHT.whatsappDisplay}
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-sm md:max-w-md mx-auto w-full"
            >
              <div className="border border-primary/40 p-2">
                <picture>
                  <source srcSet={`${IMG_MAIN}.webp`} type="image/webp" />
                  <img src={`${IMG_MAIN}.jpg`} alt="NEW LIGHT · New Year's Eve by Sabine · Terraza del Ruedo, Cartagena · 31.12.26" width={900} height={1200} className="w-full h-auto" />
                </picture>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introducción (texto para buscadores y asistentes de IA) */}
        <section className="py-14 md:py-20 px-5 sm:px-6 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-6">{p.introTitle}</h2>
            {p.intro.map((t) => (
              <p key={t} className="font-elegant text-lg text-foreground/80 leading-relaxed mb-4">{t}</p>
            ))}
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-16 md:py-24 px-5 sm:px-6 border-t border-foreground/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1 max-w-sm md:max-w-md mx-auto w-full hidden md:block">
              <div className="border border-primary/40 p-2">
                <Picture base={IMG_INCLUYE} alt={p.tagline} className="w-full h-auto" />
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-3">{p.includesTitle}</h2>
              <p className="font-elegant italic text-base text-foreground/65 mb-8">{p.includesIntro}</p>
              <ul className="space-y-3 inline-block text-left">
                {c.includes.map((item) => (
                  <li key={item} className="font-elegant text-lg text-foreground/85 flex gap-3">
                    <span className="text-primary">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Precio */}
        <section className="py-16 md:py-24 px-5 sm:px-6 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-3">{p.priceTitle}</h2>
            <p className="font-elegant italic text-base text-foreground/65 mb-10">{p.priceIntro}</p>
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {([
                ["launch", p.launchLabel, p.launchWhen],
                ["regular", p.regularLabel, p.regularWhen],
              ] as const).map(([ph, label, when]) => (
                <div
                  key={ph}
                  className={`border px-6 py-8 ${phase === ph ? "border-primary bg-primary/5" : "border-foreground/15 opacity-60"}`}
                >
                  {phase === ph && (
                    <p className="font-body text-[9px] tracking-[0.3em] uppercase text-primary mb-3">{p.current}</p>
                  )}
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-foreground/70 mb-3">{label}</p>
                  <p className="font-display text-3xl text-primary">{newLightPrice(ph, lang)}</p>
                  <p className="font-elegant italic text-sm text-foreground/60 mt-1">{c.perPerson}</p>
                  <p className="font-elegant text-sm text-foreground/70 mt-4">{when}</p>
                </div>
              ))}
            </div>
            <a href={wa("page_precio")} target="_blank" rel="noopener noreferrer" onClick={(e) => trackNewLightClick("page_precio", phase, e, lang)} className={ctaClass}>
              {ctaLabel}
            </a>
          </div>
        </section>

        {/* Eventos anteriores */}
        <section className="py-16 md:py-24 px-5 sm:px-6 border-t border-foreground/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-3 text-center">{p.galleryTitle}</h2>
            <p className="font-elegant italic text-base text-foreground/65 mb-10 text-center">{p.galleryIntro}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {p.gallery.map(([file, alt]) => (
                <figure key={file} className="overflow-hidden">
                  <Picture base={`${EV}/${file}`} alt={alt} className="w-full h-full object-cover aspect-[4/5] hover:scale-[1.03] transition-transform duration-700" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Dónde */}
        <section className="py-16 md:py-20 px-5 sm:px-6 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-5">{p.whereTitle}</h2>
            <p className="font-elegant text-lg text-foreground/85">{p.wherePlace}</p>
            <p className="font-elegant italic text-base text-foreground/65 mt-1 mb-6">{p.whereAddress}</p>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-[0.3em] uppercase px-7 py-3 border border-primary/60 text-foreground hover:text-primary hover:border-primary transition-colors">
              {p.directions}
            </a>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="py-16 md:py-20 px-5 sm:px-6 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-8 text-center">{p.faqTitle}</h2>
            <div className="divide-y divide-foreground/10">
              {p.faq.map(([q, a]) => (
                <div key={q} className="py-5">
                  <h3 className="font-elegant text-lg text-foreground mb-2">{q}</h3>
                  <p className="font-elegant text-base text-foreground/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section className="py-20 md:py-28 px-5 sm:px-6 border-t border-foreground/10 text-center">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-4">NEW LIGHT · 31.12.26</p>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-foreground mb-8">{p.finalTitle}</h2>
          <a href={wa("page_cierre")} target="_blank" rel="noopener noreferrer" onClick={(e) => trackNewLightClick("page_cierre", phase, e, lang)} className={ctaClass}>
            {ctaLabel}
          </a>
          <div className="mt-8">
            <Link to="/" className="font-elegant italic text-sm text-foreground/55 hover:text-primary underline underline-offset-4 decoration-primary/40">
              {p.backHome}
            </Link>
          </div>
        </section>

        <Footer hideFloatingButtons />
      </main>
    </>
  );
};

export default NewLight;
