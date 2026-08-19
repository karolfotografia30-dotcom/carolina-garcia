"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block font-sans text-xs uppercase tracking-[0.3em] text-emerald-light mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-stone text-base md:text-lg mt-4 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      {/* Decorative emerald line */}
      <div
        className={cn(
          "mt-6 h-px w-16 bg-gradient-to-r from-emerald to-emerald-light/0",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
