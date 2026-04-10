'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';

const CONSENT_KEY = 'otaout-consent';

type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function savePreferences(prefs: ConsentPreferences) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
}

function updateGtagConsent(prefs: ConsentPreferences) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    ad_user_data: prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
  });
}

const copy = {
  es: {
    banner: {
      title: 'Utilizamos cookies',
      description:
        'Usamos cookies propias y de terceros para analizar el uso del sitio, mejorar nuestros servicios y mostrarte publicidad relevante. Puedes aceptar todas, rechazarlas o configurar tus preferencias.',
      acceptAll: 'Aceptar todas',
      rejectAll: 'Rechazar',
      customize: 'Configurar',
      policyLink: 'Política de cookies',
    },
    settings: {
      title: 'Configuración de cookies',
      description:
        'Elige qué categorías de cookies quieres aceptar. Las cookies necesarias no se pueden desactivar.',
      save: 'Guardar preferencias',
      acceptAll: 'Aceptar todas',
      alwaysActive: 'Siempre activas',
      categories: {
        necessary: {
          title: 'Necesarias',
          description:
            'Imprescindibles para el funcionamiento básico del sitio: navegación, idioma y almacenamiento de tus preferencias de cookies.',
        },
        analytics: {
          title: 'Analíticas',
          description:
            'Nos permiten medir el tráfico y entender cómo usas el sitio para mejorarlo (Google Analytics 4). Se implementan con Consent Mode v2 y modelado de datos.',
        },
        marketing: {
          title: 'Marketing',
          description:
            'Utilizadas para medir campañas publicitarias, atribuir conversiones y activar conversiones avanzadas (Google Ads, Meta Ads).',
        },
      },
    },
  },
  en: {
    banner: {
      title: 'We use cookies',
      description:
        'We use our own and third-party cookies to analyze site usage, improve our services and show you relevant advertising. You can accept all, reject them, or configure your preferences.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject',
      customize: 'Configure',
      policyLink: 'Cookie policy',
    },
    settings: {
      title: 'Cookie settings',
      description:
        'Choose which cookie categories you want to accept. Necessary cookies cannot be disabled.',
      save: 'Save preferences',
      acceptAll: 'Accept all',
      alwaysActive: 'Always active',
      categories: {
        necessary: {
          title: 'Necessary',
          description:
            'Essential for the basic functioning of the site: navigation, language, and storage of your cookie preferences.',
        },
        analytics: {
          title: 'Analytics',
          description:
            'Allow us to measure traffic and understand how you use the site to improve it (Google Analytics 4). Implemented with Consent Mode v2 and data modeling.',
        },
        marketing: {
          title: 'Marketing',
          description:
            'Used to track advertising campaigns, attribute conversions and enable enhanced conversions (Google Ads, Meta Ads).',
        },
      },
    },
  },
};

export default function CookieConsent() {
  const locale = useLocale();
  const t = locale === 'en' ? copy.en : copy.es;
  const [view, setView] = useState<'hidden' | 'banner' | 'settings'>('hidden');
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const prefs = getConsentPreferences();
    if (!prefs) {
      setView('banner');
    } else {
      setAnalytics(prefs.analytics);
      setMarketing(prefs.marketing);
    }
  }, []);

  const handleOpenSettings = useCallback(() => {
    setView('settings');
  }, []);

  useEffect(() => {
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, [handleOpenSettings]);

  function applyConsent(prefs: ConsentPreferences) {
    savePreferences(prefs);
    updateGtagConsent(prefs);
    setAnalytics(prefs.analytics);
    setMarketing(prefs.marketing);
    setView('hidden');
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: prefs }));
  }

  function handleAcceptAll() {
    applyConsent({ analytics: true, marketing: true, timestamp: new Date().toISOString() });
  }

  function handleRejectAll() {
    applyConsent({ analytics: false, marketing: false, timestamp: new Date().toISOString() });
  }

  function handleSavePreferences() {
    applyConsent({ analytics, marketing, timestamp: new Date().toISOString() });
  }

  if (view === 'hidden') return null;

  const cookiePolicyHref = locale === 'es' ? '/cookies' : '/en/cookies';

  // Settings panel
  if (view === 'settings') {
    return (
      <div className="fixed inset-0 z-[101] flex items-end justify-center sm:items-center">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setView('banner')} />

        {/* Panel */}
        <div className="relative z-10 w-full max-w-lg rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:m-4">
          <h2 className="font-syne text-lg font-bold text-[#0F172A]">{t.settings.title}</h2>
          <p className="mt-1 text-sm text-[#64748B]">{t.settings.description}</p>

          <div className="mt-5 space-y-4">
            {/* Necessary — always on */}
            <div className="flex items-start justify-between gap-4 rounded-lg border border-black/8 p-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#0F172A]">{t.settings.categories.necessary.title}</p>
                <p className="mt-0.5 text-xs text-[#64748B]">{t.settings.categories.necessary.description}</p>
              </div>
              <span className="shrink-0 rounded-full bg-[#0F172A]/8 px-2.5 py-1 text-xs font-medium text-[#64748B]">
                {t.settings.alwaysActive}
              </span>
            </div>

            {/* Analytics */}
            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-black/8 p-4 transition-colors hover:border-black/16">
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#0F172A]">{t.settings.categories.analytics.title}</p>
                <p className="mt-0.5 text-xs text-[#64748B]">{t.settings.categories.analytics.description}</p>
              </div>
              <div className="relative shrink-0">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="h-6 w-11 rounded-full bg-[#0F172A]/15 transition-colors peer-checked:bg-[#E8440A]" />
                <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
              </div>
            </label>

            {/* Marketing */}
            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-black/8 p-4 transition-colors hover:border-black/16">
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#0F172A]">{t.settings.categories.marketing.title}</p>
                <p className="mt-0.5 text-xs text-[#64748B]">{t.settings.categories.marketing.description}</p>
              </div>
              <div className="relative shrink-0">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="h-6 w-11 rounded-full bg-[#0F172A]/15 transition-colors peer-checked:bg-[#E8440A]" />
                <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              onClick={handleSavePreferences}
              className="rounded-lg border border-black/10 px-4 py-2.5 text-sm font-medium text-[#0F172A] transition-colors hover:border-black/20"
            >
              {t.settings.save}
            </button>
            <button
              onClick={handleAcceptAll}
              className="rounded-lg bg-[#E8440A] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#E8440A]/90"
            >
              {t.settings.acceptAll}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Banner
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1280px] px-6 py-5 md:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0F172A]">{t.banner.title}</p>
            <p className="mt-1 text-sm text-[#64748B]">
              {t.banner.description}{' '}
              <a href={cookiePolicyHref} className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">
                {t.banner.policyLink}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setView('settings')}
              className="rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-[#64748B] transition-colors hover:border-black/20 hover:text-[#0F172A]"
            >
              {t.banner.customize}
            </button>
            <button
              onClick={handleRejectAll}
              className="rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-[#64748B] transition-colors hover:border-black/20 hover:text-[#0F172A]"
            >
              {t.banner.rejectAll}
            </button>
            <button
              onClick={handleAcceptAll}
              className="rounded-lg bg-[#E8440A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#E8440A]/90"
            >
              {t.banner.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
