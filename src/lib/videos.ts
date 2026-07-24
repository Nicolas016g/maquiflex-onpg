export type VideoCategory = "institucional" | "tecnologia" | "estrutura" | "eventos";

export interface SiteVideo {
  id: string;
  src: string;
  title: string;
  description: string;
  category: VideoCategory;
  featured?: boolean;
}

export const videoCategories: Record<VideoCategory, string> = {
  institucional: "Institucional",
  tecnologia: "Tecnologia & Engenharia",
  estrutura: "Estrutura & Operação",
  eventos: "Eventos",
};

export const siteVideos: SiteVideo[] = [
  {
    id: "recepcao",
    src: "/videos/recepcao.mp4",
    title: "Maquiflex — Apresentação",
    description: "Visão geral da empresa, sua estrutura e compromisso com a indústria nacional.",
    category: "institucional",
    featured: true,
  },
  {
    id: "expansao-v1",
    src: "/videos/expansao-v1.mp4",
    title: "Expansão Industrial",
    description: "Evolução e crescimento da estrutura fabril em Monte Alto.",
    category: "institucional",
    featured: true,
  },
  {
    id: "expansao-v2",
    src: "/videos/expansao-v2.mp4",
    title: "Expansão Industrial — Visão Completa",
    description: "Panorama da capacidade produtiva e das áreas de desenvolvimento.",
    category: "institucional",
    featured: true,
  },
  {
    id: "cena-360",
    src: "/videos/cena-360.mp4",
    title: "Linha Completa — Cena 360°",
    description: "Visualização tridimensional da linha de envase horizontal.",
    category: "tecnologia",
    featured: true,
  },
  {
    id: "desbobinadora",
    src: "/videos/desbobinadora.mp4",
    title: "Bancada Desbobinadora",
    description: "Estação de alimentação do filme flexível na linha de produção.",
    category: "tecnologia",
  },
  {
    id: "formacao",
    src: "/videos/formacao.mp4",
    title: "Bancada de Formação",
    description: "Formação precisa do pouch com engenharia de detalhe.",
    category: "tecnologia",
    featured: true,
  },
  {
    id: "operacao-01",
    src: "/videos/operacao-01.mp4",
    title: "Operação — Registro 01",
    description: "Rotina de fabricação e montagem na estrutura industrial.",
    category: "estrutura",
  },
  {
    id: "operacao-02",
    src: "/videos/operacao-02.mp4",
    title: "Operação — Registro 02",
    description: "Processos internos e equipe em ação no chão de fábrica.",
    category: "estrutura",
  },
  {
    id: "operacao-03",
    src: "/videos/operacao-03.mp4",
    title: "Operação — Registro 03",
    description: "Detalhes da manufatura e controle de qualidade.",
    category: "estrutura",
  },
  {
    id: "operacao-04",
    src: "/videos/operacao-04.mp4",
    title: "Operação — Registro 04",
    description: "Ambiente de montagem e validação técnica.",
    category: "estrutura",
  },
  {
    id: "operacao-05",
    src: "/videos/operacao-05.mp4",
    title: "Operação — Registro 05",
    description: "Registro do dia a dia na estrutura Maquiflex.",
    category: "estrutura",
  },
  {
    id: "fispal-01",
    src: "/videos/fispal-01.mp4",
    title: "Fispal 2026 — Registro 01",
    description: "Presença da Maquiflex no maior evento de alimentos e bebidas da América Latina.",
    category: "eventos",
  },
  {
    id: "fispal-02",
    src: "/videos/fispal-02.mp4",
    title: "Fispal 2026 — Registro 02",
    description: "Apresentação da tecnologia e interação com o mercado.",
    category: "eventos",
  },
  {
    id: "fispal-03",
    src: "/videos/fispal-03.mp4",
    title: "Fispal 2026 — Registro 03",
    description: "Destaques do estande e demonstrações ao vivo.",
    category: "eventos",
  },
];

export function videosByCategory(category: VideoCategory) {
  return siteVideos.filter((v) => v.category === category);
}
