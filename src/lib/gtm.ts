// GTM dataLayer helper for Sabine Bistro & Lounge
// Replace GTM-XXXXXXX in index.html with your real container ID.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const pushEvent = (
  event: string,
  payload: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
  });
};

export type ReserveLocation =
  | "hero_cta"
  | "navbar_cta"
  | "mobile_navbar_cta"
  | "section_cta"
  | "floating_cta";

export type WhatsAppLocation = string;

export const trackReservationClick = (location: ReserveLocation) =>
  pushEvent("reservation_click", {
    cta_location: location,
    destination: "precompro",
    outbound: true,
  });

export const trackWhatsAppClick = (location: string = "floating_cta") =>
  pushEvent("whatsapp_click", {
    cta_location: location,
    destination: "whatsapp",
    outbound: true,
  });

export const trackPhoneClick = (location: string) =>
  pushEvent("phone_click", { cta_location: location });

export const trackDirectionsClick = (location: string = "location_section") =>
  pushEvent("directions_click", {
    cta_location: location,
    destination: "google_maps",
    outbound: true,
  });

export const trackLanguageChange = (from: string, to: string) =>
  pushEvent("language_change", { language_from: from, language_to: to });

export const trackSectionView = (section: string) =>
  pushEvent("section_view", { section_name: section });
