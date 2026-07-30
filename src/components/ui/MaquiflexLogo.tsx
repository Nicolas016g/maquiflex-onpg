"use client";

import Image from "next/image";

interface MaquiflexLogoProps {
  variant?: "header" | "footer" | "hero";
  className?: string;
}

const variantConfig = {
  header: {
    src: "/logos/symbol-chrome.svg",
    width: 285,
    height: 173,
    className: "h-9 w-auto sm:h-10 md:h-11 drop-shadow-[0_0_12px_rgba(200,200,200,0.25)]",
  },
  footer: {
    src: "/logos/logo-footer.png",
    width: 300,
    height: 56,
    className: "h-10 w-auto sm:h-12 md:h-14",
  },
  hero: {
    src: "/logos/logo-white.png",
    width: 800,
    height: 574,
    className: "h-16 w-auto sm:h-20 md:h-24 lg:h-28",
  },
};

export function MaquiflexLogo({ variant = "header", className = "" }: MaquiflexLogoProps) {
  const config = variantConfig[variant];

  return (
    <Image
      src={config.src}
      alt="Maquiflex"
      width={config.width}
      height={config.height}
      className={`object-contain object-left ${config.className} ${className}`}
      priority={variant === "header" || variant === "hero"}
    />
  );
}
