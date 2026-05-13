"use client";

import { cn } from "@/lib/utils";

interface FlutedGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function FlutedGlassCard({ children, className }: FlutedGlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#161616]/80 backdrop-blur-md",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 50%, rgba(249,115,22,0.03) 100%)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Fluted glass vertical lines effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 20px)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
