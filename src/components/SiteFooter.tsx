import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl leading-tight">Dra. Isabel Contreras Pérez</p>
          <p className="text-sm text-muted-foreground mt-2">
            Facultativa Especialista en Psiquiatría
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="eyebrow mb-3">Contacto</p>
          <p><a href="mailto:isacompe@gmail.com" className="hover:text-accent">isacompe@gmail.com</a></p>
          <p><a href="tel:+34640513389" className="hover:text-accent">+34 640 513 389</a></p>
          <p className="text-muted-foreground">Antequera · Córdoba · Andalucía</p>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Isabel Contreras Pérez. Todos los derechos reservados.</p>
          <p>Núm. de colegiado · Andalucía</p>
        </div>
      </div>
    </footer>
  );
}
