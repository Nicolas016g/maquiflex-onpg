import { mediaUrl } from "@/lib/media";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { VideoPlayer } from "../ui/VideoPlayer";

const pillars = [
  {
    title: "Desbobinadora",
    desc: "Alimentação controlada do filme flexível na linha de produção.",
    video: mediaUrl("/videos/desbobinadora.mp4"),
  },
  {
    title: "Bancada de Formação",
    desc: "Formação precisa do pouch com engenharia de detalhe.",
    video: mediaUrl("/videos/formacao.mp4"),
  },
  {
    title: "Linha Completa",
    desc: "Integração das estações em uma solução horizontal completa.",
    video: mediaUrl("/videos/cena-360.mp4"),
  },
];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="section-padding bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Tecnologia"
            title="Engenharia aplicada à indústria"
            subtitle="Desenvolvimento próprio de máquinas embaladoras e envasadoras horizontais, do conceito à entrega, com foco em robustez, confiabilidade e adaptação à realidade brasileira."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div>
                <VideoPlayer src={item.video} title={item.title} allowAudio={false} />
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
