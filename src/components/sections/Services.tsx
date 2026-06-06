"use client";

import { motion } from "framer-motion";
import { FlutedGlassCard } from "@/components/ui/fluted-glass-card";

const services = [
  {
    icon: "🌐",
    title: "Páginas Web",
    subtitle: "La cara digital de tu negocio",
    description:
      "Te hago la web aunque no tengas claro qué quieres. Tú aportas las fotos y el contenido, yo me encargo del diseño, el desarrollo y que quede online.",
    tags: ["Next.js", "Astro", "GitHub Pages", "Railway"],
    detail: "Entregada funcionando desde el primer día — no versiones a medias.",
  },
  {
    icon: "⚙️",
    title: "Automatizaciones",
    subtitle: "Workflows que trabajan mientras duermes",
    description:
      "Automatizo los procesos que ahora dependen de que alguien haga algo a mano. Reservas, emails, notificaciones, reportes, sincronización de datos.",
    tags: ["n8n", "Python", "Webhooks", "Make"],
    detail: "Trabajo con lo que ya tienes — no hace falta cambiar de plataforma.",
  },
  {
    icon: "🤖",
    title: "Chatbots e Integraciones",
    subtitle: "Tu negocio disponible 24/7",
    description:
      "Chatbots en WhatsApp o en tu web que responden, gestionan pedidos o atienden clientes. Conecto herramientas que no se hablan entre sí.",
    tags: ["WhatsApp API", "FastAPI", "n8n", "IA"],
    detail: "Sin intervención manual — el bot trabaja, tú descansas.",
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
