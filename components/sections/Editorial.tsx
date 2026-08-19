"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsTouchDevice } from "@/lib/hooks";
import type { Photo } from "@/lib/types";

interface EditorialProps {
  photos: Photo[];
}

export default function Editorial({ photos }: EditorialProps) {
  const isTouch = useIsTouchDevice();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage1 = useTransform(scrollYProgress, [0, 1], isTouch ? ["0%", "0%"] : ["-15%", "15%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], isTouch ? ["0%", "0%"] : ["15%", "-15%"]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], isTouch ? ["0%", "0%"] : ["-10%", "10%"]);

  // Pick the best event & book photos from the gallery
  const bookPhotos = photos.filter((p) => p.category === "books");
  const eventosPhotos = photos.filter((p) => p.category === "eventos");
  const galleryPhoto = bookPhotos[0] ?? photos[0];
  const eventPhoto = eventosPhotos[0] ?? photos[1];

  return (
    <section
      id="editorial"
      ref={containerRef}
      aria-label="Sección editorial"
      style={{
        backgroundColor: "rgba(21,19,18,0.30)",
        paddingTop: "6rem",
        paddingBottom: "9rem",
      }}
    >
      <div
        className="mx-auto max-w-7xl px-6 lg:px-10"
        style={{ display: "flex", flexDirection: "column", gap: "6rem" }}
      >
        {/* ── Block 1: Quince Años — foto de paquete oficial ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "6rem" }}
        >
          {/* Text */}
          <div style={{ paddingRight: "0" }} className="lg:pr-12">
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "var(--color-emerald-light)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              XV Años
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--color-ivory)",
                lineHeight: 1.05,
              }}
              className="transition-all duration-500 hover:tracking-wide hover:text-white"
            >
              Tu gran día,
              <br />
              eternizado
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--color-stone)",
                lineHeight: 1.8,
                marginTop: "1.5rem",
                fontSize: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  color: "var(--color-emerald-light)",
                  float: "left",
                  marginRight: "0.6rem",
                  lineHeight: 0.8,
                }}
              >
                C
              </span>
              ada quinceañera merece ser narrada con la elegancia que ese día
              vivió. Captamos los momentos del protocolo, el vals, las risas
              con los padres y los abrazos con los amigos — esos instantes que
              no vuelven.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                color: "rgba(168,162,158,0.85)",
                lineHeight: 1.75,
                marginTop: "1rem",
                fontSize: "0.9rem",
              }}
            >
              Con discreción y sensibilidad artística, acompaño el evento
              completo para que tú y tu familia puedan disfrutar sin
              preocupaciones.
            </p>

            <a
              href="https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20cotizar%20cobertura%20de%20quincea%C3%B1era"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ marginTop: "2rem", display: "inline-flex" }}
            >
              Cotizar mis XV años
            </a>
          </div>

          {/* Official package cover image */}
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4", willChange: "transform" }}>
            <motion.div style={{ y: yImage1, width: "100%", height: "130%", position: "absolute", top: "-15%", willChange: "transform" }}>
              <Image
                src="/fotos/modelo3.webp"
                alt="Quinceañera con vestido — cg.photoy Carolina García"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,9,8,0.5) 0%, transparent 60%)",
              }}
            />
            {/* Badge */}
            <div
              className="absolute top-4 right-4 glass rounded-full px-3 py-1"
              aria-hidden="true"
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-emerald-light)",
                }}
              >
                XV Años
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Block 2: Bodas / Eventos — foto real de galería ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "6rem" }}
        >
          {/* Image first on desktop (reversed) */}
          <div
            className="relative overflow-hidden rounded-2xl order-2 lg:order-1"
            style={{ aspectRatio: "3/4", willChange: "transform" }}
          >
            <motion.div style={{ y: yImage2, width: "100%", height: "130%", position: "absolute", top: "-15%", willChange: "transform" }}>
              <Image
                src="/fotos/boda2.webp"
                alt="Cobertura de bodas reales — cg.photoy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,9,8,0.5) 0%, transparent 60%)",
              }}
            />
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1">
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-emerald-light)",
                }}
              >
                Eventos
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:pl-12">
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "var(--color-emerald-light)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Momentos únicos
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--color-ivory)",
                lineHeight: 1.05,
              }}
              className="transition-all duration-500 hover:tracking-wide hover:text-white"
            >
              Bodas &
              <br />
              celebraciones
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--color-stone)",
                lineHeight: 1.8,
                marginTop: "1.5rem",
                fontSize: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  color: "var(--color-emerald-light)",
                  float: "left",
                  marginRight: "0.6rem",
                  lineHeight: 0.8,
                }}
              >
                L
              </span>
              os momentos más especiales merecen ser conservados con la misma
              emoción con que los viviste. Desde el primer abrazo hasta el
              último baile, cubrimos cada instante con sensibilidad artística y
              mirada editorial.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                color: "rgba(168,162,158,0.85)",
                lineHeight: 1.75,
                marginTop: "1rem",
                fontSize: "0.9rem",
              }}
            >
              Bodas, compromisos y celebraciones sociales en Bogotá y todo
              Colombia.
            </p>

            <a
              href="https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20cotizar%20cobertura%20de%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ marginTop: "2rem", display: "inline-flex" }}
            >
              Cotizar cobertura de evento
            </a>
          </div>
        </motion.div>

        {/* ── Block 3: Entrega y producto (imagen torta) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        >
          {/* Text */}
          <div className="lg:pr-12">
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "var(--color-emerald-light)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Entrega de recuerdos
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--color-ivory)",
                lineHeight: 1.05,
              }}
              className="transition-all duration-500 hover:tracking-wide hover:text-white"
            >
              Recuerdos que
              <br />
              perduran
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--color-stone)",
                lineHeight: 1.8,
                marginTop: "1.5rem",
                fontSize: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  color: "var(--color-emerald-light)",
                  float: "left",
                  marginRight: "0.6rem",
                  lineHeight: 0.8,
                }}
              >
                D
              </span>
              espués del gran evento, recibirás fotografías editadas con
              dedicación y cuidado. También podrás elegir book estilo revista,
              retablos y fotos impresas para conservar estos recuerdos.
            </p>

            <div
              className="glass rounded-xl"
              style={{ padding: "1.25rem 1.5rem", marginTop: "1.5rem", display: "inline-block" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  color: "var(--color-ivory)",
                  lineHeight: 1,
                }}
              >
                15
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--color-stone)",
                  marginTop: "0.25rem",
                }}
              >
                días hábiles de entrega
              </p>
            </div>

            <a
              href="https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20ver%20los%20paquetes%20disponibles"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: "2rem", display: "inline-flex" }}
            >
              Ver paquetes disponibles
            </a>
          </div>

          {/* Memory photo */}
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4", willChange: "transform" }}>
            <motion.div style={{ y: yImage3, width: "100%", height: "120%", position: "absolute", top: "-10%", willChange: "transform" }}>
              <Image
                src="/fotos/modelo4.webp"
                alt="Memorias eternas — cg.photoy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,9,8,0.3) 0%, transparent 70%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
