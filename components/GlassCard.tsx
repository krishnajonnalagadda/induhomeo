import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({
  children,
  className = "",
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={`rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 shadow-lg backdrop-blur-xl ${className}`}
    >
      {children}
    </Component>
  );
}
