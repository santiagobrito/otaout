import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Calculator from '@/components/sections/Calculator';
import Footer from '@/components/layout/Footer';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  return {
    title: isEs
      ? 'Calculadora de Comisiones OTAs | OTAout'
      : 'OTA Commission Calculator | OTAout',
    description: isEs
      ? 'Calcula cuánto pagas en comisiones a Booking y Airbnb. Descubre cuánto puedes ahorrar con reservas directas.'
      : 'Calculate how much you pay in Booking and Airbnb commissions. Discover how much you could save with direct bookings.',
    robots: { index: true, follow: true },
  };
}

export default async function CalculadoraPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Calculator />
      </main>
      <Footer />
    </>
  );
}
