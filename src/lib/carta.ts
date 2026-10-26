// Carta de Sabine en HTML (fuente: el menú en PDF). Español en carta-sabine.json (precios incluidos);
// inglés en carta-sabine.en.json: solo textos, en el mismo orden, montados encima del español.
import carta from "@/data/carta-sabine.json";
import cartaEn from "@/data/carta-sabine.en.json";
import type { Lang } from "@/contexts/LanguageContext";

export interface PrecioVariante {
  etiqueta: string;
  precio: number;
}

export interface ItemCarta {
  nombre: string;
  descripcion: string | null;
  precio: number | null;
  precios: PrecioVariante[] | null;
  etiquetas: string[];
}

export interface SeccionCarta {
  titulo: string;
  nota: string | null;
  items: ItemCarta[];
}

export interface Parte {
  id: string;
  titulo: string;
  secciones: SeccionCarta[];
}

export interface Carta {
  cartas: Parte[];
  notas: string[];
}

interface CartaEn {
  cartas: { titulo: string; secciones: { titulo: string; nota: string | null; items: { nombre: string; descripcion: string | null; precios: string[] | null }[] }[] }[];
  notas: string[];
}

const ES = carta as unknown as Carta;

function traducir(es: Carta, en: CartaEn): Carta {
  const cuadra =
    en.cartas.length === es.cartas.length &&
    es.cartas.every(
      (p, i) =>
        en.cartas[i].secciones.length === p.secciones.length &&
        p.secciones.every((s, j) => en.cartas[i].secciones[j].items.length === s.items.length),
    );
  // Si la traducción no cuadra con la carta (se agregó o quitó un plato), se muestra en español antes que un precio cruzado.
  if (!cuadra) return es;
  return {
    notas: en.notas.length === es.notas.length ? en.notas : es.notas,
    cartas: es.cartas.map((p, i) => ({
      ...p,
      titulo: en.cartas[i].titulo,
      secciones: p.secciones.map((s, j) => {
        const sEn = en.cartas[i].secciones[j];
        return {
          ...s,
          titulo: sEn.titulo,
          nota: sEn.nota,
          items: s.items.map((it, k) => {
            const iEn = sEn.items[k];
            return {
              ...it,
              nombre: iEn.nombre,
              descripcion: iEn.descripcion,
              precios: it.precios?.map((v, n) => ({ ...v, etiqueta: iEn.precios?.[n] ?? v.etiqueta })) ?? null,
            };
          }),
        };
      }),
    })),
  };
}

const EN = traducir(ES, cartaEn as CartaEn);

export const cartaPara = (lang: Lang): Carta => (lang === "en" ? EN : ES);

export const formatoPrecio = (n: number) => `$${n.toLocaleString("es-CO")}`;

export const idSeccion = (parte: string, i: number) => `${parte}-${i + 1}`;

export const ofertas = (i: ItemCarta) =>
  i.precio != null
    ? { offers: { "@type": "Offer", price: i.precio, priceCurrency: "COP" } }
    : i.precios?.length
      ? { offers: i.precios.map((p) => ({ "@type": "Offer", name: p.etiqueta, price: p.precio, priceCurrency: "COP" })) }
      : {};

/** Ruta del menú en cada idioma (hreflang). */
export const RUTA_MENU: Record<Lang, string> = { es: "/menu", en: "/en/menu" };
