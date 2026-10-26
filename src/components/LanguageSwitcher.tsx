import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { RUTA_MENU } from "@/lib/carta";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className = "" }: Props) => {
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggle = () => {
    const nuevo = isEn ? "es" : "en";
    setLang(nuevo);
    // El menú tiene una URL por idioma (/menu · /en/menu): el selector lleva a la otra.
    if (pathname === RUTA_MENU.es || pathname === RUTA_MENU.en) navigate(RUTA_MENU[nuevo]);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar idioma / Change language"
      className={`relative inline-flex items-center h-7 w-[68px] rounded-full border border-foreground/20 hover:border-primary/60 transition-colors duration-500 font-body text-[10px] tracking-[0.2em] uppercase ${className}`}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 h-5 w-8 rounded-full bg-primary/80 transition-transform duration-300 ${
          isEn ? "translate-x-[30px]" : "translate-x-[2px]"
        }`}
      />
      <span
        className={`relative z-10 flex-1 text-center transition-colors duration-300 ${
          !isEn ? "text-background" : "text-foreground/50"
        }`}
      >
        ES
      </span>
      <span
        className={`relative z-10 flex-1 text-center transition-colors duration-300 ${
          isEn ? "text-background" : "text-foreground/50"
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageSwitcher;
