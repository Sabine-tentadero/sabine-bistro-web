import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Ambiente interior de Sabine Bistro & Lounge" },
  { src: gallery2, alt: "Barra de cocteles en Sabine Bistro & Lounge" },
  { src: gallery3, alt: "Detalle de iluminación de Sabine Bistro & Lounge" },
  { src: gallery4, alt: "Experiencia gastronómica en Sabine Bistro & Lounge" },
];

const BrunchGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background overflow-hidden" ref={ref}>
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
            {images.map((img, i) => (
              <CarouselItem key={i} className="pl-0 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="h-[420px] sm:h-[520px] md:h-[600px] overflow-hidden relative bg-secondary/30">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-6 bg-background/40 border-primary/40 text-foreground hover:bg-background/70" />
          <CarouselNext className="right-4 md:right-6 bg-background/40 border-primary/40 text-foreground hover:bg-background/70" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default BrunchGallery;