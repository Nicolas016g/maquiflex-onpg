import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const galleryImages = [
  { src: "/images/gallery/IMG_20260617_131156.jpg", alt: "Estrutura Maquiflex" },
  { src: "/images/gallery/IMG_20260617_131202.jpg", alt: "Máquina em operação" },
  { src: "/images/gallery/IMG_20260617_130515.jpg", alt: "Detalhe de equipamento" },
  { src: "/images/gallery/IMG_20260617_131153.jpg", alt: "Linha de produção" },
  { src: "/images/gallery/20260617_160712.jpg", alt: "Evento Fispal 2026" },
  { src: "/images/gallery/IMG_20260617_131201.jpg", alt: "Apresentação Maquiflex" },
];

const pouchImages = [
  { src: "/images/pouch/pouch-mockup.png", alt: "Mockup de pouch Maquiflex" },
  { src: "/images/pouch/pouch-cargill.png", alt: "Pouch Cargill" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Galeria"
            title="Nossa estrutura"
            subtitle="Ambiente industrial planejado para montagem, testes, controle de qualidade e desenvolvimento contínuo."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-sm border border-chrome/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pouchImages.map((img) => (
              <div
                key={img.src}
                className="flex items-center justify-center rounded-sm border border-chrome/15 bg-black p-8"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={500}
                  className="h-auto max-h-72 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
