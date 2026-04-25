'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { translateBlogSlug } from '@/lib/blog/slug-pairs';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export default function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: 'es' | 'en') {
    if (newLocale === locale) return;

    // Blog article pages have different slugs per locale — translate the slug
    // before navigating so we don't land on a 404. `usePathname()` from
    // next-intl returns the path with the locale prefix stripped.
    const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
    if (blogMatch) {
      const translated = translateBlogSlug(
        blogMatch[1],
        locale as 'es' | 'en',
        newLocale
      );
      if (translated) {
        router.replace(`/blog/${translated}`, { locale: newLocale });
        return;
      }
      // Unknown slug → fall back to the blog index in the target locale
      router.replace('/blog', { locale: newLocale });
      return;
    }

    router.replace(pathname, { locale: newLocale });
  }

  const activeColor = variant === 'light' ? 'text-[#0F172A]' : 'text-[#f5f5f2]';
  const inactiveColor = variant === 'light' ? 'text-[#64748B]' : 'text-[#888888]';
  const hoverColor = variant === 'light' ? 'hover:text-[#0F172A]' : 'hover:text-[#f5f5f2]';
  const dividerColor = variant === 'light' ? 'text-[#64748B]' : 'text-[#888888]';

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale('es')}
        aria-label="Cambiar a español"
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === 'es' ? activeColor : `${inactiveColor} ${hoverColor}`
        }`}
      >
        ES
      </button>
      <span className={dividerColor} aria-hidden="true">|</span>
      <button
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === 'en' ? activeColor : `${inactiveColor} ${hoverColor}`
        }`}
      >
        EN
      </button>
    </div>
  );
}
