"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { VideoPlayer } from "../ui/VideoPlayer";
import {
  getVideoSrc,
  videoCategories,
  videosByCategory,
  type VideoCategory,
} from "@/lib/videos";

const categoryOrder: VideoCategory[] = ["institucional", "tecnologia"];

export function VideoShowcaseSection() {
  return (
    <section id="videos" className="section-padding !pt-12 md:!pt-16 pattern-grid border-t border-chrome/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Conheça a Maquiflex"
            title="Nossa história em vídeo"
            subtitle="Registros institucionais e da engenharia — uma visão de quem somos e como trabalhamos."
          />
        </ScrollReveal>

        {categoryOrder.map((category, catIndex) => {
          const videos = videosByCategory(category);
          if (videos.length === 0) return null;

          return (
            <div key={category} className={catIndex === 0 ? "mt-14" : "mt-20"}>
              <ScrollReveal delay={catIndex * 0.05}>
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-chrome">
                    {videoCategories[category]}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-chrome/30 to-transparent" />
                </div>
              </ScrollReveal>

              <div
                className={`grid gap-5 ${
                  category === "institucional"
                    ? "lg:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {videos.map((video, i) => (
                  <ScrollReveal key={video.id} delay={i * 0.04}>
                    <div className={category === "institucional" && i === 0 ? "lg:col-span-3" : ""}>
                      <VideoPlayer
                        src={getVideoSrc(video.file)}
                        title={video.title}
                        aspect={category === "institucional" && i === 0 ? "cinematic" : "video"}
                        showRemainingCountdown={video.id === "recepcao"}
                      />
                      <p className="mt-3 text-sm font-semibold text-white">{video.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-text-muted">
                        {video.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
