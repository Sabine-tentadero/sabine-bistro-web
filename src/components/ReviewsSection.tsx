import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Andrés M.",
    location: "Cartagena",
    text: "¡Excelente servicio! Delicioso el Steak Frites, al igual que el T-Bone. El cóctel Oregon y el Mocktail Moscow Mule. Volvería mil veces, muy buen ambiente en el lugar.",
    rating: 5,
    date: "Sept 2025",
  },
  {
    name: "MPToro",
    location: "Bogotá",
    text: "Es un lugar excelente! La comida muy rica y la atención excelente! Súper recomendado como plan para parejas. Tiene una terraza donde se pueden tomar fotos increíbles.",
    rating: 5,
    date: "May 2025",
  },
  {
    name: "Pamela V.",
    location: "Colombia",
    text: "Es un gran lugar, los alimentos son deliciosos, la atención increíble, todos muy amables. Me parece que es congruente calidad-precio, lo recomiendo ampliamente.",
    rating: 5,
    date: "Abr 2025",
  },
  {
    name: "Foreropa",
    location: "Bogotá",
    text: "Una comida totalmente espectacular, me comí una carne que ha sido de las mejores que me he comido en mi vida. El servicio estupendo. Excelente ambiente.",
    rating: 5,
    date: "Oct 2025",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="section-padding bg-dark-gradient-reverse" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            Opiniones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-light"
          >
            Lo que dicen nuestros <span className="italic text-gold-gradient">invitados</span>
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
            <span className="font-display text-4xl text-primary">4.8</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="font-body text-xs text-muted-foreground ml-2">209+ opiniones</span>
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
              "{reviews[active].text}"
            </p>
            <div className="gold-divider mb-6" />
            <p className="font-body text-sm tracking-[0.1em] text-foreground">{reviews[active].name}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              {reviews[active].location} · {reviews[active].date}
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
