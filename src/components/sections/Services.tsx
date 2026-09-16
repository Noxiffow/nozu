"use client";

import { motion } from "framer-motion";
import { Workflow, Layers, Globe } from "lucide-react";
import { FlutedGlassCard } from "@/components/ui/fluted-glass-card";
import { useLang } from "@/contexts/LanguageContext";

const servicesMeta = [
  { icon: Workflow, tags: ["n8n", "Python", "Webhooks", "Make"] },
  { icon: Layers,   tags: ["FastAPI", "PostgreSQL", "Next.js", "Railway"] },
  { icon: Globe,    tags: ["Next.js", "Astro", "TypeScript", "Cloudflare"] },
];

export function Services() {
  const { t } = useLang();
  const { services } = t;

  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">{services.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{services.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.items.map((item, i) => {
            const { icon: Icon, tags } = servicesMeta[i];
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <FlutedGlassCard className="h-full p-6 group hover:border-[#f97316]/20 transition-colors duration-300">
                  <div className="mb-4 w-10 h-10 rounded-lg bg-[#f97316]/10 border border-[#f97316]/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#f97316]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#6b6560] text-xs mb-3">{item.subtitle}</p>
                  <p className="text-[#a09890] text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/15">{tag}</span>
                    ))}
                  </div>
                  <p className="text-[#6b6560] text-xs border-t border-white/[0.05] pt-3">{item.detail}</p>
                </FlutedGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
