"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/lib/types";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LightboxProps) {
  const prefersReducedMotion = useReducedMotion();

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl bg-ink/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Lightbox: ${photo.alt}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar imagen"
          className="absolute top-4 right-4 md:top-6 md:right-6 glass glass-hover rounded-full p-3 z-10"
        >
          <X className="h-5 w-5 text-ivory" />
        </button>

        {/* Prev button */}
        {hasPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Foto anterior"
            className="absolute left-4 md:left-6 glass glass-hover rounded-full p-3 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-ivory" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-h-[85vh] max-w-[90vw] md:max-w-4xl touch-pan-y"
          onClick={(e) => e.stopPropagation()}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold && hasNext) {
              onNext();
            } else if (swipe > swipeConfidenceThreshold && hasPrev) {
              onPrev();
            }
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1600}
            height={2000}
            priority
            className="max-h-[85vh] w-auto rounded-xl object-contain shadow-glass-lg"
            sizes="(max-width: 768px) 90vw, 80vw"
          />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-ink/70 to-transparent rounded-b-xl">
            <p className="font-sans text-xs text-ivory/70 uppercase tracking-wider">
              {photo.alt}
            </p>
          </div>
        </motion.div>

        {/* Next button */}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Foto siguiente"
            className="absolute right-4 md:right-6 glass glass-hover rounded-full p-3 z-10"
          >
            <ChevronRight className="h-6 w-6 text-ivory" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
