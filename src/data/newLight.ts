// NEW LIGHT · New Year's Eve by Sabine (31.12.26)
// Datos tomados solo de las piezas del cliente (creativos/san_silvestre_2026/evento.json).
// Fechas en hora de Bogotá (UTC-5) expresadas en UTC.

export const NEW_LIGHT = {
  // Último instante del precio de lanzamiento: 19-nov 23:59 Bogotá
  launchEndsAt: Date.parse("2026-11-20T05:00:00Z"),
  // El bloque deja de mostrarse: 31-dic 23:59 Bogotá
  showUntil: Date.parse("2027-01-01T05:00:00Z"),
  // Cambiar a true si se agota: el botón pasa a "lista de espera"
  soldOut: false,
  whatsappNumber: "573183534907",
};

type Copy = {
  eyebrow: string;
  subtitle: string;
  highlights: string;
  includesTitle: string;
  includes: string[];
  perPerson: string;
  launchCondition: string;
  launchNext: string;
  regularCondition: string;
  cta: string;
  ctaSoldOut: string;
  details: string;
  hideDetails: string;
  whatsappText: string;
  whatsappTextSoldOut: string;
  restaurantCta: string;
};

export const NEW_LIGHT_COPY: Record<"es" | "en", Copy> = {
  es: {
    eyebrow: "31 · 12 · 26 · Terraza del Ruedo",
    subtitle: "New Year's Eve by Sabine",
    highlights: "Cena por tiempos · Orquesta en vivo · DJ · Espumoso a medianoche",
    includesTitle: "Incluye",
    includes: [
      "Cena gastronómica por tiempos",
      "Charcutería y quesos para la mesa",
      "Orquesta en vivo · DJ",
      "Cotillones · Globo / ritual de deseos",
      "Copa de espumoso a medianoche",
    ],
    perPerson: "por persona",
    launchCondition: "Precio de lanzamiento hasta el 19 de noviembre",
    launchNext: "Desde el 20 de noviembre: $745.000",
    regularCondition: "Aforo limitado",
    cta: "Reservar mi mesa",
    ctaSoldOut: "Lista de espera",
    details: "Ver qué incluye",
    hideDetails: "Ocultar",
    whatsappText:
      "Hola, vengo de sabinebistro.com y quiero reservar mesa para NEW LIGHT, el 31 de diciembre.",
    whatsappTextSoldOut:
      "Hola, vengo de sabinebistro.com y quiero entrar a la lista de espera de NEW LIGHT, el 31 de diciembre.",
    restaurantCta: "Reservar mesa en el restaurante",
  },
  en: {
    eyebrow: "12 · 31 · 26 · Terraza del Ruedo",
    subtitle: "New Year's Eve by Sabine",
    highlights: "Multi-course dinner · Live orchestra · DJ · Sparkling wine at midnight",
    includesTitle: "Includes",
    includes: [
      "Multi-course gastronomic dinner",
      "Charcuterie and cheese for the table",
      "Live orchestra · DJ",
      "Party favors · Wish balloon ritual",
      "Glass of sparkling wine at midnight",
    ],
    perPerson: "per person",
    launchCondition: "Launch price until November 19",
    launchNext: "From November 20: COP 745,000",
    regularCondition: "Limited capacity",
    cta: "Reserve my table",
    ctaSoldOut: "Join the waitlist",
    details: "See what's included",
    hideDetails: "Hide",
    whatsappText:
      "Hi, I'm coming from sabinebistro.com and I'd like to reserve a table for NEW LIGHT on December 31.",
    whatsappTextSoldOut:
      "Hi, I'm coming from sabinebistro.com and I'd like to join the NEW LIGHT waitlist for December 31.",
    restaurantCta: "Book a table at the restaurant",
  },
};

/** Fecha efectiva. Fuera de producción acepta ?nl_fecha=AAAA-MM-DD para revisar cada fase. */
export function newLightNow(): number {
  if (typeof window !== "undefined" && !/(^|\.)sabinebistro\.com$/.test(window.location.hostname)) {
    const f = new URLSearchParams(window.location.search).get("nl_fecha");
    if (f && /^\d{4}-\d{2}-\d{2}$/.test(f)) return Date.parse(`${f}T17:00:00Z`); // mediodía Bogotá
  }
  return Date.now();
}

export function newLightPhase(now: number): "launch" | "regular" | "over" {
  if (now >= NEW_LIGHT.showUntil) return "over";
  return now < NEW_LIGHT.launchEndsAt ? "launch" : "regular";
}

export function newLightPrice(phase: "launch" | "regular", lang: "es" | "en"): string {
  const v = phase === "launch" ? "695.000" : "745.000";
  return lang === "es" ? `$${v}` : `COP ${v.replace(".", ",")}`;
}
