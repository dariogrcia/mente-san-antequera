import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Pedir cita con la Dra. Isabel Contreras" },
      { name: "description", content: "Solicita tu primera consulta privada con la Dra. Isabel Contreras Pérez, psiquiatra en Antequera y Cabra." },
      { property: "og:title", content: "Contacto · Dra. Isabel Contreras Pérez" },
      { property: "og:description", content: "Pedir cita para consulta privada de psiquiatría." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = (fd.get("nombre") as string) || "";
    const email = (fd.get("email") as string) || "";
    const telefono = (fd.get("telefono") as string) || "";
    const mensaje = (fd.get("mensaje") as string) || "";

    const subject = `Solicitud de cita — ${nombre}`;
    const body = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono || "No indicado"}\n\n${mensaje}`;

    window.location.href = `mailto:isacompe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow"><span className="rule" />Contacto</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
              Pedir cita es <em className="italic font-light text-accent">el primer paso</em>.
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-xl">
              Puedes escribirme directamente por correo o teléfono. Te responderé
              personalmente en un plazo de 24–48 horas laborables para concertar
              la cita y resolver cualquier duda inicial.
            </p>

            <div className="mt-12 space-y-6">
              <ContactItem icon={<Mail size={18} />} label="Correo electrónico" value="isacompe@gmail.com" href="mailto:isacompe@gmail.com" />
              <ContactItem icon={<Phone size={18} />} label="Teléfono" value="+34 640 513 389" href="tel:+34640513389" />
              <ContactItem icon={<MapPin size={18} />} label="Ámbito de consulta" value="Antequera · Cabra" />
              <ContactItem icon={<Clock size={18} />} label="Horario de respuesta" value="Lunes a viernes, 9:00 — 19:00" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              className="bg-secondary/40 border border-border p-8 lg:p-10 space-y-6"
              onSubmit={handleSubmit}
            >
              <p className="eyebrow">Formulario</p>
              <h2 className="font-display text-3xl">Cuéntame brevemente</h2>

              <Field name="nombre" label="Nombre" required />
              <Field name="email" label="Correo electrónico" type="email" required />
              <Field name="telefono" label="Teléfono" type="tel" />
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
              >
                Enviar solicitud
              </button>
              {status === "ok" && (
                <p className="text-sm text-foreground/80">
                  Se ha abierto tu cliente de correo para enviar la solicitud. Si no se abre automáticamente, escríbeme a <a href="mailto:isacompe@gmail.com" className="text-accent underline">isacompe@gmail.com</a>.
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                Al enviar este formulario aceptas que tus datos se utilicen únicamente para
                gestionar tu solicitud de cita. No se comparten con terceros.
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 border-t border-border pt-6 group">
      <span className="text-accent mt-1">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="font-display text-2xl mt-1 group-hover:text-accent transition-colors">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
