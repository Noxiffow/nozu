"use client";

import { motion } from "framer-motion";

const stack = [
  { label: "Lenguajes", value: "Python · JavaScript · TypeScript · SQL" },
  { label: "Web", value: "Next.js · Astro · React · FastAPI" },
  { label: "Automatización", value: "n8n · Webhooks · Cron jobs" },
  { label: "Infra", value: "Docker · Railway · GitHub Pages · Linux" },
  { label: "Herramientas", value: "Git · PostgreSQL · WhatsApp API" },
];

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 px-6 border-y border-white/[0.05]"
      style={{
        background:
          "linear-gradient(180deg, #0d0d0d 0%, #111008 50%, #0d0d0d 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">
            Sobre mí
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Jonathan Neto
          </h2>
          <div className="space-y-4 text-[#a09890] text-sm leading-relaxed">
            <p>
              Freelance técnico terminando el Grado Superior de DAM. Hago webs,
              automatizaciones y chatbots para negocios que quieren dejar de
              hacer las cosas a mano.
            </p>
            <p>
              No me interesa entregar algo que queda sin usar. Me interesa que
              funcione en producción y solucione un problema concreto — ya sea
              una web, un bot de WhatsApp o un flujo automático de reservas.
            </p>
            <p>
              Si tienes claro lo que necesitas, arrancamos. Si no está claro,
              lo aclaramos juntos. Y si no puedo hacerlo, te lo digo — sin
              cobrarte por intentarlo.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <span className="text-[#6b6560] text-sm">📍 España</span>
            <a
              href="https://github.com/Noxiffow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b6560] hover:text-[#f97316] text-sm transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>

        {/* Right — stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
            <div className="px-5 py-3 border-b border-white/[0.06] bg-[#161616]/60">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
              </div>
            </div>
            <div className="p-5 bg-[#0f0f0f] font-mono text-sm space-y-3">
              {stack.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
                  className="flex gap-4"
                >
                  <span className="text-[#6b6560] shrink-0 w-28">{label}</span>
                  <span className="text-[#e8e3dc]">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
