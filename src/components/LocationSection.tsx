import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackPhoneClick, trackDirectionsClick } from "@/lib/gtm";

const Sparkle = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="sparkle">
    <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="currentColor" />
  </svg>
);

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="location" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
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
            className="font-display text-2xl sm:text-3xl md:text-4xl italic font-light text-foreground/90"
          >
            {t("loc.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-elegant text-sm sm:text-base italic text-foreground/45 md:text-foreground/30 mt-4 max-w-md mx-auto px-4"
          >
            {t("loc.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="aspect-[4/3] w-full overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.017!2d-75.551!3d10.423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e7e7c8c8c7%3A0x0!2sC.C.+La+Serrezuela%2C+Cartagena!5e0!3m2!1ses!2sco!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.3) grayscale(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Sabine Bistro"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8 md:space-y-10 text-center flex flex-col items-center"
          >
            <div>
              <div className="flex justify-center mb-3"><MapPin size={16} className="text-primary/70" /></div>
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground/70 mb-2 md:mb-3">{t("loc.address")}</h4>
              <p className="font-elegant text-[15px] md:text-base text-foreground/55 md:text-foreground/40 leading-relaxed">
                Carrera 11 #39-21<br />
                {t("loc.addressLine2")}<br />
                {t("loc.addressLine3")}
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-3"><Clock size={16} className="text-primary/70" /></div>
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground/70 mb-2 md:mb-3">{t("loc.hours")}</h4>
              <p className="font-elegant text-[15px] md:text-base text-foreground/55 md:text-foreground/40">
                {t("loc.hoursLine1")}<br />
                12:00 PM — 11:00 PM
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-3"><Phone size={16} className="text-primary/70" /></div>
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground/70 mb-2 md:mb-3">{t("loc.contact")}</h4>
              <a
                href="tel:+573183534907"
                onClick={() => trackPhoneClick("location_section")}
                className="font-elegant text-[15px] md:text-base text-foreground/55 md:text-foreground/40 hover:text-primary transition-colors duration-500"
              >
                +57 318 353 4907
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/CHdG8f9s7q6pFPZY6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDirectionsClick("location_section")}
              className="inline-block font-body text-[10px] tracking-[0.25em] uppercase px-8 py-3 border border-foreground/15 text-foreground/50 hover:border-primary hover:text-primary transition-all duration-500"
            >
              {t("loc.directions")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
