# OTAout — Landing Page + Blog

## Proyecto
Landing page + blog SEO para OTAout, servicio de desarrollo web y marketing especializado en alquiler vacacional. Capta gestores de apartamentos turísticos que quieren construir su canal de reservas directas.

## Stack
- Next.js 14 (App Router) + Tailwind CSS + next-intl (ES/EN)
- Resend para notificación de leads
- EasyPanel (self-hosted VPS)
- @tailwindcss/typography para blog

## URLs
- **EP subdomain**: https://otaout-web.a7lflv.easypanel.host
- **Producción**: https://otaout.com (pendiente DNS A → 51.255.174.32)
- **GitHub**: https://github.com/santiagobrito/otaout (public, master)

## Deploy
```bash
# Push + deploy
git add -A && git commit -m "mensaje" && git push
curl -s -X POST "http://51.255.174.32:3000/api/deploy/da7f21f564df63b3bed12dd0720ee58a7bb4a600cf99b930"
```
Build ~5 min. Dockerfile con npm ci + next build.

**IMPORTANTE**: Si se añade un paquete nuevo, SIEMPRE regenerar lockfile antes de deploy:
```bash
rm -f package-lock.json && npm install
```

## Identidad Visual

### Tono
- **NO demonizar Airbnb** — posicionar como puente útil, hora de diversificar
- "Comisiones", nunca "impuestos"
- Enfoque: evolución, construir tu propio activo, complementar OTAs
- Profesional, cercano, técnicamente creíble

### Diseño (Light Theme)
- Background: `#FAFAFA` | Cards: white + shadow-sm
- Text primary: `#0F172A` | Text muted: `#64748B`
- Accent: `#E8440A` (naranja) | Borders: `rgba(0,0,0,0.08)`
- Footer: dark `#0F172A`

### Tipografía
- Headlines: **Outfit** (600/700/800) via `--font-syne` / `font-syne`
- Body: **Inter** (300/400/500/600) via `--font-space-grotesk` / `font-spaceGrotesk`
- Code: JetBrains Mono 400
- NUNCA usar Syne, Space Grotesk, Roboto ni Arial — se cambiaron a Outfit + Inter

## Estructura
```
otaout/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx              # Landing (home)
│   │   ├── layout.tsx            # Layout con fonts, metadata, Schema.org
│   │   └── blog/
│   │       ├── page.tsx          # Blog listing
│   │       └── [slug]/page.tsx   # Artículo individual
│   ├── api/contact/route.ts      # POST lead → Resend
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── sections/                 # Hero, Problem, Pains, Solution, Features, CaseStudy, WhyUs, ContactForm
│   ├── layout/                   # Navbar, Footer
│   └── shared/                   # Logo, CookieConsent, LanguageSwitcher
├── lib/
│   ├── copy/
│   │   ├── es.ts                 # Todo el copy en español
│   │   ├── en.ts                 # Todo el copy en inglés
│   │   └── index.ts
│   ├── blog/articles.ts          # 20 artículos (contenido HTML)
│   └── resend/client.ts
├── i18n/                         # next-intl config
├── messages/                     # next-intl JSON (es.json, en.json)
└── Dockerfile
```

## Decisiones Clave
- **Sin precios** en la landing — solo formulario + WhatsApp
- **CTA principal**: "Analizamos tu web gratis" (gancho: informe en 48h)
- **ADS + SEO** = servicio adicional con coste aparte (gestión + inversión publicitaria)
- **Asesoramiento en marketing** SÍ incluido en el servicio base
- **Módulo de upselling** como feature (extras al reservar + pre-estancia)
- **Blog**: 20 artículos SEO, 1500-2500 palabras, datos reales, accionables
- **Caso de éxito (anonimizado)**: gestor profesional en la Costa Catalana (42 propiedades, 1.39M€ facturación 2025) — identidad reservada bajo NDA en materiales públicos
- **Honeypot anti-spam**: campo oculto "website" en el formulario

## Variables de Entorno (EasyPanel)
```
NEXT_PUBLIC_APP_URL=https://otaout.com
NEXT_PUBLIC_SITE_NAME=OTAout
RESEND_API_KEY=re_placeholder        # ← CAMBIAR por key real
RESEND_FROM_EMAIL=hola@otaout.com
RESEND_TO_EMAIL=santi@otaout.com
```

## Público Objetivo
- Gestores con 10-100 propiedades turísticas en España/Europa
- Usan Smoobu, Beds24, Hostaway u otro PMS
- Facturan 500K-5M€/año, 60-80% vía OTAs
- No técnicos — necesitan gestión integral

## Pendiente
- [ ] DNS A record otaout.com → 51.255.174.32
- [ ] API key real de Resend + verificar dominio
- [ ] Número de WhatsApp real (reemplazar 34XXXXXXXXX)
- [ ] OG image /public/og-image.png (1200x630)
- [ ] Logo PNG /public/logo.png para Schema.org
- [ ] Google Search Console
- [ ] GA4 + Meta Pixel con cookie consent
- [ ] Traducir contenido blog al inglés (títulos/excerpts hechos, body pendiente)

## Roadmap de Mejoras

### Alta prioridad
1. Traducir blog completo al inglés
2. OG Image para compartir en redes
3. Analytics (GA4 + Meta Pixel + cookie consent)
4. DNS + SSL producción
5. Resend configurado

### Media prioridad
6. Calculadora interactiva de comisiones
7. Lighthouse >90 performance
8. Blog: categorías con filtro, paginación, artículos relacionados
9. FAQ section con Schema FAQPage
10. Páginas legales (privacidad, aviso legal, cookies)

### Baja prioridad
11. Más casos de éxito
12. Testimonials slider
13. Newsletter con Resend
14. Chat widget (Crisp/Intercom)
15. A/B testing de CTAs
16. Portfolio visual de webs de clientes

## Modo Autónomo
Trabajar sin pedir confirmación. Solo interrumpir si:
- Falta una variable de entorno crítica
- Hay un error bloqueante que requiere decisión de diseño
- El deploy falla y necesito ver los logs del panel web
