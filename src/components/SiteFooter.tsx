import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <>
    <footer className="border-t border-border/60 mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-[1.6rem] font-light leading-tight" style={{ fontVariationSettings: '"opsz" 48' }}>Dra. Isabel Contreras Pérez</p>
          <p className="text-sm text-muted-foreground mt-2">
            Facultativa Especialista en Psiquiatría
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="eyebrow mb-3">Contacto</p>
          <p><a href="mailto:isacompe@gmail.com" className="hover:text-accent">isacompe@gmail.com</a></p>
          <p><a href="tel:+34640513389" className="hover:text-accent">+34 640 513 389</a></p>
          <p className="text-muted-foreground">Antequera · Cabra</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="eyebrow mb-3">Navegación</p>
          <div className="flex flex-col gap-1.5">
            <Link to="/sobre-mi" className="hover:text-accent">Sobre mí</Link>
            <Link to="/servicios" className="hover:text-accent">Servicios</Link>
            <Link to="/cv" className="hover:text-accent">Trayectoria</Link>
            <Link to="/contacto" className="hover:text-accent">Pedir cita</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Isabel Contreras Pérez. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4 items-center">
            <p>Colegiada nº 292306690 · Col. Médicos Málaga</p>
            <Link to="/aviso-legal" className="hover:text-foreground transition-colors">Aviso legal</Link>
            <Link to="/politica-de-privacidad" className="hover:text-foreground transition-colors">Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
    <a
      href="https://wa.me/34640513389"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] transition-colors"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
    </>
  );
}
