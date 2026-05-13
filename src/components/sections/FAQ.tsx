"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Con qué tipo de proyectos trabajas?",
    a: "Chatbots IA, automatizaciones con n8n y APIs REST. Principalmente para negocios que necesitan sistemas funcionales — tiendas online, atención al cliente automatizada, integraciones entre herramientas.",
  },
  {
    q: "¿Quién paga las APIs de IA?",
    a: "Tú. Yo construyo la integración; las claves de API (Groq, OpenAI, lo que sea) son tuyas. Así tienes el control total del coste y de los datos. Te explico cómo funciona todo antes de empezar.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende de la complejidad. Un chatbot básico conectado a un catálogo puede estar en una semana. Algo con panel admin, stock y automatizaciones tarda más. Te doy un tiempo realista cuando me cuentes qué necesitas.",
  },
  {
    q: "¿Haces mantenimiento después de entregar?",
    a: "Si lo necesitas, sí. No desaparezco al entregar — si algo falla o quieres añadir algo después, lo hablamos. No tengo tarifas de soporte predefinidas: cada caso es diferente.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[#e8e3dc] text-sm font-medium group-hover:text-white transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[#f97316] text-xl leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#a09890] text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-white/[0.07] rounded-2xl px-6 bg-[#161616]/40"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
