"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const techStack = [
  "FastAPI", "Python", "PostgreSQL", "Docker", "Railway",
  "n8n", "JavaScript", "TypeScript", "Linux", "Git",
  "FastAPI", "Python", "PostgreSQL", "Docker", "Railway",
  "n8n", "JavaScript", "TypeScript", "Linux", "Git",
];

export function Hero() {
  const { t } = useLang();
  const { hero } = t;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-[#f97316]/30 text-[#f97316] bg-[#f97316]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ background: "linear-gradient(140deg, #ffffff 0%, #e8e3dc 50%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a09890] text-lg leading-relaxed mb-8"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#contacto" className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all duration-200 shadow-[0_8px_28px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 active:translate-y-0">
              {hero.cta}
            </a>
            <a href="#proyectos" className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/[0.1] text-[#a09890] hover:text-white hover:border-white/20 transition-all duration-200">
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ background: "#fff", boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" }}>
            <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 ml-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#6b7280" }}>D</div>
                <span className="text-xs font-medium text-gray-700">David R.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 ml-0.5" />
              </div>
            </div>
            <div className="p-4 space-y-3 bg-gray-50 min-h-[220px]">
              {hero.chat.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }} className={`flex ${msg.role === "jonathan" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${msg.role === "jonathan" ? "bg-[#f97316] text-white rounded-br-sm" : "bg-white text-gray-700 border border-gray-100 rounded-bl-sm shadow-sm"}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex justify-end">
                <div className="bg-[#f97316]/20 border border-[#f97316]/20 rounded-2xl rounded-br-sm px-3 py-2 flex gap-1 items-center">
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f97316]" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, delay, repeat: Infinity }} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.05] overflow-hidden py-3">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-8 whitespace-nowrap w-max">
          {techStack.map((tech, i) => (
            <span key={i} className="text-xs font-mono text-[#6b6560] hover:text-[#f97316] transition-colors cursor-default">{tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
