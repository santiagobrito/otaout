'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: 'es' | 'en') {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale('es')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === 'es' ? 'text-[#f5f5f2]' : 'text-[#888888] hover:text-[#f5f5f2]'
        }`}
      >
        ES
      </button>
      <span className="text-[#888888]">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === 'en' ? 'text-[#f5f5f2]' : 'text-[#888888] hover:text-[#f5f5f2]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
