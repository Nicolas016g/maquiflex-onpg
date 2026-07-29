import { mediaUrl } from "./media";

export type VideoCategory = "institucional" | "tecnologia";

export interface SiteVideo {
  id: string;
  file: string;
  src: string;
  title: string;
  description: string;
  category: VideoCategory;
  featured?: boolean;
}

export const videoCategories: Record<VideoCategory, string> = {
  institucional: "Institucional",
  tecnologia: "Tecnologia & Engenharia",
};

const videos = [
  {
    id: "recepcao",
    file: "recepcao.mp4",
    title: "Maquiflex — Apresentação",
    description: "Visão geral da empresa, sua estrutura e compromisso com a indústria nacional.",
    category: "institucional" as const,
    featured: true,
  },
  {
    id: "expansao-v2",
    file: "expansao-v2.mp4",
    title: "Infraestrutura Industrial — Visão Completa",
    description: "Panorama da capacidade produtiva e das áreas de desenvolvimento em Monte Alto.",
    category: "institucional" as const,
    featured: true,
  },
  {
    id: "cena-360",
    file: "cena-360.mp4",
    title: "Linha Completa — Cena 360°",
    description: "Visualização tridimensional da linha de envase horizontal.",
    category: "tecnologia" as const,
    featured: true,
  },
  {
    id: "desbobinadora",
    file: "desbobinadora.mp4",
    title: "Bancada Desbobinadora",
    description: "Estação de alimentação do filme flexível na linha de produção.",
    category: "tecnologia" as const,
  },
  {
    id: "formacao",
    file: "formacao.mp4",
    title: "Bancada de Formação",
    description: "Formação precisa do pouch com engenharia de detalhe.",
    category: "tecnologia" as const,
    featured: true,
  },
];

export function getVideoSrc(file: string) {
  return mediaUrl(`/videos/${file}`);
}

export const siteVideos: SiteVideo[] = videos.map((v) => ({
  id: v.id,
  file: v.file,
  src: getVideoSrc(v.file),
  title: v.title,
  description: v.description,
  category: v.category,
  featured: v.featured,
}));

export function videosByCategory(category: VideoCategory) {
  return siteVideos.filter((v) => v.category === category);
}
