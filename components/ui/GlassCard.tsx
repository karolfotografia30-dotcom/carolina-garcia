"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "heavy";
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  variant = "default",
  hover = false,
}: GlassCardProps) {
  const variants = {
    default: "glass",
    dark: "glass-dark",
    heavy: "glass-heavy",
  };

  return (
    <div
      className={cn(
        "rounded-2xl",
        variants[variant],
        hover && "glass-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
