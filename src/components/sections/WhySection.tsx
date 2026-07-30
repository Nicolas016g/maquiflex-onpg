import {
  Building2,
  Cog,
  Factory,
  Globe,
  Headphones,
  Layers,
  Shield,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { GradientFrame } from "../ui/GradientFrame";

const differentiators = [
  { icon: Cog, title: "Engenharia própria", desc: "Desenvolvimento completo em todas as etapas do projeto." },
  { icon: TrendingUp, title: "Décadas de experiência", desc: "Conhecimento acumulado no setor de embalagens flexíveis." },
  { icon: Shield, title: "Componentes de alta qualidade", desc: "Seleção rigorosa para máxima confiabilidade operacional." },
  { icon: Building2, title: "Estrutura nacional", desc: "Fabricação e suporte no Brasil, com agilidade de atendimento." },
  { icon: Layers, title: "Projeto modular", desc: "Arquitetura flexível para diferentes formatos e aplicações." },
  { icon: Factory, title: "Desenvolvimento contínuo", desc: "Melhoria constante de desempenho e eficiência." },
  { icon: Headphones, title: "Pós-venda local", desc: "Assistência presencial e remota com equipe especializada." },
  { icon: Globe, title: "Facilidade de manutenção", desc: "Design pensado para operação e manutenção simplificadas." },
];

const infrastructure = [
  { value: "1.200 m²", label: "Área fabril atual" },
  { value: "8", label: "Máquinas em montagem simultânea" },
  { value: "4.000 m²", label: "Expansão planejada" },
];

export function WhySection() {
  return (
    <section id="diferenciais" className="section-padding bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Diferenciais"
            title="Por que escolher a Maquiflex?"
            subtitle="Tecnologia, experiência e compromisso para impulsionar a produtividade da indústria nacional."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <GradientFrame className="h-full" hover>
                <div className="h-full bg-surface-alt p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <item.icon className="h-6 w-6 text-chrome" strokeWidth={1.5} />
                  <h3 className="mt-3 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
                </div>
              </GradientFrame>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="infra-stats-gradient mt-16 grid divide-y divide-white/15 rounded-sm border border-chrome/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {infrastructure.map((item) => (
              <div key={item.label} className="px-8 py-10 text-center">
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-2 text-sm text-white/85">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
