export const copy = {
  nav: {
    links: ['The problem', 'Solution', 'Features', 'Case study', 'Blog', 'Contact'],
    cta: "Let's talk",
  },
  hero: {
    eyebrow: 'For vacation rental managers using Smoobu, Beds24 and more',
    headline_1: 'Airbnb takes 15%.',
    headline_2: 'Time to build your own channel.',
    subtitle:
      'Your own direct booking platform — your brand, your domain, your data, zero commissions.',
    cta_primary: 'I want my direct bookings',
    cta_secondary: 'See case study',
    stats: [
      { value: '0%', label: 'commission per direct booking' },
      { value: '+15%', label: 'net margin from month one' },
      { value: '4', label: 'weeks to launch' },
    ],
  },
  problem: {
    headline: "Airbnb helped you get started. But it doesn't have to keep 15% forever.",
    paragraphs: [
      'OTAs have been a great springboard to fill your properties. But 15–20% commissions on every booking eat into your margin, and over time that limits your growth.',
      "The real issue is dependency: you don't own your guests' data, your brand isn't being built, and an algorithm change can affect your occupancy overnight. That's a business risk.",
      "The smart move isn't leaving OTAs — it's diversifying. Build a direct channel that works alongside them, where you control the brand, the data, and the margin.",
    ],
  },
  pains: {
    title: 'The 5 problems you already know',
    items: [
      {
        number: '01',
        title: 'Commissions limiting your growth',
        description:
          'Between 15% and 20% of every booking goes to commissions. On 100 bookings at 2,000€, that\'s 30,000–40,000€ per year you could reinvest.',
      },
      {
        number: '02',
        title: "Your PMS website doesn't convert",
        description:
          "Smoobu and Beds24 offer a generic website that doesn't build trust. Your guests see it, but book through Airbnb because \"they trust it more\".",
      },
      {
        number: '03',
        title: "You don't own your guests' data",
        description:
          "OTAs don't share emails or phone numbers. Without that data, you can't do remarketing, email marketing, or build loyalty. Every guest is single-use.",
      },
      {
        number: '04',
        title: "Your brand isn't being built",
        description:
          'On OTAs, your properties show up as "Apartment in Barcelona". No branding, no differentiation, no brand recall.',
      },
      {
        number: '05',
        title: 'You depend on the algorithm',
        description:
          "A change in OTA rankings can affect your occupancy from one month to the next. Without your own channel, you don't control your distribution.",
      },
    ],
  },
  solution: {
    eyebrow: 'The solution',
    headline: 'Your direct booking platform. Ready in 4 weeks.',
    description:
      "OTAout builds your direct booking website integrated with your PMS. It's not a template — it's a custom platform with your brand, your domain, your Stripe and your dashboard.",
    includes:
      'We handle everything: design, development, PMS integration, payment gateway, technical SEO, admin panel, and marketing strategy advisory to grow your direct channel.',
  },
  features: {
    title: 'Everything your platform includes',
    items: [
      {
        title: 'PMS Integration',
        description:
          'Smoobu, Beds24 and more. Real-time availability + automatic OTA sync.',
        icon: 'sync',
      },
      {
        title: 'Your own Stripe',
        description:
          'Direct payments to your account. No middlemen, no holds.',
        icon: 'payment',
      },
      {
        title: 'Enterprise technical SEO',
        description:
          'Schema LodgingBusiness, dynamic metadata, sitemap, hreflang, Core Web Vitals.',
        icon: 'search',
      },
      {
        title: 'Guest private area',
        description:
          'Direct chat, extras, check-in, cancellations — without going through Airbnb.',
        icon: 'user',
      },
      {
        title: 'Full admin panel',
        description:
          'Real-time KPIs, booking management, photos, discounts, manual sync.',
        icon: 'dashboard',
      },
      {
        title: 'ADS + SEO (additional service)',
        description:
          'Google Ads + Meta Ads management and SEO positioning. Optional service with separate management fee and ad spend.',
        icon: 'chart',
      },
      {
        title: 'Upselling module',
        description:
          'Maximize every booking: extras at checkout (late check-in, airport transfer, crib) and pre-arrival (extra cleaning, welcome pack, late checkout).',
        icon: 'upselling',
      },
    ],
  },
  caseStudy: {
    eyebrow: 'Real case study',
    headline:
      '42 apartments in Castelldefels. From paying 70,000€/year to Airbnb to having their own platform.',
    description:
      'Holiday Castelldefels managed 42 properties paying over 70,000€ annually in commissions. Today they have their own direct booking platform with full Smoobu integration.',
    specs: [
      '42 properties integrated',
      'Full Smoobu API integration',
      'Own Stripe payment gateway',
      'Technical SEO with Schema LodgingBusiness',
      'Custom admin panel',
      'Guest private area',
      'Automated Google Ads + Meta',
      '1,390,607€ revenue in 2025',
    ],
  },
  whyUs: {
    title: 'Why OTAout?',
    subtitle:
      "We're not a generic agency. We're PMS specialists who also code.",
    points: [
      'Integrations that work from day one — we know the Smoobu, Beds24 and Hostaway APIs inside out.',
      'Battle-tested technology — the same stack we use for our own projects.',
      'Platforms that generate revenue, not pretty websites nobody books through.',
      'Ongoing support included — we keep optimizing after launch.',
      'Growth strategy included — we advise you on digital marketing, positioning and acquisition so your direct channel grows month after month.',
    ],
  },
  contact: {
    headline: 'Free website analysis',
    subtitle:
      "Share your current website and within 48h you'll receive a report on what you're losing in commissions and how to recover it.",
    fields: {
      name: 'Name',
      email: 'Email',
      site: 'Current website',
      properties: 'Number of properties',
      propertiesOptions: ['1–5', '6–20', '21–50', '50+'],
      pms: 'Current PMS',
      pmsOptions: ['Smoobu', 'Beds24', 'Other', "I don't have one"],
      message: 'Message (optional)',
      submit: 'Get my free analysis',
    },
    success: 'Received. We\'ll get back to you within 24 hours.',
    whatsapp: 'Or message us on WhatsApp',
  },
  calculator: {
    meta: {
      title: 'OTA Commission Calculator | OTAout',
      description: 'Calculate how much you pay in Booking and Airbnb commissions. Discover how much you could save with direct bookings.',
    },
    eyebrow: 'Free calculator',
    headline: 'How much are OTAs costing you?',
    subtitle: 'Enter your numbers and discover how much you could save by shifting bookings to your own direct channel.',
    form: {
      properties: 'Number of properties',
      avgNight: 'Average nightly rate (€)',
      occupancy: 'Average annual occupancy (%)',
      avgStay: 'Average stay (nights)',
      bookingShare: '% bookings via Booking',
      airbnbShare: '% bookings via Airbnb',
      directShare: '% current direct bookings',
      directGoal: '% direct bookings goal',
    },
    results: {
      title: 'Your savings potential',
      annual_revenue: 'Estimated annual revenue',
      current: 'What you pay OTAs today',
      bookingCost: 'Booking commissions',
      airbnbCost: 'Airbnb commissions',
      totalOta: 'Total OTA commissions',
      withDirect: 'If we boost your direct channel with OTAout',
      newBookingCost: 'Booking commissions (reduced)',
      newAirbnbCost: 'Airbnb commissions (reduced)',
      otaoutCost: 'OTAout cost',
      otaoutSetup: 'First year setup',
      otaoutMonthly: 'Monthly maintenance',
      otaoutCommission: 'Commission on web bookings (2%)',
      newTotal: 'New model total cost',
      savings: 'Net annual savings',
      savingsPercent: 'Savings vs current commissions',
      perProperty: 'Savings per property / year',
    },
    disclaimer: 'Figures are estimates based on publicly available platform commission rates. Actual results may vary depending on your market, property type and specific conditions.',
    cta: {
      headline: 'Want to see these numbers applied to your business?',
      subtitle: "We'll prepare a personalized analysis, no strings attached.",
      button: 'Request free analysis',
      whatsapp: 'Or message us on WhatsApp',
    },
    rates_note: 'Commission rates used',
    booking_rate_label: 'Booking.com (commission + payment)',
    airbnb_rate_label: 'Airbnb host-only (payment included)',
    otaout_rate_label: 'OTAout (web only)',
    payment_processing_label: 'Payment gateway (e.g. Stripe)',
  },
  footer: {
    tagline:
      'Commission-free direct bookings for vacation rental managers.',
    legal: ['Privacy policy', 'Legal notice', 'Cookies'],
    copyright: '© 2026 OTAout. All rights reserved.',
  },
  cookie: {
    message:
      'We use cookies to improve your experience and analyze site traffic. By accepting, you consent to the use of analytics cookies.',
    accept: 'Accept',
    decline: 'Decline',
  },
}
