"use client";

import { AnimatePresence } from "framer-motion";
import GalleryItem from "./GalleryItem";
import type { Photo } from "@/lib/types";

interface GalleryGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export default function GalleryGrid({ photos, onPhotoClick }: GalleryGridProps) {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-px bg-emerald-light/30 mb-6" />
        <p className="font-display text-2xl text-ivory/30">
          No hay fotos en esta categoría
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      <AnimatePresence mode="popLayout">
        {photos.map((photo, index) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            index={index}
            onClick={() => onPhotoClick(photo)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
