// Slug pairs ES↔EN for blog articles. Kept as a separate, lightweight file
// (without article content) so client components like LanguageSwitcher can
// import it without pulling the full HTML payload of `articles.ts` into the
// browser bundle.
//
// IMPORTANT: when adding/renaming an article in `articles.ts`, update this list too.

export const blogSlugPairs: ReadonlyArray<{ es: string; en: string }> = [
  { es: "reducir-dependencia-airbnb", en: "reduce-airbnb-dependency" },
  { es: "web-reservas-directas-guia-completa", en: "direct-booking-website-complete-guide" },
  { es: "smoobu-vs-beds24", en: "smoobu-vs-beds24" },
  { es: "seo-alquiler-vacacional", en: "vacation-rental-seo" },
  { es: "calcular-comisiones-airbnb-booking", en: "calculate-airbnb-booking-commissions" },
  { es: "google-ads-apartamentos-turisticos-guia-practica", en: "google-ads-vacation-rentals-practical-guide" },
  { es: "email-marketing-alquiler-vacacional", en: "vacation-rental-email-marketing" },
  { es: "upselling-alquiler-vacacional-extras", en: "vacation-rental-upselling-extras" },
  { es: "checkin-online-alquiler-vacacional-guia", en: "online-checkin-vacation-rental-guide" },
  { es: "conseguir-resenas-web-reservas-directas", en: "get-reviews-direct-booking-website" },
  { es: "channel-manager-vs-motor-reservas", en: "channel-manager-vs-booking-engine" },
  { es: "estrategia-precios-dinamica-alquiler-vacacional", en: "dynamic-pricing-strategy-vacation-rentals" },
  { es: "marketing-redes-sociales-alquiler-vacacional", en: "social-media-marketing-vacation-rentals" },
  { es: "pasarela-pago-reservas-directas-stripe-paypal-redsys", en: "payment-gateway-direct-bookings-stripe-paypal-redsys" },
  { es: "schema-markup-alquiler-vacacional-guia-seo", en: "schema-markup-vacation-rental-seo-guide" },
  { es: "fotografia-apartamentos-turisticos", en: "vacation-rental-photography" },
  { es: "late-checkout-early-checkin-upselling", en: "late-checkout-early-checkin-upselling" },
  { es: "web-propia-vs-airbnb-comparativa", en: "own-website-vs-airbnb-comparison" },
  { es: "metricas-clave-alquiler-vacacional", en: "key-metrics-vacation-rentals" },
  { es: "automatizacion-alquiler-vacacional", en: "vacation-rental-automation" },
];

export function translateBlogSlug(
  slug: string,
  fromLocale: "es" | "en",
  toLocale: "es" | "en"
): string | null {
  if (fromLocale === toLocale) return slug;
  const pair = blogSlugPairs.find((p) => p[fromLocale] === slug);
  return pair ? pair[toLocale] : null;
}
