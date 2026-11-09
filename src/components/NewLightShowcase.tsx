import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pushEvent, trackWhatsAppClick } from "@/lib/gtm";
import {
  NEW_LIGHT,
  NEW_LIGHT_COPY,
  newLightNow,
  newLightPhase,
  newLightPrice,
} from "@/data/newLight";

/** Vitrina de NEW LIGHT dentro del hero. Se oculta sola después del 31-dic. */
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

const NewLightShowcase = ({ phase }: { phase: "launch" | "regular" }) => {
  const { lang } = useLanguage();
  const c = NEW_LIGHT_COPY[lang];
  const [open, setOpen] = useState(false);

  const soldOut = NEW_LIGHT.soldOut;
  const text = soldOut ? c.whatsappTextSoldOut : c.whatsappText;
  const href =
    `https://wa.me/${NEW_LIGHT.whatsappNumber}?text=${encodeURIComponent(text)}`;

  const onCta = () => {
    trackWhatsAppClick("hero_newlight");
    pushEvent("newlight_cta_click", { cta_location: "hero", phase, sold_out: soldOut });
  };

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

      <p className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.18em] text-foreground leading-none mb-2">
        NEW LIGHT
      </p>
      <p className="font-elegant italic text-sm sm:text-base text-foreground/75 mb-4">
        {c.subtitle}
      </p>

      <p className="font-body text-[11px] sm:text-xs tracking-[0.08em] text-foreground/70 leading-relaxed mb-5">
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
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onCta}
          className="inline-block w-full sm:w-auto font-body text-[10px] tracking-[0.35em] uppercase px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
        >
          {soldOut ? c.ctaSoldOut : c.cta}
        </a>
        <button
          type="button"
          onClick={() => {
            setOpen((v) => !v);
            if (!open) pushEvent("newlight_details_open", { cta_location: "hero" });
          }}
          aria-expanded={open}
          className="font-elegant italic text-sm text-foreground/70 hover:text-primary underline underline-offset-4 decoration-primary/40 transition-colors"
        >
          {open ? c.hideDetails : c.details}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden text-left mx-auto max-w-xs mt-5 space-y-1.5"
          >
            <li className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2 text-center">
              {c.includesTitle}
            </li>
            {c.includes.map((item) => (
              <li key={item} className="font-elegant text-sm text-foreground/80 flex gap-2">
                <span className="text-primary">·</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewLightShowcase;
