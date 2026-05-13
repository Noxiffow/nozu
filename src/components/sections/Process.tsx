"use client";

import { motion } from "framer-motion";

const steps = [
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
];

export function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">
            Cómo trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sin complicaciones
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#f97316]/40 via-[#f97316]/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-8 md:pl-16 relative"
              >
                {/* Step number dot */}
                <div className="absolute left-0 top-1 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 shrink-0">
                  <span className="text-[#f97316] text-xs font-mono font-bold">
                    {step.num}
                  </span>
                </div>

                <div className="flex-1 border border-white/[0.06] rounded-2xl p-6 bg-[#161616]/60 hover:border-[#f97316]/15 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#f97316] text-xs font-mono md:hidden">
                      {step.num}
                    </span>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-[#a09890] text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
