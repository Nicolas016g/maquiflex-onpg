"use client";

import Image from "next/image";
import { mediaUrl } from "@/lib/media";
import { fispal2026 } from "@/lib/events";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { GradientFrame } from "../ui/GradientFrame";
import { VideoPlayer } from "../ui/VideoPlayer";

export function EventsSection() {
  const { montage, photos } = fispal2026;

  return (
    <section id="eventos" className="section-padding border-t border-chrome/10 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Presença em eventos"
            title={fispal2026.title}
            subtitle={fispal2026.subtitle}
          />
        </ScrollReveal>

        <div className="mt-14">
          <ScrollReveal>
            <VideoPlayer
              src={mediaUrl(`/videos/${montage.file}`)}
              title={montage.title}
              poster={montage.poster}
              aspect="cinematic"
            />
            <p className="mt-3 text-sm font-semibold text-white">{montage.title}</p>
            <p className="mt-1 max-w-3xl text-xs leading-relaxed text-text-muted">
              {montage.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.05}>
              <GradientFrame hover>
                <figure className="group overflow-hidden bg-surface-alt">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-4 text-xs leading-relaxed text-text-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              </GradientFrame>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
