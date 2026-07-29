export interface EventPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const fispal2026 = {
  title: "Fispal 2026",
  subtitle:
    "Presença da Maquiflex na maior feira de alimentos e bebidas da América Latina — apresentando tecnologia nacional, demonstrações ao vivo e relacionamento com o mercado.",
  montage: {
    file: "fispal-montagem.mp4",
    title: "Fispal 2026 — Destaques",
    description:
      "Registro em vídeo com momentos do estande, demonstrações e interação com visitantes no evento.",
    poster: "/images/fispal/IMG_20260617_131155.jpg",
  },
  photos: [
    {
      src: "/images/fispal/IMG_20260617_131155.jpg",
      alt: "Estande Maquiflex na Fispal 2026",
      caption: "Estande Maquiflex com demonstrações de tecnologia de envase.",
    },
    {
      src: "/images/fispal/IMG_20260617_131134.jpg",
      alt: "Apresentação de equipamentos no estande",
      caption: "Apresentação de equipamentos e soluções para o mercado.",
    },
    {
      src: "/images/fispal/IMG_20260617_131153.jpg",
      alt: "Demonstração ao vivo na Fispal",
      caption: "Demonstrações ao vivo para visitantes e parceiros.",
    },
    {
      src: "/images/fispal/IMG_20260617_130031.jpg",
      alt: "Equipe Maquiflex no evento",
      caption: "Equipe Maquiflex representando a indústria nacional.",
    },
    {
      src: "/images/fispal/IMG_20260617_131202.jpg",
      alt: "Interação com o público na feira",
      caption: "Interação com profissionais do setor de alimentos e bebidas.",
    },
    {
      src: "/images/fispal/20260617_160712.jpg",
      alt: "Ambiente da Fispal 2026",
      caption: "Presença consolidada em um dos principais eventos do setor.",
    },
  ] satisfies EventPhoto[],
};
