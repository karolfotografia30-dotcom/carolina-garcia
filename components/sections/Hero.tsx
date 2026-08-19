"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Photo } from "@/lib/types";

interface HeroProps {
  featuredPhoto: Photo;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: "100%", filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as object,
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 0.55,
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } as object,
  },
};

export default function Hero({ featuredPhoto }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : { variants: containerVariants, initial: "hidden", animate: "visible" };

  const itemProps = prefersReducedMotion ? {} : { variants: itemVariants };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)", willChange: "transform" }}
      aria-label="Portada — cg.photoy Carolina García Fotografía"
    >
      {/* Background image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={prefersReducedMotion ? {} : imageVariants}
        className="absolute inset-0 z-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src={featuredPhoto.src}
          alt={featuredPhoto.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--color-ink) 0%, rgba(10,9,8,0.5) 50%, rgba(10,9,8,0.1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-screen items-center px-6 pt-32 lg:px-10 lg:pt-0">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div {...motionProps} className="max-w-3xl">
            {/* Top metadata */}
            <div className="overflow-hidden pb-4">
              <motion.span
                {...itemProps}
                className="inline-block"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-emerald-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Vol. 01 — Bogotá, Colombia
              </motion.span>
            </div>

            {/* Title */}
            <div className="overflow-hidden pb-4">
              <motion.h1
                {...itemProps}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(4rem, 12vw, 12rem)",
                  lineHeight: 0.88,
                  color: "var(--color-ivory)",
                }}
              >
                Carolina
                <br />
                <span style={{ opacity: 0.9 }}>García</span>
              </motion.h1>
            </div>

            {/* Brand signature */}
            <div className="overflow-hidden">
              <motion.p
                {...itemProps}
                style={{
                  fontFamily: "var(--font-script)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "rgba(245,241,234,0.6)",
                  marginTop: "1rem",
                }}
              >
                cg.photoy
              </motion.p>
            </div>

            {/* Tagline */}
            <div className="overflow-hidden pt-6">
              <motion.p
                {...itemProps}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--color-stone)",
                  maxWidth: "28rem",
                  lineHeight: 1.7,
                }}
              >
                Fotografía de bodas, quinceañeras, marcas y editoriales.
                <br />
                Contando tu historia con mirada editorial.
              </motion.p>
            </div>

            {/* Actions */}
            <div className="overflow-hidden pt-8">
              <motion.div
                {...itemProps}
                className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <a href="#galeria" className="btn-secondary">
                  <ChevronDown style={{ height: "1rem", width: "1rem" }} />
                  Explorar Portafolio
                </a>
                <a
                  href="https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20cotizar%20una%20sesi%C3%B3n%20fotogr%C3%A1fica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Contáctame
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "var(--color-stone)",
          }}
        >
          Scroll
        </span>
        <div
          style={{ width: "1px", height: "3rem", backgroundColor: "rgba(255,255,255,0.15)" }}
        />
      </motion.div>
    </section>
  );
}
