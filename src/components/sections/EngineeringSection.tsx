import {
  Box,
  Cpu,
  FileText,
  FlaskConical,
  Settings,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const capabilities = [
  {
    icon: Settings,
    title: "Projeto Mecânico",
    desc: "Modelagem 3D, layouts de máquina, conjuntos e desenhos técnicos.",
  },
  {
    icon: Cpu,
    title: "Automação e Integração Elétrica",
    desc: "CLP, IHM, servossistemas, diagramas elétricos e lógica de máquina.",
  },
  {
    icon: FlaskConical,
    title: "Engenharia de Aplicação",
    desc: "Formatos de pouch, testes de envase e requisitos do cliente.",
  },
  {
    icon: Wrench,
    title: "Suporte à Fabricação",
    desc: "Usinagem, montagem, ajustes e validação técnica.",
  },
  {
    icon: FileText,
    title: "Documentação e Padronização",
    desc: "BOM, manuais, arquivos técnicos e histórico de projetos.",
  },
  {
    icon: Box,
    title: "Melhoria Contínua",
    desc: "Atualizações, redução de custos, desempenho e confiabilidade.",
  },
];

const tools = ["SolidWorks", "CAD/CAM", "CLP/PLC", "Servo Drives", "Engenharia Própria"];

export function EngineeringSection() {
  return (
    <section id="engenharia" className="section-padding pattern-grid">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Engenharia"
            title="Capacidades da engenharia"
            subtitle="Engenharia integrada, com tecnologia aplicada e foco em soluções robustas para máquinas envasadoras horizontais."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="card card-hover group h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-chrome/20 bg-chrome/5 transition-colors group-hover:border-chrome/40 group-hover:bg-chrome/10">
                  <item.icon className="h-5 w-5 text-chrome" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 rounded-sm border border-chrome/15 bg-surface-alt p-6 text-center md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-chrome">Processo de desenvolvimento</p>
            <p className="mt-3 text-sm text-text-muted">
              Cliente → Projeto → Modelagem 3D → Fabricação → Montagem → FAT → Instalação → Pós-Venda
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-sm border border-chrome/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-chrome/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
