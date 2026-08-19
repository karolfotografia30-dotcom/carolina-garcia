"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Photo } from "@/lib/types";

interface GalleryItemProps {
  photo: Photo;
  onClick: () => void;
  index: number;
}

const CATEGORY_LABELS: Record<string, string> = {
  eventos: "Eventos",
  marcas: "Marcas",
  books: "Books",
};

export default function GalleryItem({ photo, onClick, index }: GalleryItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer
        ring-1 ring-white/10 hover:ring-white/30 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`Ver foto: ${photo.alt}`}
      whileHover={prefersReducedMotion ? {} : { y: -2 }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={800}
        height={1000}
        className="h-auto w-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay with smooth translucent veil */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent backdrop-blur-[2px]
          opacity-0 group-hover:opacity-100 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          flex items-end p-5"
        aria-hidden="true"
      >
        <div className="flex items-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
          <span className="h-1 w-5 bg-emerald-light rounded-full" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-ivory/90">
            {CATEGORY_LABELS[photo.category] || photo.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
