import { Link } from "@tanstack/react-router";
import logoNegativo from "@/assets/logo-isabel-contreras-negativo.svg";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function SiteFooter() {
  return (
    <>
    <footer className="mt-40 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-3">
        <div>
          <img
            src={logoNegativo}
            alt="Dra. Isabel Contreras, Psiquiatra"
            className="h-20 w-auto mb-5"
          />
          <p className="font-display text-[1.6rem] font-light leading-tight" style={{ fontVariationSettings: '"opsz" 48' }}>Dra. Isabel Contreras Pérez</p>
          <p className="text-sm text-primary-foreground/70 mt-2">
            Facultativa Especialista en Psiquiatría
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="eyebrow mb-3 text-primary-foreground/60">Contacto</p>
          <p><a href="mailto:isacompe@gmail.com" className="text-primary-foreground/90 hover:text-accent transition-colors">isacompe@gmail.com</a></p>
          <p><a href="tel:+34640513389" className="text-primary-foreground/90 hover:text-accent transition-colors">+34 640 513 389</a></p>
          <p className="text-primary-foreground/60">Antequera · Cabra</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="eyebrow mb-3 text-primary-foreground/60">Navegación</p>
          <div className="flex flex-col gap-1.5">
            <Link to="/sobre-mi" className="text-primary-foreground/90 hover:text-accent transition-colors">Sobre mí</Link>
            <Link to="/servicios" className="text-primary-foreground/90 hover:text-accent transition-colors">Servicios</Link>
            <Link to="/cv" className="text-primary-foreground/90 hover:text-accent transition-colors">Trayectoria</Link>
            <Link to="/contacto" className="text-primary-foreground/90 hover:text-accent transition-colors">Pedir cita</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Isabel Contreras Pérez. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4 items-center">
            <p>Colegiada nº 292306690 · Col. Médicos Málaga</p>
            <Link to="/aviso-legal" className="hover:text-accent transition-colors">Aviso legal</Link>
            <Link to="/politica-de-privacidad" className="hover:text-accent transition-colors">Política de privacidad</Link>
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
