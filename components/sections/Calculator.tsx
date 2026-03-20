'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

/* ─────────────────────────────────────────────
 * CONFIGURABLE RATES — edit these as needed
 * ───────────────────────────────────────────── */
const RATES = {
  booking: 0.15,           // 15% Booking.com commission
  bookingPayment: 0.022,   // 2.2% Booking payment processing
  airbnb: 0.155,           // 15.5% Airbnb host-only fee
  otaoutCommission: 0.03,  // 3% OTAout commission on web bookings only
  otaoutSetup: 1500,       // First year setup fee (€)
  otaoutMonthly: 150,      // Monthly maintenance fee (€)
  paymentProcessing: 0.02, // ~2% Stripe/payment gateway for direct bookings
};

/* ─────────────────────────────────────────────
 * Defaults for the form
 * ───────────────────────────────────────────── */
const DEFAULTS = {
  properties: 15,
  avgNight: 120,
  occupancy: 70,
  avgStay: 4,
  bookingShare: 45,
  airbnbShare: 40,
  directShare: 15,
  directGoal: 35,
};

function fmt(n: number): string {
  return n.toLocaleString('es-ES', { maximumFractionDigits: 0 });
}

type SliderProps = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  prefix?: string;
  accent?: boolean;
};

function Slider({ label, value, onChange, min, max, step = 1, suffix = '', prefix = '', accent = false }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="group">
      <div className="mb-2 flex items-baseline justify-between">
        <label className="font-spaceGrotesk text-sm font-medium text-[#64748B]">
          {label}
        </label>
        <span className={`font-syne text-lg font-bold ${accent ? 'text-[#E8440A]' : 'text-[#0F172A]'}`}>
          {prefix}{fmt(value)}{suffix}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input w-full cursor-pointer appearance-none bg-transparent"
          style={{
            '--progress': `${pct}%`,
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number>();

  useEffect(() => {
    const start = display;
    const end = value;
    const duration = 400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{prefix}{fmt(display)}{suffix}</>;
}

export default function Calculator() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const c = t.calculator;
  const sectionRef = useRef<HTMLElement>(null);

  const [properties, setProperties] = useState(DEFAULTS.properties);
  const [avgNight, setAvgNight] = useState(DEFAULTS.avgNight);
  const [occupancy, setOccupancy] = useState(DEFAULTS.occupancy);
  const [avgStay, setAvgStay] = useState(DEFAULTS.avgStay);
  const [bookingShare, setBookingShare] = useState(DEFAULTS.bookingShare);
  const [airbnbShare, setAirbnbShare] = useState(DEFAULTS.airbnbShare);
  const [directShare, setDirectShare] = useState(DEFAULTS.directShare);
  const [directGoal, setDirectGoal] = useState(DEFAULTS.directGoal);
  const [showResults, setShowResults] = useState(false);

  const directShareCurrent = directShare;

  // Calculations
  const nightsPerProperty = 365 * (occupancy / 100);
  const bookingsPerProperty = nightsPerProperty / avgStay;
  const totalBookings = bookingsPerProperty * properties;
  const revenuePerBooking = avgNight * avgStay;
  const annualRevenue = totalBookings * revenuePerBooking;

  // Current costs
  const bookingRevenue = annualRevenue * (bookingShare / 100);
  const airbnbRevenue = annualRevenue * (airbnbShare / 100);
  const bookingCost = bookingRevenue * (RATES.booking + RATES.bookingPayment);
  const airbnbCost = airbnbRevenue * RATES.airbnb;
  const totalOtaCost = bookingCost + airbnbCost;

  // New scenario: shift some OTA bookings to direct
  const directIncrease = Math.max(0, directGoal - directShareCurrent);
  // Reduce proportionally from Booking and Airbnb
  const otaTotal = bookingShare + airbnbShare;
  const bookingReduction = otaTotal > 0 ? directIncrease * (bookingShare / otaTotal) : 0;
  const airbnbReduction = otaTotal > 0 ? directIncrease * (airbnbShare / otaTotal) : 0;
  const newBookingShare = Math.max(0, bookingShare - bookingReduction);
  const newAirbnbShare = Math.max(0, airbnbShare - airbnbReduction);
  const newDirectShare = directGoal;

  const newBookingRevenue = annualRevenue * (newBookingShare / 100);
  const newAirbnbRevenue = annualRevenue * (newAirbnbShare / 100);
  const newDirectRevenue = annualRevenue * (newDirectShare / 100);
  const newBookingCost = newBookingRevenue * (RATES.booking + RATES.bookingPayment);
  const newAirbnbCost = newAirbnbRevenue * RATES.airbnb;

  // OTAout costs
  const otaoutCommissionCost = newDirectRevenue * RATES.otaoutCommission;
  const otaoutAnnualMaintenance = RATES.otaoutMonthly * 12;
  const otaoutFirstYearTotal = RATES.otaoutSetup + otaoutAnnualMaintenance + otaoutCommissionCost;
  const paymentProcessingCost = newDirectRevenue * RATES.paymentProcessing;

  const newTotalCost = newBookingCost + newAirbnbCost + otaoutFirstYearTotal + paymentProcessingCost;
  const annualSavings = totalOtaCost - newTotalCost;
  const savingsPercent = totalOtaCost > 0 ? (annualSavings / totalOtaCost) * 100 : 0;
  const savingsPerProperty = properties > 0 ? annualSavings / properties : 0;

  // Scroll-reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = el.querySelectorAll('[data-reveal]');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const handleCalculate = useCallback(() => {
    setShowResults(true);
    // Scroll to results on mobile
    setTimeout(() => {
      const el = document.getElementById('calc-results');
      if (el && window.innerWidth < 1024) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16" data-reveal>
          <p className="mb-4 font-spaceGrotesk text-[11px] font-medium uppercase tracking-[0.2em] text-[#E8440A] opacity-0 translate-y-6 transition-all duration-700 ease-out">
            {c.eyebrow}
          </p>
          <h1
            data-reveal
            className="mb-4 font-syne text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0F172A] opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out sm:text-[40px] md:text-[52px]"
          >
            {c.headline}
          </h1>
          <p
            data-reveal
            className="mx-auto max-w-2xl font-spaceGrotesk text-lg text-[#64748B] opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out"
          >
            {c.subtitle}
          </p>
        </div>

        {/* Calculator grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT: Inputs */}
          <div
            data-reveal
            className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out md:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FCE8E2]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8440A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10"/>
                  <path d="M18 20V4"/>
                  <path d="M6 20v-4"/>
                </svg>
              </div>
              <h2 className="font-syne text-xl font-bold text-[#0F172A]">
                {locale === 'en' ? 'Your numbers' : 'Tus datos'}
              </h2>
            </div>

            <div className="flex flex-col gap-7">
              <Slider
                label={c.form.properties}
                value={properties}
                onChange={setProperties}
                min={1}
                max={200}
              />
              <Slider
                label={c.form.avgNight}
                value={avgNight}
                onChange={setAvgNight}
                min={30}
                max={500}
                step={5}
                suffix="€"
              />
              <Slider
                label={c.form.occupancy}
                value={occupancy}
                onChange={setOccupancy}
                min={20}
                max={100}
                suffix="%"
              />
              <Slider
                label={c.form.avgStay}
                value={avgStay}
                onChange={setAvgStay}
                min={1}
                max={14}
                suffix={locale === 'en' ? ' nights' : ' noches'}
              />

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

              <p className="font-spaceGrotesk text-xs font-medium uppercase tracking-[0.15em] text-[#64748B]">
                {locale === 'en' ? 'Channel distribution' : 'Distribución por canal'}
              </p>

              <Slider
                label={c.form.bookingShare}
                value={bookingShare}
                onChange={(v) => {
                  const remaining = 100 - airbnbShare - directShare;
                  setBookingShare(Math.min(v, Math.max(0, remaining + bookingShare)));
                  const newRemaining = 100 - Math.min(v, Math.max(0, remaining + bookingShare)) - airbnbShare;
                  if (directShare > newRemaining + directShare) setDirectShare(Math.max(0, newRemaining + directShare));
                }}
                min={0}
                max={100 - airbnbShare - directShare}
                suffix="%"
              />
              <Slider
                label={c.form.airbnbShare}
                value={airbnbShare}
                onChange={(v) => {
                  setAirbnbShare(Math.min(v, 100 - bookingShare - directShare));
                }}
                min={0}
                max={100 - bookingShare - directShare}
                suffix="%"
              />
              <Slider
                label={c.form.directShare}
                value={directShare}
                onChange={(v) => {
                  const newDirect = Math.min(v, 100 - bookingShare - airbnbShare);
                  setDirectShare(newDirect);
                  if (directGoal < newDirect) setDirectGoal(newDirect);
                }}
                min={0}
                max={100 - bookingShare - airbnbShare}
                suffix="%"
              />

              {/* Sum indicator */}
              {bookingShare + airbnbShare + directShare < 100 && (
                <p className="font-spaceGrotesk text-xs text-[#E8440A]">
                  {locale === 'en'
                    ? `${100 - bookingShare - airbnbShare - directShare}% unassigned — other channels (Vrbo, direct phone, etc.)`
                    : `${100 - bookingShare - airbnbShare - directShare}% sin asignar — otros canales (Vrbo, teléfono, etc.)`}
                </p>
              )}

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

              <Slider
                label={c.form.directGoal}
                value={directGoal}
                onChange={setDirectGoal}
                min={directShare}
                max={Math.min(80, directShare + bookingShare + airbnbShare)}
                suffix="%"
                accent
              />

              {/* Calculate button */}
              <button
                onClick={handleCalculate}
                className="mt-2 w-full rounded-lg bg-[#E8440A] px-7 py-4 font-spaceGrotesk text-base font-semibold text-white transition-all hover:bg-[#c9380a] hover:shadow-lg hover:shadow-[#E8440A]/20 active:scale-[0.98]"
              >
                {locale === 'en' ? 'Calculate savings' : 'Calcular ahorro'}
              </button>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div id="calc-results" className="flex flex-col gap-6">
            {!showResults ? (
              <div
                data-reveal
                className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-black/[0.1] bg-white/50 p-8 opacity-0 translate-y-6 transition-all duration-700 delay-300 ease-out"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FCE8E2]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8440A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2"/>
                    <line x1="8" y1="6" x2="16" y2="6"/>
                    <line x1="8" y1="10" x2="16" y2="10"/>
                    <line x1="8" y1="14" x2="12" y2="14"/>
                  </svg>
                </div>
                <p className="text-center font-spaceGrotesk text-base text-[#64748B]">
                  {locale === 'en'
                    ? 'Adjust the sliders and hit calculate to see your results'
                    : 'Ajusta los datos y pulsa calcular para ver tus resultados'}
                </p>
              </div>
            ) : (
              <>
                {/* Revenue card */}
                <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm md:p-8 animate-fade-in-up">
                  <p className="mb-1 font-spaceGrotesk text-sm font-medium text-[#64748B]">
                    {c.results.annual_revenue}
                  </p>
                  <p className="font-syne text-3xl font-bold text-[#0F172A] md:text-4xl">
                    <AnimatedNumber value={Math.round(annualRevenue)} suffix="€" />
                  </p>
                  <p className="mt-1 font-spaceGrotesk text-xs text-[#64748B]">
                    {fmt(Math.round(totalBookings))} {locale === 'en' ? 'bookings/year' : 'reservas/año'} &middot; {fmt(Math.round(revenuePerBooking))}€/{locale === 'en' ? 'booking' : 'reserva'}
                  </p>
                </div>

                {/* Current OTA costs */}
                <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6 md:p-8 animate-fade-in-up animation-delay-100">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <h3 className="font-syne text-lg font-bold text-[#0F172A]">{c.results.current}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-spaceGrotesk text-sm text-[#64748B]">{c.results.bookingCost}</span>
                      <span className="font-spaceGrotesk text-sm font-semibold text-[#0F172A]">
                        <AnimatedNumber value={Math.round(bookingCost)} suffix="€" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-spaceGrotesk text-sm text-[#64748B]">{c.results.airbnbCost}</span>
                      <span className="font-spaceGrotesk text-sm font-semibold text-[#0F172A]">
                        <AnimatedNumber value={Math.round(airbnbCost)} suffix="€" />
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t border-red-200/60 pt-3">
                      <span className="font-spaceGrotesk text-sm font-semibold text-red-600">{c.results.totalOta}</span>
                      <span className="font-syne text-xl font-bold text-red-600">
                        <AnimatedNumber value={Math.round(totalOtaCost)} suffix="€" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* New scenario */}
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 md:p-8 animate-fade-in-up animation-delay-200">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <h3 className="font-syne text-lg font-bold text-[#0F172A]">{c.results.withDirect}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-spaceGrotesk text-sm text-[#64748B]">{c.results.newBookingCost}</span>
                      <span className="font-spaceGrotesk text-sm font-semibold text-[#0F172A]">
                        <AnimatedNumber value={Math.round(newBookingCost)} suffix="€" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-spaceGrotesk text-sm text-[#64748B]">{c.results.newAirbnbCost}</span>
                      <span className="font-spaceGrotesk text-sm font-semibold text-[#0F172A]">
                        <AnimatedNumber value={Math.round(newAirbnbCost)} suffix="€" />
                      </span>
                    </div>

                    {/* OTAout breakdown */}
                    <div className="mt-2 border-t border-emerald-200/60 pt-3">
                      <p className="mb-2 font-spaceGrotesk text-xs font-medium uppercase tracking-[0.1em] text-[#64748B]">
                        {c.results.otaoutCost}
                      </p>
                      <div className="flex flex-col gap-1.5 pl-3">
                        <div className="flex items-center justify-between">
                          <span className="font-spaceGrotesk text-xs text-[#64748B]">{c.results.otaoutSetup}</span>
                          <span className="font-spaceGrotesk text-xs font-medium text-[#0F172A]">{fmt(RATES.otaoutSetup)}€</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-spaceGrotesk text-xs text-[#64748B]">{c.results.otaoutMonthly}</span>
                          <span className="font-spaceGrotesk text-xs font-medium text-[#0F172A]">{fmt(RATES.otaoutMonthly)}€/m = {fmt(otaoutAnnualMaintenance)}€</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-spaceGrotesk text-xs text-[#64748B]">{c.results.otaoutCommission} (3%)</span>
                          <span className="font-spaceGrotesk text-xs font-medium text-[#0F172A]">{fmt(Math.round(otaoutCommissionCost))}€</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-spaceGrotesk text-xs text-[#64748B]">{c.payment_processing_label} (~2%)</span>
                          <span className="font-spaceGrotesk text-xs font-medium text-[#0F172A]">{fmt(Math.round(paymentProcessingCost))}€</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between border-t border-emerald-200/60 pt-3">
                      <span className="font-spaceGrotesk text-sm font-semibold text-emerald-700">{c.results.newTotal}</span>
                      <span className="font-syne text-xl font-bold text-emerald-700">
                        <AnimatedNumber value={Math.round(newTotalCost)} suffix="€" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Savings highlight */}
                {annualSavings > 0 && (
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-6 text-white md:p-8 animate-fade-in-up animation-delay-300">
                    {/* Decorative */}
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#E8440A]/10 blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />

                    <div className="relative">
                      <p className="mb-1 font-spaceGrotesk text-sm font-medium text-white/60">{c.results.savings}</p>
                      <p className="mb-4 font-syne text-4xl font-extrabold md:text-5xl">
                        <AnimatedNumber value={Math.round(annualSavings)} suffix="€" />
                        <span className="ml-2 font-spaceGrotesk text-base font-medium text-emerald-400">
                          /{locale === 'en' ? 'year' : 'año'}
                        </span>
                      </p>

                      <div className="flex flex-wrap gap-6">
                        <div>
                          <p className="font-spaceGrotesk text-xs text-white/50">{c.results.savingsPercent}</p>
                          <p className="font-syne text-2xl font-bold text-emerald-400">
                            <AnimatedNumber value={Math.round(savingsPercent)} suffix="%" />
                          </p>
                        </div>
                        <div>
                          <p className="font-spaceGrotesk text-xs text-white/50">{c.results.perProperty}</p>
                          <p className="font-syne text-2xl font-bold text-[#E8440A]">
                            <AnimatedNumber value={Math.round(savingsPerProperty)} suffix="€" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rates transparency */}
                <div className="rounded-xl bg-[#FAFAFA] px-5 py-4 animate-fade-in-up animation-delay-300">
                  <p className="mb-2 font-spaceGrotesk text-xs font-medium uppercase tracking-[0.1em] text-[#64748B]">
                    {c.rates_note}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 font-spaceGrotesk text-xs text-[#64748B]">
                    <span>{c.booking_rate_label}: {(RATES.booking * 100)}% + {(RATES.bookingPayment * 100)}%</span>
                    <span>{c.airbnb_rate_label}: {(RATES.airbnb * 100)}%</span>
                    <span>{c.otaout_rate_label}: {(RATES.otaoutCommission * 100)}%</span>
                    <span>{c.payment_processing_label}: ~{(RATES.paymentProcessing * 100)}%</span>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="font-spaceGrotesk text-xs leading-relaxed text-[#64748B]/70 animate-fade-in-up animation-delay-300">
                  {c.disclaimer}
                </p>
              </>
            )}
          </div>
        </div>

        {/* CTA section */}
        <div
          data-reveal
          className="mt-16 rounded-2xl border border-black/[0.06] bg-white p-8 text-center shadow-sm opacity-0 translate-y-6 transition-all duration-700 delay-300 ease-out md:mt-24 md:p-12"
        >
          <h2 className="mb-3 font-syne text-[24px] font-bold leading-tight text-[#0F172A] md:text-[32px]">
            {c.cta.headline}
          </h2>
          <p className="mb-8 font-spaceGrotesk text-base text-[#64748B] md:text-lg">
            {c.cta.subtitle}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-[#E8440A] px-8 py-4 font-spaceGrotesk text-base font-semibold text-white transition-all hover:bg-[#c9380a] hover:shadow-lg hover:shadow-[#E8440A]/20"
            >
              {c.cta.button}
            </a>
            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-spaceGrotesk text-sm text-[#64748B] transition-colors hover:text-[#25D366]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {c.cta.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
