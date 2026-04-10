'use client';

export default function CookieSettingsButton({ locale }: { locale: string }) {
  const isEs = locale === 'es';

  function openSettings() {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  }

  return (
    <button
      onClick={openSettings}
      className="rounded-lg border border-black/10 px-5 py-2.5 text-sm font-medium text-[#0F172A] transition-colors hover:border-[#E8440A] hover:text-[#E8440A]"
    >
      {isEs ? 'Configurar cookies' : 'Configure cookies'}
    </button>
  );
}
