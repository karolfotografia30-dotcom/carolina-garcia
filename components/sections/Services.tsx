"use client";

import { motion } from "framer-motion";
import { Check, Clock, CreditCard } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const PACKAGES = [
  {
    id: "solo-digital",
    tier: "Esencial",
    title: "Solo Digital",
    priceRaw: 450000,
    tag: null,
    description:
      "Perfecto para quienes quieren revivir cada emoción del evento con fotos editadas en alta resolución.",
    deliverables: [
      "Sesión de fotos: quinceañera sola",
      "Sesión de fotos con los padres",
      "Sesión de fotos con los invitados",
      "Sesión de fotos del vals",
      "Fotografías digitales en memoria USB",
    ],
    cta: "Cotizar Solo Digital",
    waText:
      "Hola%20Carolina%2C%20quiero%20cotizar%20el%20Paquete%20Solo%20Digital%20%24450.000",
  },
  {
    id: "pre15-evento",
    tier: "Popular",
    title: "Pre 15 & Evento",
    priceRaw: 650000,
    tag: "Más solicitado",
    description:
      "Captura la magia desde la sesión previa hasta el último momento del evento. Ideal para recordar toda la preparación.",
    deliverables: [
      "Fotografía del Pre-15 (15 a 20 fotos)",
      "Fotografía completa del evento",
      "Sesión: quinceañera sola",
      "Sesión con los padres",
      "Sesión con los invitados",
      "Sesión del vals",
      "Fotografías digitales en memoria USB",
    ],
    cta: "Cotizar Pre 15 & Evento",
    waText:
      "Hola%20Carolina%2C%20quiero%20cotizar%20el%20Paquete%20Pre15%20y%20Evento%20%24650.000",
  },
  {
    id: "completo",
    tier: "Completo",
    title: "Completo",
    priceRaw: 800000,
    tag: null,
    description:
      "Cobertura total con productos físicos de alta calidad para conservar los recuerdos de formas tangibles.",
    deliverables: [
      "Fotografía del Pre-15 (15 a 20 fotos)",
      "Fotografías del evento completo",
      "Sesión: quinceañera sola",
      "Sesión con los padres",
      "Sesión con los invitados",
      "Vals y seguimiento del evento",
      "Retablo impreso 30×45 cm",
      "Revista Pre-15 (12 páginas)",
    ],
    cta: "Cotizar Paquete Completo",
    waText:
      "Hola%20Carolina%2C%20quiero%20cotizar%20el%20Paquete%20Completo%20%24800.000",
  },
  {
    id: "premium",
    tier: "Premium",
    title: "Premium",
    priceRaw: 1000000,
    tag: "Todo incluido",
    description:
      "La experiencia más completa: el recuerdo más grande, en el formato más lujoso — revista book de 24 páginas y retablo de gran formato.",
    deliverables: [
      "Fotografía del Pre-15 (15 a 20 fotos)",
      "Fotografías del evento completo",
      "Sesión: quinceañera sola",
      "Sesión con los padres",
      "Sesión con los invitados",
      "Vals y seguimiento del evento",
      "Retablo impreso 60×90 cm",
      "Revista Book Pre-15 & Evento (24 páginas)",
    ],
    cta: "Cotizar Paquete Premium",
    waText:
      "Hola%20Carolina%2C%20quiero%20cotizar%20el%20Paquete%20Premium%20%241.000.000",
  },
];

const PAYMENT_INFO = {
  reserva:
    "Para agendar tu fecha es necesario abonar el 50% del valor contratado al momento de la reserva — la fecha será confirmada oficialmente.",
  saldo:
    "El saldo restante puede cancelarse el día de la sesión, antes de que empiece el protocolo del evento.",
  metodos: ["Efectivo", "Nequi — 3142411290 (Ingrid Berdugo)"],
  entrega: "15 días hábiles para entrega de todo el trabajo.",
};

