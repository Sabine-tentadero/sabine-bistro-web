import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactImg from "@/assets/contact-cocktail.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/gtm";

const Sparkle = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="sparkle">
    <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="currentColor" />
  </svg>
);

const WHATSAPP_RESERVATION =
  "https://wa.me/573183534907?text=Hola%2C+vengo+de+la+pagina+de+contacto+de+sabinebistro.com+y+me+gustaria+hacer+una+reserva";

const WHATSAPP_EVENTS =
  "https://wa.me/573183534907?text=Hola%2C+vengo+de+la+pagina+de+contacto+de+sabinebistro.com+y+quiero+consultar+por+un+evento+privado+o+corporativo";

const ContactCTA = () => {
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
            className="font-display text-3xl sm:text-4xl md:text-5xl italic font-light text-foreground/95 mb-3 md:mb-4 leading-tight"
          >
            {t("contact.cta.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-elegant text-[15px] sm:text-base md:text-lg italic text-foreground/55 md:text-foreground/35 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed"
          >
            {t("contact.cta.subtitle")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground/70 mb-4">
                {t("contact.reservations.label")}
              </h4>
              <a
                href={WHATSAPP_RESERVATION}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("contact_reservation_cta")}
                className="inline-block font-body text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase px-8 sm:px-10 py-4 border border-primary/60 text-foreground/90 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
              >
                {t("contact.reservations.button")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground/70 mb-4">
                {t("contact.events.label")}
              </h4>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <a
                  href="tel:+573218075884"
                  onClick={() => trackPhoneClick("contact_events")}
                  className="font-elegant text-[15px] md:text-base text-foreground/55 md:text-foreground/40 hover:text-primary transition-colors duration-500"
                >
                  {t("contact.phone1")}
                </a>
                <span className="hidden sm:block text-foreground/20">·</span>
                <a
                  href="tel:+573107204102"
                  onClick={() => trackPhoneClick("contact_events")}
                  className="font-elegant text-[15px] md:text-base text-foreground/55 md:text-foreground/40 hover:text-primary transition-colors duration-500"
                >
                  {t("contact.phone2")}
                </a>
              </div>
              <a
                href={WHATSAPP_EVENTS}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("contact_events_cta")}
                className="inline-block font-body text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase px-8 sm:px-10 py-4 border border-foreground/20 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-500"
              >
                {t("contact.events.button")}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
