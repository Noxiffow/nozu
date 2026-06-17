"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLang();
  const { about } = t;

  return (
    <section id="sobre-mi" className="py-24 px-6 border-y border-white/[0.05]" style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #111008 50%, #0d0d0d 100%)" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">{about.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{about.title}</h2>
          <div className="space-y-4 text-[#a09890] text-sm leading-relaxed">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="flex items-center gap-4 mt-8">
            <span className="text-[#6b6560] text-sm">📍 {about.location}</span>
            <a href="https://github.com/Noxiffow" target="_blank" rel="noopener noreferrer" className="text-[#6b6560] hover:text-[#f97316] text-sm transition-colors">GitHub ↗</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
            <div className="px-5 py-3 border-b border-white/[0.06] bg-[#161616]/60">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
              </div>
            </div>
            <div className="p-5 bg-[#0f0f0f] font-mono text-sm space-y-3">
              {about.stack.map(({ label, value }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }} className="flex gap-4">
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
