import { Instagram, Facebook } from "lucide-react";
import logoGold from "@/assets/logo-gold-transparent.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackReservationClick } from "@/lib/gtm";
import { buildPrecomproUrl } from "@/lib/attribution";

interface FooterProps {
  hideFloatingButtons?: boolean;
}

const Footer = ({ hideFloatingButtons = false }: FooterProps) => {
  const { t } = useLanguage();
  return (
    <footer className="bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col items-center text-center">
          <img src={logoGold} alt="Sabine Bistró & Lounge" className="w-36 mb-8 opacity-50" />

          <p className="font-elegant text-sm italic text-foreground/25 mb-2">
            {t("footer.addr")}
          </p>
          <p className="font-elegant text-sm italic text-foreground/25 mb-8">
            {t("footer.hours")}
          </p>

          <div className="flex gap-6 mb-12">
            <a
              href="https://www.instagram.com/sabinebistro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/20 hover:text-primary transition-colors duration-500"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/sabinebistro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/20 hover:text-primary transition-colors duration-500"
            >
              <Facebook size={16} />
            </a>
          </div>

          <div className="accent-divider mb-8 opacity-30" />

          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-foreground/15">
            © 2025 Sabine Bistro & Lounge
          </p>
        </div>
      </div>

      {!hideFloatingButtons && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a
            href={buildPrecomproUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackReservationClick("floating_cta")}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Reservar Mesa"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
