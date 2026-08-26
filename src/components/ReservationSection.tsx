import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactImg from "@/assets/contact-cocktail.jpg";
import { trackReservationClick } from "@/lib/gtm";
import { buildPrecomproUrl } from "@/lib/attribution";

const Sparkle = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="sparkle">
    <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="currentColor" />
  </svg>
);

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reservations" className="relative overflow-hidden" ref={ref}>
      {/* Background image */}
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
            Reserva tu experiencia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-elegant text-[15px] sm:text-base md:text-lg italic text-foreground/55 md:text-foreground/35 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Cada visita a Sabine es una ocasión especial. Reserva tu mesa y déjate sorprender.
          </motion.p>

          <motion.a
            href={buildPrecomproUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackReservationClick("section_cta")}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="inline-block font-body text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase px-10 sm:px-14 py-4 sm:py-5 border border-primary/60 text-foreground/90 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
          >
            Reservar Mesa
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 md:mt-16 space-y-2"
          >
            <p className="font-elegant text-xs sm:text-sm text-foreground/40 md:text-foreground/25">
              Para eventos privados y corporativos
            </p>
            <p className="font-elegant text-xs sm:text-sm text-foreground/55 md:text-foreground/35">
              +57 321 807 5884 · +57 310 720 4102
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
