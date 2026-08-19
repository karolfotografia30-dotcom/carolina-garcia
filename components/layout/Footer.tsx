import Image from "next/image";
import Link from "next/link";

// Instagram SVG icon (lucide-react doesn't include social brand icons)
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

// Facebook SVG icon
function FacebookIcon({ className }: { className?: string }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { href: "#galeria", label: "Portafolio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20">
                <Image
                  src="/logo.webp"
                  alt="cg.photoy"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-script italic text-ivory text-xl">
                cg.photoy
              </span>
            </div>
            <p className="font-sans text-sm text-stone leading-relaxed max-w-xs">
              Fotografía profesional con alma editorial. Capturando momentos
              únicos en Bogotá, Colombia y todo el país.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/cg.photoy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de cg.photoy"
                className="text-stone hover:text-emerald-light transition-colors duration-300"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-emerald-light mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-stone hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-emerald-light mb-6">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/573142411290"
                  className="font-sans text-sm text-stone hover:text-ivory transition-colors duration-300"
                >
                  WhatsApp: +57 314 241 1290
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cg.photoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-stone hover:text-ivory transition-colors duration-300"
                >
                  @cg.photoy en Instagram
                </a>
              </li>
              <li className="font-sans text-sm text-stone">
                Bogotá, Colombia 🇨🇴
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <p className="font-sans text-xs text-stone/60 text-center sm:text-left">
              © {currentYear} Carolina García — cg.photoy. Todos los derechos
              reservados.
            </p>
            <p className="font-sans text-[11px] text-stone/40 flex items-center justify-center sm:justify-start gap-1">
              Diseño y desarrollo web por{" "}
              <a
                href="https://www.facebook.com/share/1CMPzuVwik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar el Facebook de Cristian Lucas, desarrollador de esta página"
                className="inline-flex items-center gap-1 hover:text-emerald-light hover:opacity-100 opacity-80 transition-all duration-300 font-medium"
              >
                Cristian Lucas
                <FacebookIcon className="h-3 w-3" />
              </a>
            </p>
          </div>
          <p className="font-script italic text-stone/40 text-sm">
            Fotografía con alma
          </p>
        </div>
      </div>
    </footer>
  );
}
