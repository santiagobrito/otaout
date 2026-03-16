import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    ? "OTAout - Reservas directas para alquileres vacacionales"
    : "OTAout - Direct bookings for vacation rentals";

  const description = isEs
    ? "Libera tu alquiler vacacional de las OTAs. Sistema de reservas directas, sin comisiones, con control total sobre tus huespedes y tu marca."
    : "Free your vacation rental from OTAs. Direct booking system, no commissions, full control over your guests and your brand.";

  return {
    title,
    description,
    metadataBase: new URL("https://otaout.com"),
    openGraph: {
      title,
      description,
      url: "https://otaout.com",
      siteName: "OTAout",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: "https://otaout.com",
      languages: {
        es: "https://otaout.com",
        en: "https://otaout.com/en",
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

  return (
    <html lang={locale} className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OTAout",
              url: "https://otaout.com",
              description:
                locale === "es"
                  ? "Sistema de reservas directas para alquileres vacacionales"
                  : "Direct booking system for vacation rentals",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-[1280px] mx-auto">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
