import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { AboutBrandPanel } from "./AboutBrandPanel";

export function AboutSection() {
  return (
    <section id="empresa" className="section-padding !pb-12 md:!pb-16 pattern-grid">
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
                complementares com mais de 46 anos de experiência acumulada transformadas em
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
            <AboutBrandPanel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
