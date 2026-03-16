'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

export default function WhyUs() {
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
      id="por-que"
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
       <div className="max-w-3xl">
        {/* Title */}
        <h2
          data-reveal
          className="mb-4 font-syne text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#0F172A] opacity-0 translate-y-6 transition-all duration-700 ease-out md:text-[48px]"
        >
          {t.whyUs.title}
        </h2>

        {/* Subtitle */}
        <p
          data-reveal
          className="mb-12 font-spaceGrotesk text-lg text-[#64748B] opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out md:text-xl"
        >
          {t.whyUs.subtitle}
        </p>

        {/* Points */}
        <ul className="flex flex-col gap-6">
          {t.whyUs.points.map((point, i) => (
            <li
              key={i}
              data-reveal
              className={`flex items-start gap-4 opacity-0 translate-y-6 transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Check icon */}
              <span className="mt-1 flex-shrink-0 text-[#E8440A]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10.5L8 14.5L16 6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="font-spaceGrotesk text-base leading-relaxed text-[#64748B] md:text-lg">
                {point}
              </p>
            </li>
          ))}
        </ul>
       </div>
      </div>
    </section>
  );
}
