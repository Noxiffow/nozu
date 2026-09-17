"use client";

import { motion } from "framer-motion";
import { SectionLabel, SecNum } from "@/components/ui/section-label";
import { useLang } from "@/contexts/LanguageContext";

export function Process() {
  const { t } = useLang();
  const { process } = t;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <SecNum num="03" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionLabel>{process.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{process.title}</h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex gap-0 relative">
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              top: "18px",
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(249,115,22,0.35) 15%, rgba(249,115,22,0.35) 70%, transparent)",
            }}
          />
          {process.steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-5 relative z-10 shrink-0"
                style={{
                  border: "1.5px solid rgba(249,115,22,0.35)",
                  background: "#0d0d0d",
                  boxShadow: "0 0 0 4px #0d0d0d",
                }}
              >
                <span className="text-[#f97316] text-xs font-mono font-bold">{step.num}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{step.title}</h3>
              <p className="text-[#a09890] text-xs leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-[#f97316]/40 via-[#f97316]/20 to-transparent" />
          <div className="space-y-8">
            {process.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 pl-10 relative"
              >
                <div
                  className="absolute left-0 top-0 w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0"
                  style={{ border: "1.5px solid rgba(249,115,22,0.35)", background: "#0d0d0d" }}
                >
                  <span className="text-[#f97316] text-[10px] font-mono font-bold">{step.num}</span>
                </div>
                <div className="flex-1 border border-white/[0.06] rounded-xl p-4 bg-[#161616]/60 hover:border-[#f97316]/15 transition-colors duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-[#a09890] text-xs leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
