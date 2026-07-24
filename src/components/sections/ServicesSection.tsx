import {
  GraduationCap,
  Headset,
  Package,
  RefreshCw,
  Settings,
  Truck,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const services = [
  { icon: Truck, title: "Instalação e Start-up", desc: "Comissionamento completo no cliente." },
  { icon: GraduationCap, title: "Treinamento", desc: "Capacitação de operadores e manutenção." },
  { icon: Headset, title: "Suporte Remoto", desc: "Diagnóstico e assistência à distância." },
  { icon: Wrench, title: "Assistência em Campo", desc: "Técnicos especializados no local." },
  { icon: Package, title: "Peças de Reposição", desc: "Estoque estratégico para agilidade." },
  { icon: Settings, title: "Manutenção Preventiva", desc: "Planos para máxima disponibilidade." },
  { icon: RefreshCw, title: "Upgrades e Retrofit", desc: "Modernização e melhoria de equipamentos." },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding pattern-grid">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Serviços"
            title="Suporte em todo o ciclo de vida"
            subtitle="Nosso compromisso continua após a entrega da máquina — do start-up ao pós-venda."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="card card-hover flex h-full flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-chrome/20 bg-chrome/5">
                  <item.icon className="h-5 w-5 text-chrome" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-text-muted">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
