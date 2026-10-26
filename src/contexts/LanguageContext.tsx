import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.brunch": "Brunch",
    "nav.menu": "Menú",
    "nav.contact": "Contacto",
    "nav.location": "Ubicación",
    "nav.reserve": "Reservar Mesa",
    "nav.reserve_brunch": "Reservar Brunch",
    "nav.reserve_whatsapp": "Reservar por WhatsApp",
    // Hero
    "hero.tagline": "Bistro & Lounge",
    "hero.h1": "Restaurante en Cartagena, en el corazón de La Serrezuela",
    "hero.subtitle": "Cortes importados, ahumador, coctelería de autor y música en vivo en el Centro Histórico.",
    "hero.cta": "Reservar Mesa",
    // About
    "about.title": "Un restaurante en Cartagena con alma de bistró",
    "about.p1": "Sabine Bistró & Lounge es un restaurante en Cartagena de Indias, en La Serrezuela: el primer American Bistró con alma francesa del Centro Histórico.",
    "about.p2": "Sabine reúne técnica francesa, sabores americanos y una atmósfera sensorial única. Ingredientes frescos, cortes importados, ahumados de Tennessee y coctelería elegante definen nuestra propuesta. Cada detalle —iluminación, arquitectura, música y servicio— está pensado para una experiencia cálida, íntima y memorable.",
    "exp.title": "Carnes, ahumados y coctelería de autor",
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
    "loc.title": "Restaurante en el Centro Histórico de Cartagena",
    "loc.subtitle": "En La Serrezuela, ícono arquitectónico y cultural de Cartagena",
    "loc.address": "Dirección",
    "loc.addressLine2": "Centro Comercial La Serrezuela, Pisos 2 y 3",
    "loc.addressLine3": "Centro Histórico, Cartagena de Indias",
    "loc.hours": "Horario",
    "loc.hoursLine1": "Todos los días",
    "loc.contact": "Contacto",
    "loc.directions": "Cómo Llegar",
    // Occasions
    "occ.kicker": "Para cada ocasión",
    "occ.title": "Un plan para cada ocasión en Cartagena",
    "occ.romantic.title": "Cena romántica",
    "occ.romantic.desc": "Luz baja, terraza y jazz los jueves y domingos.",
    "occ.romantic.cta": "Reservar mesa",
    "occ.events.title": "Cumpleaños y celebraciones",
    "occ.events.desc": "Mesas para grupos y eventos privados o corporativos.",
    "occ.events.cta": "Cotizar evento",
    "occ.meat.title": "Carnes y ahumados",
    "occ.meat.desc": "Cortes importados y cocciones lentas en ahumador.",
    "occ.meat.cta": "Ver el menú",
    "occ.brunch.title": "Brunch de los sábados",
    "occ.brunch.desc": "De 10:30 a. m. a 1:30 p. m., dulce y salado, con coctelería.",
    "occ.brunch.cta": "Ver el brunch",
    // Reviews
    "rev.kicker": "Opiniones",
    "rev.title": "Lo que dicen de nuestro restaurante en Cartagena",
    "rev.count": "opiniones",
    // FAQ
    "faq.kicker": "Antes de venir",
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Dónde queda Sabine?",
    "faq.a1": "En el Centro Comercial La Serrezuela, pisos 2 y 3, Carrera 11 #39-21, en el Centro Histórico de Cartagena de Indias.",
    "faq.q2": "¿Qué horario tiene el restaurante?",
    "faq.a2": "Abrimos todos los días de 12:00 m. a 11:00 p. m. El brunch es los sábados de 10:30 a. m. a 1:30 p. m.",
    "faq.q3": "¿Hay que reservar?",
    "faq.a3": "Te lo recomendamos, sobre todo de jueves a sábado. Puedes reservar en línea en segundos o escribirnos por WhatsApp.",
    "faq.q4": "¿Tienen música en vivo?",
    "faq.a4": "Sí. Jazz & Blues los jueves y domingos, y DJ los viernes y sábados.",
    "faq.q5": "¿Puedo celebrar un cumpleaños o un evento?",
    "faq.a5": "Claro. Recibimos grupos, cumpleaños y eventos privados o corporativos. Escríbenos y te ayudamos a armarlo.",
    "faq.q6": "¿Qué tipo de comida sirven?",
    "faq.a6": "Cocina de American Bistró con técnica francesa: cortes importados, cocciones en ahumador, pizzas al horno de leña, opciones vegetarianas y coctelería de autor.",
    // Menu page
    "menu.hero.title": "Menú de Sabine Bistro & Lounge",
    "menu.hero.subtitle": "La carta de nuestro restaurante en Cartagena · La Serrezuela, Centro Histórico",
    "menu.hero.cta": "Reservar Mesa",
    "menu.sample": "Carta de muestra: platos y precios por confirmar con el restaurante.",
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
    "nav.menu": "Menu",
    "nav.contact": "Contact",
    "nav.location": "Location",
    "nav.reserve": "Book a Table",
    "nav.reserve_brunch": "Book Brunch",
    "nav.reserve_whatsapp": "Book via WhatsApp",
    // Hero
    "hero.tagline": "Bistro & Lounge",
    "hero.h1": "Restaurant in Cartagena, in the heart of La Serrezuela",
    "hero.subtitle": "Imported cuts, smoker, signature cocktails and live music in the Historic Center.",
    "hero.cta": "Book a Table",
    // About
    "about.title": "A restaurant in Cartagena with a bistro soul",
    "about.p1": "Sabine Bistró & Lounge is a restaurant in Cartagena de Indias, at La Serrezuela: the first American Bistro with a French soul in the Historic Center.",
    "about.p2": "Sabine blends French technique, American flavors and a one-of-a-kind sensory atmosphere. Fresh ingredients, imported cuts, Tennessee smoked specialties and elegant cocktails define our concept. Every detail —lighting, architecture, music and service— is crafted for a warm, intimate and memorable experience.",
    "exp.title": "Steaks, smoked dishes and signature cocktails",
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
    "loc.title": "Restaurant in Cartagena's Historic Center",
    "loc.subtitle": "At La Serrezuela, architectural and cultural icon of Cartagena",
    "loc.address": "Address",
    "loc.addressLine2": "La Serrezuela Mall, Floors 2 and 3",
    "loc.addressLine3": "Historic Center, Cartagena de Indias",
    "loc.hours": "Hours",
    "loc.hoursLine1": "Every day",
    "loc.contact": "Contact",
    "loc.directions": "Get Directions",
    // Occasions
    "occ.kicker": "For every occasion",
    "occ.title": "A plan for every occasion in Cartagena",
    "occ.romantic.title": "Romantic dinner",
    "occ.romantic.desc": "Low lights, terrace and jazz on Thursdays and Sundays.",
    "occ.romantic.cta": "Book a table",
    "occ.events.title": "Birthdays and celebrations",
    "occ.events.desc": "Tables for groups and private or corporate events.",
    "occ.events.cta": "Plan an event",
    "occ.meat.title": "Steaks and smoked dishes",
    "occ.meat.desc": "Imported cuts and slow smoker cooking.",
    "occ.meat.cta": "See the menu",
    "occ.brunch.title": "Saturday brunch",
    "occ.brunch.desc": "10:30 a.m. to 1:30 p.m., sweet and savory, with cocktails.",
    "occ.brunch.cta": "See the brunch",
    // Reviews
    "rev.kicker": "Reviews",
    "rev.title": "What guests say about our restaurant in Cartagena",
    "rev.count": "reviews",
    // FAQ
    "faq.kicker": "Before you come",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Where is Sabine?",
    "faq.a1": "At La Serrezuela Mall, floors 2 and 3, Carrera 11 #39-21, in the Historic Center of Cartagena de Indias.",
    "faq.q2": "What are the opening hours?",
    "faq.a2": "We are open every day from 12:00 p.m. to 11:00 p.m. Brunch is on Saturdays from 10:30 a.m. to 1:30 p.m.",
    "faq.q3": "Do I need a reservation?",
    "faq.a3": "We recommend it, especially Thursday to Saturday. You can book online in seconds or message us on WhatsApp.",
    "faq.q4": "Do you have live music?",
    "faq.a4": "Yes. Jazz & Blues on Thursdays and Sundays, and DJ on Fridays and Saturdays.",
    "faq.q5": "Can I celebrate a birthday or an event?",
    "faq.a5": "Of course. We host groups, birthdays and private or corporate events. Message us and we will help you plan it.",
    "faq.q6": "What kind of food do you serve?",
    "faq.a6": "American Bistro cuisine with French technique: imported cuts, smoker cooking, wood-fired pizzas, vegetarian options and signature cocktails.",
    // Menu page
    "menu.hero.title": "Sabine Bistro & Lounge Menu",
    "menu.hero.subtitle": "The menu of our restaurant in Cartagena · La Serrezuela, Historic Center",
    "menu.hero.cta": "Book a Table",
    "menu.sample": "Sample menu: dishes and prices to be confirmed by the restaurant.",
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
