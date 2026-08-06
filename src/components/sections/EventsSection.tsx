"use client";

import { fispal2026 } from "@/lib/events";
import { EventHighlightsCarousel } from "../ui/EventHighlightsCarousel";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

export function EventsSection() {
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

        <ScrollReveal delay={0.08}>
          <EventHighlightsCarousel
            label={fispal2026.highlightsLabel}
            caption={fispal2026.highlightsCaption}
            photos={fispal2026.photos}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
