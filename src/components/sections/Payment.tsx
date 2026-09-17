"use client";

import { motion } from "framer-motion";
import { SectionLabel, SecNum } from "@/components/ui/section-label";
import { useLang } from "@/contexts/LanguageContext";

export function Payment() {
  const { t } = useLang();
  const { payment } = t;

  const milestones = payment.items.slice(0, 3);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <SecNum num="04" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionLabel>{payment.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{payment.title}</h2>
        </motion.div>

        {/* Milestone bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 border border-white/[0.06] rounded-2xl p-6 bg-[#161616]/40"
        >
          <div className="flex gap-1 h-1.5 mb-5 overflow-hidden rounded-full">
            <motion.div
              className="rounded-full bg-[#f97316]"
              style={{ flex: 33 }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="rounded-full bg-[#f97316] opacity-60"
              style={{ flex: 33 }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            />
            <motion.div
              className="rounded-full bg-[#f97316] opacity-25"
              style={{ flex: 34 }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {milestones.map((item, i) => (
              <div key={i} style={{ opacity: [1, 0.7, 0.45][i] }}>
                <span
                  className="font-bold font-mono leading-none block mb-1"
                  style={{ fontSize: "22px", color: "#f97316" }}
                >
                  {item.icon}
                </span>
                <p className="text-[#a09890] text-xs">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {payment.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-white/[0.06] rounded-2xl p-6 bg-[#161616]/60 hover:border-[#f97316]/15 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f97316] font-mono text-lg font-bold">{item.icon}</span>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
              <p className="text-[#a09890] text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
