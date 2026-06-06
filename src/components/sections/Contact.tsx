"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 px-6 border-t border-white/[0.05]"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tienes un proyecto?
          </h2>
          <p className="text-[#a09890] text-base leading-relaxed mb-10 max-w-md mx-auto">
            Cuéntame qué necesitas. Si puedo ayudarte, lo hago encantado.
            Si no, te lo digo directamente — sin rodeos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:jotadev@nozutech.dev?subject=Proyecto%20freelance"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#f97316] text-white
              hover:bg-[#ea6c0a] transition-all duration-200
              shadow-[0_8px_28px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.5)]
              hover:-translate-y-0.5 active:translate-y-0"
          >
            jotadev@nozutech.dev
          </a>
          <a
            href="https://github.com/Noxiffow"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/[0.1]
              text-[#a09890] hover:text-white hover:border-white/20 transition-all duration-200"
          >
            Ver GitHub ↗
          </a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-10">
          <p className="text-[#6b6560] text-xs">
            📍 España &nbsp;·&nbsp; Respondo en menos de 24h
          </p>
        </div>
      </div>
    </section>
  );
}
