import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackReservationClick } from "@/lib/gtm";
import { usePrecomproUrl, refreshPrecomproHrefOnClick } from "@/lib/attribution";
import { cartaPara, formatoPrecio, idSeccion, ofertas, RUTA_MENU, type ItemCarta } from "@/lib/carta";

const SITE = "https://sabinebistro.com";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7a8b0dc-d2fc-4680-bba4-0c3973a81f9a/id-preview-4ba92d38--a49d1195-b401-4c4d-92d9-615a3fde61f8.lovable.app-1771813080601.png";

const TEXTOS = {
  es: {
    title: "Menú de Sabine Bistro & Lounge con precios | Restaurante en Cartagena",
    description:
      "Carta de Sabine Bistro & Lounge con precios: entradas, cortes importados, ahumados, pizzas al horno de leña, postres y coctelería de autor. La Serrezuela, Centro Histórico de Cartagena.",
    kicker: "Nuestra carta",
    h1: "Menú",
    h1em: "Sabine",
    lead: "La carta completa con precios vigentes. Pisos 2 y 3 de La Serrezuela, Centro Histórico de Cartagena.",
    secciones: "Secciones del menú",
    precios: "Precios en pesos colombianos (COP).",
    reservar: "Reservar mesa",
  },
  en: {
    title: "Sabine Bistro & Lounge menu with prices | Restaurant in Cartagena",
    description:
      "Sabine Bistro & Lounge menu with prices: starters, imported steaks, smoked dishes, wood-fired pizzas, desserts and signature cocktails. La Serrezuela, Cartagena's Old Town.",
    kicker: "Our menu",
    h1: "Menu",
    h1em: "Sabine",
    lead: "The full menu with current prices. 2nd and 3rd floors of La Serrezuela, Cartagena's Old Town.",
    secciones: "Menu sections",
    precios: "Prices in Colombian pesos (COP).",
    reservar: "Book a table",
  },
};

const Plato = ({ item }: { item: ItemCarta }) => (
  <li className="py-4 border-b border-border/30 break-inside-avoid">
    <div className="flex items-baseline gap-3">
      <h4 className="font-elegant text-lg md:text-xl">{item.nombre}</h4>
      {item.precio != null && (
        <>
          <div className="flex-1 min-w-4 border-b border-dotted border-border/40 translate-y-[-4px]" />
          <span className="font-body text-sm text-primary whitespace-nowrap">{formatoPrecio(item.precio)}</span>
        </>
      )}
    </div>
    {item.descripcion && <p className="font-body text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">{item.descripcion}</p>}
    {item.precios?.length ? (
      <ul className="mt-2 space-y-1">
        {item.precios.map((p) => (
          <li key={p.etiqueta} className="flex items-baseline gap-3 font-body text-xs md:text-sm text-muted-foreground">
            <span>{p.etiqueta}</span>
            <span className="flex-1 min-w-4 border-b border-dotted border-border/30 translate-y-[-4px]" />
            <span className="text-primary whitespace-nowrap">{formatoPrecio(p.precio)}</span>
          </li>
        ))}
      </ul>
    ) : null}
    {item.etiquetas.length > 0 && (
      <p className="mt-2 font-body text-[10px] tracking-[0.2em] uppercase text-primary/80">{item.etiquetas.join(" · ")}</p>
    )}
  </li>
);

const Menu = () => {
  const { pathname } = useLocation();
  // El idioma de esta página sale de la URL (/menu = español, /en/menu = inglés), no del selector guardado.
  const rutaLang: Lang = pathname.startsWith("/en") ? "en" : "es";
  const { lang, setLang } = useLanguage();
  useEffect(() => {
    if (lang !== rutaLang) setLang(rutaLang);
  }, [rutaLang]); // eslint-disable-line react-hooks/exhaustive-deps

  const t = TEXTOS[rutaLang];
  const carta = cartaPara(rutaLang);
  const precomproUrl = usePrecomproUrl();
  const url = SITE + RUTA_MENU[rutaLang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: t.title,
    url,
    inLanguage: rutaLang,
    hasMenuSection: carta.cartas.flatMap((p) =>
      p.secciones.map((s) => ({
        "@type": "MenuSection",
        name: carta.cartas.length > 1 ? `${p.titulo} · ${s.titulo}` : s.titulo,
        hasMenuItem: s.items.map((i) => ({
          "@type": "MenuItem",
          name: i.nombre,
          ...(i.descripcion ? { description: i.descripcion } : {}),
          ...ofertas(i),
        })),
      })),
    ),
  };

  return (
    <>
      <Seo
        lang={rutaLang}
        title={t.title}
        description={t.description}
        canonical={url}
        ogImage={OG_IMAGE}
        jsonLd={jsonLd}
        alternates={{ es: SITE + RUTA_MENU.es, en: SITE + RUTA_MENU.en }}
      />
      <main>
        <Navbar ctaVariant="precompro" />

        <section className="pt-36 md:pt-44 pb-10 px-6 md:px-12 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">{t.kicker}</p>
          <h1 className="font-display text-4xl md:text-6xl font-light">
            {t.h1} <span className="italic text-gold-gradient">{t.h1em}</span>
          </h1>
          <div className="gold-divider mt-6" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-6 max-w-xl mx-auto">{t.lead}</p>
          <a
            href={precomproUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              refreshPrecomproHrefOnClick(e);
              trackReservationClick("menu_cta");
            }}
            className="inline-block mt-8 px-8 py-3 border border-primary text-primary font-body text-xs tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
          >
            {t.reservar}
          </a>
        </section>

        <nav
          aria-label={t.secciones}
          className="sticky top-20 z-30 bg-background/95 backdrop-blur border-y border-border/30 overflow-x-auto"
        >
          <div className="max-w-5xl mx-auto px-6 flex gap-6 py-3 whitespace-nowrap">
            {carta.cartas.flatMap((p) =>
              p.secciones.map((s, j) => (
                <a
                  key={idSeccion(p.id, j)}
                  href={`#${idSeccion(p.id, j)}`}
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors"
                >
                  {s.titulo}
                </a>
              )),
            )}
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-20">
          {carta.cartas.map((p) => (
            <section key={p.id}>
              {carta.cartas.length > 1 && (
                <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12">{p.titulo}</h2>
              )}
              <div className="md:columns-2 md:gap-16">
                {p.secciones.map((s, j) => (
                  <div key={s.titulo + j} id={idSeccion(p.id, j)} className="break-inside-avoid mb-12 scroll-mt-32">
                    <h3 className="font-display text-2xl text-primary mb-2">{s.titulo}</h3>
                    {s.nota && <p className="font-elegant italic text-sm text-muted-foreground mb-2">{s.nota}</p>}
                    <ul>
                      {s.items.map((i, k) => (
                        <Plato key={`${i.nombre}-${k}`} item={i} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="border-t border-border/30 pt-6 font-body text-xs text-muted-foreground space-y-1">
            <p>{t.precios}</p>
            {carta.notas.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Menu;
