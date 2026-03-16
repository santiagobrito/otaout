'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

export default function Pains() {
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
      id="dolores"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 50%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-[1280px]">
        {/* Section title */}
        <h2
          data-reveal
          className="mb-14 font-syne text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#0F172A] opacity-0 translate-y-6 transition-all duration-700 ease-out md:text-[48px]"
        >
          {t.pains.title}
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.pains.items.map((item, i) => (
            <div
              key={item.number}
              data-reveal
              className={`group rounded-xl border border-black/[0.08] bg-white shadow-sm p-6 opacity-0 translate-y-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#E8440A]/60 hover:shadow-md md:p-8 ${
                i >= 3 ? 'md:col-start-auto lg:col-start-auto' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <p className="mb-4 font-syne text-3xl font-bold text-[#E8440A]">
                {item.number}
              </p>

              {/* Title */}
              <h3 className="mb-3 font-syne text-lg font-bold text-[#0F172A]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-spaceGrotesk text-sm leading-[1.7] text-[#64748B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
