'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#E8440A] shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function CaseStudy() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const sectionRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-6');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.index ? parseInt(el.dataset.index) * 80 : 0;
            setTimeout(() => {
              el.classList.add('opacity-100', 'translate-y-0');
              el.classList.remove('opacity-0', 'translate-y-4');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    specsRef.current.forEach((spec) => {
      if (spec) observer.observe(spec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="caso-exito"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#F0F0ED' }}
    >
      <div
        ref={sectionRef}
        className="mx-auto max-w-[1280px] px-6 md:px-12 opacity-0 translate-y-6 transition-all duration-700 ease-out"
      >
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p
            className="font-spaceGrotesk text-[#E8440A] uppercase tracking-[0.2em] mb-6"
            style={{ fontSize: '11px' }}
          >
            {t.caseStudy.eyebrow}
          </p>

          {/* Headline */}
          <h2 className="font-syne font-bold text-[#0F172A] text-[32px] md:text-[48px] leading-tight mb-8">
            {t.caseStudy.headline}
          </h2>

          {/* Description */}
          <p className="font-spaceGrotesk text-[#64748B] text-base md:text-lg leading-relaxed mb-12">
            {t.caseStudy.description}
          </p>
        </div>

        {/* Specs grid */}
        <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.caseStudy.specs.map((spec, i) => (
            <div
              key={i}
              ref={(el) => { specsRef.current[i] = el; }}
              data-index={i}
              className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-400 ease-out"
            >
              <CheckIcon />
              <span className="font-spaceGrotesk text-[#0F172A] text-sm leading-snug">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
