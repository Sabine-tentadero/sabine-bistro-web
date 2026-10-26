import { useLanguage } from "@/contexts/LanguageContext";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import { trackReservationClick } from "@/lib/gtm";
import { usePrecomproUrl } from "@/lib/attribution";

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7a8b0dc-d2fc-4680-bba4-0c3973a81f9a/id-preview-4ba92d38--a49d1195-b401-4c4d-92d9-615a3fde61f8.lovable.app-1771813080601.png";

const Menu = () => {
  const { lang, t } = useLanguage();
  const precomproUrl = usePrecomproUrl();

  const seo = {
    es: {
      title: "Menú de Sabine Bistro & Lounge | Restaurante en Cartagena, La Serrezuela",
      description:
        "Carta de Sabine Bistro & Lounge, restaurante en Cartagena en La Serrezuela: cortes importados, ahumados, entradas de autor y coctelería. Reserva tu mesa.",
    },
    en: {
      title: "Sabine Bistro & Lounge Menu | Restaurant in Cartagena, La Serrezuela",
      description:
        "Menu of Sabine Bistro & Lounge, a restaurant in Cartagena at La Serrezuela: imported cuts, smoked dishes, signature starters and cocktails. Book your table.",
    },
  }[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: seo.title,
    url: "https://sabinebistro.com/menu",
    inLanguage: lang,
    mainEntityOfPage: "https://sabinebistro.com/menu",
  };

  return (
    <>
      <Seo
        lang={lang}
        title={seo.title}
        description={seo.description}
        canonical="https://sabinebistro.com/menu"
        ogImage={OG_IMAGE}
        jsonLd={jsonLd}
      />
      <main>
        <Navbar ctaVariant="precompro" />
        <PageHero
          title={t("menu.hero.title")}
          subtitle={t("menu.hero.subtitle")}
          ctaLabel={t("menu.hero.cta")}
          ctaHref={precomproUrl}
          onCtaClick={() => trackReservationClick("menu_cta")}
        />
        <div className="bg-primary/10 border-y border-primary/30 py-3 px-6 text-center">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-primary">{t("menu.sample")}</p>
        </div>
        <MenuSection />
        <ReservationSection />
        <Footer />
      </main>
    </>
  );
};

export default Menu;
