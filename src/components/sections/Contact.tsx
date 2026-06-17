"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLang();
  const { contact } = t;

  function handleEmail() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mailto:jotadev@nozutech.dev?subject=${contact.emailSubject}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&to=jotadev@nozutech.dev&su=${contact.emailSubject}`, "_blank");
    }
  }

  return (
    <section id="contacto" className="py-24 px-6 border-t border-white/[0.05]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase">{contact.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{contact.title}</h2>
          <p className="text-[#a09890] text-base leading-relaxed mb-10 max-w-md mx-auto">{contact.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={`https://wa.me/34604923459?text=${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/[0.1] text-[#a09890] hover:text-white hover:border-white/20 transition-all duration-200 flex items-center gap-2 justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <button
            onClick={handleEmail}
            className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all duration-200 shadow-[0_8px_28px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            jotadev@nozutech.dev
          </button>
          <a
            href="https://github.com/Noxiffow"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/[0.1] text-[#a09890] hover:text-white hover:border-white/20 transition-all duration-200"
          >
            {contact.github}
          </a>
        </motion.div>

        <div className="border-t border-white/[0.05] pt-10">
          <p className="text-[#6b6560] text-xs">{contact.footer}</p>
        </div>
      </div>
    </section>
  );
}
