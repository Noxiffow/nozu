"use client";

import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[#6b6560] text-xs font-mono">NozuTech · Jonathan Neto</span>
        <span className="text-[#6b6560] text-xs">© {new Date().getFullYear()} · {t.footer.rights}</span>
      </div>
    </footer>
  );
}
