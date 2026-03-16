'use client';

import { useLocale } from 'next-intl';
import Logo from '@/components/shared/Logo';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

export default function Footer() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;

  return (
    <footer className="border-t border-white/5 bg-[rgba(255,255,255,0.02)]">
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
        {/* Top row: Logo + tagline */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="max-w-md text-sm text-[#888888]">{t.footer.tagline}</p>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/5" />

        {/* Bottom row: Legal + Copyright */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {t.footer.legal.map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-[#888888] transition-colors hover:text-[#f5f5f2]"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-xs text-[#888888]">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
