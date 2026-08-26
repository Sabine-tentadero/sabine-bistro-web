import { useLanguage } from "@/contexts/LanguageContext";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import LocationSection from "@/components/LocationSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7a8b0dc-d2fc-4680-bba4-0c3973a81f9a/id-preview-4ba92d38--a49d1195-b401-4c4d-92d9-615a3fde61f8.lovable.app-1771813080601.png";

const Index = () => {
  const { lang, t } = useLanguage();

  const seo = {
    es: {
      title: "Sabine Bistro & Lounge | Restaurante en La Serrezuela, Cartagena",
      description:
        "Sabine Bistro & Lounge en La Serrezuela, Cartagena: American Bistró con cortes importados, ahumador, coctelería de autor, jazz y DJ nights. Reserva tu mesa.",
    },
    en: {
      title: "Sabine Bistro & Lounge | Restaurant in La Serrezuela, Cartagena",
      description:
        "Sabine Bistro & Lounge in La Serrezuela, Cartagena: American Bistro with imported cuts, smoker, signature cocktails, jazz and DJ nights. Book your table.",
    },
  }[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sabine Bistro & Lounge",
    url: "https://sabinebistro.com/",
    image: OG_IMAGE,
    description: seo.description,
    servesCuisine: ["American", "French", "Bistro"],
    priceRange: "$$$",
    telephone: "+57 318 353 4907",
    acceptsReservations: "https://sabine.precompro.com/",
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
        canonical="https://sabinebistro.com/"
        ogImage={OG_IMAGE}
        ogType="restaurant"
        jsonLd={jsonLd}
      />
      <main>
        <Navbar ctaVariant="precompro" />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <LocationSection />
        <ReservationSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
