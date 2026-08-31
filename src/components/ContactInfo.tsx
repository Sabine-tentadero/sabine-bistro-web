import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Phone, CalendarDays, PartyPopper } from "lucide-react";
import { pushEvent, trackPhoneClick } from "@/lib/gtm";

const Sparkle = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="sparkle">
    <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="currentColor" />
  </svg>
);

const WHATSAPP_RESERVATION =
  "https://wa.me/573183534907?text=Hola%2C+vengo+de+la+pagina+de+contacto+de+sabinebistro.com+y+me+gustaria+hacer+una+reserva";

const WHATSAPP_EVENTS =
  "https://wa.me/573183534907?text=Hola%2C+vengo+de+la+pagina+de+contacto+de+sabinebistro.com+y+quiero+consultar+por+un+evento+privado+o+corporativo";

const ContactInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t, lang } = useLanguage();

  const phones = [
    { number: "+57 318 353 4907", href: "tel:+573183534907" },
    { number: "+57 321 807 5884", href: "tel:+573218075884" },
    { number: "+57 310 720 4102", href: "tel:+573107204102" },
  ];

  return (
    <section className="bg-background overflow-hidden" ref={ref}>
      <div className="section-padding">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
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
            className="font-display text-3xl sm:text-4xl md:text-5xl italic font-light text-foreground/95 mb-4 md:mb-6 leading-tight text-center"
          >
            {t("contact.info.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-elegant text-[15px] sm:text-base md:text-lg italic text-foreground/55 md:text-foreground/40 mb-12 md:mb-16 max-w-xl mx-auto text-center leading-relaxed"
          >
            {t("contact.info.subtitle")}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-secondary/20 border border-primary/10 p-8 md:p-10 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center text-primary/80">
                <Clock size={24} strokeWidth={1.2} />
              </div>
              <h3 className="font-display text-xl md:text-2xl italic text-foreground/85 mb-3">
                {t("contact.info.hours.title")}
              </h3>
              <p className="font-elegant text-sm md:text-base text-foreground/60 leading-relaxed">
                {t("contact.info.hours.value")}
              </p>
            </motion.div>

            {/* Reservations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-secondary/20 border border-primary/10 p-8 md:p-10 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center text-primary/80">
                <CalendarDays size={24} strokeWidth={1.2} />
              </div>
              <h3 className="font-display text-xl md:text-2xl italic text-foreground/85 mb-3">
                {t("contact.reservations.label")}
              </h3>
              <div className="flex flex-col items-center gap-2 mb-5">
                {phones.map((p) => (
                  <a
                    key={p.number}
                    href={p.href}
                    onClick={() => trackPhoneClick("contact_info_reservations")}
                    className="font-elegant text-sm md:text-base text-foreground/55 hover:text-primary transition-colors duration-500"
                  >
                    {p.number}
                  </a>
                ))}
              </div>
              <a
                href={WHATSAPP_RESERVATION}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushEvent("whatsapp_click", { cta_location: "contact_info_reservations", destination: "whatsapp", outbound: true })}
                className="inline-block font-body text-[10px] tracking-[0.25em] uppercase px-6 py-3 border border-primary/60 text-foreground/90 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
              >
                {t("contact.reservations.button")}
              </a>
            </motion.div>

            {/* Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-secondary/20 border border-primary/10 p-8 md:p-10 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-5 flex items-center justify-center text-primary/80">
                <PartyPopper size={24} strokeWidth={1.2} />
              </div>
              <h3 className="font-display text-xl md:text-2xl italic text-foreground/85 mb-3">
                {t("contact.events.label")}
              </h3>
              <p className="font-elegant text-sm md:text-base text-foreground/60 leading-relaxed mb-5">
                {lang === "es"
                  ? "Eventos privados, corporativos y celebraciones especiales"
                  : "Private events, corporate events and special celebrations"}
              </p>
              <a
                href={WHATSAPP_EVENTS}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushEvent("whatsapp_click", { cta_location: "contact_info_events", destination: "whatsapp", outbound: true })}
                className="inline-block font-body text-[10px] tracking-[0.25em] uppercase px-6 py-3 border border-foreground/20 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-500"
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

export default ContactInfo;