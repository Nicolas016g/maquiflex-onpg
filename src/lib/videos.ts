import { mediaUrl } from "./media";

export type VideoCategory = "institucional";

export interface SiteVideo {
  id: string;
  file: string;
  src: string;
  title: string;
  description: string;
  category: VideoCategory;
  featured?: boolean;
  poster?: string;
  playbackRate?: number;
  preload?: "none" | "metadata" | "auto";
}

export const videoCategories: Record<VideoCategory, string> = {
  institucional: "Institucional",
};

const videos = [
  {
    id: "recepcao",
    file: "recepcao.mp4",
    title: "Maquiflex — Apresentação",
    description: "Visão geral da empresa, sua estrutura e compromisso com a indústria nacional.",
    category: "institucional" as const,
    featured: true,
    poster: "/images/posters/recepcao.jpg",
    playbackRate: 2,
    preload: "auto" as const,
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
  poster: v.poster,
  playbackRate: v.playbackRate,
  preload: v.preload,
}));

export function videosByCategory(category: VideoCategory) {
  return siteVideos.filter((v) => v.category === category);
}
