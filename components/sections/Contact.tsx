"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICE_OPTIONS = [
  "Cobertura de boda",
  "Quinceañera / XV años",
  "Fotografía de marca / producto",
  "Book fotográfico / editorial",
  "Otro",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const text = encodeURIComponent(
      `Hola Carolina! 👋\n\nNombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nServicio: ${formData.service}\n\nMensaje:\n${formData.message}`
    );
    window.open(`https://wa.me/573142411290?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contacto"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"
      aria-label="Sección de contacto"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <SectionHeading
          eyebrow="Contacto"
          title="Cuéntame tu historia"
          subtitle="Completa el formulario y te respondo en WhatsApp con la propuesta personalizada para tu proyecto."
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-emerald-light mb-2">
              Tiempo de respuesta
            </p>
            <p className="font-display text-3xl text-ivory">
              &lt; 24 horas
            </p>
            <p className="font-sans text-sm text-stone mt-2">
              Respondo personalmente a cada consulta.
            </p>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-emerald-light mb-2">
              WhatsApp directo
            </p>
            <a
              href="https://wa.me/573142411290"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl text-ivory hover:text-emerald-light transition-colors duration-300"
            >
              +57 314 241 1290
            </a>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-emerald-light mb-2">
              Instagram
            </p>
            <a
              href="https://www.instagram.com/cg.photoy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl text-ivory hover:text-emerald-light transition-colors duration-300"
            >
              @cg.photoy
            </a>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-emerald-light mb-2">
              Ubicación
            </p>
            <p className="font-display text-2xl text-ivory">
              Bogotá, Colombia
            </p>
            <p className="font-sans text-sm text-stone mt-1">
              Viajes a todo el país disponibles.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald/20 border border-emerald-light/30
                  flex items-center justify-center">
                  <MessageCircle className="h-7 w-7 text-emerald-light" />
                </div>
                <h3 className="font-display text-2xl text-ivory">¡Mensaje enviado!</h3>
                <p className="font-sans text-sm text-stone max-w-xs">
                  Se abrió WhatsApp con tu mensaje. Carolina te responderá pronto.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Formulario de contacto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-sans text-xs uppercase tracking-wider text-stone mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block font-sans text-xs uppercase tracking-wider text-stone mb-2"
                    >
                      WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+57 314 241 1290"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-sans text-xs uppercase tracking-wider text-stone mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block font-sans text-xs uppercase tracking-wider text-stone mb-2"
                  >
                    Tipo de servicio *
                  </label>
                  <select
                    id="contact-service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="form-input appearance-none"
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-sans text-xs uppercase tracking-wider text-stone mb-2"
                  >
                    Cuéntame sobre tu proyecto *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Fecha aproximada, lugar, número de personas, tu visión..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary w-full justify-center"
                >
                  <Send className="h-4 w-4" />
                  Enviar por WhatsApp
                </button>

                <p className="font-sans text-xs text-stone/50 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje prellenado.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
