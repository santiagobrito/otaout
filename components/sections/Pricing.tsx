'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

export default function Pricing() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="precios"
      ref={sectionRef}
      className="px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Title */}
        <h2
          data-reveal
          className="mb-16 text-center font-syne text-3xl font-extrabold tracking-tight text-[#f5f5f2] opacity-0 translate-y-6 transition-all duration-700 ease-out md:text-5xl"
        >
          {t.pricing.title}
        </h2>

        {/* Cards */}
        <div
          data-reveal
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out md:grid-cols-2"
        >
          {/* Fixed Model */}
          <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-8">
            <h3 className="mb-6 font-syne text-xl font-bold text-[#f5f5f2]">
              {t.pricing.fixed.name}
            </h3>

            <ul className="mb-8 flex flex-1 flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#888888]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-spaceGrotesk text-sm text-[#f5f5f2]">
                  {t.pricing.fixed.setup}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#888888]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-spaceGrotesk text-sm text-[#f5f5f2]">
                  {t.pricing.fixed.monthly}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#888888]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-spaceGrotesk text-sm text-[#f5f5f2]">
                  {t.pricing.fixed.ads}
                </span>
              </li>
            </ul>

            <p className="mb-8 font-spaceGrotesk text-sm text-[#888888]">
              {t.pricing.fixed.description}
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg border border-white/[0.15] px-6 py-3 font-spaceGrotesk text-sm font-semibold text-[#f5f5f2] transition-colors hover:border-[#E8440A] hover:text-[#E8440A]"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mixed Model (Recommended) */}
          <div className="relative flex flex-col rounded-xl border border-[#E8440A] bg-[rgba(255,255,255,0.03)] p-8">
            {/* Badge */}
            <span className="absolute -top-3 right-6 rounded-full bg-[#E8440A] px-4 py-1 font-spaceGrotesk text-xs font-semibold text-white">
              {t.pricing.mixed.badge}
            </span>

            <h3 className="mb-6 font-syne text-xl font-bold text-[#f5f5f2]">
              {t.pricing.mixed.name}
            </h3>

            <ul className="mb-8 flex flex-1 flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#E8440A]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-spaceGrotesk text-sm text-[#f5f5f2]">
                  {t.pricing.mixed.setup}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#E8440A]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-spaceGrotesk text-sm text-[#f5f5f2]">
                  {t.pricing.mixed.monthly}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#E8440A]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-spaceGrotesk text-sm text-[#f5f5f2]">
                  {t.pricing.mixed.commission}
                </span>
              </li>
            </ul>

            <p className="mb-8 font-spaceGrotesk text-sm text-[#888888]">
              {t.pricing.mixed.description}
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-[#E8440A] px-6 py-3 font-spaceGrotesk text-sm font-semibold text-white transition-colors hover:bg-[#c9380a]"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        {/* ROI */}
        <p
          data-reveal
          className="mx-auto mt-12 max-w-2xl text-center font-spaceGrotesk text-sm leading-relaxed text-[#888888] opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out"
        >
          {t.pricing.roi}
        </p>
      </div>
    </section>
  );
}
