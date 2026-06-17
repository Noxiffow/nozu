"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: t.nav.services },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-lg tracking-tight text-white hover:text-[#f97316] transition-colors"
        >
          NozuTech
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#a09890] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-white/[0.08] overflow-hidden text-xs font-mono">
            <button
              onClick={() => setLang("es")}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === "es"
                  ? "bg-[#f97316] text-white"
                  : "text-[#6b6560] hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-[#f97316] text-white"
                  : "text-[#6b6560] hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-all duration-200
              shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center rounded-lg border border-white/[0.08] overflow-hidden text-xs font-mono">
            <button
              onClick={() => setLang("es")}
              className={`px-2 py-1 transition-colors ${
                lang === "es" ? "bg-[#f97316] text-white" : "text-[#6b6560]"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors ${
                lang === "en" ? "bg-[#f97316] text-white" : "text-[#6b6560]"
              }`}
            >
              EN
            </button>
          </div>
          <button
            className="text-[#a09890] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path
                  d="M4 4L18 18M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h16M3 11h16M3 16h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#161616] border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#a09890] hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg text-sm font-medium
              bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-colors mt-1"
          >
            {t.nav.cta}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
