import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import restaurantSign from "@/assets/restaurant-sign.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Sparkle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="sparkle">
    <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="currentColor" />
  </svg>
);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative h-[280px] sm:h-[360px] md:h-auto md:min-h-[600px]"
          >
            <img
              src={restaurantSign}
              alt="Sabine Bistró & Lounge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-background/60 md:to-background" />
          </motion.div>

          {/* Text side */}
          <div className="flex items-center px-6 sm:px-8 md:px-16 py-14 md:py-24">
            <div className="w-full text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-3 mb-6 md:mb-8"
              >
                <div className="w-12 h-[1px] bg-primary/30" />
                <Sparkle />
                <div className="w-12 h-[1px] bg-primary/30" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-2xl sm:text-3xl md:text-4xl italic font-light text-foreground/90 mb-6 md:mb-8"
              >
                {t("about.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-elegant text-[15px] sm:text-base md:text-lg text-foreground/55 md:text-foreground/45 leading-[1.9] md:leading-[2] tracking-wide mb-5 md:mb-6 max-w-xl mx-auto"
              >
                {t("about.p1")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-elegant text-[14px] sm:text-base md:text-lg text-foreground/45 md:text-foreground/35 leading-[1.9] md:leading-[2] tracking-wide max-w-xl mx-auto"
              >
                {t("about.p2")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center justify-center gap-3 mt-8"
              >
                <div className="w-12 h-[1px] bg-primary/30" />
                <Sparkle />
                <div className="w-12 h-[1px] bg-primary/30" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
