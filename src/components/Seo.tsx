import { Helmet } from "react-helmet-async";

interface SeoProps {
  lang: "es" | "en";
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
  // Páginas con versión en los dos idiomas (URL propia por idioma): hreflang es, en y x-default (español).
  alternates?: { es: string; en: string };
}

const Seo = ({ lang, title, description, canonical, ogImage, ogType = "website", jsonLd, alternates }: SeoProps) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {alternates && <link rel="alternate" hrefLang="es" href={alternates.es} />}
      {alternates && <link rel="alternate" hrefLang="en" href={alternates.en} />}
      {alternates && <link rel="alternate" hrefLang="x-default" href={alternates.es} />}

      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={lang === "es" ? "es_CO" : "en_US"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
