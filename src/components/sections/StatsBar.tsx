import { ScrollReveal } from "../ui/ScrollReveal";

const stats = [
  { value: "+46", label: "Anos de experiência acumulada" },
  { value: "+150", label: "Máquinas vendidas" },
  { value: "+100", label: "Máquinas instaladas" },
  { value: "100%", label: "Plataforma nacional de envase e embalagem" },
];

export function StatsBar() {
  return (
    <section className="relative border-y border-chrome/10 bg-surface-alt">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-chrome/10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.08}>
            <div className="px-6 py-10 text-center md:py-12">
              <p className="text-3xl font-black text-chrome-gradient md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-text-muted md:text-sm">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
