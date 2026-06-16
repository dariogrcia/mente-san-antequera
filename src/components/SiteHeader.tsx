import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/servicios", label: "Servicios" },
  { to: "/cv", label: "Trayectoria" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[4.5rem] flex items-center justify-between">
        <Link to="/" className="font-display text-[1.15rem] tracking-tight leading-none">
          <span className="block" style={{ fontVariationSettings: '"opsz" 32' }}>Dra. Isabel Contreras</span>
          <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
            Psiquiatría
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[0.82rem] tracking-[0.02em]">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+34640513389"
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-[0.82rem] tracking-[0.02em]"
          >
            <Phone size={14} />
            640 513 389
          </a>
          <Link
            to="/contacto"
            className="ml-2 inline-flex items-center px-6 py-3 rounded-sm bg-primary text-primary-foreground text-[0.68rem] uppercase tracking-[0.18em] hover:bg-primary/90 hover:shadow-[0_4px_16px_-4px_oklch(0.32_0.045_155_/_0.3)] transition-all duration-200"
          >
            Pedir cita
          </Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
