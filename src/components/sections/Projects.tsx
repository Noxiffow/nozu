"use client";

import { motion } from "framer-motion";
import { ShiftCard } from "@/components/ui/shift-card";
import { useLang } from "@/contexts/LanguageContext";

const projectsMeta = [
  {
    tags: ["FastAPI", "Groq AI", "n8n", "PostgreSQL", "Docker", "Fly.io"],
    github: "https://github.com/Noxiffow/threadbot-winowin",
    demo: null,
    video: "/videos/threadbot-demo.mp4",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    tags: ["Astro", "TypeScript", "CSS", "Vercel"],
    github: "https://github.com/Noxiffow/syn924-artist-portfolio",
    demo: null,
    video: null,
    image: "/images/project-artist-portfolio.png",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
  },
];

export function Projects() {
  const { t } = useLang();
  const { projects } = t;

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">{projects.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{projects.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.items.map((project, i) => {
            const meta = projectsMeta[i];
            return (
              <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <ShiftCard
                  className="h-full"
                  topContent={
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                        <p className="text-[#6b6560] text-xs mt-0.5">{project.subtitle}</p>
                      </div>
                      <span className={`shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full border ${meta.statusColor}`}>{project.status}</span>
                    </div>
                  }
                  topAnimateContent={<p className="text-[#a09890] text-sm leading-relaxed">{project.detail}</p>}
                  middleContent={
                    <div>
                      {meta.video && (
                        <div className="mb-4 rounded-lg overflow-hidden border border-white/[0.06]">
                          <video src={meta.video} autoPlay muted loop playsInline className="w-full max-h-48 object-cover" />
                        </div>
                      )}
                      {!meta.video && meta.image && (
                        <div className="mb-4 rounded-lg overflow-hidden border border-white/[0.06]">
                          <img src={meta.image} alt="" className="w-full max-h-48 object-cover object-top" />
                        </div>
                      )}
                      <p className="text-[#a09890] text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {meta.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-[#6b6560] border border-white/[0.06]">{tag}</span>
                        ))}
                      </div>
                    </div>
                  }
                  bottomContent={
                    <div className="flex items-center gap-3">
                      <a href={meta.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[#a09890] hover:text-white transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        {projects.code}
                      </a>
                      {meta.demo && (
                        <a href={meta.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[#f97316] hover:text-[#fb923c] transition-colors font-medium">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          {projects.liveDemo}
                        </a>
                      )}
                    </div>
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
