export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      badge: "Disponible para proyectos",
      title: "Tu negocio, funcionando de verdad",
      subtitle:
        "Sistemas, automatizaciones e integraciones para negocios que quieren dejar de hacer las cosas a mano — sin tecnicismos.",
      cta: "Cuéntame tu proyecto",
      ctaSecondary: "Ver proyectos",
      chat: [
        { role: "client", text: "Necesito automatizar el proceso de pedidos de mi tienda" },
        { role: "jonathan", text: "¿Tienes ya algo montado o empezamos desde cero?" },
        { role: "client", text: "Tengo una web en Shopify, pero todo lo demás es manual" },
        { role: "jonathan", text: "Entendido. Puedo conectarlo con tu stock y automatizar notificaciones y emails. Cuéntame más sobre el volumen." },
      ],
    },
    services: {
      label: "Servicios",
      title: "Lo que construyo",
      items: [
        {
          title: "Automatizaciones e Integraciones",
          subtitle: "Workflows que trabajan mientras duermes",
          description:
            "Automatizo los procesos que ahora dependen de que alguien haga algo a mano. Reservas, emails, notificaciones, reportes, sincronización de datos entre plataformas.",
          detail: "Trabajo con lo que ya tienes — no hace falta cambiar de plataforma ni contratar nuevas herramientas.",
        },
        {
          title: "Sistemas a medida",
          subtitle: "Software que encaja en tu negocio",
          description:
            "Construyo sistemas completos adaptados a cómo funciona tu negocio: agendamiento online, gestión de clientes, paneles internos, APIs propias. Sin depender de herramientas genéricas que no encajan.",
          detail: "Backend sólido, lógica de negocio real — no plantillas ni soluciones prefabricadas que luego no escalan.",
        },
        {
          title: "Webs funcionales",
          subtitle: "Presencia digital que hace algo",
          description:
            "Webs que no son solo tarjetas de visita: formularios conectados a tus sistemas, SEO técnico desde el arranque, integraciones con lo que ya usas. Sin prometer diseño de agencia.",
          detail: "Lo que entrego funciona en producción desde el primer día — no versiones a medias ni plantillas sin adaptar.",
        },
      ],
    },
    about: {
      label: "Sobre mí",
      title: "Jonathan Neto",
      paragraphs: [
        "Freelance independiente. Construyo sistemas, automatizaciones e integraciones para negocios que quieren dejar de hacer las cosas a mano.",
        "No me interesa entregar algo que queda sin usar. Me interesa que funcione en producción y solucione un problema concreto — ya sea una web, un bot de WhatsApp o un flujo automático de reservas.",
        "Si tienes claro lo que necesitas, arrancamos. Si no está claro, lo aclaramos juntos. Y si no puedo hacerlo, te lo digo — sin cobrarte por intentarlo.",
      ],
      location: "España",
      stack: [
        { label: "Lenguajes", value: "Python · JavaScript · TypeScript · SQL" },
        { label: "Web", value: "Next.js · Astro · React · FastAPI" },
        { label: "Automatización", value: "n8n · Webhooks · Cron jobs" },
        { label: "Infra", value: "Docker · Railway · GitHub Pages · Linux" },
        { label: "Herramientas", value: "Git · PostgreSQL · WhatsApp API" },
      ],
    },
    projects: {
      label: "Proyectos",
      title: "Cosas que he construido",
      code: "Código",
      liveDemo: "Ver sitio",
      items: [
        {
          title: "Absoluto Reformas",
          subtitle: "Rebrand y web corporativa desde cero",
          description:
            "Rediseño completo de plantilla genérica a web a medida. Formulario de presupuesto con traspaso automático de contexto entre páginas, galería de antes/después e identidad visual renovada.",
          status: "En producción",
          detail:
            "SEO técnico completo: datos estructurados (Schema.org), sitemap indexado y metadatos por página. De cero presencia en buscadores a indexación activa en Google Search Console.",
        },
        {
          title: "Loyalty Wallet",
          subtitle: "Tarjeta de fidelidad en Apple & Google Wallet",
          description:
            "Sistema completo de tarjeta de fidelidad digital para negocios. Los clientes añaden la tarjeta a Apple o Google Wallet y reciben sellos automáticamente — sin instalar ninguna app.",
          status: "Completado",
          detail:
            "Push nativo via APNs (HTTP/2) en iOS y Google Wallet API en Android. Panel admin instalable como PWA con gestión de clientes, sellos, caducidad VIP y recordatorios por email.",
        },
        {
          title: "ThreadBot",
          subtitle: "Asistente IA para e-commerce",
          description:
            "Chatbot conversacional completo para tienda de ropa. Catálogo interactivo, gestión de pedidos, control de stock y automatizaciones de email con n8n. Panel admin con estadísticas en tiempo real.",
          status: "Completado",
          detail:
            "El bot conoce el catálogo en tiempo real, gestiona el estado de cada pedido y dispara emails automáticos via n8n cuando hay cambios.",
        },
        {
          title: "Portfolio Artista Digital",
          subtitle: "Portfolio para ilustrador de personajes",
          description:
            "Portfolio para artista de ilustración digital. Galería masonry con filtro de contenido, lightbox en desktop, toggle de preferencia y deploy en Vercel.",
          status: "Completado",
          detail:
            "Diseño dark surrealista con paleta OKLCH, fuentes display/mono, headers de seguridad y arquitectura estática con Astro.",
        },
        {
          title: "Client Portal",
          subtitle: "Panel de onboarding para clientes freelance",
          description:
            "Sistema de onboarding para nuevos clientes freelance. Cada cliente accede solo a su espacio — aislamiento real de datos con RLS a nivel de base de datos, no solo filtros en el frontend.",
          status: "En producción",
          detail:
            "El RLS de Supabase garantiza que ningún cliente puede ver datos de otro aunque manipule la URL — la seguridad está en la base de datos, no en el middleware.",
        },
      ],
    },
    process: {
      label: "Cómo trabajo",
      title: "Sin complicaciones",
      steps: [
        {
          num: "01",
          title: "Me cuentas qué necesitas",
          body: "Un mensaje o una llamada corta. No hace falta que tengas todo definido — con que me cuentes el problema y qué quieres conseguir, puedo decirte si puedo ayudarte y cómo.",
        },
        {
          num: "02",
          title: "Analizo y te mando una propuesta",
          body: "Necesito entender bien qué hay que construir antes de darte un precio. Cuando tengo el alcance claro, te mando una propuesta detallada — sin estimaciones a la ligera ni números inventados en el momento.",
        },
        {
          num: "03",
          title: "Lo construyo, tú lo sigues",
          body: "Tienes acceso a tu portal de cliente con el roadmap actualizado. Sabes en qué fase estamos y cuándo llega lo siguiente — sin tener que preguntarme.",
        },
        {
          num: "04",
          title: "Lo entrego funcionando",
          body: "Desplegado, probado, tuyo. Te paso los accesos y te explico lo que necesitas para el día a día.",
        },
      ],
    },
    payment: {
      label: "Condiciones de pago",
      title: "Sin letras pequeñas",
      items: [
        {
          icon: "50%",
          title: "La mitad para arrancar",
          body: "Cuando confirmamos el proyecto, pagas el 50% para reservar tu slot. A partir de ahí, empezamos a trabajar.",
        },
        {
          icon: "50%",
          title: "La mitad al entregar",
          body: "El resto lo pagas cuando el proyecto está terminado y funcionando. No antes.",
        },
        {
          icon: "↔",
          title: "El precio es el precio",
          body: "Lo que acordamos al principio es lo que pagas. Si durante el proceso el alcance cambia, lo hablamos antes de hacer nada extra — sin sorpresas en la factura final.",
        },
        {
          icon: "✕",
          title: "Si cancelas, el anticipo se queda",
          body: "Si decides parar el proyecto una vez que hemos arrancado, el 50% inicial no se devuelve. El trabajo ya está hecho.",
        },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué tipo de proyectos aceptas?",
          a: "Backend en general — APIs, integraciones entre sistemas, automatizaciones. Si tienes un problema técnico concreto y necesitas a alguien que lo construya, probablemente puedo ayudarte. Si no estoy seguro, te lo digo directamente.",
        },
        {
          q: "¿Necesito tener claro qué quiero antes de contactarte?",
          a: "No hace falta que tengas todo definido. Con que me cuentes el problema es suficiente para que yo te diga si puedo ayudarte y cómo. Lo que sí ayuda es tener claro qué quieres conseguir — no necesariamente cómo.",
        },
        {
          q: "¿Cuánto tarda un proyecto?",
          a: "Depende de la complejidad. Algo sencillo puede estar en días; un sistema con varias integraciones y lógica de negocio tarda más. Te doy un tiempo realista cuando me cuentes qué necesitas — no tengo tarifas ni plazos fijos.",
        },
        {
          q: "¿Haces mantenimiento después de entregar?",
          a: "Si lo necesitas, sí. No desaparezco al entregar — si algo falla o quieres añadir algo después, lo hablamos. No tengo tarifas de soporte predefinidas: cada caso es diferente.",
        },
        {
          q: "¿Cómo funciona el pago?",
          a: "Lo más habitual es 50% al arrancar y 50% al entregar. Para proyectos más grandes, lo dividimos en 3 hitos — arranque, revisión intermedia y entrega final. Te propongo lo que más sentido tenga según el proyecto.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¿Tienes un proyecto?",
      subtitle:
        "Cuéntame qué necesitas. Si puedo ayudarte, lo hago encantado. Si no, te lo digo directamente — sin rodeos.",
      whatsapp: "Hola%20Jonathan%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto",
      emailSubject: "Proyecto%20freelance",
      github: "Ver GitHub ↗",
      footer: "📍 España · Respondo en menos de 24h",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },

  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      badge: "Available for projects",
      title: "Your business, actually working",
      subtitle:
        "Systems, automations and integrations for businesses that want to stop doing things manually — no jargon.",
      cta: "Tell me about your project",
      ctaSecondary: "View projects",
      chat: [
        { role: "client", text: "I need to automate my store's order process" },
        { role: "jonathan", text: "Do you have something set up already, or are we starting from scratch?" },
        { role: "client", text: "I have a Shopify store, but everything else is manual" },
        { role: "jonathan", text: "Got it. I can connect it to your inventory and automate notifications and emails. Tell me more about your volume." },
      ],
    },
    services: {
      label: "Services",
      title: "What I build",
      items: [
        {
          title: "Automations & Integrations",
          subtitle: "Workflows that work while you sleep",
          description:
            "I automate the processes that currently depend on someone doing things manually. Bookings, emails, notifications, reports, data sync between platforms.",
          detail: "I work with what you already have — no need to switch platforms or buy new tools.",
        },
        {
          title: "Custom Systems",
          subtitle: "Software that fits your business",
          description:
            "I build complete systems adapted to how your business works: online scheduling, client management, internal dashboards, custom APIs. No dependency on generic tools that don't quite fit.",
          detail: "Solid backend, real business logic — no templates or pre-built solutions that break at scale.",
        },
        {
          title: "Functional Websites",
          subtitle: "A digital presence that does something",
          description:
            "Websites that aren't just business cards: forms connected to your systems, technical SEO from day one, integrations with what you already use. No promises of agency-level design.",
          detail: "What I deliver works in production from day one — no half-finished versions or unadapted templates.",
        },
      ],
    },
    about: {
      label: "About",
      title: "Jonathan Neto",
      paragraphs: [
        "Freelance developer finishing a Higher Degree in Multiplatform Application Development. I build systems, automations and integrations for businesses that want to stop doing things manually.",
        "I'm not interested in delivering something that goes unused. I care about things working in production and solving a concrete problem — whether that's a website, a WhatsApp bot or an automated booking flow.",
        "If you know what you need, we start. If it's not clear yet, we figure it out together. And if I can't do it, I'll tell you — without charging you for trying.",
      ],
      location: "Spain",
      stack: [
        { label: "Languages", value: "Python · JavaScript · TypeScript · SQL" },
        { label: "Web", value: "Next.js · Astro · React · FastAPI" },
        { label: "Automation", value: "n8n · Webhooks · Cron jobs" },
        { label: "Infra", value: "Docker · Railway · GitHub Pages · Linux" },
        { label: "Tools", value: "Git · PostgreSQL · WhatsApp API" },
      ],
    },
    projects: {
      label: "Projects",
      title: "Things I've built",
      code: "Code",
      liveDemo: "View site",
      items: [
        {
          title: "Absoluto Reformas",
          subtitle: "Rebrand and corporate website from scratch",
          description:
            "Full redesign from generic template to a custom, conversion-focused site. Budget form with automatic context passing between pages, before/after gallery of real works and renewed visual identity.",
          status: "Live",
          detail:
            "Full technical SEO: structured data (Schema.org), indexed sitemap and per-page metadata. From zero search presence to active indexing in Google Search Console within days.",
        },
        {
          title: "Loyalty Wallet",
          subtitle: "Loyalty card for Apple & Google Wallet",
          description:
            "Complete digital loyalty card system for businesses. Clients add the card to Apple or Google Wallet and receive stamps automatically — no app required.",
          status: "Completed",
          detail:
            "Native push via APNs (HTTP/2) on iOS and Google Wallet API on Android. Admin panel installable as PWA with client management, stamps, VIP expiry and email reminders.",
        },
        {
          title: "ThreadBot",
          subtitle: "AI assistant for e-commerce",
          description:
            "Full conversational chatbot for a clothing store. Interactive catalog, order management, stock control and email automations with n8n. Admin panel with real-time stats.",
          status: "Completed",
          detail:
            "The bot knows the catalog in real time, tracks every order's status and fires automated emails via n8n whenever something changes.",
        },
        {
          title: "Digital Artist Portfolio",
          subtitle: "Portfolio for character illustrator",
          description:
            "Portfolio for a digital illustration artist. Masonry gallery with content filter, desktop lightbox, preference toggle and Vercel deploy.",
          status: "Completed",
          detail:
            "Dark surrealist design with OKLCH palette, display/mono fonts, security headers and static architecture with Astro.",
        },
        {
          title: "Client Portal",
          subtitle: "Onboarding panel for freelance clients",
          description:
            "Internal onboarding system for new freelance clients. Each client only accesses their own space — real data isolation with Row Level Security at the database level, not just frontend filters.",
          status: "Live",
          detail:
            "Supabase RLS ensures no client can see another's data even if they manipulate the URL — security lives at the database, not the middleware.",
        },
      ],
    },
    process: {
      label: "How I work",
      title: "No complications",
      steps: [
        {
          num: "01",
          title: "You tell me what you need",
          body: "A message or a short call. You don't need to have everything figured out — tell me the problem and what you want to achieve, and I'll tell you if I can help and how.",
        },
        {
          num: "02",
          title: "I analyse and send you a proposal",
          body: "I need to understand what needs to be built before I give you a price. Once the scope is clear, I send you a detailed proposal — no off-the-cuff estimates or numbers pulled out of thin air.",
        },
        {
          num: "03",
          title: "I build it, you follow along",
          body: "You get access to your own client portal with a live project roadmap. You know what phase we're in and when the next thing lands — without having to ask me.",
        },
        {
          num: "04",
          title: "I deliver it working",
          body: "Deployed, tested, yours. I hand over access and explain what you need for day-to-day use.",
        },
      ],
    },
    payment: {
      label: "Payment terms",
      title: "No fine print",
      items: [
        {
          icon: "50%",
          title: "Half upfront",
          body: "When we confirm the project, you pay 50% to reserve your slot. Work starts from there.",
        },
        {
          icon: "50%",
          title: "Half on delivery",
          body: "The rest is paid when the project is finished and working. Not before.",
        },
        {
          icon: "↔",
          title: "The price is the price",
          body: "What we agree at the start is what you pay. If scope changes during the project, we talk before doing anything extra — no surprise invoices.",
        },
        {
          icon: "✕",
          title: "If you cancel, the deposit stays",
          body: "If you decide to stop the project after we've started, the initial 50% is non-refundable. The work is already done.",
        },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "What kind of projects do you take?",
          a: "Backend in general — APIs, system integrations, automations. If you have a concrete technical problem and need someone to build it, I can probably help. If I'm not sure, I'll tell you directly.",
        },
        {
          q: "Do I need to have everything figured out before contacting you?",
          a: "You don't need everything defined. Just telling me the problem is enough for me to say whether I can help and how. What does help is having a clear goal — not necessarily knowing how to get there.",
        },
        {
          q: "How long does a project take?",
          a: "It depends on the complexity. Something simple can be done in days; a system with multiple integrations and business logic takes longer. I give you a realistic timeline when you tell me what you need — no fixed rates or deadlines.",
        },
        {
          q: "Do you do maintenance after delivery?",
          a: "If you need it, yes. I don't disappear after delivering — if something breaks or you want to add something later, we'll talk about it. I don't have predefined support rates: every case is different.",
        },
        {
          q: "How does payment work?",
          a: "The most common structure is 50% upfront and 50% on delivery. For larger projects, we split it into 3 milestones — kickoff, mid-point review, and final delivery. I'll propose whatever makes most sense for your project.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Got a project?",
      subtitle:
        "Tell me what you need. If I can help, I'll be glad to. If not, I'll tell you straight — no runaround.",
      whatsapp: "Hi%20Jonathan%2C%20I%27m%20interested%20in%20discussing%20a%20project",
      emailSubject: "Freelance%20project",
      github: "View GitHub ↗",
      footer: "📍 Spain · Replies within 24h",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
} as const;

export type Translations = (typeof translations)["es"];