export default function Services() {
  return (
    <section
      id="servicios"
      style={{ backgroundColor: "rgba(21,19,18,0.20)", paddingTop: "6rem", paddingBottom: "9rem" }}
      aria-label="Paquetes y servicios de fotografía"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow="Paquetes Quince Años 2026"
            title="Elige tu paquete"
            subtitle="Cada paquete está diseñado para preservar lo más valioso de tu gran día. Todos los precios son en pesos colombianos."
          />
        </motion.div>

        {/* ── Cards de paquetes ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass glass-hover rounded-2xl flex flex-col relative overflow-hidden"
              style={{ padding: "2rem" }}
            >
              {/* Tag destacado */}
              {pkg.tag && (
                <div
                  className="absolute top-0 right-0 px-3 py-1"
                  style={{
                    backgroundColor: "var(--color-emerald)",
                    borderBottomLeftRadius: "0.75rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-ivory)",
                    fontWeight: 600,
                  }}
                >
                  {pkg.tag}
                </div>
              )}

              {/* Tier label */}
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--color-emerald-light)",
                  marginBottom: "0.5rem",
                }}
              >
                {pkg.tier}
              </span>

              {/* Título */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  color: "var(--color-ivory)",
                  lineHeight: 1.1,
                }}
                className="transition-all duration-500 hover:tracking-wide hover:text-white"
              >
                {pkg.title}
              </h3>

              {/* Precio */}
              <div
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--color-ivory)",
                  }}
                >
                  <AnimatedCounter value={pkg.priceRaw} prefix="$" isCurrency duration={1.5} />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--color-stone)",
                    marginLeft: "0.4rem",
                  }}
                >
                  COP
                </span>
              </div>

              {/* Descripción */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  color: "rgba(168,162,158,0.9)",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                }}
              >
                {pkg.description}
              </p>

              {/* Entregables */}
              <ul
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  marginBottom: "1.75rem",
                }}
              >
                {pkg.deliverables.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                    }}
                  >
                    <Check
                      style={{
                        height: "0.9rem",
                        width: "0.9rem",
                        color: "var(--color-emerald-light)",
                        marginTop: "0.2rem",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8rem",
                        color: "rgba(168,162,158,0.95)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/573142411290?text=${pkg.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                id={`cta-pkg-${pkg.id}`}
                className="btn-secondary"
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Info de pago y entrega ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="glass rounded-2xl"
          style={{ marginTop: "3rem", padding: "2.5rem 2rem" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reserva */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
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
                  flexShrink: 0,
                }}
              >
                <CreditCard
                  style={{
                    height: "1rem",
                    width: "1rem",
                    color: "var(--color-emerald-light)",
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-emerald-light)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Formas de pago
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    color: "var(--color-stone)",
                    lineHeight: 1.65,
                  }}
                >
                  {PAYMENT_INFO.reserva}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    color: "rgba(168,162,158,0.8)",
                    lineHeight: 1.65,
                    marginTop: "0.5rem",
                  }}
                >
                  {PAYMENT_INFO.saldo}
                </p>
              </div>
            </div>

            {/* Métodos */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
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
                  flexShrink: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "var(--color-emerald-light)",
                }}
              >
                $
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-emerald-light)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Aceptamos
                </p>
                {PAYMENT_INFO.metodos.map((m) => (
                  <p
                    key={m}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      color: "var(--color-stone)",
                      lineHeight: 1.7,
                    }}
                  >
                    • {m}
                  </p>
                ))}
              </div>
            </div>

            {/* Entrega */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
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
                  flexShrink: 0,
                }}
              >
                <Clock
                  style={{
                    height: "1rem",
                    width: "1rem",
                    color: "var(--color-emerald-light)",
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-emerald-light)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Tiempo de entrega
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--color-ivory)",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter value={15} duration={1.5} /> días
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    color: "var(--color-stone)",
                    marginTop: "0.3rem",
                  }}
                >
                  hábiles después del evento
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-script)",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: "rgba(47,143,99,0.8)",
                    marginTop: "0.75rem",
                  }}
                >
                  ¡No dejes para después!
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "rgba(168,162,158,0.8)",
                    marginTop: "0.2rem",
                  }}
                >
                  Garantiza ya tu fecha y obtén memorias eternizadas con todo el
                  cariño que mereces.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
