import type { ReactNode } from "react";

interface GradientFrameProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  hover?: boolean;
}

export function GradientFrame({
  children,
  className = "",
  innerClassName = "",
  hover = false,
}: GradientFrameProps) {
  return (
    <div
      className={`brand-gradient-border ${hover ? "brand-gradient-border--hover" : ""} ${className}`}
    >
      <div className={`brand-gradient-border__inner ${innerClassName}`}>{children}</div>
    </div>
  );
}
