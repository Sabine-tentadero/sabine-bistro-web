import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoGold from "@/assets/logo-gold-transparent.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackReservationClick, trackWhatsAppClick, type WhatsAppLocation } from "@/lib/gtm";
import { buildPrecomproUrl } from "@/lib/attribution";

type CtaVariant = "precompro" | "brunch" | "contacto";

interface NavbarProps {
  ctaVariant?: CtaVariant;
}

const WHATSAPP_BRUNCH =
  "https://api.whatsapp.com/send/?phone=573183534907&text=Hola%2C+vengo+de+la+pagina+de+brunch+de+sabinebistro.com+y+me+gustaria+reservar+brunch+en+Sabine&type=phone_number&app_absent=0&utm_source=web&utm_medium=cta&utm_campaign=brunch_page";

const WHATSAPP_CONTACTO =
  "https://api.whatsapp.com/send/?phone=573183534907&text=Hola%2C+vengo+de+la+pagina+de+contacto+de+sabinebistro.com+y+me+gustaria+hacer+una+reserva&type=phone_number&app_absent=0&utm_source=web&utm_medium=cta&utm_campaign=contact_reservation";

const Navbar = ({ ctaVariant = "precompro" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.brunch"), href: "/brunch" },
    { label: t("nav.contact"), href: "/contacto" },
  ];

  const ctaConfig = {
    precompro: {
      label: t("nav.reserve"),
      href: buildPrecomproUrl(),
      onClick: () => trackReservationClick("navbar_cta"),
    },
    brunch: {
      label: t("nav.reserve_brunch"),
      href: WHATSAPP_BRUNCH,
      onClick: () => trackWhatsAppClick("brunch_hero_cta"),
    },
    contacto: {
      label: t("nav.reserve_whatsapp"),
      href: WHATSAPP_CONTACTO,
      onClick: () => trackWhatsAppClick("contact_reservation_cta"),
    },
  };

  const cta = ctaConfig[ctaVariant];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" aria-label="Sabine Bistro & Lounge">
          <img src={logoGold} alt="Sabine" className="h-10 md:h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  isActive ? "text-primary" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={cta.onClick}
            className="font-body text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 border border-foreground/20 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-500"
          >
            {cta.label}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground/60"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-body text-[11px] tracking-[0.2em] uppercase transition-colors ${
                      isActive ? "text-primary" : "text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  cta.onClick();
                  setMobileOpen(false);
                }}
                className="font-body text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 border border-foreground/20 text-foreground/60 hover:border-primary hover:text-primary transition-all duration-500 mt-2"
              >
                {cta.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
export type { CtaVariant };
