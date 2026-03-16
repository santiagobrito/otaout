export const copy = {
  nav: {
    links: ['El problema', 'Solución', 'Features', 'Caso de éxito', 'Contacto'],
    cta: 'Hablamos',
  },
  hero: {
    eyebrow: 'Para gestores de alquiler vacacional con Smoobu, Beds24 y más',
    headline_1: 'Airbnb se lleva el 15%.',
    headline_2: 'Ya es hora de que pares de pagarlo.',
    subtitle:
      'Construimos la plataforma de reservas directas que tu negocio merece — con tu marca, tu dominio, tus datos y tu dinero. Sin comisiones. Sin depender de nadie.',
    cta_primary: 'Quiero mis reservas directas',
    cta_secondary: 'Ver caso de éxito',
    stats: [
      { value: '0%', label: 'comisión por reserva directa' },
      { value: '+15%', label: 'margen neto desde el primer mes' },
      { value: '4', label: 'semanas hasta el lanzamiento' },
    ],
  },
  problem: {
    headline: 'Llevas años construyendo su negocio. No el tuyo.',
    paragraphs: [
      'Cada reserva que entra por Airbnb te cuesta entre un 15% y un 20%. No es una comisión — es un impuesto por no tener alternativa.',
      'Mientras tanto, Airbnb se queda con los datos de tus huéspedes, tu marca desaparece detrás de la suya, y si su algoritmo decide bajarte el ranking, tu facturación se desploma.',
      'El resultado: trabajas más, ganas menos, y dependes de una plataforma que no te debe nada.',
    ],
  },
  pains: {
    title: 'Los 5 problemas que ya conoces',
    items: [
      {
        number: '01',
        title: 'Comisiones que se comen tu margen',
        description:
          'Entre el 15% y el 20% de cada reserva va directo a Airbnb o Booking. En 100 reservas de 2.000€, son 30.000–40.000€ al año.',
      },
      {
        number: '02',
        title: 'La web de tu PMS no convierte',
        description:
          'Smoobu y Beds24 ofrecen una web genérica que no transmite confianza. Tus huéspedes la ven, pero reservan por Airbnb porque "se fían más".',
      },
      {
        number: '03',
        title: 'No tienes los datos de tus huéspedes',
        description:
          'Airbnb no te da emails ni teléfonos. No puedes hacer remarketing, ni email marketing, ni fidelizar. Cada huésped es de un solo uso.',
      },
      {
        number: '04',
        title: 'Tu marca no existe',
        description:
          'Tus propiedades aparecen como "Apartamento en Barcelona" en Airbnb. No hay branding, no hay diferenciación, no hay recuerdo de marca.',
      },
      {
        number: '05',
        title: 'Dependes del algoritmo',
        description:
          'Un cambio en el ranking de Airbnb puede hundirte la ocupación de un mes para otro. No controlas tu distribución.',
      },
    ],
  },
  solution: {
    eyebrow: 'La solución',
    headline: 'Tu plataforma de reservas directas. Lista en 4 semanas.',
    description:
      'OTAout construye tu web de reservas directas integrada con tu PMS. No es un template — es una plataforma a medida con tu marca, tu dominio, tu Stripe y tu panel de control.',
    includes:
      'Todo incluido: diseño, desarrollo, integración PMS, pasarela de pago, SEO técnico, panel admin y soporte continuo.',
  },
  features: {
    title: 'Todo lo que incluye tu plataforma',
    items: [
      {
        title: 'Integración PMS',
        description:
          'Smoobu, Beds24 y más. Disponibilidad en tiempo real + sync automático OTAs.',
        icon: 'sync',
      },
      {
        title: 'Stripe propio',
        description:
          'Cobros directos a tu cuenta. Sin intermediarios ni retenciones.',
        icon: 'payment',
      },
      {
        title: 'SEO técnico enterprise',
        description:
          'Schema LodgingBusiness, metadata dinámica, sitemap, hreflang, Core Web Vitals.',
        icon: 'search',
      },
      {
        title: 'Área privada del huésped',
        description:
          'Chat directo, extras, check-in, cancelaciones — sin pasar por Airbnb.',
        icon: 'user',
      },
      {
        title: 'Panel admin completo',
        description:
          'KPIs en tiempo real, gestión de reservas, fotos, descuentos, sync manual.',
        icon: 'dashboard',
      },
      {
        title: 'ADS + SEO management',
        description:
          'Google Ads + Meta con automatización por ocupación real. SEO posicionamiento orgánico.',
        icon: 'chart',
      },
      {
        title: 'Módulo de upselling',
        description:
          'Maximiza cada reserva: extras al reservar (late check-in, transfer, cuna) y antes de llegar (limpieza extra, pack bienvenida, late checkout).',
        icon: 'upselling',
      },
    ],
  },
  caseStudy: {
    eyebrow: 'Caso de éxito real',
    headline:
      '42 apartamentos en Castelldefels. De pagar 70.000€/año a Airbnb a tener su propia plataforma.',
    description:
      'Holiday Castelldefels gestionaba 42 propiedades pagando más de 70.000€ anuales en comisiones. Hoy tienen su propia plataforma de reservas directas con integración Smoobu completa.',
    specs: [
      '42 propiedades integradas',
      'Integración Smoobu API completa',
      'Pasarela Stripe propia',
      'SEO técnico con Schema LodgingBusiness',
      'Panel admin personalizado',
      'Área privada del huésped',
      'Google Ads + Meta automatizado',
      '1.390.607€ facturación 2025',
    ],
  },
  whyUs: {
    title: '¿Por qué OTAout?',
    subtitle:
      'No somos una agencia genérica. Somos especialistas en PMS que también programamos.',
    points: [
      'Conocemos Smoobu, Beds24 y Hostaway por dentro — sus APIs, sus limitaciones, sus hacks.',
      'Usamos el mismo stack (Next.js, Tailwind, Stripe) para nuestros clientes y para nosotros mismos.',
      'No hacemos webs "bonitas" que no convierten. Hacemos plataformas de reservas que facturan.',
      'Soporte continuo — no desaparecemos después del lanzamiento.',
    ],
  },
  contact: {
    headline: '¿Cuánto le has pagado a Airbnb este año?',
    subtitle:
      'Cuéntanos sobre tu negocio y te mostramos cuánto puedes recuperar.',
    fields: {
      name: 'Nombre',
      email: 'Email',
      properties: 'Número de propiedades',
      propertiesOptions: ['1–5', '6–20', '21–50', '50+'],
      pms: 'PMS actual',
      pmsOptions: ['Smoobu', 'Beds24', 'Otro', 'No tengo'],
      message: 'Mensaje (opcional)',
      submit: 'Enviar mensaje',
    },
    success: 'Mensaje enviado. Te respondo en menos de 24 horas.',
    whatsapp: 'O escríbenos por WhatsApp',
  },
  footer: {
    tagline:
      'Reservas directas sin comisiones para gestores de alquiler vacacional.',
    legal: ['Política de privacidad', 'Aviso legal', 'Cookies'],
    copyright: '© 2026 OTAout. Todos los derechos reservados.',
  },
  cookie: {
    message:
      'Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Al aceptar, consientes el uso de cookies analíticas.',
    accept: 'Aceptar',
    decline: 'Rechazar',
  },
}
