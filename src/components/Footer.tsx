import { Instagram, Facebook } from "lucide-react";
import logoGold from "@/assets/logo-gold-transparent.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackReservationClick, trackWhatsAppClick } from "@/lib/gtm";
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
          <a
            href="https://wa.me/573183534907?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20Sabine%20Bistro"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("floating_cta")}
            className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096 .547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
