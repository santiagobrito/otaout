import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import "../globals.css";

const BASE_URL = "https://otaout.com";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reservas Directas Alquiler Vacacional | OTAout"
    : "Direct Booking Website for Vacation Rentals | OTAout";

  const description = isEs
    ? "Crea tu web de reservas directas sin comisiones. Integración con Smoobu y Beds24. Tu marca, tu dominio, tus datos. Solicita demo gratis."
    : "Build your direct booking website with zero commissions. Smoobu & Beds24 integration. Your brand, your domain, your data. Request a free demo.";

  const canonicalUrl = isEs ? BASE_URL : `${BASE_URL}/en`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "OTAout",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: isEs
            ? "OTAout - Reservas directas para alquiler vacacional"
            : "OTAout - Direct bookings for vacation rentals",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "es": BASE_URL,
        "en": `${BASE_URL}/en`,
        "x-default": BASE_URL,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const isEs = locale === "es";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OTAout",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: isEs
      ? "Sistema de reservas directas para alquileres vacacionales"
      : "Direct booking system for vacation rentals",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
      url: `${BASE_URL}/#contacto`,
    },
    sameAs: [
      "https://wa.me/34642132279",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Plataforma de reservas directas para alquiler vacacional"
      : "Direct booking platform for vacation rentals",
    description: isEs
      ? "Web de reservas directas a medida con integración PMS (Smoobu, Beds24), pasarela de pago Stripe, SEO técnico y panel de administración."
      : "Custom direct booking website with PMS integration (Smoobu, Beds24), Stripe payment gateway, technical SEO and admin panel.",
    provider: {
      "@type": "Organization",
      name: "OTAout",
    },
    serviceType: isEs ? "Desarrollo web y marketing digital" : "Web development and digital marketing",
    areaServed: {
      "@type": "Place",
      name: "Europe",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEs ? "Servicios OTAout" : "OTAout Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEs ? "Web de reservas directas" : "Direct booking website",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEs ? "Integración PMS (Smoobu, Beds24)" : "PMS Integration (Smoobu, Beds24)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEs ? "SEO y Google Ads para alquiler vacacional" : "SEO & Google Ads for vacation rentals",
          },
        },
      ],
    },
  };

  return (
    <html lang={locale} className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        {/* Google Consent Mode v2 — must load before any gtag/GTM script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'granted',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });

              gtag('set', 'url_passthrough', true);
              gtag('set', 'ads_data_redaction', true);

              try {
                var c = JSON.parse(localStorage.getItem('otaout-consent'));
                if (c) {
                  gtag('consent', 'update', {
                    'analytics_storage': c.analytics ? 'granted' : 'denied',
                    'ad_storage': c.marketing ? 'granted' : 'denied',
                    'ad_user_data': c.marketing ? 'granted' : 'denied',
                    'ad_personalization': c.marketing ? 'granted' : 'denied'
                  });
                }
              } catch(e) {}
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5XXQFD29');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="antialiased pt-[72px]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XXQFD29"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
