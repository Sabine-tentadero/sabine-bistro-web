import { useLanguage } from "@/contexts/LanguageContext";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import BrunchAbout from "@/components/BrunchAbout";
import BrunchGallery from "@/components/BrunchGallery";
import LocationSection from "@/components/LocationSection";
import BrunchCTA from "@/components/BrunchCTA";
import Footer from "@/components/Footer";
import { trackWhatsAppClick } from "@/lib/gtm";

const WHATSAPP_BRUNCH =
  "https://api.whatsapp.com/send/?phone=573183534907&text=Hola%2C+vengo+de+la+pagina+de+brunch+de+sabinebistro.com+y+me+gustaria+reservar+brunch+en+Sabine&type=phone_number&app_absent=0&utm_source=web&utm_medium=cta&utm_campaign=brunch_page";

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7a8b0dc-d2fc-4680-bba4-0c3973a81f9a/id-preview-4ba92d38--a49d1195-b401-4c4d-92d9-615a3fde61f8.lovable.app-1771813080601.png";

const Brunch = () => {
  const { lang, t } = useLanguage();

  const seo = {
    es: {
      title: "Brunch de Bistró Americano en Cartagena Sábados 10:30 a.m. — 1:30 p.m. | Sabine Bistro & Lounge — La Serrezuela",
      description:
        "Brunch de bistró americano los sábados de 10:30 a.m. a 1:30 p.m. en Sabine Bistro & Lounge, La Serrezuela, Cartagena. Cocina contemporánea, coctelería y ambiente único. Reserva tu brunch por WhatsApp.",
    },
    en: {
      title: "American Bistro Brunch in Cartagena Saturdays 10:30 a.m. — 1:30 p.m. | Sabine Bistro & Lounge — Old Town",
      description:
        "American bistro brunch every Saturday from 10:30 a.m. to 1:30 p.m. at Sabine Bistro & Lounge, La Serrezuela, Cartagena old town. Contemporary cuisine, craft cocktails and unique atmosphere. Book on WhatsApp.",
    },
  }[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sabine Bistro & Lounge",
    url: "https://sabinebistro.com/brunch",
    image: OG_IMAGE,
    description: seo.description,
    servesCuisine: ["Brunch", "American Bistro", "Contemporary"],
    priceRange: "$$$",
    telephone: "+57 318 353 4907",
    acceptsReservations: WHATSAPP_BRUNCH,
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
        dayOfWeek: "Saturday",
        opens: "10:30",
        closes: "13:30",
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
        canonical="https://sabinebistro.com/brunch"
        ogImage={OG_IMAGE}
        ogType="restaurant"
        jsonLd={jsonLd}
      />
      <main>
        <Navbar ctaVariant="brunch" />
        <PageHero
          title={t("brunch.hero.title")}
          subtitle={t("brunch.hero.subtitle")}
          ctaLabel={t("brunch.hero.cta")}
          ctaHref={WHATSAPP_BRUNCH}
          onCtaClick={() => trackWhatsAppClick("brunch_hero_cta")}
        />
        <BrunchAbout />
        <BrunchGallery />
        <LocationSection />
        <BrunchCTA />
        <Footer hideFloatingButtons />
      </main>
    </>
  );
};

export default Brunch;
