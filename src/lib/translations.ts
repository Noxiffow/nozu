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
        "Webs, automatizaciones y chatbots para negocios que quieren dejar de hacer las cosas a mano — sin tecnicismos.",
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
          title: "Páginas Web",
          subtitle: "La cara digital de tu negocio",
          description:
            "Te hago la web aunque no tengas claro qué quieres. Tú aportas las fotos y el contenido, yo me encargo del diseño, el desarrollo y que quede online.",
          detail: "Entregada funcionando desde el primer día — no versiones a medias.",
        },
        {
          title: "Automatizaciones",
          subtitle: "Workflows que trabajan mientras duermes",
          description:
            "Automatizo los procesos que ahora dependen de que alguien haga algo a mano. Reservas, emails, notificaciones, reportes, sincronización de datos.",
          detail: "Trabajo con lo que ya tienes — no hace falta cambiar de plataforma.",
        },
        {
          title: "Chatbots e Integraciones",
          subtitle: "Tu negocio disponible 24/7",
          description:
            "Chatbots en WhatsApp o en tu web que responden, gestionan pedidos o atienden clientes. Conecto herramientas que no se hablan entre sí.",
          detail: "Sin intervención manual — el bot trabaja, tú descansas.",
        },
      ],
    },
    about: {
      label: "Sobre mí",
      title: "Jonathan Neto",
      paragraphs: [
        "Freelance técnico terminando el Grado Superior de DAM. Hago webs, automatizaciones y chatbots para negocios que quieren dejar de hacer las cosas a mano.",
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
      liveDemo: "Demo en vivo",
      items: [
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
          title: "WhatsApp CRM",
          subtitle: "CRM para conversaciones de WhatsApp",
          description:
            "MVP de CRM para centralizar contactos y conversaciones de WhatsApp. Gestión de estados y seguimiento de leads desde un panel único.",
          status: "MVP",
          detail:
            "Centraliza conversaciones de WhatsApp en un CRM propio — sin depender de herramientas de pago ni perder el historial.",
        },
      ],
    },
    process: {
      label: "Cómo trabajo",
      title: "Sin complicaciones",
      steps: [
        {
          num: "01",
          title: "Me cuentas qué quieres",
          body: "Sin reuniones infinitas ni formularios raros. Un mensaje con lo que necesitas es suficiente para saber si puedo ayudarte.",
        },
        {
          num: "02",
          title: "Te digo si puedo hacerlo",
          body: "Evalúo el proyecto y te doy una respuesta directa. Si puedo, te propongo cómo. Si no puedo, te lo digo — no voy a cobrarte por algo que no domino.",
        },
        {
          num: "03",
          title: "Lo construyo y lo entrego",
          body: "Desarrollado, desplegado y entregado funcionando. Sin versiones incompletas ni excusas de última hora.",
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
        "Websites, automations and chatbots for businesses that want to stop doing things manually — no jargon.",
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
          title: "Websites",
          subtitle: "Your business's digital face",
          description:
            "I'll build your site even if you don't have a clear vision yet. You bring the photos and content, I handle the design, development and deployment.",
          detail: "Delivered working from day one — no half-finished versions.",
        },
        {
          title: "Automations",
          subtitle: "Workflows that work while you sleep",
          description:
            "I automate the processes that currently depend on someone doing things manually. Bookings, emails, notifications, reports, data sync.",
          detail: "I work with what you already have — no need to switch platforms.",
        },
        {
          title: "Chatbots & Integrations",
          subtitle: "Your business available 24/7",
          description:
            "Chatbots on WhatsApp or your website that respond, handle orders or support customers. I connect tools that don't talk to each other.",
          detail: "No manual intervention — the bot works, you rest.",
        },
      ],
    },
    about: {
      label: "About",
      title: "Jonathan Neto",
      paragraphs: [
        "Freelance developer finishing a Higher Degree in Multiplatform Application Development. I build websites, automations and chatbots for businesses that want to stop doing things manually.",
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
      liveDemo: "Live demo",
      items: [
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
          title: "WhatsApp CRM",
          subtitle: "CRM for WhatsApp conversations",
          description:
            "CRM MVP to centralize WhatsApp contacts and conversations. Status management and lead tracking from a single panel.",
          status: "MVP",
          detail:
            "Centralizes WhatsApp conversations in a self-owned CRM — without depending on paid tools or losing chat history.",
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
          body: "No endless meetings or weird forms. A message describing what you need is enough for me to tell you if I can help.",
        },
        {
          num: "02",
          title: "I tell you if I can do it",
          body: "I evaluate the project and give you a straight answer. If I can, I'll propose how. If I can't, I'll tell you — I won't charge you for something I don't master.",
        },
        {
          num: "03",
          title: "I build it and deliver it",
          body: "Developed, deployed and delivered working. No incomplete versions, no last-minute excuses.",
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
