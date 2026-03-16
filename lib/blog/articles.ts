export interface Article {
  slug: string;
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  content: { es: string; en: string };
  date: string;
  readingTime: number;
  category: { es: string; en: string };
}

export const articles: Article[] = [
  {
    "slug": "reducir-dependencia-airbnb",
    "title": {
      "es": "Como reducir la dependencia de Airbnb sin perder reservas",
      "en": "How to reduce your Airbnb dependency without losing bookings"
    },
    "excerpt": {
      "es": "Estrategias probadas para diversificar tus canales de distribucion y construir un flujo de reservas directas sostenible.",
      "en": "Proven strategies to diversify your distribution channels and build a sustainable direct booking flow."
    },
    "date": "2026-03-10",
    "readingTime": 8,
    "category": {
      "es": "Estrategia",
      "en": "Strategy"
    },
    "content": {
      "es": "<h2>El riesgo de depender de un solo canal</h2><p>Si mas del 70% de tus reservas vienen de Airbnb, tienes un problema de dependencia. Un cambio de algoritmo, una subida de comisiones o una penalizacion pueden reducir tu ocupacion de la noche a la manana.</p><h2>Paso 1: Entiende tu mix actual</h2><p>Analiza de donde vienen tus reservas en los ultimos 12 meses: porcentaje por Airbnb, Booking.com, directas y repetidores. Si las directas son menos del 10%, hay margen enorme de mejora.</p><h2>Paso 2: Crea tu propio canal</h2><p>Una web de reservas directas profesional es la base. No la web generica del PMS, sino una plataforma con tu marca, dominio y experiencia de reserva que genere confianza. Necesitas diseno profesional, motor de reservas integrado con tu PMS, pasarela de pago propia, SEO tecnico y fotos profesionales.</p><h2>Paso 3: Incentiva la reserva directa</h2><p>Ofrece un 5-10% de descuento respecto a las OTAs, extras gratuitos como late checkout o pack de bienvenida, y comunicacion directa personalizada.</p><h2>Paso 4: Activa Google Ads y SEO</h2><p>Compite con las OTAs en Google con campanas de marca y SEO local. Tu coste por adquisicion sera menor que la comision de Airbnb.</p><h2>Paso 5: Fideliza huespedes</h2><p>Usa email marketing para enviar ofertas de temporada baja, pedir resenas, ofrecer descuentos por repeticion. Un huesped que repite tiene coste de adquisicion cero.</p><h2>Conclusion</h2><p>Reducir la dependencia no es dejar Airbnb. Es construir un canal propio que represente una parte creciente de tus ingresos. Cada reserva directa es un 15-20% mas de margen.</p>",
      "en": "<h2>The risk of single-channel dependency</h2><p>If over 70% of your bookings come from Airbnb, you have a dependency problem. An algorithm change or commission increase can slash your occupancy overnight.</p><h2>Step 1: Understand your channel mix</h2><p>Analyze where bookings came from over the last 12 months: Airbnb, Booking.com, direct, and repeat guests. If direct bookings are under 10%, there is massive room for improvement.</p><h2>Step 2: Build your own channel</h2><p>A professional direct booking website is the foundation. Not the generic PMS site, but a platform with your brand, domain, and trust-building booking experience. You need professional design, PMS-integrated booking engine, own payment gateway, technical SEO, and professional photos.</p><h2>Step 3: Incentivize direct booking</h2><p>Offer 5-10% discount vs OTAs, free extras like late checkout or welcome pack, and personalized direct communication.</p><h2>Step 4: Activate Google Ads and SEO</h2><p>Compete with OTAs on Google with brand campaigns and local SEO. Your acquisition cost will be lower than Airbnb commission.</p><h2>Step 5: Build guest loyalty</h2><p>Use email marketing for low-season offers, review requests, and repeat-stay discounts. A repeat guest has zero acquisition cost.</p><h2>Conclusion</h2><p>Reducing dependency does not mean leaving Airbnb. It means building your own channel that represents a growing share of revenue. Every direct booking is 15-20% more margin.</p>"
    }
  },
  {
    "slug": "web-reservas-directas-alquiler-vacacional",
    "title": {
      "es": "Guia completa: web de reservas directas para alquiler vacacional",
      "en": "Complete guide: direct booking website for vacation rentals"
    },
    "excerpt": {
      "es": "Todo lo que necesitas saber para crear una web de reservas directas que genere reservas y reduzca tu dependencia de las OTAs.",
      "en": "Everything you need to create a direct booking website that generates bookings and reduces OTA dependency."
    },
    "date": "2026-03-08",
    "readingTime": 10,
    "category": {
      "es": "Reservas directas",
      "en": "Direct bookings"
    },
    "content": {
      "es": "<h2>Por que necesitas una web de reservas directas</h2><p>Las OTAs te cuestan entre un 15% y un 20% en comisiones. Con una web directa, ese margen se queda contigo.</p><h2>Elementos esenciales</h2><h3>Motor de reservas integrado</h3><p>Disponibilidad en tiempo real sincronizada con tu PMS para evitar overbookings.</p><h3>Pasarela de pago segura</h3><p>Stripe permite cobros con tarjeta, depositos y reembolsos directamente a tu cuenta.</p><h3>Diseno que genera confianza</h3><p>Diseno profesional, fotos de calidad, resenas visibles, certificado SSL, politicas claras y datos de contacto visibles.</p><h3>SEO tecnico</h3><p>Schema markup, metadata optimizada, URLs limpias, velocidad de carga y sitemap XML.</p><h3>Area privada del huesped</h3><p>Reserva, check-in online, extras y comunicacion directa en tu plataforma.</p><h2>Errores comunes</h2><p>Usar la web generica del PMS, no invertir en SEO, no tener pasarela propia, ignorar el movil.</p><h2>Cuanto cuesta</h2><p>Con 200 reservas anuales a 1.500 euros de media, pagas 45.000-60.000 euros en comisiones. Una web que capte el 20% directamente te ahorra 9.000-12.000 euros al ano.</p>",
      "en": "<h2>Why you need a direct booking website</h2><p>OTAs cost you 15-20% in commissions. With a direct website, that margin stays with you.</p><h2>Essential elements</h2><h3>Integrated booking engine</h3><p>Real-time availability synced with your PMS to prevent overbookings.</p><h3>Secure payment gateway</h3><p>Stripe handles card payments, deposits, and refunds directly to your account.</p><h3>Trust-building design</h3><p>Professional design, quality photos, visible reviews, SSL certificate, clear policies, and visible contact info.</p><h3>Technical SEO</h3><p>Schema markup, optimized metadata, clean URLs, loading speed, and XML sitemap.</p><h3>Guest private area</h3><p>Booking view, online check-in, extras, and direct communication on your platform.</p><h2>Common mistakes</h2><p>Using generic PMS website, not investing in SEO, no own payment gateway, ignoring mobile.</p><h2>How much does it cost</h2><p>With 200 annual bookings at 1,500 euros average, you pay 45,000-60,000 euros in commissions. A website capturing 20% directly saves 9,000-12,000 euros per year.</p>"
    }
  },
  {
    "slug": "smoobu-vs-beds24-reservas-directas",
    "title": {
      "es": "Smoobu vs Beds24: que PMS elegir para reservas directas",
      "en": "Smoobu vs Beds24: which PMS to choose for direct bookings"
    },
    "excerpt": {
      "es": "Comparativa de los dos PMS mas populares para gestores que quieren potenciar reservas directas.",
      "en": "Comparison of the two most popular PMS for managers looking to boost direct bookings."
    },
    "date": "2026-03-05",
    "readingTime": 9,
    "category": {
      "es": "PMS",
      "en": "PMS"
    },
    "content": {
      "es": "<h2>La eleccion del PMS importa</h2><p>Tu PMS gestiona disponibilidad, precios y sincronizacion con OTAs. Para reservas directas, no todos son iguales.</p><h2>Smoobu: sencillez</h2><p>Interfaz intuitiva, API bien documentada, motor de reservas incluido, comunicacion automatizada. Limitaciones: web generica, motor con personalizacion limitada, sin pasarela de pago nativa.</p><h2>Beds24: potencia</h2><p>Extremadamente configurable, motor avanzado, integraciones amplias, buena relacion calidad-precio. Limitaciones: curva de aprendizaje pronunciada, API compleja, web tipo formulario.</p><h2>Recomendacion</h2><p>Ninguno es suficiente por si solo. La estrategia ganadora es usar el PMS como backend y construir una web profesional integrada via API. Menos de 10 propiedades: Smoobu. Mas de 10: Beds24. En ambos casos, invierte en una web de reservas directas profesional.</p>",
      "en": "<h2>Your PMS choice matters</h2><p>Your PMS manages availability, pricing, and OTA sync. For direct bookings, not all are equal.</p><h2>Smoobu: simplicity</h2><p>Intuitive interface, well-documented API, included booking engine, automated communication. Limitations: generic website, limited engine customization, no native payment gateway.</p><h2>Beds24: power</h2><p>Extremely configurable, advanced engine, broad integrations, good value. Limitations: steep learning curve, complex API, form-like website.</p><h2>Recommendation</h2><p>Neither is sufficient alone. The winning strategy is using the PMS as backend and building a professional website integrated via API. Under 10 properties: Smoobu. Over 10: Beds24. Either way, invest in a professional direct booking website.</p>"
    }
  },
  {
    "slug": "seo-alquiler-vacacional-guia",
    "title": {
      "es": "SEO para alquiler vacacional: guia para gestores",
      "en": "SEO for vacation rentals: a guide for managers"
    },
    "excerpt": {
      "es": "Posiciona tu web de reservas directas en Google y atrae huespedes sin depender de publicidad pagada.",
      "en": "Rank your direct booking website on Google and attract guests without relying on paid ads."
    },
    "date": "2026-03-01",
    "readingTime": 11,
    "category": {
      "es": "SEO",
      "en": "SEO"
    },
    "content": {
      "es": "<h2>Por que el SEO es crucial</h2><p>La clave esta en busquedas long-tail y locales donde puedes competir con las OTAs.</p><h2>SEO tecnico</h2><p>Schema markup LodgingBusiness, Core Web Vitals, URLs limpias, Sitemap XML, Hreflang para multiidioma.</p><h2>Contenido por propiedad</h2><p>Cada propiedad necesita pagina propia con titulo descriptivo, descripcion de 300+ palabras, caracteristicas, fotos con alt text, mapa y resenas.</p><h2>SEO local</h2><p>Google Business, resenas en Google, contenido sobre la zona, directorios locales de turismo.</p><h2>Blog</h2><p>Guias sobre la zona, consejos para viajeros, contenido estacional. Cada articulo posiciona para nuevas keywords.</p><h2>Keywords</h2><p>Transaccionales: alquiler vacacional + ubicacion. Informacionales: que hacer en + ubicacion. Navegacionales: tu marca + reservas.</p><h2>Conclusion</h2><p>Resultados en 3-6 meses, pero el trafico organico es gratuito y acumulativo.</p>",
      "en": "<h2>Why SEO is crucial</h2><p>The key is in long-tail and local searches where you can compete with OTAs.</p><h2>Technical SEO</h2><p>LodgingBusiness schema markup, Core Web Vitals, clean URLs, XML sitemap, hreflang for multilingual.</p><h2>Content per property</h2><p>Each property needs its own page with descriptive title, 300+ word description, features, photos with alt text, map, and reviews.</p><h2>Local SEO</h2><p>Google Business profile, Google reviews, area content, local tourism directories.</p><h2>Blog</h2><p>Area guides, traveler tips, seasonal content. Each article ranks for new keywords.</p><h2>Keywords</h2><p>Transactional: vacation rental + location. Informational: things to do in + location. Navigational: your brand + bookings.</p><h2>Conclusion</h2><p>Results in 3-6 months, but organic traffic is free and cumulative.</p>"
    }
  },
  {
    "slug": "calcular-comisiones-airbnb",
    "title": {
      "es": "Como calcular cuanto pierdes en comisiones de Airbnb",
      "en": "How to calculate how much you lose in Airbnb commissions"
    },
    "excerpt": {
      "es": "Formulas y ejemplos reales para calcular el impacto de las comisiones de OTAs en tu rentabilidad.",
      "en": "Formulas and real examples to calculate the impact of OTA commissions on your profitability."
    },
    "date": "2026-02-25",
    "readingTime": 7,
    "category": {
      "es": "Finanzas",
      "en": "Finance"
    },
    "content": {
      "es": "<h2>Las comisiones que no ves</h2><p>Airbnb cobra 14-16% en modelo simplificado. Booking cobra 15-18%. Se descuentan antes de que veas el dinero.</p><h2>Formula</h2><p>Coste anual = N reservas x Precio medio x % Comision</p><h3>Ejemplo: 15 propiedades</h3><p>300 reservas, precio medio 1.200 euros. 80% Airbnb (15%): 43.200 euros. 20% Booking (17%): 12.240 euros. Total: 55.440 euros/ano.</p><h2>El coste oculto</h2><p>Sin datos del huesped, no puedes fidelizar. Si uno de cada diez repitiera directamente, serian 30 reservas y 5.400 euros mas de ahorro.</p><h2>Calcula tu cifra</h2><p>Exporta reservas del ultimo ano, separa por canal, calcula comisiones, suma total. Ese numero es lo que puedes ahorrar.</p>",
      "en": "<h2>Commissions you do not see</h2><p>Airbnb charges 14-16% simplified model. Booking charges 15-18%. Deducted before you see money.</p><h2>Formula</h2><p>Annual cost = N bookings x Average price x Commission %</p><h3>Example: 15 properties</h3><p>300 bookings, average 1,200 euros. 80% Airbnb (15%): 43,200 euros. 20% Booking (17%): 12,240 euros. Total: 55,440 euros/year.</p><h2>The hidden cost</h2><p>Without guest data, you cannot build loyalty. If one in ten rebooked directly, that is 30 bookings and 5,400 euros more saved.</p><h2>Calculate your number</h2><p>Export last year bookings, separate by channel, calculate commissions, sum total. That number is what you can save.</p>"
    }
  },
  {
    "slug": "google-ads-apartamentos-turisticos",
    "title": {
      "es": "Google Ads para apartamentos turisticos: guia practica",
      "en": "Google Ads for vacation apartments: a practical guide"
    },
    "excerpt": {
      "es": "Como crear campanas de Google Ads rentables para tu negocio de alquiler vacacional.",
      "en": "How to create profitable Google Ads campaigns for your vacation rental business."
    },
    "date": "2026-02-20",
    "readingTime": 10,
    "category": {
      "es": "Marketing",
      "en": "Marketing"
    },
    "content": {
      "es": "<h2>Google Ads vs comisiones</h2><p>Tu coste por adquisicion con Google Ads suele ser menor que la comision del 15% de Airbnb.</p><h2>Tipos de campanas</h2><h3>Campanas de marca</h3><p>Puja por tu nombre y propiedades. CPC bajo, conversion alta.</p><h3>Campanas por ubicacion</h3><p>Keywords como apartamento vacacional en tu zona. Mas competidas pero rentables.</p><h3>Remarketing</h3><p>Impacta a usuarios que visitaron tu web sin reservar. Tasas de conversion mas altas.</p><h2>Presupuesto</h2><p>500-1.000 euros/mes para 10-20 propiedades puede generar 20-50 reservas directas mensuales.</p><h2>Metricas clave</h2><p>CPA menor que comision Airbnb, ROAS positivo, tasa de conversion 1-3%.</p><h2>Errores comunes</h2><p>No usar negativas, landing page generica, no trackear conversiones, pujas altas sin datos.</p>",
      "en": "<h2>Google Ads vs commissions</h2><p>Your Google Ads CPA is usually lower than Airbnb 15% commission.</p><h2>Campaign types</h2><h3>Brand campaigns</h3><p>Bid on your name and properties. Low CPC, high conversion.</p><h3>Location campaigns</h3><p>Keywords like vacation apartment in your area. Most competitive but profitable.</p><h3>Remarketing</h3><p>Retarget users who visited without booking. Highest conversion rates.</p><h2>Budget</h2><p>500-1,000 euros/month for 10-20 properties can generate 20-50 direct bookings monthly.</p><h2>Key metrics</h2><p>CPA lower than Airbnb commission, positive ROAS, 1-3% conversion rate.</p><h2>Common mistakes</h2><p>No negative keywords, generic landing page, no conversion tracking, high bids without data.</p>"
    }
  },
  {
    "slug": "email-marketing-alquiler-vacacional",
    "title": {
      "es": "Email marketing para alquiler vacacional: fideliza huespedes",
      "en": "Email marketing for vacation rentals: build guest loyalty"
    },
    "excerpt": {
      "es": "Construye una lista de emails y crea campanas que conviertan huespedes en clientes recurrentes.",
      "en": "Build an email list and create campaigns that turn guests into repeat customers."
    },
    "date": "2026-02-15",
    "readingTime": 8,
    "category": {
      "es": "Marketing",
      "en": "Marketing"
    },
    "content": {
      "es": "<h2>El email es tu canal mas rentable</h2><p>ROI medio de 36 euros por euro invertido. Un huesped que ya se alojo tiene muchas mas probabilidades de repetir.</p><h2>Como construir tu lista</h2><p>Recoge emails en cada reserva directa, ofrece descuento a cambio del email, pide email en check-in online, formulario en blog.</p><h2>Campanas que funcionan</h2><h3>Post-estancia</h3><p>Email 2 dias despues del checkout: agradecimiento, resena, 10% descuento proxima reserva.</p><h3>Temporada</h3><p>Ofertas antes de temporada alta a huespedes anteriores.</p><h3>Newsletter</h3><p>Novedades de la zona, eventos, mejoras en propiedades.</p><h3>Ultima hora</h3><p>Huecos en calendario: ofertas a tu lista. Mejor llenar a precio reducido.</p><h2>Metricas</h2><p>Tasa apertura mayor 25%, tasa clic mayor 3%, reservas por email, ingresos por email.</p>",
      "en": "<h2>Email is your most profitable channel</h2><p>Average ROI of 36 euros per euro invested. A guest who already stayed is much more likely to return.</p><h2>How to build your list</h2><p>Collect emails on every direct booking, offer discount for email, request during online check-in, blog form.</p><h2>Campaigns that work</h2><h3>Post-stay</h3><p>Email 2 days after checkout: thanks, review request, 10% discount on next booking.</p><h3>Seasonal</h3><p>Offers before high season to past guests.</p><h3>Newsletter</h3><p>Area news, events, property improvements.</p><h3>Last-minute</h3><p>Calendar gaps: offers to your list. Better to fill at reduced price.</p><h2>Metrics</h2><p>Open rate above 25%, click rate above 3%, email-generated bookings, email revenue.</p>"
    }
  },
  {
    "slug": "upselling-alquiler-vacacional",
    "title": {
      "es": "Upselling en alquiler vacacional: extras que aumentan tu ticket",
      "en": "Upselling in vacation rentals: extras that increase your revenue"
    },
    "excerpt": {
      "es": "Que extras ofrecer y como implementar upselling que aumente tus ingresos por reserva.",
      "en": "Which extras to offer and how to implement upselling that increases revenue per booking."
    },
    "date": "2026-02-10",
    "readingTime": 7,
    "category": {
      "es": "Ingresos",
      "en": "Revenue"
    },
    "content": {
      "es": "<h2>Que es el upselling</h2><p>Servicios adicionales que mejoran la experiencia y aumentan tu ingreso por reserva. Los hoteles lo dominan, los gestores de alquiler vacacional lo ignoran.</p><h2>Extras que funcionan</h2><h3>Durante la reserva</h3><p>Late/early check-in (15-25 euros), cuna o cama supletoria (10-20 euros/noche), transfer aeropuerto (30-60 euros), pack bienvenida (25-40 euros).</p><h3>Pre-llegada</h3><p>Late checkout (20-35 euros), limpieza extra (40-60 euros), experiencias locales (15-20% comision), alquiler equipamiento.</p><h2>Impacto</h2><p>Con 15% de upselling medio sobre precio de 1.200 euros y 300 reservas, son 54.000 euros adicionales al ano.</p><h2>Automatizacion</h2><p>Tu web debe mostrar extras durante la reserva y enviar emails automaticos pre-llegada.</p>",
      "en": "<h2>What is upselling</h2><p>Additional services that improve the experience and increase revenue per booking. Hotels master it, vacation rental managers ignore it.</p><h2>Extras that work</h2><h3>During booking</h3><p>Late/early check-in (15-25 euros), crib or extra bed (10-20 euros/night), airport transfer (30-60 euros), welcome pack (25-40 euros).</p><h3>Pre-arrival</h3><p>Late checkout (20-35 euros), extra cleaning (40-60 euros), local experiences (15-20% commission), equipment rental.</p><h2>Impact</h2><p>With 15% average upsell on 1,200 euro price and 300 bookings, that is 54,000 euros additional per year.</p><h2>Automation</h2><p>Your website should show extras during booking and send automatic pre-arrival emails.</p>"
    }
  },
  {
    "slug": "check-in-online-alquiler-vacacional",
    "title": {
      "es": "Check-in online: mejora la experiencia y ahorra tiempo",
      "en": "Online check-in: improve the experience and save time"
    },
    "excerpt": {
      "es": "Implementa check-in online que reduzca tu carga operativa y mejore la primera impresion del huesped.",
      "en": "Implement online check-in that reduces operational workload and improves the guest first impression."
    },
    "date": "2026-02-05",
    "readingTime": 6,
    "category": {
      "es": "Operaciones",
      "en": "Operations"
    },
    "content": {
      "es": "<h2>Por que check-in online</h2><p>El check-in presencial consume 15-30 minutos por huesped. Con 300 reservas al ano, son 75-150 horas. El check-in online libera ese tiempo.</p><h2>Que debe incluir</h2><p>Formulario de datos (DNI/pasaporte, contacto, hora llegada), parte de viajeros automatizado, instrucciones de llegada (direccion, codigo acceso, WiFi), upselling pre-llegada.</p><h2>Beneficios</h2><p>Ahorro de 75-150 horas/ano, datos recopilados automaticamente, parte de viajeros sin esfuerzo, mejor primera impresion, flexibilidad total en horarios.</p><h2>Cerraduras inteligentes</h2><p>Combina con Nuki, Yale o August para proceso 100% autonomo. Codigo de acceso generado y enviado automaticamente.</p><h2>Integracion web directa</h2><p>Check-in online integrado en tu web es ventaja competitiva frente a OTAs, reforzando tu marca.</p>",
      "en": "<h2>Why online check-in</h2><p>In-person check-in takes 15-30 minutes per guest. With 300 bookings per year, that is 75-150 hours. Online check-in frees that time.</p><h2>What it should include</h2><p>Data form (ID/passport, contact, arrival time), automated guest registration, arrival instructions (address, access code, WiFi), pre-arrival upselling.</p><h2>Benefits</h2><p>75-150 hours saved per year, data collected automatically, effortless guest registration, better first impression, total flexibility in schedules.</p><h2>Smart locks</h2><p>Combine with Nuki, Yale, or August for a 100% autonomous process. Access code generated and sent automatically.</p><h2>Direct website integration</h2><p>Online check-in integrated in your website is a competitive advantage over OTAs, reinforcing your brand.</p>"
    }
  },
  {
    "slug": "conseguir-resenas-web-reservas-directas",
    "title": {
      "es": "Como conseguir resenas en tu web de reservas directas",
      "en": "How to get reviews on your direct booking website"
    },
    "excerpt": {
      "es": "Las resenas son el factor de confianza numero uno. Consiguelas y muestralas para aumentar conversiones.",
      "en": "Reviews are the number one trust factor. Get them and display them to increase conversions."
    },
    "date": "2026-01-30",
    "readingTime": 7,
    "category": {
      "es": "Conversion",
      "en": "Conversion"
    },
    "content": {
      "es": "<h2>Las resenas venden</h2><p>El 93% de consumidores leen resenas antes de comprar. En alquiler vacacional, donde se paga por adelantado, son aun mas criticas.</p><h2>Donde conseguirlas</h2><p>Google Business (mas visibles, impactan SEO local), tu propia web (resenas propias creibles funcionan), redes sociales (testimonios Instagram).</p><h2>Como pedirlas</h2><p>Email automatico post-estancia con enlace directo a Google Reviews, mensaje WhatsApp (mas personal), incentivo sutil: 5% descuento proxima reserva.</p><h2>Como mostrarlas</h2><p>Widget Google Reviews integrado, seccion testimonios por propiedad, puntuacion media visible, fotos de huespedes.</p><h2>Resenas negativas</h2><p>No borrar ni ignorar. Responder profesionalmente, reconocer el problema, explicar solucion. Una buena respuesta a negativa genera mas confianza que cinco positivas.</p>",
      "en": "<h2>Reviews sell</h2><p>93% of consumers read reviews before buying. In vacation rentals, where you pay upfront, they are even more critical.</p><h2>Where to get them</h2><p>Google Business (most visible, impact local SEO), your own website (credible own reviews work), social media (Instagram testimonials).</p><h2>How to ask</h2><p>Automatic post-stay email with direct Google Reviews link, WhatsApp message (more personal), subtle incentive: 5% discount on next booking.</p><h2>How to display them</h2><p>Integrated Google Reviews widget, testimonials section per property, visible average score, guest photos.</p><h2>Negative reviews</h2><p>Never delete or ignore. Respond professionally, acknowledge the issue, explain the fix. A good response to a negative review builds more trust than five positive ones.</p>"
    }
  },
  {
    "slug": "channel-manager-vs-motor-reservas",
    "title": {
      "es": "Channel manager vs motor de reservas: que necesitas",
      "en": "Channel manager vs booking engine: what do you need"
    },
    "excerpt": {
      "es": "La diferencia entre channel manager y motor de reservas, y por que necesitas ambos.",
      "en": "The difference between channel manager and booking engine, and why you probably need both."
    },
    "date": "2026-01-25",
    "readingTime": 7,
    "category": {
      "es": "Tecnologia",
      "en": "Technology"
    },
    "content": {
      "es": "<h2>No son lo mismo</h2><p>El channel manager sincroniza disponibilidad y precios en multiples plataformas para evitar overbookings. El motor de reservas permite a huespedes reservar directamente en tu web.</p><h2>Cuando necesitas channel manager</h2><p>Si publicas en mas de una OTA, gestionas mas de 3 propiedades, o has tenido overbookings.</p><h2>Cuando necesitas motor de reservas</h2><p>Si quieres reservas directas, reducir comisiones y tener datos de huespedes.</p><h2>La combinacion ganadora</h2><p>Necesitas ambos. El channel manager para OTAs, el motor de reservas para tu canal directo. Smoobu y Beds24 incluyen ambos, pero sus motores son genericos. La mejor opcion es una web profesional con motor integrado que se conecte a tu PMS por API.</p>",
      "en": "<h2>They are not the same</h2><p>The channel manager syncs availability and prices across platforms to prevent overbookings. The booking engine lets guests book directly on your website.</p><h2>When you need a channel manager</h2><p>If you list on more than one OTA, manage more than 3 properties, or have had overbookings.</p><h2>When you need a booking engine</h2><p>If you want direct bookings, to reduce commissions, and to own guest data.</p><h2>The winning combination</h2><p>You need both. Channel manager for OTAs, booking engine for your direct channel. Smoobu and Beds24 include both, but their engines are generic. The best option is a professional website with integrated engine connected to your PMS via API.</p>"
    }
  },
  {
    "slug": "estrategia-precios-maximizar-ocupacion",
    "title": {
      "es": "Estrategia de precios para maximizar ocupacion e ingresos",
      "en": "Pricing strategy to maximize occupancy and revenue"
    },
    "excerpt": {
      "es": "Implementa pricing dinamico que maximice ocupacion e ingreso por noche.",
      "en": "Implement dynamic pricing that maximizes both occupancy and revenue per night."
    },
    "date": "2026-01-20",
    "readingTime": 9,
    "category": {
      "es": "Ingresos",
      "en": "Revenue"
    },
    "content": {
      "es": "<h2>El precio fijo esta muerto</h2><p>Si cobras lo mismo en agosto que en febrero, pierdes dinero en alta y ocupacion en baja.</p><h2>Factores para pricing</h2><p>Temporada, dia de la semana, antelacion, ocupacion actual, competencia.</p><h2>Revenue management basico</h2><p>Establece tarifa base (costes fijos / noches necesarias). Multiplica: baja x1.0, media x1.3-1.5, alta x1.8-2.5, eventos x2.5-4.0. Ajusta por ocupacion: menos del 50% a 30 dias, baja. Mas del 80%, sube.</p><h2>Herramientas</h2><p>PriceLabs, Beyond Pricing, Wheelhouse.</p><h2>Pricing para directas</h2><p>Ofrece 5-10% menos que OTAs y gana mas. La ventaja de precio es el mayor incentivo para reservar directo.</p>",
      "en": "<h2>Fixed pricing is dead</h2><p>If you charge the same in August as February, you lose money in high season and occupancy in low.</p><h2>Pricing factors</h2><p>Season, day of week, lead time, current occupancy, competition.</p><h2>Basic revenue management</h2><p>Set base rate (fixed costs / nights needed). Multiply: low x1.0, mid x1.3-1.5, high x1.8-2.5, events x2.5-4.0. Adjust by occupancy: under 50% at 30 days out, lower. Over 80%, raise.</p><h2>Tools</h2><p>PriceLabs, Beyond Pricing, Wheelhouse.</p><h2>Pricing for direct</h2><p>Offer 5-10% less than OTAs and earn more. The price advantage is the biggest incentive to book direct.</p>"
    }
  },
  {
    "slug": "marketing-redes-sociales-alquiler-vacacional",
    "title": {
      "es": "Marketing en redes sociales para alquiler vacacional",
      "en": "Social media marketing for vacation rentals"
    },
    "excerpt": {
      "es": "Que redes usar, que publicar y como convertir seguidores en huespedes.",
      "en": "Which networks to use, what to post, and how to convert followers into guests."
    },
    "date": "2026-01-15",
    "readingTime": 8,
    "category": {
      "es": "Marketing",
      "en": "Marketing"
    },
    "content": {
      "es": "<h2>Merece la pena</h2><p>Las redes no son canal principal de reservas, pero si de descubrimiento y confianza.</p><h2>Instagram: tu canal principal</h2><p>Feed: fotos profesionales. Reels: tours virtuales. Stories: behind-the-scenes. Highlights: por propiedad, resenas, zona. 3-4 publicaciones/semana, stories diarias, 2 reels/semana.</p><h2>Facebook</h2><p>Grupos locales de turismo, huespedes de mayor edad.</p><h2>Google Business</h2><p>El perfil mas importante. Fotos actualizadas, responder resenas, publicar novedades.</p><h2>De seguidores a reservas</h2><p>Link en bio a web directa, stories con enlace a propiedades, ofertas exclusivas para seguidores, codigos descuento solo en redes.</p><h2>Contenido que funciona</h2><p>Fotos al atardecer, antes/despues reformas, resenas en formato grafico, guias rapidas de zona.</p>",
      "en": "<h2>Is it worth it</h2><p>Social media is not the main booking channel, but it is the main discovery and trust channel.</p><h2>Instagram: your main channel</h2><p>Feed: professional photos. Reels: virtual tours. Stories: behind-the-scenes. Highlights: per property, reviews, area. 3-4 posts/week, daily stories, 2 reels/week.</p><h2>Facebook</h2><p>Local tourism groups, older guests.</p><h2>Google Business</h2><p>The most important profile. Updated photos, respond to reviews, publish updates.</p><h2>From followers to bookings</h2><p>Bio link to direct website, stories linking to properties, exclusive follower offers, social-only discount codes.</p><h2>Content that works</h2><p>Sunset photos, before/after renovations, graphic review formats, quick area guides.</p>"
    }
  },
  {
    "slug": "pasarela-pago-reservas-directas",
    "title": {
      "es": "Como elegir pasarela de pago para reservas directas",
      "en": "How to choose a payment gateway for direct bookings"
    },
    "excerpt": {
      "es": "Comparativa de pasarelas de pago: Stripe, PayPal, Redsys y mas.",
      "en": "Payment gateway comparison: Stripe, PayPal, Redsys, and more."
    },
    "date": "2026-01-10",
    "readingTime": 7,
    "category": {
      "es": "Tecnologia",
      "en": "Technology"
    },
    "content": {
      "es": "<h2>La pasarela importa</h2><p>Una mala experiencia de pago arruina la reserva. Si redirige a pagina sospechosa, el huesped reserva por Airbnb.</p><h2>Stripe</h2><p>Nuestra recomendacion. Integracion limpia, multi-moneda, depositos y reembolsos, experiencia embebida. 1.5% + 0.25 euros en Europa.</p><h2>PayPal</h2><p>Menos profesional. Comisiones mas altas (2.9% + 0.35 euros), obliga cuenta PayPal o redirige.</p><h2>Redsys</h2><p>Bancos espanoles. Integracion compleja, UX inferior a Stripe.</p><h2>Que buscar</h2><p>Experiencia embebida, 3D Secure, multi-divisa, gestion depositos, reembolsos faciles.</p><h2>Costes reales</h2><p>Stripe en reserva de 1.000 euros: 15.25 euros. Airbnb 15%: 150 euros. Diferencia: 134.75 euros que se quedan contigo.</p>",
      "en": "<h2>The gateway matters</h2><p>A bad payment experience kills the booking. If it redirects to a suspicious page, the guest books through Airbnb.</p><h2>Stripe</h2><p>Our recommendation. Clean integration, multi-currency, deposits and refunds, embedded experience. 1.5% + 0.25 euros in Europe.</p><h2>PayPal</h2><p>Less professional. Higher fees (2.9% + 0.35 euros), requires PayPal account or redirects.</p><h2>Redsys</h2><p>Spanish banks. Complex integration, inferior UX to Stripe.</p><h2>What to look for</h2><p>Embedded experience, 3D Secure, multi-currency, deposit management, easy refunds.</p><h2>Real costs</h2><p>Stripe on 1,000 euro booking: 15.25 euros. Airbnb 15%: 150 euros. Difference: 134.75 euros that stay with you.</p>"
    }
  },
  {
    "slug": "schema-markup-alquiler-vacacional",
    "title": {
      "es": "Schema markup para alquiler vacacional: guia tecnica SEO",
      "en": "Schema markup for vacation rentals: technical SEO guide"
    },
    "excerpt": {
      "es": "Implementa Schema LodgingBusiness para rich snippets en Google.",
      "en": "Implement Schema LodgingBusiness for rich snippets in Google search results."
    },
    "date": "2026-01-05",
    "readingTime": 8,
    "category": {
      "es": "SEO",
      "en": "SEO"
    },
    "content": {
      "es": "<h2>Que es Schema markup</h2><p>Codigo estructurado que le dice a Google que tipo de contenido tiene tu web. Para alquiler vacacional: LodgingBusiness.</p><h2>Por que importa</h2><p>Google muestra rich snippets: estrellas, precios, disponibilidad. Aumenta el CTR significativamente.</p><h2>Tipos de Schema</h2><p>LodgingBusiness (nombre, direccion, resenas, precios), VacationRental (habitaciones, capacidad, amenidades), Offer (tarifas, moneda, disponibilidad), Review y AggregateRating (estrellas en Google).</p><h2>Implementacion</h2><p>JSON-LD en el head de cada pagina. Debe ser dinamico con datos reales actualizados por propiedad.</p><h2>Errores comunes</h2><p>Schema generico sin datos reales, no actualizar precios, olvidar paginas individuales, no validar.</p><h2>Validacion</h2><p>Google Rich Results Test, Schema.org Validator, Google Search Console.</p>",
      "en": "<h2>What is Schema markup</h2><p>Structured code that tells Google what type of content your website has. For vacation rentals: LodgingBusiness.</p><h2>Why it matters</h2><p>Google shows rich snippets: stars, prices, availability. Significantly increases CTR.</p><h2>Schema types</h2><p>LodgingBusiness (name, address, reviews, prices), VacationRental (rooms, capacity, amenities), Offer (rates, currency, availability), Review and AggregateRating (stars in Google).</p><h2>Implementation</h2><p>JSON-LD in each page head. Must be dynamic with real updated data per property.</p><h2>Common mistakes</h2><p>Generic schema without real data, not updating prices, forgetting individual pages, not validating.</p><h2>Validation</h2><p>Google Rich Results Test, Schema.org Validator, Google Search Console.</p>"
    }
  },
  {
    "slug": "fotografia-profesional-apartamentos-turisticos",
    "title": {
      "es": "Fotografia profesional para apartamentos turisticos",
      "en": "Professional photography for vacation apartments"
    },
    "excerpt": {
      "es": "La fotografia profesional es la inversion con mayor ROI para tu negocio.",
      "en": "Professional photography is the highest-ROI investment for your business."
    },
    "date": "2025-12-28",
    "readingTime": 7,
    "category": {
      "es": "Marketing",
      "en": "Marketing"
    },
    "content": {
      "es": "<h2>Las fotos son tu primer argumento de venta</h2><p>El 90% de la decision de reserva se basa en las fotos. Un huesped tarda menos de 3 segundos en decidir. Propiedades con fotos profesionales: +40% clics, +20% reservas.</p><h2>Que fotografiar</h2><p>Imprescindible: todas las habitaciones, banos, cocina, salon, terraza, vistas. Detalles: decoracion, amenities, ropa de cama. Exterior: fachada, piscina, jardin. Contexto: playa, pueblo, restaurantes.</p><h2>Coste y ROI</h2><p>150-400 euros por propiedad. Si genera 2 reservas mas al ano ahorrando comision OTA, se recupera 10 veces.</p><h2>Consejos</h2><p>Limpiar todo antes, anadir toques de vida (flores, frutas), buena luz natural, mostrar como encontrara el huesped la propiedad.</p>",
      "en": "<h2>Photos are your first sales argument</h2><p>90% of the booking decision is based on photos. A guest takes less than 3 seconds to decide. Properties with professional photos: +40% clicks, +20% bookings.</p><h2>What to photograph</h2><p>Essential: all bedrooms, bathrooms, kitchen, living room, terrace, views. Details: decor, amenities, bedding. Exterior: facade, pool, garden. Context: beach, town, restaurants.</p><h2>Cost and ROI</h2><p>150-400 euros per property. If it generates 2 more bookings per year saving OTA commission, the investment is recovered 10 times over.</p><h2>Tips</h2><p>Clean everything before, add touches of life (flowers, fruits), good natural light, show property as guest will find it.</p>"
    }
  },
  {
    "slug": "late-checkout-early-checkin-upselling",
    "title": {
      "es": "Late checkout y early check-in como estrategia de upselling",
      "en": "Late checkout and early check-in as an upselling strategy"
    },
    "excerpt": {
      "es": "Implementa late checkout y early check-in como extras de pago para aumentar ingresos.",
      "en": "Implement late checkout and early check-in as paid extras to increase revenue."
    },
    "date": "2025-12-20",
    "readingTime": 6,
    "category": {
      "es": "Ingresos",
      "en": "Revenue"
    },
    "content": {
      "es": "<h2>El extra mas demandado</h2><p>Late checkout y early check-in son los extras mas solicitados. Ofrecerlos como pago es una oportunidad que la mayoria desperdicia.</p><h2>Precios</h2><p>Early check-in (2h antes): 15-25 euros. Late checkout (2h despues): 20-35 euros. Late checkout extendido (hasta 16h): 40-60 euros.</p><h2>Cuando ofrecerlos</h2><p>48-72 horas antes de llegada (early check-in) o primer dia (late checkout). Email automatico con la opcion.</p><h2>Gestion operativa</h2><p>Verificar automaticamente si el dia siguiente hay llegada antes de ofrecer late checkout.</p><h2>Impacto</h2><p>30% de huespedes compran a 25 euros medio, 300 reservas = 2.250 euros adicionales sin coste operativo.</p><h2>Automatizacion</h2><p>Tu web detecta disponibilidad, ofrece al huesped, cobra por Stripe, comunica nuevos horarios a limpieza.</p>",
      "en": "<h2>The most requested extra</h2><p>Late checkout and early check-in are the most requested extras. Offering them as paid is an opportunity most managers waste.</p><h2>Pricing</h2><p>Early check-in (2h earlier): 15-25 euros. Late checkout (2h later): 20-35 euros. Extended late checkout (until 4pm): 40-60 euros.</p><h2>When to offer</h2><p>48-72 hours before arrival (early check-in) or first day (late checkout). Automatic email with the option.</p><h2>Operational management</h2><p>Automatically check if the next day has an arrival before offering late checkout.</p><h2>Impact</h2><p>30% of guests buy at 25 euros average, 300 bookings = 2,250 euros additional with no operational cost.</p><h2>Automation</h2><p>Your website detects availability, offers to guest, charges via Stripe, communicates new schedules to cleaning.</p>"
    }
  },
  {
    "slug": "web-propia-vs-airbnb-gestores-profesionales",
    "title": {
      "es": "Comparativa: web propia vs Airbnb para gestores profesionales",
      "en": "Comparison: own website vs Airbnb for professional managers"
    },
    "excerpt": {
      "es": "Pros y contras de cada canal para que tomes la decision correcta.",
      "en": "Pros and cons of each channel to help you make the right decision."
    },
    "date": "2025-12-15",
    "readingTime": 9,
    "category": {
      "es": "Estrategia",
      "en": "Strategy"
    },
    "content": {
      "es": "<h2>No es competicion, es estrategia</h2><p>La pregunta correcta es como equilibrar ambos canales para maximizar rentabilidad.</p><h2>Airbnb: lo bueno</h2><p>Trafico masivo, confianza del viajero, facilidad de publicacion, cobertura internacional.</p><h2>Airbnb: lo malo</h2><p>Comisiones 15-20%, sin datos de huespedes, sin marca, dependencia algoritmo, competencia extrema.</p><h2>Web propia: lo bueno</h2><p>Cero comisiones (solo 1.5% pasarela), datos del huesped, tu marca, control total, SEO acumulativo.</p><h2>Web propia: lo malo</h2><p>Inversion inicial, generar trafico, menor confianza inicial.</p><h2>Estrategia optima</h2><p>Usa Airbnb para primer flujo de huespedes, construye canal directo en paralelo. Objetivo: 30-40% de facturacion directa. Cada punto porcentual migrado de OTA a directo es margen puro.</p>",
      "en": "<h2>Not competition, strategy</h2><p>The right question is how to balance both channels to maximize profitability.</p><h2>Airbnb: the good</h2><p>Massive traffic, traveler trust, ease of listing, international coverage.</p><h2>Airbnb: the bad</h2><p>15-20% commissions, no guest data, no brand, algorithm dependency, extreme competition.</p><h2>Own website: the good</h2><p>Zero commissions (only 1.5% gateway), guest data, your brand, total control, cumulative SEO.</p><h2>Own website: the bad</h2><p>Initial investment, generating traffic, lower initial trust.</p><h2>Optimal strategy</h2><p>Use Airbnb for first guest flow, build direct channel in parallel. Target: 30-40% direct revenue. Every percentage point migrated from OTA to direct is pure margin.</p>"
    }
  },
  {
    "slug": "metricas-clave-alquiler-vacacional",
    "title": {
      "es": "Metricas clave para tu negocio de alquiler vacacional",
      "en": "Key metrics for your vacation rental business"
    },
    "excerpt": {
      "es": "Las 10 metricas que todo gestor profesional debe monitorizar.",
      "en": "The 10 metrics every professional manager should monitor."
    },
    "date": "2025-12-10",
    "readingTime": 8,
    "category": {
      "es": "Gestion",
      "en": "Management"
    },
    "content": {
      "es": "<h2>Si no mides, no mejoras</h2><p>La diferencia entre amateur y profesional es tomar decisiones basadas en datos.</p><h2>Las 10 metricas</h2><p><strong>1. Tasa de ocupacion:</strong> Noches reservadas sobre disponibles. Objetivo: 70-85%.</p><p><strong>2. ADR:</strong> Ingreso medio por noche ocupada.</p><p><strong>3. RevPAR:</strong> Ingreso por noche disponible. Ocupacion x ADR. La mas importante.</p><p><strong>4. CAC:</strong> Coste de adquisicion por reserva. Incluye comisiones OTA y marketing.</p><p><strong>5. Ratio directas vs OTAs:</strong> Objetivo: al menos 30% directo primer ano.</p><p><strong>6. Conversion web:</strong> Visitantes que reservan. Normal: 1-3%.</p><p><strong>7. Anticipacion media:</strong> Con cuanta antelacion reservan.</p><p><strong>8. Puntuacion resenas:</strong> Objetivo: 4.5+ en todas las plataformas.</p><p><strong>9. Tasa repetidores:</strong> Refleja calidad de servicio y fidelizacion.</p><p><strong>10. Margen neto por propiedad:</strong> El numero final que importa.</p><h2>Herramientas</h2><p>PMS para ocupacion y pricing, Google Analytics para web, spreadsheet para consolidar.</p>",
      "en": "<h2>If you do not measure, you cannot improve</h2><p>The difference between amateur and professional is making data-driven decisions.</p><h2>The 10 metrics</h2><p><strong>1. Occupancy rate:</strong> Booked nights over available. Target: 70-85%.</p><p><strong>2. ADR:</strong> Average revenue per occupied night.</p><p><strong>3. RevPAR:</strong> Revenue per available night. Occupancy x ADR. The most important.</p><p><strong>4. CAC:</strong> Booking acquisition cost. Includes OTA commissions and marketing.</p><p><strong>5. Direct vs OTA ratio:</strong> Target: at least 30% direct first year.</p><p><strong>6. Website conversion:</strong> Visitors who book. Normal: 1-3%.</p><p><strong>7. Average lead time:</strong> How far in advance they book.</p><p><strong>8. Review score:</strong> Target: 4.5+ across all platforms.</p><p><strong>9. Repeat rate:</strong> Reflects service quality and loyalty.</p><p><strong>10. Net margin per property:</strong> The final number that matters.</p><h2>Tools</h2><p>PMS for occupancy and pricing, Google Analytics for web, spreadsheet to consolidate.</p>"
    }
  },
  {
    "slug": "automatizacion-alquiler-vacacional",
    "title": {
      "es": "Automatizacion en alquiler vacacional: ahorra 10 horas semanales",
      "en": "Vacation rental automation: save 10 hours per week"
    },
    "excerpt": {
      "es": "Las 8 tareas que puedes automatizar para reducir carga operativa y escalar sin contratar.",
      "en": "The 8 tasks you can automate to reduce workload and scale without hiring."
    },
    "date": "2025-12-05",
    "readingTime": 9,
    "category": {
      "es": "Operaciones",
      "en": "Operations"
    },
    "content": {
      "es": "<h2>La automatizacion es tu ventaja competitiva</h2><p>Los gestores que automatizan manejan 3 veces mas propiedades con el mismo equipo.</p><h2>8 tareas automatizables</h2><p><strong>1. Mensajes a huespedes:</strong> Confirmacion, instrucciones, check-in, resena post-estancia. Tu PMS los envia automaticamente.</p><p><strong>2. Check-in online:</strong> Formulario automatico, parte viajeros, codigos acceso. Ahorro: 15-30 min/huesped.</p><p><strong>3. Sincronizacion calendarios:</strong> Channel manager sincroniza todo automaticamente.</p><p><strong>4. Pricing dinamico:</strong> PriceLabs ajusta precios segun demanda y competencia.</p><p><strong>5. Gestion limpieza:</strong> Notificaciones automaticas al equipo en checkout. Turno o Properly.</p><p><strong>6. Cobros:</strong> Stripe gestiona deposito al reservar, resto antes de llegada, fianza.</p><p><strong>7. Resenas:</strong> Emails automaticos post-estancia pidiendo resenas.</p><p><strong>8. Informes:</strong> Dashboards automaticos con metricas de ocupacion, ingresos y rendimiento.</p><h2>ROI</h2><p>10 horas/semana a 30 euros/hora = 15.600 euros/ano en tiempo recuperado. Menos errores, mejor experiencia, escalabilidad sin contratar.</p>",
      "en": "<h2>Automation is your competitive advantage</h2><p>Managers who automate handle 3 times more properties with the same team.</p><h2>8 automatable tasks</h2><p><strong>1. Guest messages:</strong> Confirmation, instructions, check-in, post-stay review. Your PMS sends them automatically.</p><p><strong>2. Online check-in:</strong> Automatic form, guest registration, access codes. Savings: 15-30 min/guest.</p><p><strong>3. Calendar sync:</strong> Channel manager syncs everything automatically.</p><p><strong>4. Dynamic pricing:</strong> PriceLabs adjusts prices by demand and competition.</p><p><strong>5. Cleaning management:</strong> Automatic notifications to team on checkout. Turno or Properly.</p><p><strong>6. Payments:</strong> Stripe handles deposit at booking, remainder before arrival, security deposit.</p><p><strong>7. Reviews:</strong> Automatic post-stay emails requesting reviews.</p><p><strong>8. Reports:</strong> Automatic dashboards with occupancy, revenue, and performance metrics.</p><h2>ROI</h2><p>10 hours/week at 30 euros/hour = 15,600 euros/year in recovered time. Fewer errors, better experience, scalability without hiring.</p>"
    }
  }
];

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
