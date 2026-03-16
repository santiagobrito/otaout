'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

export default function Solution() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solucion"
      ref={sectionRef}
      className="relative py-24 md:py-32 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <p
            className="font-spaceGrotesk text-[#E8440A] uppercase tracking-[0.2em] mb-6"
            style={{ fontSize: '11px' }}
          >
            {t.solution.eyebrow}
          </p>

          {/* Headline */}
          <h2 className="font-syne font-bold text-[#f5f5f2] text-[32px] md:text-[48px] leading-tight mb-8">
            {t.solution.headline}
          </h2>

          {/* Description */}
          <p className="font-spaceGrotesk text-[#888888] text-base md:text-lg leading-relaxed mb-6">
            {t.solution.description}
          </p>

          {/* Includes */}
          <p className="font-spaceGrotesk text-[#888888] text-base md:text-lg leading-relaxed">
            {t.solution.includes}
          </p>
        </div>
      </div>
    </section>
  );
}
