"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Portal } from "@/components/ui/Portal";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Lightbox from "@/components/gallery/Lightbox";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Photo, PhotoCategory } from "@/lib/types";

type FilterCategory = PhotoCategory | "todos";

interface GalleryProps {
  photos: Photo[];
}

export default function Gallery({ photos }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("todos");
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [showAll, setShowAll] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const filteredPhotos =
    activeFilter === "todos"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  const displayedPhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, 6);

  const lightboxIndex = lightboxPhoto
    ? filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id)
    : -1;

  const handlePrev = () => {
    if (lightboxIndex > 0) setLightboxPhoto(filteredPhotos[lightboxIndex - 1]);
  };

  const handleNext = () => {
    if (lightboxIndex < filteredPhotos.length - 1)
      setLightboxPhoto(filteredPhotos[lightboxIndex + 1]);
  };

  return (
    <section
      id="galeria"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      aria-label="Portafolio fotográfico"
    >
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <SectionHeading
          eyebrow="Portafolio"
          title="El trabajo habla"
          subtitle="Cada imagen es una historia. Explora sesiones de eventos, campañas de marca y books editoriales."
        />
      </motion.div>

      <GalleryFilters 
        active={activeFilter} 
        onChange={(filter) => {
          setActiveFilter(filter);
          setShowAll(false);
        }} 
      />

      <motion.div
        key={activeFilter}
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <GalleryGrid
          photos={displayedPhotos}
          onPhotoClick={(photo) => setLightboxPhoto(photo)}
        />
      </motion.div>

      {!showAll && filteredPhotos.length > 6 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setShowAll(true)}
            className="group relative px-8 py-3 bg-transparent border border-emerald-light/30 hover:border-emerald-light text-ivory font-sans text-sm tracking-widest uppercase transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver más fotos
            </span>
            <div className="absolute inset-0 bg-emerald-light/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <Portal>
            <Lightbox
              photo={lightboxPhoto}
              onClose={() => setLightboxPhoto(null)}
              onPrev={handlePrev}
              onNext={handleNext}
              hasPrev={lightboxIndex > 0}
              hasNext={lightboxIndex < filteredPhotos.length - 1}
            />
          </Portal>
        )}
      </AnimatePresence>
    </section>
  );
}
