// Prerender: arma cada página en el servidor al compilar (scripts/prerender.mjs) para que Google, los rastreadores de IA
// y las vistas previas de WhatsApp reciban el HTML completo, con su title, canonical y hreflang, sin ejecutar JavaScript.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes, Providers } from "./App";
import { idiomaDeRuta } from "./contexts/LanguageContext";

export const rutasPrerender = ["/", "/menu", "/en/menu", "/brunch", "/contacto", "/politica-de-datos"];

export function render(url: string) {
  const contexto: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={contexto}>
      <Providers initialLang={idiomaDeRuta(url) ?? "es"}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </Providers>
    </HelmetProvider>,
  );
  const h = contexto.helmet;
  const head = h ? [h.title, h.meta, h.link, h.script].map((x) => x.toString()).filter(Boolean).join("\n    ") : "";
  const lang = (h?.htmlAttributes.toString().match(/lang="([^"]+)"/) || [])[1] || idiomaDeRuta(url) || "es";
  return { html, head, lang };
}
