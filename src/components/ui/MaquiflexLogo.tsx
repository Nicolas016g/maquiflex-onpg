"use client";

import Image from "next/image";

interface MaquiflexLogoProps {
  variant?: "header" | "footer" | "hero";
  className?: string;
}

const variantClasses = {
  header: "h-9 w-auto sm:h-10 md:h-11",
  footer: "h-12 w-auto md:h-14",
  hero: "h-16 w-auto sm:h-20 md:h-24 lg:h-28",
};

export function MaquiflexLogo({ variant = "header", className = "" }: MaquiflexLogoProps) {
  return (
    <Image
      src="/logos/logo-white.png"
      alt="Maquiflex"
      width={800}
      height={574}
      className={`object-contain object-left ${variantClasses[variant]} ${className}`}
      priority={variant === "header" || variant === "hero"}
    />
  );
}
