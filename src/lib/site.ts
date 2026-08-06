export const siteConfig = {
  name: "Maquiflex",
  tagline: "Tecnologia, Experiência e Compromisso",
  description:
    "Conheça a Maquiflex — fabricante brasileira de máquinas embaladoras e envasadoras horizontais para embalagens flexíveis. Engenharia própria, estrutura nacional.",
  address: "Av. Wilson Folador, 2421",
  city: "Monte Alto",
  state: "SP",
  website: "https://www.maquiflex.com.br",
  email: "contato@maquiflex.com.br",
  linkedin: "https://www.linkedin.com/company/maquiflex",
  whatsapp: "5516999999999",
  whatsappDisplay: "(16) 99999-9999",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
