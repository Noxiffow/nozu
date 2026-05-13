"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShiftCardProps {
  className?: string;
  topContent?: React.ReactNode;
  topAnimateContent?: React.ReactNode;
  middleContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

export function ShiftCard({
  className,
  topContent,
  topAnimateContent,
  middleContent,
  bottomContent,
}: ShiftCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#161616] cursor-pointer group",
        "transition-all duration-500",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orange glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(249,115,22,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Top section */}
      <div className="relative p-6 pb-0">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="animate"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {topAnimateContent}
            </motion.div>
          ) : (
            <motion.div
              key="static"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
            >
              {topContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Middle content */}
      <div className="px-6 py-4">{middleContent}</div>

      {/* Bottom — revealed on hover */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          height: isHovered ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden border-t border-white/[0.06]"
      >
        <div className="px-6 py-4">{bottomContent}</div>
      </motion.div>
    </div>
  );
}
