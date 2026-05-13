"use client";

import { motion } from "framer-motion";
import { FlutedGlassCard } from "@/components/ui/fluted-glass-card";

const services = [
  {
    icon: "🤖",
    title: "Chatbots IA",
    subtitle: "Para e-commerce y atención al cliente",
    description:
      "Chatbots conversacionales conectados a tu catálogo, stock y pedidos. Sin respuestas genéricas — el bot conoce tu negocio.",
    tags: ["FastAPI", "Groq AI", "PostgreSQL"],
    detail: "Integración con WhatsApp, web o Telegram según lo que necesites.",
  },
  {
    icon: "⚙️",
    title: "Automatizaciones n8n",
    subtitle: "Workflows que trabajan mientras duermes",
    description:
      "Conecto tus herramientas para que dejen de depender de que alguien haga algo manualmente. Emails, notificaciones, sincronización de datos.",
    tags: ["n8n", "Webhooks", "APIs"],
    detail: "Sin código vendor-lock — todo en tu propio servidor si quieres.",
  },
  {
    icon: "🔌",
    title: "APIs REST",
    subtitle: "El backend detrás de tu producto",
    description:
      "APIs limpias, documentadas y desplegadas. Desde un MVP rápido hasta algo más sólido según lo que necesite tu proyecto.",
    tags: ["FastAPI", "Docker", "Railway"],
    detail: "Desplegado desde el primer día — no te entrego código sin deployar.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Lo que construyo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <FlutedGlassCard className="h-full p-6 group hover:border-[#f97316]/20 transition-colors duration-300">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  {service.title}
                </h3>
                <p className="text-[#6b6560] text-xs mb-3">{service.subtitle}</p>
                <p className="text-[#a09890] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono
                        bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[#6b6560] text-xs border-t border-white/[0.05] pt-3">
                  {service.detail}
                </p>
              </FlutedGlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
