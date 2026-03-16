'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

const COOKIE_CONSENT_KEY = 'otaout-cookie-consent';

export type ConsentStatus = 'accepted' | 'declined' | null;

export function getConsentStatus(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === 'accepted' || value === 'declined') return value;
  return null;
}

export default function CookieConsent() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsentStatus();
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: 'accepted' }));
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: 'declined' }));
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-between md:px-12">
        <p className="text-sm text-[#64748B] max-w-2xl">
          {t.cookie?.message ??
            'Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio.'}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-[#64748B] transition-colors hover:border-black/20 hover:text-[#0F172A]"
          >
            {t.cookie?.decline ?? 'Rechazar'}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-[#E8440A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#E8440A]/90"
          >
            {t.cookie?.accept ?? 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  );
}
