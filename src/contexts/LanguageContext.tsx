import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.brunch": "Brunch",
    "nav.contact": "Contacto",
    "nav.location": "Ubicación",
    "nav.reserve": "Reservar Mesa",
    "nav.reserve_brunch": "Reservar Brunch",
    "nav.reserve_whatsapp": "Reservar por WhatsApp",
    // Hero
    "hero.tagline": "Bistro & Lounge",
    "hero.subtitle": "Fine cuisine, signature cocktails & unforgettable ambiance",
    "hero.cta": "Reservar Mesa",
    // About
    "about.title": "Quiénes Somos",
    "about.p1": "Sabine Bistró & Lounge: el primer American Bistró con alma francesa en el corazón de La Serrezuela.",
    "about.p2": "Sabine reúne técnica francesa, sabores americanos y una atmósfera sensorial única. Ingredientes frescos, cortes importados, ahumados de Tennessee y coctelería elegante definen nuestra propuesta. Cada detalle —iluminación, arquitectura, música y servicio— está pensado para una experiencia cálida, íntima y memorable.",
    // Experience
    "exp.intro": "Disfruta almuerzos, cenas, cocteles y noches lounge en un ambiente cálido y sofisticado, con una propuesta gastronómica variada y una atmósfera ideal para cada ocasión.",
    "exp.specialties": "Especialidades",
    "exp.music": "Música",
    "exp.s1": "Cortes importados",
    "exp.s2": "Cocciones en ahumador",
    "exp.s3": "Entradas icónicas: panceta acevichada, coliflor rostizada, tiradito de res",
    "exp.s4": "Pizzas al horno de leña y opciones vegetarianas elevadas",
    "exp.m1": "Jazz & Blues: jueves y domingos",
    "exp.m2": "DJ Nights: viernes y sábado",
    // Location
    "loc.title": "Ubicación",
    "loc.subtitle": "En La Serrezuela, ícono arquitectónico y cultural de Cartagena",
    "loc.address": "Dirección",
    "loc.addressLine2": "Centro Comercial La Serrezuela, Pisos 2 y 3",
    "loc.addressLine3": "Centro Histórico, Cartagena de Indias",
    "loc.hours": "Horario",
    "loc.hoursLine1": "Todos los días",
    "loc.contact": "Contacto",
    "loc.directions": "Cómo Llegar",
    // Footer
    "footer.addr": "C.C. La Serrezuela, Pisos 2 y 3 · Centro Histórico, Cartagena",
    "footer.hours": "Todos los días · 12:00 PM — 11:00 PM",
    // Brunch
    "brunch.hero.title": "Brunch en Cartagena — Sábados 10:30 a.m. a 1:30 p.m.",
    "brunch.hero.subtitle": "Bistró americano, coctelería y ambiente único en Sabine Bistro & Lounge",
    "brunch.hero.cta": "Reservar Brunch",
    "brunch.about.title": "Brunch de bistró americano los sábados en el corazón de Cartagena",
    "brunch.about.p1": "Cada sábado, Sabine Bistro & Lounge abre las puertas de su brunch en La Serrezuela, uno de los espacios más icónicos de Cartagena. Nuestro brunch combina el alma de un bistró americano con la sofisticación de un bistro contemporáneo: platos frescos, especialidades ahumadas, opciones dulces y saladas, coctelería propia y una ambientación cuidada al detalle. Reserva tu brunch en Cartagena y vive una experiencia gastronómica única en el Centro Histórico.",
    "brunch.cta.title": "Reserva tu brunch este sábado",
    "brunch.cta.button": "Reservar Brunch",
    "brunch.placeholder": "Imagen brunch pendiente",
    // Contact
    "contact.hero.title": "Contacto y Ubicación",
    "contact.hero.subtitle": "Sabine Bistro & Lounge — La Serrezuela, Centro Histórico de Cartagena",
    "contact.info.title": "Contacto",
    "contact.info.subtitle": "Reservas, eventos privados y consultas",
    "contact.info.hours.title": "Horario",
    "contact.info.hours.value": "Todos los días · 12:00 PM — 11:00 PM",
    "contact.cta.title": "Comunícate con nosotros",
    "contact.cta.subtitle": "Para reservas, eventos privados y corporativos",
    "contact.reservations.label": "Reservas",
    "contact.reservations.button": "Reservar por WhatsApp",
    "contact.events.label": "Para eventos privados y corporativos",
    "contact.events.button": "Consultar por evento",
    "contact.phone1": "+57 321 807 5884",
    "contact.phone2": "+57 310 720 4102",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.brunch": "Brunch",
    "nav.contact": "Contact",
    "nav.location": "Location",
    "nav.reserve": "Book a Table",
    "nav.reserve_brunch": "Book Brunch",
    "nav.reserve_whatsapp": "Book via WhatsApp",
    // Hero
    "hero.tagline": "Bistro & Lounge",
    "hero.subtitle": "Fine cuisine, signature cocktails & unforgettable ambiance",
    "hero.cta": "Book a Table",
    // About
    "about.title": "About Us",
    "about.p1": "Sabine Bistró & Lounge: the first American Bistro with a French soul in the heart of La Serrezuela.",
    "about.p2": "Sabine blends French technique, American flavors and a one-of-a-kind sensory atmosphere. Fresh ingredients, imported cuts, Tennessee smoked specialties and elegant cocktails define our concept. Every detail —lighting, architecture, music and service— is crafted for a warm, intimate and memorable experience.",
    // Experience
    "exp.intro": "Enjoy lunches, dinners, cocktails and lounge nights in a warm, sophisticated setting, with a diverse culinary offering and an atmosphere perfect for every occasion.",
    "exp.specialties": "Specialties",
    "exp.music": "Music",
    "exp.s1": "Imported cuts",
    "exp.s2": "Smoker-cooked dishes",
    "exp.s3": "Iconic starters: cured pork belly ceviche, roasted cauliflower, beef tiradito",
    "exp.s4": "Wood-fired pizzas and elevated vegetarian options",
    "exp.m1": "Jazz & Blues: Thursdays and Sundays",
    "exp.m2": "DJ Nights: Fridays and Saturdays",
    // Location
    "loc.title": "Location",
    "loc.subtitle": "At La Serrezuela, architectural and cultural icon of Cartagena",
    "loc.address": "Address",
    "loc.addressLine2": "La Serrezuela Mall, Floors 2 and 3",
    "loc.addressLine3": "Historic Center, Cartagena de Indias",
    "loc.hours": "Hours",
    "loc.hoursLine1": "Every day",
    "loc.contact": "Contact",
    "loc.directions": "Get Directions",
    // Footer
    "footer.addr": "La Serrezuela Mall, Floors 2 and 3 · Historic Center, Cartagena",
    "footer.hours": "Every day · 12:00 PM — 11:00 PM",
    // Brunch
    "brunch.hero.title": "Brunch in Cartagena — Saturdays 10:30 a.m. to 1:30 p.m.",
    "brunch.hero.subtitle": "American bistro, craft cocktails and unique atmosphere at Sabine Bistro & Lounge",
    "brunch.hero.cta": "Book Brunch",
    "brunch.about.title": "American bistro brunch on Saturdays in the heart of Cartagena",
    "brunch.about.p1": "Every Saturday, Sabine Bistro & Lounge opens the doors of its brunch at La Serrezuela, one of Cartagena's most iconic spaces. Our brunch combines the soul of an American bistro with the sophistication of a contemporary bistro: fresh dishes, smoked specialties, sweet and savory options, craft cocktails, and thoughtfully curated ambiance. Book your brunch in Cartagena old town and enjoy a unique dining experience.",
    "brunch.cta.title": "Book your brunch this Saturday",
    "brunch.cta.button": "Book Brunch",
    "brunch.placeholder": "Brunch image coming soon",
    // Contact
    "contact.hero.title": "Contact & Location",
    "contact.hero.subtitle": "Sabine Bistro & Lounge — La Serrezuela, Cartagena Old Town",
    "contact.info.title": "Contact",
    "contact.info.subtitle": "Reservations, private events and inquiries",
    "contact.info.hours.title": "Hours",
    "contact.info.hours.value": "Every day · 12:00 PM — 11:00 PM",
    "contact.cta.title": "Get in touch",
    "contact.cta.subtitle": "For reservations, private events and corporate bookings",
    "contact.reservations.label": "Reservations",
    "contact.reservations.button": "Book via WhatsApp",
    "contact.events.label": "For private and corporate events",
    "contact.events.button": "Inquire about an event",
    "contact.phone1": "+57 321 807 5884",
    "contact.phone2": "+57 310 720 4102",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("lang");
    return saved === "en" || saved === "es" ? saved : "es";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    // GTM: expose current language on every page
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ language: lang });
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    if (l === lang) return;
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "language_change",
        language_from: lang,
        language_to: l,
      });
    }
    setLangState(l);
  };
  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
