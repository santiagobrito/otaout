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
    title: isEs ? 'Aviso Legal | OTAout' : 'Legal Notice | OTAout',
    description: isEs
      ? 'Aviso legal y condiciones de uso de OTAout.'
      : 'Legal notice and terms of use for OTAout.',
    robots: { index: false, follow: false },
  };
}

export default async function AvisoLegalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === 'es';

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h1 className="font-syne text-3xl font-bold text-[#0F172A] md:text-4xl">
            {isEs ? 'Aviso Legal' : 'Legal Notice'}
          </h1>
          <p className="mt-2 text-sm text-[#64748B]">
            {isEs ? 'Última actualización: 10 de abril de 2026' : 'Last updated: April 10, 2026'}
          </p>

          <div className="mt-10 space-y-8 text-[#0F172A]/80 text-[15px] leading-relaxed">
            {/* 1. Titular */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '1. Datos identificativos del titular' : '1. Owner identification'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa al usuario de los datos del titular de este sitio web:'
                  : 'In compliance with Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), the user is informed of the following details about the owner of this website:'}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Titular' : 'Owner'}:</span> Santiago Matías Brito Devoto</li>
                <li><span className="font-medium text-[#0F172A]">NIF:</span> Y8142155P</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'NIF-IVA intracomunitario' : 'EU VAT number'}:</span> ESY8142155P</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Domicilio' : 'Address'}:</span> Sant Antoni Maria Claret 213, 6-4, 08041 Barcelona, España</li>
                <li><span className="font-medium text-[#0F172A]">Email:</span> santiagobrito@gmail.com</li>
                <li><span className="font-medium text-[#0F172A]">{isEs ? 'Actividad' : 'Activity'}:</span> {isEs ? 'Servicios de desarrollo web y marketing digital' : 'Web development and digital marketing services'}</li>
              </ul>
            </section>

            {/* 2. Objeto */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '2. Objeto y ámbito de aplicación' : '2. Purpose and scope'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'El presente aviso legal regula el uso del sitio web otaout.com (en adelante, el "Sitio Web"), puesto a disposición de los usuarios de Internet. La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.'
                  : 'This legal notice governs the use of the website otaout.com (hereinafter, the "Website"), made available to Internet users. Browsing the Website confers the status of user and implies full and unreserved acceptance of each and every provision included in this Legal Notice.'}
              </p>
            </section>

            {/* 3. Propiedad intelectual */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '3. Propiedad intelectual e industrial' : '3. Intellectual and industrial property'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Todos los contenidos del Sitio Web, incluyendo sin limitación textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente y demás elementos, así como los nombres comerciales, marcas o signos distintivos, son propiedad del titular o de terceros que han autorizado su uso, y están protegidos por los derechos de propiedad intelectual e industrial.'
                  : 'All content on the Website, including without limitation texts, photographs, graphics, images, icons, technology, software, graphic design, source code and other elements, as well as trade names, trademarks or distinctive signs, are the property of the owner or third parties who have authorized their use, and are protected by intellectual and industrial property rights.'}
              </p>
              <p className="mt-3">
                {isEs
                  ? 'Queda prohibida la reproducción, transformación, distribución, comunicación pública, puesta a disposición o cualquier otra forma de explotación, total o parcial, de los contenidos de este Sitio Web sin la autorización expresa y por escrito del titular.'
                  : 'Reproduction, transformation, distribution, public communication, making available or any other form of exploitation, in whole or in part, of the contents of this Website without the express written authorization of the owner is prohibited.'}
              </p>
            </section>

            {/* 4. Condiciones de uso */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '4. Condiciones de uso' : '4. Terms of use'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que el titular ofrece a través del Sitio Web y a no emplearlos para:'
                  : 'The user agrees to make proper use of the contents and services offered by the owner through the Website and not to use them to:'}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                <li>{isEs ? 'Realizar actividades ilícitas o contrarias a la buena fe y al orden público.' : 'Carry out unlawful activities or activities contrary to good faith and public order.'}</li>
                <li>{isEs ? 'Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o atentatorio contra los derechos humanos.' : 'Disseminate racist, xenophobic, pornographic content, content that glorifies terrorism, or content that violates human rights.'}</li>
                <li>{isEs ? 'Provocar daños en los sistemas físicos y lógicos del titular, de sus proveedores o de terceros.' : 'Cause damage to the physical and logical systems of the owner, its suppliers or third parties.'}</li>
                <li>{isEs ? 'Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.' : 'Attempt to access and use the email accounts of other users and modify or manipulate their messages.'}</li>
              </ul>
            </section>

            {/* 5. Exclusión de garantías y responsabilidad */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '5. Exclusión de garantías y responsabilidad' : '5. Disclaimer of warranties and liability'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del Sitio Web o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.'
                  : 'The owner is not responsible, in any case, for damages of any nature that may be caused, including but not limited to: errors or omissions in the content, lack of availability of the Website, or the transmission of viruses or malicious programs in the content, despite having adopted all necessary technological measures to prevent this.'}
              </p>
            </section>

            {/* 6. Enlaces */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '6. Enlaces a terceros' : '6. Third-party links'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'El Sitio Web puede contener enlaces a sitios web de terceros. El titular no asume ninguna responsabilidad por el contenido, la información o los servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre el titular y las personas o entidades titulares de tales contenidos.'
                  : 'The Website may contain links to third-party websites. The owner assumes no responsibility for the content, information or services that may appear on such sites, which are for informational purposes only and in no case imply any relationship between the owner and the individuals or entities that own such content.'}
              </p>
            </section>

            {/* 7. Protección de datos */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '7. Protección de datos' : '7. Data protection'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'Para todo lo relativo al tratamiento de datos personales, consulta nuestra '
                  : 'For everything related to the processing of personal data, please refer to our '}
                <a href={`/${locale === 'es' ? '' : 'en/'}privacidad`} className="text-[#E8440A] underline underline-offset-2 hover:text-[#E8440A]/80">
                  {isEs ? 'Política de Privacidad' : 'Privacy Policy'}
                </a>.
              </p>
            </section>

            {/* 8. Legislación aplicable */}
            <section>
              <h2 className="font-syne text-lg font-semibold text-[#0F172A]">
                {isEs ? '8. Legislación aplicable y jurisdicción' : '8. Applicable law and jurisdiction'}
              </h2>
              <p className="mt-3">
                {isEs
                  ? 'El presente Aviso Legal se rige en todos y cada uno de sus extremos por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, el titular y el usuario acuerdan someterse a los Juzgados y Tribunales de Barcelona, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.'
                  : 'This Legal Notice is governed in all its aspects by Spanish law. For the resolution of any dispute that may arise from access to or use of the Website, the owner and the user agree to submit to the Courts and Tribunals of Barcelona, expressly waiving any other jurisdiction that may apply.'}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
