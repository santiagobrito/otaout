import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  return {
    title: isEs ? 'Política de Privacidad | OTAout' : 'Privacy Policy | OTAout',
    description: isEs
      ? 'Política de privacidad y protección de datos de OTAout.'
      : 'Privacy and data protection policy for OTAout.',
    robots: { index: false, follow: false },
  };
}

export default async function PrivacidadPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === 'es';

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h1 className="font-syne text-3xl font-bold text-[#0F172A] md:text-4xl">
            {isEs ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="mt-2 text-sm text-[#64748B]">
            {isEs ? 'Última actualización: 10 de abril de 2026' : 'Last updated: April 10, 2026'}
          </p>

          <div className="mt-10 space-y-8 text-[#0F172A]/80 text-[15px] leading-relaxed">
            {/* 1. Responsable */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '1. Responsable del tratamiento' : '1. Data controller'}
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Responsable' : 'Controller'}:</span> Santiago Matías Brito Devoto</li>
                <li><span className="font-medium text-[#0F172A]">NIF:</span> Y8142155P</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Domicilio' : 'Address'}:</span> Sant Antoni Maria Claret 213, 6-4, 08041 Barcelona, España</li>
                <li><span className="font-medium text-[#0F172A]">Email:</span> santiagobrito@gmail.com</li>
              </ul>
            </section>

            {/* 2. Datos que recogemos */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '2. Datos personales que recogemos' : '2. Personal data we collect'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'A través de este Sitio Web podemos recoger los siguientes datos personales:'
                  : 'Through this Website we may collect the following personal data:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Formulario de contacto' : 'Contact form'}:</span>{' '}
                  {isEs ? 'nombre, email, sitio web (opcional), número de propiedades, PMS actual y mensaje (opcional).' : 'name, email, website (optional), number of properties, current PMS, and message (optional).'}
                </li>
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Datos de navegación' : 'Browsing data'}:</span>{' '}
                  {isEs
                    ? 'dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de permanencia y datos de interacción. Estos datos se recogen solo si el usuario acepta las cookies analíticas y/o de marketing.'
                    : 'IP address, browser type, operating system, pages visited, time spent, and interaction data. This data is only collected if the user accepts analytics and/or marketing cookies.'}
                </li>
              </ul>
            </section>

            {/* 3. Finalidad */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '3. Finalidad del tratamiento' : '3. Purpose of processing'}
              </h2>
              <p className="mt-3">
                {isEs ? 'Tratamos los datos personales con las siguientes finalidades:' : 'We process personal data for the following purposes:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li>{isEs ? 'Gestionar y responder a las consultas recibidas a través del formulario de contacto.' : 'Manage and respond to inquiries received through the contact form.'}</li>
                <li>{isEs ? 'Enviar presupuestos, propuestas comerciales e información sobre nuestros servicios cuando el usuario lo solicite.' : 'Send quotes, commercial proposals and information about our services when requested by the user.'}</li>
                <li>{isEs ? 'Realizar análisis estadísticos y de rendimiento del sitio web mediante herramientas de analítica (Google Analytics 4), previa obtención del consentimiento.' : 'Perform statistical and website performance analysis using analytics tools (Google Analytics 4), subject to prior consent.'}</li>
                <li>{isEs ? 'Gestionar campañas de publicidad online (Google Ads, Meta Ads) y medir su eficacia, previa obtención del consentimiento.' : 'Manage online advertising campaigns (Google Ads, Meta Ads) and measure their effectiveness, subject to prior consent.'}</li>
                <li>{isEs ? 'Implementar conversiones avanzadas y modelado de datos publicitarios para optimizar campañas, siempre dentro del marco del consentimiento otorgado por el usuario.' : 'Implement enhanced conversions and advertising data modeling to optimize campaigns, always within the framework of consent granted by the user.'}</li>
              </ul>
            </section>

            {/* 4. Base legal */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '4. Base legal del tratamiento' : '4. Legal basis for processing'}
              </h2>
              <p className="mt-3">
                {isEs ? 'La base legal para el tratamiento de tus datos es:' : 'The legal basis for processing your data is:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Consentimiento' : 'Consent'} (Art. 6.1.a RGPD):</span>{' '}
                  {isEs
                    ? 'para el envío de información comercial, el uso de cookies analíticas y de marketing, y la activación de conversiones avanzadas.'
                    : 'for sending commercial information, the use of analytics and marketing cookies, and the activation of enhanced conversions.'}
                </li>
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Interés legítimo' : 'Legitimate interest'} (Art. 6.1.f RGPD):</span>{' '}
                  {isEs
                    ? 'para responder a consultas y mantener el correcto funcionamiento y seguridad del sitio web.'
                    : 'to respond to inquiries and maintain the proper functioning and security of the website.'}
                </li>
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Ejecución contractual o medidas precontractuales' : 'Contract performance or pre-contractual measures'} (Art. 6.1.b RGPD):</span>{' '}
                  {isEs
                    ? 'cuando el tratamiento sea necesario para la prestación de un servicio solicitado o la elaboración de un presupuesto.'
                    : 'when processing is necessary for the provision of a requested service or the preparation of a quote.'}
                </li>
              </ul>
            </section>

            {/* 5. Destinatarios */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '5. Destinatarios y encargados del tratamiento' : '5. Recipients and data processors'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Los datos personales podrán ser comunicados a los siguientes destinatarios o encargados del tratamiento:'
                  : 'Personal data may be disclosed to the following recipients or data processors:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li>
                  <span className="font-medium text-[#0F172A]">Google LLC:</span>{' '}
                  {isEs
                    ? 'proveedor de servicios de analítica (Google Analytics 4) y publicidad (Google Ads). Los datos se procesan conforme al marco de privacidad UE-EE.UU. (EU-U.S. Data Privacy Framework).'
                    : 'analytics (Google Analytics 4) and advertising (Google Ads) service provider. Data is processed under the EU-U.S. Data Privacy Framework.'}
                </li>
                <li>
                  <span className="font-medium text-[#0F172A]">Meta Platforms, Inc.:</span>{' '}
                  {isEs
                    ? 'proveedor de servicios publicitarios (Meta Ads / Facebook Pixel). Los datos se procesan conforme al marco de privacidad UE-EE.UU.'
                    : 'advertising service provider (Meta Ads / Facebook Pixel). Data is processed under the EU-U.S. Data Privacy Framework.'}
                </li>
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Proveedor de hosting' : 'Hosting provider'}:</span>{' '}
                  {isEs
                    ? 'servidor ubicado en la UE (OVH, Francia) para el alojamiento del sitio web.'
                    : 'server located in the EU (OVH, France) for website hosting.'}
                </li>
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Proveedor de email' : 'Email provider'} (Gmail / Google Workspace):</span>{' '}
                  {isEs
                    ? 'para la gestión de comunicaciones y notificaciones de formularios.'
                    : 'for managing communications and form notifications.'}
                </li>
              </ul>
              <p className="mt-3">
                {isEs
                  ? 'No se realizan transferencias internacionales de datos fuera de los mecanismos legales previstos (Decisión de Adecuación, EU-U.S. Data Privacy Framework o Cláusulas Contractuales Tipo).'
                  : 'No international data transfers are made outside the legally established mechanisms (Adequacy Decision, EU-U.S. Data Privacy Framework, or Standard Contractual Clauses).'}
              </p>
            </section>

            {/* 6. Plazo de conservación */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '6. Plazo de conservación' : '6. Data retention period'}
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Formulario de contacto' : 'Contact form'}:</span>{' '}
                  {isEs
                    ? 'los datos se conservarán mientras exista interés mutuo o durante el tiempo necesario para cumplir las obligaciones legales, con un máximo de 2 años desde la última comunicación si no se formaliza relación contractual.'
                    : 'data will be retained as long as there is mutual interest or for the time necessary to fulfill legal obligations, with a maximum of 2 years from the last communication if no contractual relationship is established.'}
                </li>
                <li>
                  <span className="font-medium text-[#0F172A]">{isEs ? 'Datos de navegación' : 'Browsing data'}:</span>{' '}
                  {isEs
                    ? 'según la configuración de retención de cada herramienta (Google Analytics: 14 meses por defecto).'
                    : 'according to the retention settings of each tool (Google Analytics: 14 months by default).'}
                </li>
              </ul>
            </section>

            {/* 7. Derechos */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '7. Derechos del interesado' : '7. Data subject rights'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'De acuerdo con el RGPD y la LOPDGDD, puedes ejercer los siguientes derechos:'
                  : 'In accordance with the GDPR, you may exercise the following rights:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Acceso' : 'Access'}:</span> {isEs ? 'conocer qué datos personales tratamos sobre ti.' : 'know what personal data we process about you.'}</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Rectificación' : 'Rectification'}:</span> {isEs ? 'solicitar la corrección de datos inexactos o incompletos.' : 'request the correction of inaccurate or incomplete data.'}</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Supresión' : 'Erasure'}:</span> {isEs ? 'solicitar la eliminación de tus datos cuando ya no sean necesarios.' : 'request the deletion of your data when no longer necessary.'}</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Oposición' : 'Objection'}:</span> {isEs ? 'oponerte al tratamiento de tus datos en determinadas circunstancias.' : 'object to the processing of your data in certain circumstances.'}</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Limitación' : 'Restriction'}:</span> {isEs ? 'solicitar la limitación del tratamiento de tus datos.' : 'request the restriction of processing of your data.'}</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Portabilidad' : 'Portability'}:</span> {isEs ? 'recibir tus datos en un formato estructurado y de uso común.' : 'receive your data in a structured, commonly used format.'}</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Retirada del consentimiento' : 'Withdrawal of consent'}:</span> {isEs ? 'retirar el consentimiento otorgado en cualquier momento, sin que afecte a la licitud del tratamiento previo.' : 'withdraw consent at any time, without affecting the lawfulness of prior processing.'}</li>
              </ul>
              <p className="mt-4">
                {isEs
                  ? 'Para ejercer cualquiera de estos derechos, envía un email a '
                  : 'To exercise any of these rights, send an email to '}
                <a href="mailto:santiagobrito@gmail.com" className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">
                  santiagobrito@gmail.com
                </a>
                {isEs
                  ? ' indicando el derecho que deseas ejercer y adjuntando copia de tu documento de identidad.'
                  : ' indicating the right you wish to exercise and attaching a copy of your identity document.'}
              </p>
            </section>

            {/* 8. Autoridad de control */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '8. Autoridad de control' : '8. Supervisory authority'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Si consideras que el tratamiento de tus datos personales no se ajusta a la normativa, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), con sede en C/ Jorge Juan 6, 28001 Madrid — '
                  : 'If you consider that the processing of your personal data does not comply with the regulations, you have the right to file a complaint with the Spanish Data Protection Agency (AEPD), located at C/ Jorge Juan 6, 28001 Madrid — '}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">
                  www.aepd.es
                </a>.
              </p>
            </section>

            {/* 9. Cookies */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '9. Cookies' : '9. Cookies'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Este sitio web utiliza cookies. Para más información, consulta nuestra '
                  : 'This website uses cookies. For more information, please refer to our '}
                <a href={`/${locale === 'es' ? '' : 'en/'}cookies`} className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">
                  {isEs ? 'Política de Cookies' : 'Cookie Policy'}
                </a>.
              </p>
            </section>

            {/* 10. Seguridad */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '10. Medidas de seguridad' : '10. Security measures'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos. Entre otras medidas: cifrado SSL/TLS en todas las comunicaciones, acceso restringido a datos, copias de seguridad periódicas y alojamiento en servidores ubicados en la UE.'
                  : 'We have adopted the necessary technical and organizational measures to guarantee the security of personal data and prevent its alteration, loss, unauthorized processing or access, taking into account the state of technology, the nature of the stored data, and the risks to which they are exposed. Among other measures: SSL/TLS encryption in all communications, restricted data access, regular backups, and hosting on EU-based servers.'}
              </p>
            </section>

            {/* 11. Modificaciones */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '11. Modificaciones de esta política' : '11. Changes to this policy'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En caso de cambios significativos, se informará a los usuarios a través del Sitio Web. Te recomendamos revisar esta página periódicamente.'
                  : 'We reserve the right to modify this Privacy Policy to adapt it to legislative or jurisprudential developments. In case of significant changes, users will be informed through the Website. We recommend reviewing this page periodically.'}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
