import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 301 redirects: old Spanish slugs under /en/ → new English slugs
      { source: "/en/blog/reducir-dependencia-airbnb", destination: "/en/blog/reduce-airbnb-dependency", permanent: true },
      { source: "/en/blog/web-reservas-directas-guia-completa", destination: "/en/blog/direct-booking-website-complete-guide", permanent: true },
      { source: "/en/blog/seo-alquiler-vacacional", destination: "/en/blog/vacation-rental-seo", permanent: true },
      { source: "/en/blog/calcular-comisiones-airbnb-booking", destination: "/en/blog/calculate-airbnb-booking-commissions", permanent: true },
      { source: "/en/blog/google-ads-apartamentos-turisticos-guia-practica", destination: "/en/blog/google-ads-vacation-rentals-practical-guide", permanent: true },
      { source: "/en/blog/email-marketing-alquiler-vacacional", destination: "/en/blog/vacation-rental-email-marketing", permanent: true },
      { source: "/en/blog/upselling-alquiler-vacacional-extras", destination: "/en/blog/vacation-rental-upselling-extras", permanent: true },
      { source: "/en/blog/checkin-online-alquiler-vacacional-guia", destination: "/en/blog/online-checkin-vacation-rental-guide", permanent: true },
      { source: "/en/blog/conseguir-resenas-web-reservas-directas", destination: "/en/blog/get-reviews-direct-booking-website", permanent: true },
      { source: "/en/blog/channel-manager-vs-motor-reservas", destination: "/en/blog/channel-manager-vs-booking-engine", permanent: true },
      { source: "/en/blog/estrategia-precios-dinamica-alquiler-vacacional", destination: "/en/blog/dynamic-pricing-strategy-vacation-rentals", permanent: true },
      { source: "/en/blog/marketing-redes-sociales-alquiler-vacacional", destination: "/en/blog/social-media-marketing-vacation-rentals", permanent: true },
      { source: "/en/blog/pasarela-pago-reservas-directas-stripe-paypal-redsys", destination: "/en/blog/payment-gateway-direct-bookings-stripe-paypal-redsys", permanent: true },
      { source: "/en/blog/schema-markup-alquiler-vacacional-guia-seo", destination: "/en/blog/schema-markup-vacation-rental-seo-guide", permanent: true },
      { source: "/en/blog/fotografia-apartamentos-turisticos", destination: "/en/blog/vacation-rental-photography", permanent: true },
      { source: "/en/blog/web-propia-vs-airbnb-comparativa", destination: "/en/blog/own-website-vs-airbnb-comparison", permanent: true },
      { source: "/en/blog/metricas-clave-alquiler-vacacional", destination: "/en/blog/key-metrics-vacation-rentals", permanent: true },
      { source: "/en/blog/automatizacion-alquiler-vacacional", destination: "/en/blog/vacation-rental-automation", permanent: true },
      // smoobu-vs-beds24 and late-checkout-early-checkin-upselling have same slug in both languages, no redirect needed
    ];
  },
};

export default withNextIntl(nextConfig);
