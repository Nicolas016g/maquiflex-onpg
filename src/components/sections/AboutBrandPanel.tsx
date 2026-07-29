"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GradientFrame } from "../ui/GradientFrame";
import { MaquiflexLogo } from "../ui/MaquiflexLogo";

export function AboutBrandPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const textY = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const glowY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <div ref={containerRef}>
      <GradientFrame className="h-full">
        <div className="relative flex min-h-[22rem] flex-col items-center justify-center overflow-hidden bg-surface-alt px-8 py-12 text-center md:min-h-[26rem]">
          <motion.div
            style={{ y: glowY }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chrome/10 blur-3xl md:h-64 md:w-64"
            aria-hidden
          />

          <motion.div style={{ y: logoY }} className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MaquiflexLogo
                variant="hero"
                className="mx-auto h-24 w-auto object-center sm:h-28 md:h-32 lg:h-36"
              />
            </motion.div>
          </motion.div>

          <motion.div style={{ y: textY }} className="relative z-10 mt-8 max-w-sm space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-chrome">
              Monte Alto / SP
            </p>
            <p className="text-xl font-bold text-white md:text-2xl">1.200 m² de área fabril</p>
            <p className="text-sm leading-relaxed text-text-muted">
              Tecnologia nacional, engenharia própria e fabricação brasileira para o mercado de
              embalagens flexíveis.
            </p>
          </motion.div>
        </div>
      </GradientFrame>
    </div>
  );
}
