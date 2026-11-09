import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { pushEvent, trackWhatsAppClick } from "@/lib/gtm";
import { getStoredAttributionParams } from "@/lib/attribution";
import {
  NEW_LIGHT,
  NEW_LIGHT_COPY,
  newLightNow,
  newLightPhase,
  newLightPrice,
} from "@/data/newLight";

type Phase = "launch" | "regular" | "over";

// En la hidratación se usa la fase que quedó en el HTML prerenderizado (evita el error de React);
// después del montaje se aplica la fecha real del visitante.
const initialPhase = (): Phase => {
  if (typeof document !== "undefined") {
    const el = document.querySelector("[data-nl-phase]");
    const v = el?.getAttribute("data-nl-phase");
    if (v === "launch" || v === "regular") return v;
  }
  return newLightPhase(Date.now());
};

export const useNewLightPhase = () => {
  const [phase, setPhase] = useState<Phase>(initialPhase);
  useEffect(() => {
    setPhase(newLightPhase(newLightNow()));
  }, []);
  return phase;
};

// Los enlaces wa.me no transmiten UTMs: el origen viaja como código en el mensaje
// prellenado (estándar RankNRoll) y quien atiende el 313 lo anota en cada chat.
// Formato: NL-<botón>-<origen>. Ej.: NL-INICIO-GADS, NL-EVENTO-META, NL-MENU-WEB.
const NL_BOTON: Record<string, string> = {
  hero: "INICIO",
  navbar: "MENU",
  page_hero: "EVENTO",
  page_hero_numero: "EVENTO",
  page_precio: "PRECIO",
  page_cierre: "CIERRE",
};

/** Origen de la visita según lo guardado por captureAttribution (90 días). */
export const newLightOrigin = (): string => {
  const a = getStoredAttributionParams();
  if (a.gclid || a.gbraid || a.wbraid) return "GADS";
  if (a.fbclid) return "META";
  const src = (a.utm_source || "").toLowerCase();
  if (!src) return "WEB";
  if (src.includes("google_business") || src === "gbp") return "GBP";
  if (src.includes("google")) return "GADS";
  if (src.includes("meta") || src.includes("facebook") || src === "fb") return "META";
  if (src.startsWith("ig") || src.includes("instagram")) return "IG";
  if (src.includes("mail")) return "EMAIL";
  return src.replace(/[^a-z0-9]/g, "").slice(0, 6).toUpperCase() || "WEB";
};

export const newLightCode = (location: string) =>
  `NL-${NL_BOTON[location] ?? location.toUpperCase()}-${newLightOrigin()}`;

/** Enlace de WhatsApp del evento, con el texto en el idioma de la página y el código de origen. */
export const newLightWhatsAppHref = (lang: "es" | "en", location = "hero") => {
  const c = NEW_LIGHT_COPY[lang];
  const text = NEW_LIGHT.soldOut ? c.whatsappTextSoldOut : c.whatsappText;
  const code = lang === "es" ? `(código ${newLightCode(location)})` : `(code ${newLightCode(location)})`;
  return `https://wa.me/${NEW_LIGHT.whatsappNumber}?text=${encodeURIComponent(`${text} ${code}`)}`;
};

/**
 * Clic en un botón de WhatsApp del evento: recalcula el enlace con el origen real
 * del visitante (en el HTML prerenderizado sale como WEB) y lo registra en GTM.
 */
export const trackNewLightClick = (
  location: string,
  phase: Phase,
  e?: { currentTarget: HTMLAnchorElement },
  lang?: "es" | "en",
) => {
  if (e && lang) e.currentTarget.href = newLightWhatsAppHref(lang, location);
  const code = newLightCode(location);
  trackWhatsAppClick(`newlight_${location}`);
  pushEvent("newlight_cta_click", {
    cta_location: location,
    phase,
    sold_out: NEW_LIGHT.soldOut,
    nl_code: code,
    nl_origin: newLightOrigin(),
  });
};

/** Vitrina de NEW LIGHT dentro del hero del inicio. Se oculta sola después del 31-dic. */
const NewLightShowcase = ({ phase }: { phase: "launch" | "regular" }) => {
  const { lang } = useLanguage();
  const c = NEW_LIGHT_COPY[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative mx-auto w-full max-w-md sm:max-w-lg border border-primary/50 bg-background/85 backdrop-blur-md px-6 py-7 sm:px-10 sm:py-9 mb-7 md:mb-9"
      aria-label="NEW LIGHT · New Year's Eve by Sabine"
      data-nl-phase={phase}
    >
      {/* esquinas doradas */}
      <span className="pointer-events-none absolute -top-px -left-px w-5 h-5 border-t border-l border-primary" />
      <span className="pointer-events-none absolute -top-px -right-px w-5 h-5 border-t border-r border-primary" />
      <span className="pointer-events-none absolute -bottom-px -left-px w-5 h-5 border-b border-l border-primary" />
      <span className="pointer-events-none absolute -bottom-px -right-px w-5 h-5 border-b border-r border-primary" />

      <p className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-primary mb-3">
        {c.eyebrow}
      </p>

      <p className="font-elegant italic text-lg sm:text-xl md:text-2xl text-foreground/90 mb-3">
        {c.invite}
      </p>

      <p className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.18em] text-foreground leading-none mb-2">
        NEW LIGHT
      </p>
      <p className="font-elegant italic text-sm sm:text-base text-foreground/75 mb-4">
        {c.subtitle}
      </p>

      <p className="font-elegant text-sm sm:text-base text-foreground/80 leading-relaxed mb-5 max-w-sm mx-auto">
        {c.highlights}
      </p>

      <div className="mb-5">
        <p className="font-display text-2xl sm:text-3xl text-primary leading-tight">
          {newLightPrice(phase, lang)}{" "}
          <span className="font-elegant italic text-sm sm:text-base text-foreground/70">
            {c.perPerson}
          </span>
        </p>
        <p className="font-body text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-foreground/60 mt-1.5">
          {phase === "launch" ? c.launchCondition : c.regularCondition}
        </p>
        {phase === "launch" && (
          <p className="font-elegant italic text-xs text-foreground/50 mt-1">{c.launchNext}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
        <a
          href={newLightWhatsAppHref(lang, "hero")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => trackNewLightClick("hero", phase, e, lang)}
          className="inline-block w-full sm:w-auto font-body text-[10px] tracking-[0.35em] uppercase px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
        >
          {NEW_LIGHT.soldOut ? c.ctaSoldOut : c.cta}
        </a>
        <Link
          to={NEW_LIGHT.rutas[lang]}
          onClick={() => pushEvent("newlight_details_open", { cta_location: "hero" })}
          className="font-elegant italic text-sm text-foreground/70 hover:text-primary underline underline-offset-4 decoration-primary/40 transition-colors"
        >
          {c.details}
        </Link>
      </div>
    </motion.div>
  );
};

export default NewLightShowcase;
