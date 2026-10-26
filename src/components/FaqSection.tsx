import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ_KEYS = ["1", "2", "3", "4", "5", "6"];

const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="preguntas" className="section-padding bg-dark-gradient" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            {t("faq.kicker")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-5xl italic font-light"
          >
            {t("faq.title")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="gold-divider mt-6"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_KEYS.map((k) => (
              <AccordionItem key={k} value={`q${k}`} className="border-border/50">
                <AccordionTrigger className="font-elegant text-base md:text-lg text-left text-foreground/85 hover:no-underline hover:text-primary">
                  <h3>{t(`faq.q${k}`)}</h3>
                </AccordionTrigger>
                <AccordionContent className="font-elegant text-sm md:text-base text-foreground/60 leading-relaxed">
                  {t(`faq.a${k}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
