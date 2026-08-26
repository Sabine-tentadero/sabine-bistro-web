import { useLanguage } from "@/contexts/LanguageContext";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactInfo from "@/components/ContactInfo";
import LocationSection from "@/components/LocationSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const WHATSAPP_CONTACTO =
  "https://api.whatsapp.com/send/?phone=573183534907&text=Hola%2C+vengo+de+la+pagina+de+contacto+de+sabinebistro.com+y+me+gustaria+hacer+una+reserva&type=phone_number&app_absent=0&utm_source=web&utm_medium=cta&utm_campaign=contact_reservation";

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7a8b0dc-d2fc-4680-bba4-0c3973a81f9a/id-preview-4ba92d38--a49d1195-b401-4c4d-92d9-615a3fde61f8.lovable.app-1771813080601.png";

const Contacto = () => {
  const { lang, t } = useLanguage();

  const seo = {
    es: {
      title: "Contacto y Ubicación | Sabine Bistro & Lounge — La Serrezuela, Cartagena",
      description:
        "Ubicación, teléfonos y contacto de Sabine Bistro & Lounge en La Serrezuela, Centro Histórico de Cartagena. Reservas por WhatsApp y consultas para eventos privados y corporativos.",
    },
    en: {
      title: "Contact & Location | Sabine Bistro & Lounge — La Serrezuela, Cartagena Old Town",
      description:
        "Location, phone numbers and contact for Sabine Bistro & Lounge in La Serrezuela, Cartagena Old Town. WhatsApp reservations and private/corporate event inquiries.",
    },
  }[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sabine Bistro & Lounge",
    url: "https://sabinebistro.com/contacto",
    image: OG_IMAGE,
    description: seo.description,
    servesCuisine: ["American", "French", "Bistro"],
    priceRange: "$$$",
    telephone: ["+57 318 353 4907", "+57 321 807 5884", "+57 310 720 4102"],
    acceptsReservations: WHATSAPP_CONTACTO,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrera 11 #39-21, C.C. La Serrezuela, Pisos 2 y 3",
      addressLocality: "Cartagena de Indias",
      addressRegion: "Bolívar",
      postalCode: "130001",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.423,
      longitude: -75.551,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "12:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/sabinebistro/",
      "https://www.facebook.com/sabinebistro/",
    ],
  };

  return (
    <>
      <Seo
        lang={lang}
        title={seo.title}
        description={seo.description}
        canonical="https://sabinebistro.com/contacto"
        ogImage={OG_IMAGE}
        ogType="restaurant"
        jsonLd={jsonLd}
      />
      <main>
        <Navbar ctaVariant="contacto" />
        <PageHero title={t("contact.hero.title")} subtitle={t("contact.hero.subtitle")} />
        <ContactInfo />
        <LocationSection />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
};

export default Contacto;
