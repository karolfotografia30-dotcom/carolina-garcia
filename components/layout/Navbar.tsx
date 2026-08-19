"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#galeria", label: "Portafolio" },
  { href: "#editorial", label: "Editorial" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

// Instagram SVG (lucide-react doesn't include social brand icons)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-dark shadow-glass py-3"
            : "bg-transparent border-b border-transparent py-5"
        )}
        aria-label="Navegación principal"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-emerald-light/50 transition-all duration-300">
              <Image
                src="/logo.webp"
                alt="cg.photoy"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-script italic text-ivory/90 text-lg hidden sm:block group-hover:text-emerald-light transition-colors duration-300">
              cg.photoy
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-sans text-sm uppercase tracking-wider text-ivory/80 hover:text-emerald-light transition-colors duration-300
                    after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-light after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cg.photoy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de cg.photoy"
              className="text-ivory/70 hover:text-emerald-light transition-colors duration-300"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20cotizar%20una%20sesi%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden md:inline-flex text-xs px-4 py-2"
            >
              Cotizar
            </a>
            {/* Mobile burger */}
            <button
              id="mobile-menu-button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-ivory/80 hover:text-ivory transition-colors"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 glass-heavy flex flex-col p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end p-2 text-ivory/60 hover:text-ivory transition-colors mb-8"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
              <nav>
                <ul className="space-y-6">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-display text-2xl text-ivory/80 hover:text-emerald-light transition-colors duration-300 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/cg.photoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-ivory/60 hover:text-emerald-light transition-colors"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/573142411290?text=Hola%20Carolina%2C%20quiero%20cotizar%20una%20sesi%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-4 py-2"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
