import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

export function AboutSection() {
  return (
    <section id="empresa" className="section-padding pattern-grid">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="A Empresa"
            title="Quem somos"
            subtitle="Empresa brasileira especializada no desenvolvimento e fabricação de máquinas envasadoras horizontais para embalagens flexíveis."
          />
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                A Maquiflex nasceu da experiência prática de profissionais que atuaram por décadas ao
                lado dos principais fabricantes mundiais de máquinas HFFS. Trajetórias sólidas e
                complementares — com mais de 46 anos de experiência acumulada — transformadas em
                soluções robustas e confiáveis para a indústria brasileira.
              </p>
              <p>
                Fundada em Monte Alto, interior de São Paulo, a empresa reúne conhecimento técnico
                de engenheiros e especialistas que construíram sua carreira no setor de embalagens
                flexíveis, canalizando essa expertise em tecnologia própria e fabricação nacional.
              </p>
              <p className="border-l-2 border-chrome/30 pl-4 text-chrome">
                Engenharia própria em todas as etapas: do projeto mecânico à automação, da fabricação
                à instalação e pós-venda.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-sm border border-chrome/15">
              <Image
                src="/images/gallery/IMG_20260617_131156.jpg"
                alt="Equipe e estrutura Maquiflex"
                width={800}
                height={600}
                className="h-80 w-full object-cover md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-chrome">Monte Alto / SP</p>
                <p className="mt-1 text-lg font-semibold text-white">1.200 m² de área fabril</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
