'use client';

import { useState, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link as IntlLink } from '@/i18n/navigation';
import Logo from '@/components/shared/Logo';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

const NAV_HREFS = [
  '#problema',
  '#solucion',
  '#features',
  '#caso-exito',
  '/blog',
  '#contacto',
];

export default function Navbar() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check if we're on the homepage
  const isHome = pathname === '/' || pathname === `/${locale}` || pathname === '/es' || pathname === '/en';

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setMobileOpen(false);
      if (!isHome) {
        // Navigate to homepage with hash — don't prevent default
        return;
      }
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [isHome]
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <IntlLink
            href="/"
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            aria-label="OTAout - Home"
          >
            <Logo />
          </IntlLink>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {t.nav.links.map((label, i) => {
              const href = NAV_HREFS[i];
              if (href.startsWith('#')) {
                const fullHref = isHome ? href : `/${href}`;
                return (
                  <a
                    key={href}
                    href={fullHref}
                    onClick={(e) => handleAnchorClick(e, href)}
                    className="text-sm font-medium text-[#64748B] transition-colors hover:text-[#0F172A]"
                  >
                    {label}
                  </a>
                );
              }
              return (
                <IntlLink
                  key={href}
                  href={href}
                  className="text-sm font-medium text-[#64748B] transition-colors hover:text-[#0F172A]"
                >
                  {label}
                </IntlLink>
              );
            })}
          </div>

          {/* Desktop right side */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <a
              href={isHome ? '#contacto' : '/#contacto'}
              onClick={(e) => handleAnchorClick(e, '#contacto')}
              className="rounded-lg bg-[#E8440A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c9380a]"
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
              className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white/98 backdrop-blur-xl pt-20 lg:hidden">
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {t.nav.links.map((label, i) => {
              const href = NAV_HREFS[i];
              if (href.startsWith('#')) {
                const fullHref = isHome ? href : `/${href}`;
                return (
                  <a
                    key={href}
                    href={fullHref}
                    onClick={(e) => handleAnchorClick(e, href)}
                    className="text-xl font-medium text-[#0F172A] transition-colors hover:text-[#E8440A]"
                  >
                    {label}
                  </a>
                );
              }
              return (
                <IntlLink
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-medium text-[#0F172A] transition-colors hover:text-[#E8440A]"
                >
                  {label}
                </IntlLink>
              );
            })}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
            <a
              href={isHome ? '#contacto' : '/#contacto'}
              onClick={(e) => handleAnchorClick(e, '#contacto')}
              className="mt-2 rounded-lg bg-[#E8440A] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#c9380a]"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
