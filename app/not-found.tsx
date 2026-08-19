import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-emerald-light/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-md space-y-10 relative z-10">
        <h1 className="font-script italic text-8xl md:text-9xl text-ivory/10">404</h1>
        
        <div className="space-y-4">
          <h2 className="font-sans text-lg md:text-xl text-ivory font-light uppercase tracking-[0.2em]">
            Página no encontrada
          </h2>
          <p className="font-sans text-stone text-sm leading-relaxed">
            Esta historia aún no ha sido fotografiada. La página que buscas no existe o ha sido movida.
          </p>
        </div>

        <Link
          href="/"
          className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-xs uppercase tracking-[0.2em] font-light text-ivory transition-all duration-700 ease-out border border-white/10 hover:border-emerald-light/50"
        >
          <div className="absolute inset-0 bg-emerald-light/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          <span className="relative z-10 flex items-center gap-3 transition-transform duration-700 group-hover:-translate-x-1">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </span>
        </Link>
      </div>
    </div>
  );
}
