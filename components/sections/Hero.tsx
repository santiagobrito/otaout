'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

export default function Hero() {
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

  // Split headline to color "15%" in orange
  const renderHeadline = (text: string) => {
    const parts = text.split(/(15%)/);
    return parts.map((part, i) =>
      part === '15%' ? (
        <span key={i} className="text-[#E8440A]">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-12"
      style={{
        background:
          'radial-gradient(ellipse at 85% 15%, rgba(232, 68, 10, 0.03) 0%, transparent 60%), #FAFAFA',
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Eyebrow */}
        <p
          data-reveal
          className="mb-6 font-spaceGrotesk text-[11px] font-medium uppercase tracking-[0.2em] text-[#64748B] opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          {t.hero.eyebrow}
        </p>

        {/* Headline */}
        <h1
          data-reveal
          className="mb-6 max-w-4xl font-syne text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0F172A] opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out sm:text-[44px] md:text-[56px] lg:text-[64px]"
        >
          {renderHeadline(t.hero.headline_1)}
          <br />
          {t.hero.headline_2}
        </h1>

        {/* Subtitle */}
        <p
          data-reveal
          className="mb-10 max-w-2xl font-spaceGrotesk text-lg font-normal leading-relaxed text-[#64748B] opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out md:text-xl"
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          data-reveal
          className="mb-20 flex flex-col gap-4 opacity-0 translate-y-6 transition-all duration-700 delay-300 ease-out sm:flex-row sm:items-center sm:gap-6"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-[#E8440A] px-7 py-3.5 font-spaceGrotesk text-base font-semibold text-white transition-colors hover:bg-[#c9380a]"
          >
            {t.hero.cta_primary}
          </a>
          <a
            href="#caso-exito"
            className="inline-flex items-center gap-2 font-spaceGrotesk text-base font-medium text-[#0F172A] transition-colors hover:text-[#E8440A]"
          >
            {t.hero.cta_secondary}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Stats row */}
        <div
          data-reveal
          className="flex flex-col gap-8 opacity-0 translate-y-6 transition-all duration-700 delay-[400ms] ease-out sm:flex-row sm:items-start sm:gap-0"
        >
          {t.hero.stats.map((stat, i) => (
            <div key={i} className="flex items-start sm:flex-1">
              {i > 0 && (
                <div className="mr-8 hidden h-14 w-px bg-[#0F172A]/15 sm:block" />
              )}
              <div className={i > 0 ? 'sm:pl-0' : ''}>
                <p className="font-syne text-4xl font-bold text-[#0F172A] md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-spaceGrotesk text-sm text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
