'use client';

import { useState, useCallback } from 'react';
import { useLocale } from 'next-intl';
import Logo from '@/components/shared/Logo';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

const NAV_HREFS = [
  '#problema',
  '#solucion',
  '#features',
  '#caso-exito',
  '#precios',
  '#contacto',
];

export default function Navbar() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo />
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {t.nav.links.map((label, i) => (
              <a
                key={NAV_HREFS[i]}
                href={NAV_HREFS[i]}
                onClick={(e) => handleAnchorClick(e, NAV_HREFS[i])}
                className="text-sm font-medium text-[#888888] transition-colors hover:text-[#f5f5f2]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <a
              href="#contacto"
              onClick={(e) => handleAnchorClick(e, '#contacto')}
              className="rounded-lg bg-[#E8440A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#E8440A]/90"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#f5f5f2] transition-all duration-300 ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#f5f5f2] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#f5f5f2] transition-all duration-300 ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#0a0a0a]/98 backdrop-blur-xl pt-20 lg:hidden">
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {t.nav.links.map((label, i) => (
              <a
                key={NAV_HREFS[i]}
                href={NAV_HREFS[i]}
                onClick={(e) => handleAnchorClick(e, NAV_HREFS[i])}
                className="text-xl font-medium text-[#f5f5f2] transition-colors hover:text-[#E8440A]"
              >
                {label}
              </a>
            ))}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
            <a
              href="#contacto"
              onClick={(e) => handleAnchorClick(e, '#contacto')}
              className="mt-2 rounded-lg bg-[#E8440A] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#E8440A]/90"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
