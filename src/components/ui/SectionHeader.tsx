interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title mt-4">{title}</h2>
      <div className={`section-divider ${align === "center" ? "" : "mx-0"}`} />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
