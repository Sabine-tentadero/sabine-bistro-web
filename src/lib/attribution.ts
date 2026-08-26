/**
 * Captura click IDs y UTMs de la URL de aterrizaje, los persiste en localStorage
 * con TTL 90 días, y los inyecta como query params al abrir el widget Precompro.
 *
 * Por qué existe:
 * - sabinebistro.com abre el widget en dominio externo (sabine.precompro.com).
 * - Cross-domain linker de GA4 preserva la sesión, pero NO gclid/fbclid/utm_*.
 * - Precompro habilitó (2026-08-26) capturar params del widget URL y devolverlos
 *   en el webhook bajo objeto `Attribution`, PERO solo si sabinebistro.com se los
 *   inyecta al link — no hay auto-magia cross-domain para click IDs.
 *
 * Este módulo hace exactamente eso:
 * 1. capture(): lee params relevantes del window.location.search y guarda en LS
 * 2. buildPrecomproUrl(base): construye URL con los params guardados concatenados
 *
 * Consumido por: HeroSection, Footer, Navbar, ReservationSection.
 */

const STORAGE_KEY = 'sabine_attribution_v1';
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 días (matches Google Ads lookback window)

// Params relevantes para atribución paga.
// Ordenados por prioridad Google (gclid > gbraid > wbraid), luego Meta, Microsoft, UTMs.
const ATTRIBUTION_PARAMS = [
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

type AttributionParam = typeof ATTRIBUTION_PARAMS[number];

interface StoredAttribution {
  params: Partial<Record<AttributionParam, string>>;
  savedAt: number; // epoch ms
}

function safeGetStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function readStored(): StoredAttribution | null {
  const ls = safeGetStorage();
  if (!ls) return null;
  try {
    const raw = ls.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAttribution;
    if (!parsed || typeof parsed.savedAt !== 'number') return null;
    if (Date.now() - parsed.savedAt > TTL_MS) {
      ls.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeStored(params: Partial<Record<AttributionParam, string>>): void {
  const ls = safeGetStorage();
  if (!ls) return;
  try {
    const payload: StoredAttribution = { params, savedAt: Date.now() };
    ls.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // quota exceeded / disabled — silently no-op
  }
}

/**
 * Lee window.location.search y persiste los params relevantes.
 * last-touch: si en la URL actual viene algún param de atribución, sobrescribe
 * todo lo guardado (comportamiento estándar Google Ads last-click).
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  const search = new URLSearchParams(window.location.search);
  const found: Partial<Record<AttributionParam, string>> = {};
  let hasAny = false;
  for (const key of ATTRIBUTION_PARAMS) {
    const v = search.get(key);
    if (v) {
      found[key] = v;
      hasAny = true;
    }
  }
  if (hasAny) writeStored(found);
}

/**
 * Construye URL del widget Precompro concatenando los params de atribución
 * guardados. Si no hay nada guardado, devuelve la base tal cual.
 */
export function buildPrecomproUrl(base: string = 'https://sabine.precompro.com/'): string {
  const stored = readStored();
  if (!stored || !stored.params) return base;
  const url = new URL(base);
  for (const [key, value] of Object.entries(stored.params)) {
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}
