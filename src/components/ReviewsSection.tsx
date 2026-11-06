import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Reseñas reales de la ficha de Google de Sabine (5 estrellas), copiadas el 6-nov-2026.
// Calificación de la ficha ese día: 4,4 con 319 reseñas. Actualizar a mano si cambia mucho.
const GOOGLE_RATING = { es: "4,4", en: "4.4" };
const GOOGLE_COUNT = 319;

const reviews = [
  {
    name: "Estefani D.",
    text: {
      es: "Fuimos para celebrar el cumpleaños de una amiga y nos encantó la experiencia. Antony el mesero nos dio una atención cálida y oportuna. Muy profesional. ¡Seguro que volveremos!",
      en: "We went to celebrate a friend's birthday and loved the experience. Antony, the waiter, gave us warm and prompt service. Very professional. We'll definitely be back!",
    },
    rating: 5,
    date: { es: "Nov 2026", en: "Nov 2026" },
  },
  {
    name: "Cristoffer P.",
    text: {
      es: "Amazing service, food and portions! Have come here twice now while visiting Cartagena! The vibe is also great bistro / lounge vibes.",
      en: "Amazing service, food and portions! Have come here twice now while visiting Cartagena! The vibe is also great bistro / lounge vibes.",
    },
    rating: 5,
    date: { es: "Sept 2026", en: "Sept 2026" },
  },
  {
    name: "Maribel C.",
    text: {
      es: "Me encantó el lugar, muy buena atención, especialmente la del mesero Jhan. Fuimos a celebrar nuestro aniversario y cumplió todas nuestras expectativas.",
      en: "I loved the place, the service was excellent, especially from our waiter Jhan. We went to celebrate our anniversary and it met all our expectations.",
    },
    rating: 5,
    date: { es: "Ago 2026", en: "Aug 2026" },
  },
  {
    name: "Elkin H.",
    text: {
      es: "Deliciosa comida, porciones generosas y una atención excelente. ¡Nuestro mesero Anthony estuvo muy atento a todos los detalles!",
      en: "Delicious food, generous portions and excellent service. Our waiter Anthony was very attentive to every detail!",
    },
    rating: 5,
    date: { es: "Oct 2026", en: "Oct 2026" },
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="section-padding bg-dark-gradient-reverse" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            {t("rev.kicker")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-light"
          >
            {t("rev.title")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="gold-divider mt-6"
          />

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <span className="font-display text-4xl text-primary">{GOOGLE_RATING[lang]}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < 4 ? "fill-primary text-primary" : "text-primary"} />
              ))}
            </div>
            <span className="font-body text-xs text-muted-foreground ml-2">{GOOGLE_COUNT} {t("rev.count")}</span>
          </motion.div>
        </div>

        {/* Reviews carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className="bg-card/50 border border-border p-8 md:p-12 text-center max-w-3xl mx-auto">
            <Quote size={32} className="text-primary/30 mx-auto mb-6" />
            <p className="font-elegant text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 min-h-[80px]">
              "{reviews[active].text[lang]}"
            </p>
            <div className="gold-divider mb-6" />
            <p className="font-body text-sm tracking-[0.1em] text-foreground">{reviews[active].name}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              {t("rev.source")} · {reviews[active].date[lang]}
            </p>
            <div className="flex gap-1 justify-center mt-3">
              {[...Array(reviews[active].rating)].map((_, i) => (
                <Star key={i} size={12} className="fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
