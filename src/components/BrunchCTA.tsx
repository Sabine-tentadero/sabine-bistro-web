import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactImg from "@/assets/contact-cocktail.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackWhatsAppClick } from "@/lib/gtm";

const Sparkle = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="sparkle">
    <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="currentColor" />
  </svg>
);

const WHATSAPP_BRUNCH =
  "https://api.whatsapp.com/send/?phone=573183534907&text=Hola%2C+vengo+de+la+pagina+de+brunch+de+sabinebistro.com+y+me+gustaria+reservar+brunch+en+Sabine&type=phone_number&app_absent=0&utm_source=web&utm_medium=cta&utm_campaign=brunch_page";

const BrunchCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="reservations" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={contactImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Sparkle />
            <div className="w-16 h-[1px] bg-primary/30" />
            <Sparkle />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl italic font-light text-foreground/95 mb-5 md:mb-6 leading-tight"
          >
            {t("brunch.cta.title")}
          </motion.h2>

          <motion.a
            href={WHATSAPP_BRUNCH}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("brunch_final_cta")}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="inline-block font-body text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase px-10 sm:px-14 py-4 sm:py-5 border border-primary/60 text-foreground/90 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
          >
            {t("brunch.cta.button")}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BrunchCTA;
