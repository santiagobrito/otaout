'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { copy as esCopy } from '@/lib/copy/es';
import { copy as enCopy } from '@/lib/copy/en';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  site: z.string().optional(),
  properties: z.string().min(1),
  pms: z.string().min(1),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const locale = useLocale();
  const t = locale === 'en' ? enCopy : esCopy;
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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

  const onSubmit = async (data: ContactFormData) => {
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full rounded-lg border border-black/[0.15] bg-white px-4 py-3 h-12 font-spaceGrotesk text-sm text-[#0F172A] placeholder-[#64748B]/50 outline-none transition-all focus:border-[#E8440A] focus:ring-2 focus:ring-[#E8440A]/10';

  const selectClasses =
    'w-full rounded-lg border border-black/[0.15] bg-white px-4 py-3 h-12 font-spaceGrotesk text-sm text-[#0F172A] outline-none transition-all focus:border-[#E8440A] focus:ring-2 focus:ring-[#E8440A]/10 appearance-none cursor-pointer bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-[length:16px] bg-[right_12px_center] bg-no-repeat';

  const labelClasses = 'mb-1.5 block font-spaceGrotesk text-sm font-medium text-[#64748B]';

  const errorClasses = 'mt-1 font-spaceGrotesk text-xs text-[#E8440A]';

  const requiredLabel = locale === 'en' ? 'This field is required' : 'Este campo es obligatorio';
  const invalidEmail = locale === 'en' ? 'Enter a valid email address' : 'Introduce un email válido';

  return (
    <section
      id="contacto"
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
       <div className="mx-auto max-w-[560px]">
        {/* Headline */}
        <h2
          data-reveal
          className="mb-4 font-syne text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#0F172A] opacity-0 translate-y-6 transition-all duration-700 ease-out md:text-[48px]"
        >
          {t.contact.headline}
        </h2>

        {/* Subtitle */}
        <p
          data-reveal
          className="mb-12 font-spaceGrotesk text-lg text-[#64748B] opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out"
        >
          {t.contact.subtitle}
        </p>

        {/* Form */}
        <form
          data-reveal
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out"
        >
          {/* Honeypot - hidden from humans */}
          <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('website')}
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className={labelClasses}>
              {t.contact.fields.name}
            </label>
            <input
              id="name"
              type="text"
              className={inputClasses}
              aria-required="true"
              {...register('name')}
            />
            {errors.name && (
              <p className={errorClasses} role="alert">{requiredLabel}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              {t.contact.fields.email}
            </label>
            <input
              id="email"
              type="email"
              className={inputClasses}
              aria-required="true"
              {...register('email')}
            />
            {errors.email && (
              <p className={errorClasses} role="alert">{invalidEmail}</p>
            )}
          </div>

          {/* Site */}
          <div>
            <label htmlFor="site" className={labelClasses}>
              {t.contact.fields.site}
            </label>
            <input
              id="site"
              type="url"
              placeholder="https://"
              className={inputClasses}
              {...register('site')}
            />
          </div>

          {/* Properties */}
          <div>
            <label htmlFor="properties" className={labelClasses}>
              {t.contact.fields.properties}
            </label>
            <select
              id="properties"
              className={selectClasses}
              defaultValue=""
              {...register('properties')}
              aria-required="true"
            >
              <option value="" disabled hidden>
                —
              </option>
              {t.contact.fields.propertiesOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-white text-[#0F172A]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.properties && (
              <p className={errorClasses} role="alert">{requiredLabel}</p>
            )}
          </div>

          {/* PMS */}
          <div>
            <label htmlFor="pms" className={labelClasses}>
              {t.contact.fields.pms}
            </label>
            <select
              id="pms"
              className={selectClasses}
              defaultValue=""
              {...register('pms')}
              aria-required="true"
            >
              <option value="" disabled hidden>
                —
              </option>
              {t.contact.fields.pmsOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-white text-[#0F172A]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.pms && (
              <p className={errorClasses} role="alert">{requiredLabel}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClasses}>
              {t.contact.fields.message}
            </label>
            <textarea
              id="message"
              rows={4}
              className={`${inputClasses} !h-auto resize-none`}
              {...register('message')}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-lg bg-[#E8440A] px-7 py-3.5 font-spaceGrotesk text-base font-semibold text-white transition-colors hover:bg-[#c9380a] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '...' : t.contact.fields.submit}
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/34XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 font-spaceGrotesk text-sm text-[#64748B] transition-colors hover:text-[#25D366]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.contact.whatsapp}
          </a>

          {/* Success */}
          {status === 'success' && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4" role="alert">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-green-600">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" fill="currentColor" opacity="0.15"/>
                  <path d="M6.5 10l2.5 2.5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-spaceGrotesk text-sm font-medium text-green-700">
                  {t.contact.success}
                </p>
              </div>
            </div>
          )}

          {/* Error */}
          {status === 'error' && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
              <p className="font-spaceGrotesk text-sm font-medium text-[#E8440A]">
                {locale === 'en'
                  ? 'Something went wrong. Please try again.'
                  : 'Algo ha fallado. Inténtalo de nuevo.'}
              </p>
            </div>
          )}
        </form>
       </div>
      </div>
    </section>
  );
}
