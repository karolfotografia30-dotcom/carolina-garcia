"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20cotizar%20una%20sesi%C3%B3n%20fotogr%C3%A1fica";

export default function WhatsAppFloatButton() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      id="whatsapp-float-btn"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center
        rounded-full bg-emerald shadow-glass-lg transition-colors duration-300
        hover:bg-emerald-light"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 32px rgba(47,143,99,0.6)" }}
    >
      {/* Ping animation */}
      <span
        className="absolute inset-0 rounded-full bg-emerald-light animate-ping opacity-30"
        aria-hidden="true"
      />
      <MessageCircle className="h-6 w-6 text-ivory relative z-10" />
    </motion.a>
  );
}
