import { Building2, Factory, FlaskConical, Maximize2 } from "lucide-react";
import { mediaUrl } from "@/lib/media";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { VideoPlayer } from "../ui/VideoPlayer";

const highlights = [
  {
    icon: Factory,
    value: "1.200 m²",
    label: "Área fabril atual",
    desc: "Estrutura planejada para montagem, testes e controle de qualidade.",
  },
  {
    icon: Maximize2,
    value: "4.000 m²",
    label: "Expansão planejada",
    desc: "Área preparada para crescimento da capacidade produtiva.",
  },
  {
    icon: Building2,
    value: "8 máquinas",
    label: "Montagem simultânea",
    desc: "Capacidade de produção paralela com fluxo otimizado.",
  },
  {
    icon: FlaskConical,
    value: "Pouch Lab",
    label: "Showroom & validação",
    desc: "Espaço para testes, demonstrações e validação de embalagens.",
  },
];

export function ExpansionSection() {
  const videoSrc = mediaUrl("/videos/expansao-v2.mp4");

  return (
    <section id="expansao" className="section-padding bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Infraestrutura"
            title="Expansão industrial Maquiflex"
            subtitle="Uma estrutura em constante evolução para atender com excelência o mercado de embalagens flexíveis."
          />
        </ScrollReveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                A Maquiflex investe continuamente em sua infraestrutura industrial em Monte Alto,
                interior de São Paulo. Nossa planta foi concebida para integrar engenharia, montagem,
                testes e validação em um único ambiente produtivo — garantindo agilidade e controle em
                cada etapa do desenvolvimento das máquinas.
              </p>
              <p>
                Com área fabril atual de <strong className="text-white">1.200 m²</strong> e projeto de
                expansão para até <strong className="text-white">4.000 m²</strong>, a empresa consolida
                sua posição como fabricante nacional de máquinas envasadoras horizontais de alta
                performance.
              </p>
              <p>
                O vídeo apresenta a visão completa da nossa estrutura: áreas de montagem, almoxarifado
                estratégico, showroom para demonstrações, Pouch Lab para testes de embalagens e setores
                dedicados à engenharia e qualidade.
              </p>
              <p className="border-l-2 border-chrome/30 pl-4 text-sm text-chrome">
                Estrutura enxuta e integrada, com gestão, desenvolvimento e suporte diretamente
                envolvidos na entrega de cada projeto.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VideoPlayer
              src={videoSrc}
              title="Expansão Industrial — Visão Completa"
              aspect="cinematic"
            />
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.06}>
              <div className="card h-full p-5">
                <item.icon className="h-5 w-5 text-chrome" strokeWidth={1.5} />
                <p className="mt-3 text-2xl font-black text-chrome-gradient">{item.value}</p>
                <p className="mt-1 text-sm font-bold text-white">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
