export interface EventPhoto {
  src: string;
  alt: string;
}

export const fispal2026 = {
  title: "Fispal 2026",
  subtitle:
    "Presença da Maquiflex na maior feira de alimentos e bebidas da América Latina.",
  highlightsLabel: "Destaques",
  highlightsCaption:
    "A equipe MaquiFlex participou de apresentações e representou a indústria nacional na Fispal.",
  photos: [
    {
      src: "/images/fispal/IMG_20260617_131155.jpg",
      alt: "Estande Maquiflex na Fispal 2026",
    },
    {
      src: "/images/fispal/IMG_20260617_131134.jpg",
      alt: "Apresentação de equipamentos no estande",
    },
    {
      src: "/images/fispal/IMG_20260617_131153.jpg",
      alt: "Demonstração ao vivo na Fispal",
    },
    {
      src: "/images/fispal/IMG_20260617_130031.jpg",
      alt: "Equipe Maquiflex no evento",
    },
    {
      src: "/images/fispal/IMG_20260617_131202.jpg",
      alt: "Interação com o público na feira",
    },
    {
      src: "/images/fispal/20260617_160712.jpg",
      alt: "Ambiente da Fispal 2026",
    },
  ] satisfies EventPhoto[],
};
