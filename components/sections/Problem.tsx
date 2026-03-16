'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

export default function Problem() {
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
      id="problema"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-[1280px]">
        {/* Headline */}
        <h2
          data-reveal
          className="mb-12 max-w-3xl font-syne text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#f5f5f2] opacity-0 translate-y-6 transition-all duration-700 ease-out md:text-[48px]"
        >
          {t.problem.headline}
        </h2>

        {/* Paragraphs */}
        <div className="max-w-3xl space-y-6">
          {t.problem.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              data-reveal
              className="font-spaceGrotesk text-base font-normal leading-[1.7] text-[#888888] opacity-0 translate-y-6 transition-all duration-700 ease-out md:text-lg"
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
