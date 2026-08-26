import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import interiorImg from "@/assets/restaurant-interior.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, alt: "Ambiente lounge Sabine" },
  { src: gallery2, alt: "Bar y salón Sabine" },
  { src: gallery3, alt: "Noches Sabine" },
  { src: gallery4, alt: "Eventos Sabine" },
];

const Sparkle = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="sparkle">
    <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="currentColor" />
  </svg>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section className="bg-background overflow-hidden" ref={ref}>
      {/* Gallery carousel on top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}
          className="relative"
        >
          <CarouselContent className="ml-0">
            {galleryImages.map((img, i) => (
              <CarouselItem key={i} className="pl-0 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="h-[420px] sm:h-[520px] md:h-[600px] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-6 bg-background/40 border-primary/40 text-foreground hover:bg-background/70" />
          <CarouselNext className="right-4 md:right-6 bg-background/40 border-primary/40 text-foreground hover:bg-background/70" />
        </Carousel>
      </motion.div>

      {/* Text section */}
      <div className="relative px-6 sm:px-8 md:px-16 py-16 md:py-28">
        <div className="absolute inset-0">
          <img src={interiorImg} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover opacity-15 md:opacity-20" />
          <div className="absolute inset-0 bg-background/85 md:bg-background/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-elegant text-[15px] sm:text-base md:text-lg text-foreground/65 md:text-foreground/55 leading-[1.9] md:leading-[2] tracking-wide mb-9 md:mb-12 text-center"
          >
            {t("exp.intro")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-2xl md:max-w-none mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="font-display text-xl md:text-2xl italic text-foreground/85 mb-4 md:mb-5 flex items-center justify-center gap-2">
                <Sparkle /> <span>{t("exp.specialties")}</span>
              </h3>
              <ul className="font-elegant text-sm md:text-base text-foreground/60 md:text-foreground/55 space-y-2 leading-relaxed">
                <li>{t("exp.s1")}</li>
                <li>{t("exp.s2")}</li>
                <li>{t("exp.s3")}</li>
                <li>{t("exp.s4")}</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="font-display text-xl md:text-2xl italic text-foreground/85 mb-4 md:mb-5 flex items-center justify-center gap-2">
                <Sparkle /> <span>{t("exp.music")}</span>
              </h3>
              <ul className="font-elegant text-sm md:text-base text-foreground/60 md:text-foreground/55 space-y-2 leading-relaxed">
                <li>{t("exp.m1")}</li>
                <li>{t("exp.m2")}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
