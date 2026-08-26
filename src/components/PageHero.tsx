import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import sabineScript from "@/assets/sabine-script.png";

interface PageHeroProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const PageHero = ({ title, subtitle, ctaLabel, ctaHref, onCtaClick }: PageHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 text-center w-full max-w-3xl mx-auto px-5 sm:px-6">
        <h1 className="sr-only">{title}</h1>

        <motion.img
          src={sabineScript}
          alt="Sabine Bistró & Lounge"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="w-44 sm:w-56 md:w-72 lg:w-80 mx-auto mb-8 md:mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="font-display text-2xl sm:text-3xl md:text-4xl italic font-light text-foreground/90 mb-5 md:mb-6 leading-tight"
          aria-hidden="true"
        >
          {title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-elegant text-xs sm:text-sm md:text-base text-foreground/70 tracking-[0.12em] mb-10 md:mb-12 max-w-xs sm:max-w-md mx-auto italic leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {ctaLabel && ctaHref && (
          <motion.a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCtaClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="inline-block font-body text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase px-10 sm:px-14 py-4 sm:py-5 border border-primary/60 text-foreground/90 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
          >
            {ctaLabel}
          </motion.a>
        )}
      </div>

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

export default PageHero;
