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
    'w-full rounded-lg border border-white/[0.15] bg-transparent p-3 font-spaceGrotesk text-sm text-[#f5f5f2] placeholder-[#888888]/60 outline-none transition-colors focus:border-[#E8440A]';

  const labelClasses = 'mb-1.5 block font-spaceGrotesk text-sm text-[#888888]';

  const errorClasses = 'mt-1 font-spaceGrotesk text-xs text-[#E8440A]';

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[560px]">
        {/* Headline */}
        <h2
          data-reveal
          className="mb-4 font-syne text-3xl font-extrabold tracking-tight text-[#f5f5f2] opacity-0 translate-y-6 transition-all duration-700 ease-out md:text-5xl"
        >
          {t.contact.headline}
        </h2>

        {/* Subtitle */}
        <p
          data-reveal
          className="mb-12 font-spaceGrotesk text-lg text-[#888888] opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out"
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
              {...register('name')}
            />
            {errors.name && (
              <p className={errorClasses}>{t.contact.fields.name}</p>
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
              {...register('email')}
            />
            {errors.email && (
              <p className={errorClasses}>{t.contact.fields.email}</p>
            )}
          </div>

          {/* Properties */}
          <div>
            <label htmlFor="properties" className={labelClasses}>
              {t.contact.fields.properties}
            </label>
            <select
              id="properties"
              className={inputClasses}
              defaultValue=""
              {...register('properties')}
            >
              <option value="" disabled hidden>
                —
              </option>
              {t.contact.fields.propertiesOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0a0a0a] text-[#f5f5f2]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.properties && (
              <p className={errorClasses}>{t.contact.fields.properties}</p>
            )}
          </div>

          {/* PMS */}
          <div>
            <label htmlFor="pms" className={labelClasses}>
              {t.contact.fields.pms}
            </label>
            <select
              id="pms"
              className={inputClasses}
              defaultValue=""
              {...register('pms')}
            >
              <option value="" disabled hidden>
                —
              </option>
              {t.contact.fields.pmsOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0a0a0a] text-[#f5f5f2]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.pms && (
              <p className={errorClasses}>{t.contact.fields.pms}</p>
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
              className={`${inputClasses} resize-none`}
              {...register('message')}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-lg bg-[#E8440A] px-6 py-3 font-spaceGrotesk text-sm font-semibold text-white transition-colors hover:bg-[#c9380a] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '...' : t.contact.fields.submit}
          </button>

          {/* Success */}
          {status === 'success' && (
            <p className="font-spaceGrotesk text-sm text-green-400">
              {t.contact.success}
            </p>
          )}

          {/* Error */}
          {status === 'error' && (
            <p className="font-spaceGrotesk text-sm text-[#E8440A]">
              {locale === 'en'
                ? 'Something went wrong. Please try again.'
                : 'Algo ha fallado. Inténtalo de nuevo.'}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
