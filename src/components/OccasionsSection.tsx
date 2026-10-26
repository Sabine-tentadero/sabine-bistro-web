import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackReservationClick } from "@/lib/gtm";
import { usePrecomproUrl, refreshPrecomproHrefOnClick } from "@/lib/attribution";
import terraceImg from "@/assets/space-terraza.jpg";
import eventsImg from "@/assets/events-party.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import brunchImg from "@/assets/dessert.jpg";

type Occasion = {
  key: string;
  img: string;
  to?: string;
  external?: boolean;
};

const occasions: Occasion[] = [
  { key: "romantic", img: terraceImg, external: true },
  { key: "events", img: eventsImg, to: "/contacto" },
  { key: "meat", img: steakImg, to: "/menu" },
  { key: "brunch", img: brunchImg, to: "/brunch" },
];

const OccasionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const precomproUrl = usePrecomproUrl();

  const ctaClass =
    "inline-block mt-5 font-body text-[10px] tracking-[0.3em] uppercase text-primary/90 hover:text-primary border-b border-primary/40 hover:border-primary pb-1 transition-colors duration-500";

  return (
    <section id="ocasiones" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            {t("occ.kicker")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-5xl italic font-light"
          >
            {t("occ.title")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="gold-divider mt-6"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {occasions.map((o, i) => (
            <motion.article
              key={o.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="group bg-card/40 border border-border/60 overflow-hidden text-center"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={o.img}
                  alt={t(`occ.${o.key}.title`)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl md:text-2xl italic text-foreground/90 mb-3">
                  {t(`occ.${o.key}.title`)}
                </h3>
                <p className="font-elegant text-sm md:text-base text-foreground/60 leading-relaxed">
                  {t(`occ.${o.key}.desc`)}
                </p>
                {o.external ? (
                  <a
                    href={precomproUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      refreshPrecomproHrefOnClick(e);
                      trackReservationClick("occasions_cta");
                    }}
                    className={ctaClass}
                  >
                    {t(`occ.${o.key}.cta`)}
                  </a>
                ) : (
                  <Link to={o.to!} className={ctaClass}>
                    {t(`occ.${o.key}.cta`)}
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionsSection;
