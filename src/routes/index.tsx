import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero.jpg";
import textureImg from "@/assets/texture.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Isabel Contreras Pérez · Psiquiatra" },
      { name: "description", content: "Consulta privada de psiquiatría en Andalucía. Atención clínica rigurosa, cercana y basada en la evidencia, dirigida por la Dra. Isabel Contreras Pérez." },
      { property: "og:title", content: "Dra. Isabel Contreras Pérez · Psiquiatra" },
      { property: "og:description", content: "Consulta privada de psiquiatría con un enfoque humano y científico." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 lg:pr-10">
              <p className="eyebrow"><span className="rule" />Consulta privada · Andalucía</p>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight">
                Una psiquiatría<br />
                <em className="italic font-light text-accent">cercana</em>, rigurosa<br />
                y basada en la evidencia.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
                Soy la <strong className="font-medium">Dra. Isabel Contreras Pérez</strong>,
                facultativa especialista en Psiquiatría. Acompaño a adolescentes y adultos
                en procesos de diagnóstico y tratamiento de la salud mental, con un enfoque
                integrador y profundamente humano.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
                >
                  Solicitar primera consulta <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/sobre-mi"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-foreground/25 text-xs uppercase tracking-[0.22em] hover:border-foreground transition-colors"
                >
                  Conocer a la doctora
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Espacio de consulta sereno con rama de olivo"
                  width={1600}
                  height={1280}
                  className="w-full h-[28rem] lg:h-[34rem] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border p-6 max-w-[15rem] hidden lg:block">
                  <p className="font-display text-3xl leading-none">5<span className="text-accent">+</span></p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">
                    Años de formación especializada en hospital universitario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE BAND */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 text-center">
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-foreground/85">
              «La salud mental no es la ausencia de dificultad, sino la posibilidad
              de habitarla con sentido. Mi trabajo es acompañar ese camino con ciencia,
              tiempo y escucha.»
            </p>
            <p className="eyebrow mt-6">— Dra. Isabel Contreras</p>
          </div>
        </section>

        {/* ÁREAS */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow"><span className="rule" />Áreas de atención</p>
              <h2 className="font-display text-5xl mt-6 leading-[1.05]">
                Espacios clínicos para cada momento.
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Atiendo procesos complejos del adulto y del adolescente, integrando
                tratamiento farmacológico cuando es necesario y psicoterapias
                contemporáneas con respaldo científico.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border">
              {[
                { t: "Trastornos del ánimo", d: "Depresión, depresión resistente, trastorno bipolar." },
                { t: "Ansiedad y estrés", d: "Ansiedad generalizada, crisis de pánico, fobias, burnout." },
                { t: "Trastorno límite de personalidad", d: "Abordaje con terapia dialéctico-conductual y de tercera generación." },
                { t: "TDAH del adulto", d: "Diagnóstico diferencial y tratamiento integral." },
                { t: "Trastornos psicóticos", d: "Primeros episodios, esquizofrenia, seguimiento longitudinal." },
                { t: "Conductas adictivas", d: "Patología dual: trastornos mentales y consumo de sustancias." },
                { t: "TCA", d: "Anorexia, bulimia y trastornos de la conducta alimentaria." },
                { t: "Psiquiatría legal", d: "Informes periciales y valoración forense." },
              ].map((a) => (
                <div key={a.t} className="bg-background p-8 hover:bg-secondary/40 transition-colors group">
                  <p className="font-display text-2xl">{a.t}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(180deg, color-mix(in oklab, var(--color-background) 92%, transparent), var(--color-background)), url(${textureImg})` }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow"><span className="rule" />Mi forma de trabajar</p>
              <h2 className="font-display text-5xl mt-6 leading-[1.05]">
                Tiempo clínico real. Ciencia actualizada. Trato humano.
              </h2>
            </div>
            <div className="space-y-10">
              {[
                { n: "01", t: "Primera consulta sin prisas", d: "Una sesión inicial de 60–90 minutos dedicada a comprender tu historia, no a un cuestionario." },
                { n: "02", t: "Plan individualizado", d: "Integro psicofarmacología, psicoeducación y derivación a psicoterapia cuando aporta valor." },
                { n: "03", t: "Seguimiento continuado", d: "Accesibilidad real entre consultas para ajustar tratamiento y resolver dudas." },
              ].map((s) => (
                <div key={s.n} className="flex gap-6 border-t border-border pt-8">
                  <p className="font-display text-3xl text-accent w-12 shrink-0">{s.n}</p>
                  <div>
                    <p className="font-display text-2xl">{s.t}</p>
                    <p className="text-foreground/70 mt-2 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
          <p className="eyebrow">Próximo paso</p>
          <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.05]">
            Si llevas tiempo dándole vueltas,<br />
            <em className="italic font-light">hablemos</em>.
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Pedir cita no te compromete a nada. Una primera conversación nos sirve
            a ambas para ver si soy la profesional adecuada para acompañarte.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-colors"
          >
            Pedir cita <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
