import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const specs = [
  { label: "Modelo", value: "MF480Q — form-fill & seal" },
  { label: "Volume de envase", value: "100 g – 2 kg" },
  { label: "Velocidade", value: "Mín. 50–60 ppm · Máx. 200–220 ppm" },
  { label: "Modo de operação", value: "Quadriplex (opção duplex)" },
  { label: "Perdas", value: "< 0,5%" },
  { label: "Precisão de dosagem", value: "< 1,0%" },
  { label: "Taxa de vazamento", value: "1 / 15.000" },
  { label: "Eficiência", value: "mín. 95% (DIN 8743)" },
  { label: "Acabamento", value: "Aço inoxidável" },
];

const stations = [
  { num: "01", title: "Desbobinadora", desc: "Alimentação controlada do filme flexível." },
  { num: "02", title: "Bancada de Formação", desc: "Formação precisa do pouch com alta repetibilidade." },
  { num: "03", title: "Bancada de Envase", desc: "Dosagem e selagem com máxima eficiência." },
];

export function MachineSection() {
  return (
    <section id="maquina" className="section-padding bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Portfólio"
            title="A Máquina Maquiflex"
            subtitle="A primeira máquina Maquiflex combina experiência, engenharia e inovação para atender às demandas do mercado de envases flexíveis."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="overflow-hidden rounded-sm border border-chrome/15">
              <Image
                src="/images/hero/linha-maquina.jpg"
                alt="Máquina envasadora Maquiflex MF480Q"
                width={900}
                height={600}
                className="h-72 w-full object-cover md:h-80"
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stations.map((s) => (
                <div key={s.num} className="card p-4">
                  <span className="text-xs font-bold text-chrome">{s.num}</span>
                  <h3 className="mt-1 font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-xs text-text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card border-chrome/20 p-6 md:p-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-chrome">Dados Técnicos</h3>
              <dl className="mt-6 space-y-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1 border-b border-border pb-4 last:border-0 sm:flex-row sm:justify-between">
                    <dt className="text-sm text-text-muted">{spec.label}</dt>
                    <dd className="text-sm font-semibold text-white sm:text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Quatro Soldas", "Stand-Up Pouch", "Four-Side Seal"].map((type) => (
                <span
                  key={type}
                  className="rounded-sm border border-chrome/20 bg-chrome/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-chrome"
                >
                  {type}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
