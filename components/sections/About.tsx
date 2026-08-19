"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsTouchDevice } from "@/lib/hooks";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const PROCESO = [
  {
    id: "planificacion",
    label: "Planificación personalizada",
    desc: "Antes del gran día conversamos para conocer el protocolo y el acompañamiento del evento.",
  },
  {
    id: "acompanamiento",
    label: "Acompañamiento cercano y profesional",
    desc: "El día del evento estoy presente con discreción y atención, guiándolos cuando es necesario y dejando que todo suceda de forma natural.",
  },
  {
    id: "momentos",
    label: "Momentos reales y emociones auténticas",
    desc: "Más allá de las poses, busco capturar miradas, sonrisas, lágrimas, abrazos y gestos espontáneos — esos instantes que cuentan una linda historia.",
  },
];

export default function About() {
  const isTouch = useIsTouchDevice();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], isTouch ? ["0%", "0%"] : ["-10%", "10%"]);

  return (
    <section
      id="sobre-mi"
      ref={containerRef}
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"
      aria-label="Sobre Carolina García"
    >
      {/* ── Bloque principal: Misión + Foto ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass rounded-3xl p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center"
      >
        {/* Foto de Carolina con la misión superpuesta */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ willChange: "transform" }}>
          <motion.div style={{ y: yImage, width: "100%", height: "120%", position: "absolute", top: "-10%", willChange: "transform" }}>
            <Image
              src="/fotos/fotografa.jpg"
              alt="Carolina García — Fotógrafa profesional cg.photoy"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0.3) 55%, transparent 100%)",
            }}
          />
          {/* Tagline sobre la foto */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="glass rounded-xl px-4 py-3">
              <p
                style={{
                  fontFamily: "var(--font-script)",
                  fontStyle: "italic",
                  color: "rgba(245,241,234,0.9)",
                  fontSize: "1.1rem",
                }}
              >
                No solo entrego fotos, entrego historias.
              </p>
            </div>
          </div>
        </div>

        {/* Texto de misión */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="inline-block rounded-full border px-4 py-1 mb-6"
            style={{
              borderColor: "rgba(47,143,99,0.40)",
              backgroundColor: "rgba(28,107,72,0.10)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--color-emerald-light)",
            }}
          >
            Bogotá, Colombia
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--color-ivory)",
            }}
            className="transition-all duration-500 hover:tracking-wide hover:text-white"
          >
            Carolina
            <br />
            García
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{
              height: "1px",
              width: "3rem",
              backgroundColor: "rgba(47,143,99,0.5)",
              margin: "1rem 0 1.5rem",
              transformOrigin: "left",
            }}
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-stone)",
              lineHeight: 1.75,
              fontSize: "1rem",
            }}
          >
            <strong style={{ color: "var(--color-ivory)", fontWeight: 500 }}>
              Mi misión es ayudarte a preservar lo más valioso de ese día: las
              emociones reales.
            </strong>
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-stone)",
              lineHeight: 1.75,
              fontSize: "0.95rem",
              marginTop: "1rem",
            }}
          >
            Sé que un evento pasa volando y que entre abrazos, lágrimas y
            risas hay instantes que no vuelven — por eso estoy aquí para
            convertirlos en recuerdos que duren toda la vida.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{
              fontFamily: "var(--font-sans)",
              color: "rgba(168,162,158,0.85)",
              lineHeight: 1.75,
              fontSize: "0.95rem",
              marginTop: "1rem",
            }}
          >
            No solo entrego fotos: entrego miradas llenas de amor, gestos que
            hablan sin palabras y momentos que se sienten incluso en silencio.
            Entrego historias que podrás revivir una y otra vez cada vez que
            abras tu book de fotografía.
          </motion.p>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
          >
            {[
              { number: 3, suffix: "+", label: "Años de experiencia" },
              { number: 100, suffix: "+", label: "Eventos cubiertos" },
              { number: 15, suffix: "", label: "Días hábiles de entrega" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--color-ivory)",
                  }}
                >
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} duration={1.5} />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--color-stone)",
                    marginTop: "0.25rem",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{ marginTop: "2rem" }}
            >
              <a
                href="https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20tus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Hablemos de tu proyecto
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

      {/* ── Proceso / Cómo funciona ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginTop: "5rem" }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "var(--color-emerald-light)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Mi metodología
          </span>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-ivory)",
            }}
          >
            Cómo funciona tu sesión
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCESO.map((paso, i) => (
            <motion.div
              key={paso.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="glass glass-hover rounded-2xl p-8"
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(28,107,72,0.15)",
                  border: "1px solid rgba(47,143,99,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--color-emerald-light)",
                }}
              >
                <AnimatedCounter value={i + 1} duration={1} />
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--color-ivory)",
                  marginBottom: "0.75rem",
                }}
              >
                {paso.label}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--color-stone)",
                  lineHeight: 1.7,
                }}
              >
                {paso.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
