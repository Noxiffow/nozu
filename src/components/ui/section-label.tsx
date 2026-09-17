"use client";

import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-xs font-mono text-[#f97316] mb-3 tracking-widest uppercase pl-3",
        className
      )}
      style={{ borderLeft: "2px solid #f97316" }}
    >
      {children}
    </p>
  );
}

export function SecNum({ num }: { num: string }) {
  return (
    <span
      aria-hidden
      className="absolute top-6 right-0 font-bold pointer-events-none select-none"
      style={{
        fontSize: "130px",
        lineHeight: 1,
        letterSpacing: "-0.04em",
        color: "#f97316",
        opacity: 0.04,
      }}
    >
      {num}
    </span>
  );
}
