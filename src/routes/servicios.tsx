import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios · Consulta privada de psiquiatría" },
      { name: "description", content: "Primera consulta, seguimiento, valoración farmacológica, segunda opinión e informes periciales con la Dra. Isabel Contreras Pérez." },
      { property: "og:title", content: "Servicios · Dra. Isabel Contreras Pérez" },
      { property: "og:description", content: "Consulta privada de psiquiatría para adolescentes y adultos." },
    ],
  }),
  component: Servicios,
});

const services = [
  {
    n: "01",
    t: "Primera consulta psiquiátrica",
    dur: "60 – 90 min",
    d: "Entrevista clínica en profundidad, historia personal y biográfica, exploración psicopatológica y orientación diagnóstica. Salimos de la consulta con un plan claro.",
  },
  {
    n: "02",
    t: "Consulta de seguimiento",
    dur: "30 – 45 min",
    d: "Revisión clínica, ajuste de tratamiento farmacológico, psicoeducación y resolución de dudas. Frecuencia adaptada a cada momento del proceso.",
  },
  {
    n: "03",
    t: "Segunda opinión",
    dur: "60 min",
    d: "Revisión de un diagnóstico o tratamiento previo cuando necesitas otra mirada profesional. Análisis del historial e informe escrito.",
  },
  {
    n: "04",
    t: "Valoración farmacológica",
    dur: "45 min",
    d: "Indicación, ajuste o deprescripción de psicofármacos. Especial cuidado en interacciones, perfil de efectos adversos y objetivos terapéuticos.",
  },
  {
    n: "05",
    t: "Psiquiatría legal y forense",
    dur: "A consultar",
    d: "Informes periciales, valoración de capacidad e imputabilidad. En formación de Máster en Psiquiatría Legal por la UCM.",
  },
  {
    n: "06",
    t: "Coordinación con psicoterapia",
    dur: "Incluido",
    d: "Trabajo coordinado con tu psicólogo/a o derivación a profesionales de confianza cuando la psicoterapia es la herramienta indicada.",
  },
];

function Servicios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
          <p className="eyebrow"><span className="rule" />Servicios</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] max-w-4xl">
            Atención psiquiátrica privada,<br />
            <em className="italic font-light text-accent">con tiempo y método.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            Cada formato está pensado para un momento del proceso. Si tienes dudas
            sobre qué consulta encaja mejor con tu situación, escríbeme y lo vemos juntas.
          </p>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
              {services.slice(0, 2).map((s) => <ServiceCard key={s.n} s={s} />)}
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
              {services.slice(2, 4).map((s) => <ServiceCard key={s.n} s={s} />)}
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {services.slice(4, 6).map((s) => <ServiceCard key={s.n} s={s} />)}
            </div>
          </div>
        </section>

        {/* MODALIDADES */}
        <section className="bg-cream-warm border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow"><span className="rule" />Modalidades</p>
              <h2 className="font-display text-5xl mt-6 leading-[1.05]">Cómo puedo atenderte.</h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Puedes elegir el formato que mejor se adapte a tu situación. Todas las modalidades ofrecen la misma calidad de atención clínica.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-px bg-border">
              {[
                { n: "01", t: "Presencial", sub: "Cabra (Córdoba)", d: "Consulta en persona para primera visita o seguimiento. Especialmente recomendada para la evaluación inicial." },
                { n: "02", t: "Videoconsulta", sub: "Online", d: "Por videollamada desde cualquier lugar. Misma calidad clínica, sin necesidad de desplazamiento." },
                { n: "03", t: "Telefónica", sub: "Seguimiento", d: "Para seguimientos puntuales, resolución de dudas y ajustes de tratamiento en pacientes ya conocidos." },
              ].map((m) => (
                <div key={m.n} className="bg-background p-8">
                  <p className="font-display text-3xl text-accent">{m.n}</p>
                  <p className="font-display text-2xl mt-6">{m.t}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{m.sub}</p>
                  <p className="text-sm text-foreground/70 mt-4 leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            ¿No sabes qué tipo de consulta necesitas?
          </h2>
          <p className="mt-6 text-foreground/70">
            Escríbeme contándome brevemente tu situación y te responderé personalmente
            con una orientación.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
          >
            Contactar <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ServiceCard({ s }: { s: typeof services[number] }) {
  return (
    <div className="p-10 lg:p-14 hover:bg-secondary/30 transition-colors">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-2xl text-accent">{s.n}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.dur}</p>
      </div>
      <p className="font-display text-3xl mt-6 leading-tight">{s.t}</p>
      <p className="mt-4 text-foreground/75 leading-relaxed">{s.d}</p>
    </div>
  );
}
