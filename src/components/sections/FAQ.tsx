"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Qué tipo de proyectos aceptas?",
    a: "Backend en general — APIs, integraciones entre sistemas, automatizaciones. Si tienes un problema técnico concreto y necesitas a alguien que lo construya, probablemente puedo ayudarte. Si no estoy seguro, te lo digo directamente.",
  },
  {
    q: "¿Necesito tener claro qué quiero antes de contactarte?",
    a: "No hace falta que tengas todo definido. Con que me cuentes el problema es suficiente para que yo te diga si puedo ayudarte y cómo. Lo que sí ayuda es tener claro qué quieres conseguir — no necesariamente cómo.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende de la complejidad. Algo sencillo puede estar en días; un sistema con varias integraciones y lógica de negocio tarda más. Te doy un tiempo realista cuando me cuentes qué necesitas — no tengo tarifas ni plazos fijos.",
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
