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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => setShowAll(true)}
            className="group flex flex-col items-center gap-3 text-ivory/70 hover:text-ivory transition-colors duration-700"
          >
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] font-light transition-transform duration-700 group-hover:-translate-y-1">
              Descubrir Colección
            </span>
            <span className="h-[1px] w-8 bg-emerald-light/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-20 group-hover:bg-emerald-light" />
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
