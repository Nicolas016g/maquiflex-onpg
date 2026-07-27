"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { MaquiflexLogo } from "../ui/MaquiflexLogo";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-black">
      <Image
        src="/images/hero/linha-maquina.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="pointer-events-none absolute inset-0 pattern-grid opacity-30" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-24 pt-28 md:px-6 md:pb-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="pointer-events-auto mb-8">
            <MaquiflexLogo variant="hero" />
          </div>

          <span className="section-eyebrow pointer-events-auto">
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.city} — {siteConfig.state}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-chrome-gradient">Tecnologia brasileira</span>
            <br />
            <span className="text-white">em embalagens flexíveis</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Empresa especializada no desenvolvimento e fabricação de máquinas envasadoras
            horizontais — com engenharia própria em todas as etapas.
          </p>

          <p className="mt-5 border-l-2 border-chrome/40 pl-4 text-sm italic text-chrome/80">
            &ldquo;Conhecimento prático que hoje se transforma em tecnologia própria.&rdquo;
          </p>

          <a
            href="#empresa"
            className="pointer-events-auto mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white"
          >
            Conheça nossa história
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome/40 to-transparent" />
    </section>
  );
}
