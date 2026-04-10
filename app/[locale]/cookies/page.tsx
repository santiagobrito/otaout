import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieSettingsButton from '@/components/shared/CookieSettingsButton';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  return {
    title: isEs ? 'Política de Cookies | OTAout' : 'Cookie Policy | OTAout',
    description: isEs
      ? 'Política de cookies de OTAout. Tipos de cookies utilizadas y cómo gestionarlas.'
      : 'OTAout cookie policy. Types of cookies used and how to manage them.',
    robots: { index: false, follow: false },
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === 'es';

  const cookieTable = [
    {
      category: isEs ? 'Necesarias' : 'Necessary',
      cookies: [
        {
          name: 'otaout-consent',
          provider: 'OTAout',
          purpose: isEs ? 'Almacena las preferencias de cookies del usuario.' : 'Stores the user\'s cookie preferences.',
          duration: isEs ? '1 año' : '1 year',
          type: 'localStorage',
        },
        {
          name: 'NEXT_LOCALE',
          provider: 'OTAout',
          purpose: isEs ? 'Almacena la preferencia de idioma del usuario.' : 'Stores the user\'s language preference.',
          duration: isEs ? 'Sesión' : 'Session',
          type: 'Cookie',
        },
      ],
    },
    {
      category: isEs ? 'Analíticas' : 'Analytics',
      cookies: [
        {
          name: '_ga',
          provider: 'Google Analytics',
          purpose: isEs ? 'Distingue usuarios únicos asignando un identificador aleatorio.' : 'Distinguishes unique users by assigning a randomly generated identifier.',
          duration: isEs ? '2 años' : '2 years',
          type: 'Cookie',
        },
        {
          name: '_ga_*',
          provider: 'Google Analytics 4',
          purpose: isEs ? 'Mantiene el estado de la sesión en Google Analytics 4.' : 'Maintains session state in Google Analytics 4.',
          duration: isEs ? '2 años' : '2 years',
          type: 'Cookie',
        },
      ],
    },
    {
      category: 'Marketing',
      cookies: [
        {
          name: '_gcl_au',
          provider: 'Google Ads',
          purpose: isEs ? 'Almacena información de conversiones de Google Ads.' : 'Stores Google Ads conversion information.',
          duration: isEs ? '90 días' : '90 days',
          type: 'Cookie',
        },
        {
          name: '_gcl_aw',
          provider: 'Google Ads',
          purpose: isEs ? 'Almacena el identificador de clic de Google Ads (GCLID) para atribución de conversiones.' : 'Stores the Google Ads click identifier (GCLID) for conversion attribution.',
          duration: isEs ? '90 días' : '90 days',
          type: 'Cookie',
        },
        {
          name: '_fbp',
          provider: 'Meta (Facebook)',
          purpose: isEs ? 'Identifica navegadores para servicios publicitarios de Meta.' : 'Identifies browsers for Meta advertising services.',
          duration: isEs ? '90 días' : '90 days',
          type: 'Cookie',
        },
        {
          name: '_fbc',
          provider: 'Meta (Facebook)',
          purpose: isEs ? 'Almacena el identificador de clic de Facebook (FBCLID) para atribución.' : 'Stores the Facebook click identifier (FBCLID) for attribution.',
          duration: isEs ? '90 días' : '90 days',
          type: 'Cookie',
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h1 className="font-syne text-3xl font-bold text-[#0F172A] md:text-4xl">
            {isEs ? 'Política de Cookies' : 'Cookie Policy'}
          </h1>
          <p className="mt-2 text-sm text-[#64748B]">
            {isEs ? 'Última actualización: 10 de abril de 2026' : 'Last updated: April 10, 2026'}
          </p>

          <div className="mt-10 space-y-8 text-[#0F172A]/80 text-[15px] leading-relaxed">
            {/* 1. Qué son las cookies */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '1. ¿Qué son las cookies?' : '1. What are cookies?'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante un periodo de tiempo, de forma que no tienes que volver a configurarlas cada vez que vuelves al sitio o navegas entre sus páginas.'
                  : 'Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the site to remember your actions and preferences over a period of time, so that you do not have to re-enter them each time you return to the site or browse between its pages.'}
              </p>
            </section>

            {/* 2. Tipos de cookies */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '2. Tipos de cookies que utilizamos' : '2. Types of cookies we use'}
              </h2>

              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="font-medium text-[#0F172A]">{isEs ? 'Cookies necesarias' : 'Necessary cookies'}</h3>
                  <p className="mt-1 text-sm">
                    {isEs
                      ? 'Son imprescindibles para el funcionamiento básico del sitio web. Permiten la navegación, el cambio de idioma y el almacenamiento de tus preferencias de cookies. No requieren consentimiento y no se pueden desactivar.'
                      : 'These are essential for the basic functioning of the website. They enable navigation, language switching, and storing your cookie preferences. They do not require consent and cannot be disabled.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-[#0F172A]">{isEs ? 'Cookies analíticas' : 'Analytics cookies'}</h3>
                  <p className="mt-1 text-sm">
                    {isEs
                      ? 'Nos permiten medir y analizar el tráfico del sitio web para mejorar nuestro servicio. Utilizamos Google Analytics 4, que recoge datos de forma anónima y agregada sobre cómo los usuarios interactúan con el sitio. Estos datos se procesan con Google Consent Mode v2, lo que significa que solo se activan con tu consentimiento explícito. Cuando no se otorga consentimiento, Google utiliza modelado de datos para estimar métricas de forma agregada y respetuosa con la privacidad.'
                      : 'They allow us to measure and analyze website traffic to improve our service. We use Google Analytics 4, which collects anonymous and aggregated data about how users interact with the site. This data is processed with Google Consent Mode v2, which means it is only activated with your explicit consent. When consent is not granted, Google uses data modeling to estimate metrics in an aggregated and privacy-respecting manner.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-[#0F172A]">{isEs ? 'Cookies de marketing' : 'Marketing cookies'}</h3>
                  <p className="mt-1 text-sm">
                    {isEs
                      ? 'Se utilizan para realizar el seguimiento de campañas publicitarias, medir conversiones y mostrar anuncios relevantes. Incluyen cookies de Google Ads y Meta (Facebook). Estas cookies permiten funcionalidades avanzadas como conversiones mejoradas (Enhanced Conversions) y modelado de datos publicitarios, siempre dentro del consentimiento otorgado. Solo se activan si aceptas esta categoría.'
                      : 'They are used to track advertising campaigns, measure conversions, and display relevant ads. They include Google Ads and Meta (Facebook) cookies. These cookies enable advanced features such as Enhanced Conversions and advertising data modeling, always within the consent granted. They are only activated if you accept this category.'}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Tabla de cookies */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '3. Detalle de cookies utilizadas' : '3. Cookie details'}
              </h2>

              <div className="mt-4 space-y-6">
                {cookieTable.map((group) => (
                  <div key={group.category}>
                    <h3 className="mb-2 font-medium text-[#0F172A]">{group.category}</h3>
                    <div className="overflow-x-auto rounded-lg border border-black/8">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-black/8 bg-white">
                            <th className="px-3 py-2 font-medium text-[#0F172A]">Cookie</th>
                            <th className="px-3 py-2 font-medium text-[#0F172A]">{isEs ? 'Proveedor' : 'Provider'}</th>
                            <th className="px-3 py-2 font-medium text-[#0F172A]">{isEs ? 'Finalidad' : 'Purpose'}</th>
                            <th className="px-3 py-2 font-medium text-[#0F172A]">{isEs ? 'Duración' : 'Duration'}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.cookies.map((cookie) => (
                            <tr key={cookie.name} className="border-b border-black/4 last:border-0">
                              <td className="px-3 py-2 font-mono text-xs">{cookie.name}</td>
                              <td className="px-3 py-2">{cookie.provider}</td>
                              <td className="px-3 py-2 text-xs">{cookie.purpose}</td>
                              <td className="px-3 py-2 whitespace-nowrap">{cookie.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Consent Mode v2 */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '4. Google Consent Mode v2' : '4. Google Consent Mode v2'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Este sitio web implementa Google Consent Mode v2, un sistema que permite gestionar el comportamiento de las etiquetas de Google (Analytics, Ads) en función del consentimiento otorgado por el usuario. Esto significa que:'
                  : 'This website implements Google Consent Mode v2, a system that manages the behavior of Google tags (Analytics, Ads) based on the consent granted by the user. This means that:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li>{isEs ? 'Por defecto, todas las cookies de analítica y marketing están desactivadas hasta que otorgues tu consentimiento.' : 'By default, all analytics and marketing cookies are disabled until you grant your consent.'}</li>
                <li>{isEs ? 'Cuando aceptas una categoría, las etiquetas correspondientes se activan con plena funcionalidad.' : 'When you accept a category, the corresponding tags are activated with full functionality.'}</li>
                <li>{isEs ? 'Cuando no otorgas consentimiento, Google puede utilizar modelado de datos (basado en señales agregadas y anonimizadas) para estimar métricas y conversiones, sin almacenar información personal en tu dispositivo.' : 'When you do not grant consent, Google may use data modeling (based on aggregated and anonymized signals) to estimate metrics and conversions, without storing personal information on your device.'}</li>
                <li>{isEs ? 'Las conversiones avanzadas (Enhanced Conversions) solo se activan cuando aceptas las cookies de marketing.' : 'Enhanced Conversions are only activated when you accept marketing cookies.'}</li>
              </ul>
            </section>

            {/* 5. Cómo gestionar */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '5. Cómo gestionar tus cookies' : '5. How to manage your cookies'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Puedes configurar tus preferencias de cookies en cualquier momento mediante el siguiente botón:'
                  : 'You can configure your cookie preferences at any time using the following button:'}
              </p>
              <div className="mt-4">
                <CookieSettingsButton locale={locale} />
              </div>
              <p className="mt-4">
                {isEs
                  ? 'También puedes gestionar o eliminar cookies a través de la configuración de tu navegador:'
                  : 'You can also manage or delete cookies through your browser settings:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">Safari</a></li>
                <li><a href="https://support.microsoft.com/help/4027947" target="_blank" rel="noopener noreferrer" className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">Microsoft Edge</a></li>
              </ul>
              <p className="mt-3 text-sm text-[#64748B]">
                {isEs
                  ? 'Ten en cuenta que la desactivación de cookies necesarias puede afectar al funcionamiento del sitio web.'
                  : 'Please note that disabling necessary cookies may affect the functionality of the website.'}
              </p>
            </section>

            {/* 6. Base legal */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '6. Base legal' : '6. Legal basis'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'La base legal para el uso de cookies necesarias es el interés legítimo del titular (Art. 6.1.f RGPD). Para las cookies analíticas y de marketing, la base legal es el consentimiento del usuario (Art. 6.1.a RGPD), obtenido a través del banner de cookies que se muestra en la primera visita.'
                  : 'The legal basis for the use of necessary cookies is the legitimate interest of the owner (Art. 6.1.f GDPR). For analytics and marketing cookies, the legal basis is the user\'s consent (Art. 6.1.a GDPR), obtained through the cookie banner displayed on the first visit.'}
              </p>
            </section>

            {/* 7. Más información */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '7. Más información' : '7. More information'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Para cualquier duda sobre nuestra política de cookies, puedes contactarnos en '
                  : 'For any questions about our cookie policy, you can contact us at '}
                <a href="mailto:santiagobrito@gmail.com" className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">
                  santiagobrito@gmail.com
                </a>.
                {' '}
                {isEs
                  ? 'Para más información sobre el tratamiento de tus datos personales, consulta nuestra '
                  : 'For more information about the processing of your personal data, see our '}
                <a href={`/${locale === 'es' ? '' : 'en/'}privacidad`} className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">
                  {isEs ? 'Política de Privacidad' : 'Privacy Policy'}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
