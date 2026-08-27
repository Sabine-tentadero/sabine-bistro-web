import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import logoGold from "@/assets/sabine-script.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackReservationClick } from "@/lib/gtm";
import { usePrecomproUrl, refreshPrecomproHrefOnClick } from "@/lib/attribution";

const HeroSection = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const precomproUrl = usePrecomproUrl();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    document.addEventListener("visibilitychange", tryPlay);
    return () => document.removeEventListener("visibilitychange", tryPlay);
  }, []);

  return (
    <section id="hero" className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          
          loop
          playsInline
          // @ts-ignore - iOS Safari
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-3xl mx-auto px-5 sm:px-6">
        <h1 className="sr-only">Sabine Bistro & Lounge — Restaurante en La Serrezuela, Cartagena</h1>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="mb-5 md:mb-6"
        >
          <p className="font-elegant text-base sm:text-lg md:text-2xl italic text-foreground/70 tracking-[0.05em]">
            {t("hero.tagline")}
          </p>
        </motion.div>

        <motion.img
          src={logoGold}
          alt="Sabine Bistró & Lounge"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="w-44 sm:w-56 md:w-72 lg:w-80 mx-auto mb-8 md:mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-elegant text-xs sm:text-sm md:text-base text-foreground/70 tracking-[0.12em] mb-10 md:mb-12 max-w-xs sm:max-w-md mx-auto italic leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.a
          href={precomproUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            refreshPrecomproHrefOnClick(e);
            trackReservationClick("hero_cta");
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-block font-body text-[10px] tracking-[0.35em] md:tracking-[0.4em] uppercase px-8 md:px-10 py-3.5 md:py-4 border border-primary/70 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
        >
          {t("hero.cta")}
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-foreground/15"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
