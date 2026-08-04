"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { EventPhoto } from "@/lib/events";
import { GradientFrame } from "./GradientFrame";

interface EventHighlightsCarouselProps {
  label: string;
  photos: EventPhoto[];
}

export function EventHighlightsCarousel({ label, photos }: EventHighlightsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = photos.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || total <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  if (total === 0) return null;

  const current = photos[index];

  return (
    <div
      className="mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-chrome">{label}</p>

      <GradientFrame>
        <div className="overflow-hidden bg-black">
          <div className="relative aspect-[21/9] min-h-[220px] w-full sm:min-h-[280px] md:min-h-[360px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-sm border border-chrome/25 bg-black/60 p-2 text-chrome backdrop-blur-sm transition-colors hover:border-chrome/50 hover:text-white"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-sm border border-chrome/25 bg-black/60 p-2 text-chrome backdrop-blur-sm transition-colors hover:border-chrome/50 hover:text-white"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-end justify-between gap-4 border-t border-chrome/10 bg-surface-alt px-5 py-4 md:px-6">
            <p className="text-sm leading-relaxed text-text-muted">{current.caption}</p>
            <p className="shrink-0 text-xs font-semibold tabular-nums text-chrome/80">
              {index + 1} / {total}
            </p>
          </div>
        </div>
      </GradientFrame>

      {total > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-chrome" : "w-1.5 bg-chrome/30 hover:bg-chrome/50"
              }`}
              aria-label={`Ir para foto ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
