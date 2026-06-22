import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí · Dra. Isabel Contreras Pérez" },
      { name: "description", content: "Conoce a la Dra. Isabel Contreras Pérez: médica especialista en Psiquiatría, formada en el Hospital Universitario de Jaén y facultativa en el SAS." },
      { property: "og:title", content: "Sobre mí · Dra. Isabel Contreras Pérez" },
      { property: "og:description", content: "Médica especialista en Psiquiatría, con formación en terapias de tercera generación y psiquiatría legal." },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
          <p className="eyebrow"><span className="rule" />Sobre mí</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] max-w-4xl">
            Médica, música y psiquiatra. Tres formas de <em className="italic font-light text-accent">escuchar</em>.
          </h1>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 pb-24">
          <div className="lg:col-span-5">
            <img
              src={aboutImg}
              alt="Composición botánica con ramas de olivo"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="lg:col-span-7 lg:pl-6 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Soy <strong className="text-foreground font-medium">Isabel Contreras Pérez</strong>, médica
              especialista en Psiquiatría. Estudié Medicina en la Universidad de Granada y,
              en paralelo, el Título Superior de Música —especialidad de Piano— en el
              Conservatorio Superior «Victoria Eugenia». Esa doble formación marcó mi forma
              de escuchar y de mirar lo humano.
            </p>
            <p>
              Realicé la residencia MIR de Psiquiatría en el <strong className="text-foreground font-medium">Hospital
              Universitario de Jaén</strong>, con rotaciones externas en la Unidad de Trastornos
              de la Conducta Alimentaria del Hospital Regional de Málaga y en la Unidad
              de Psiquiatría de Enlace e Interconsultas del Hospital Virgen del Macarena
              de Sevilla.
            </p>
            <p>
              Actualmente trabajo como <strong className="text-foreground font-medium">Facultativa Especialista
              de Área en el Hospital de Antequera</strong> (Servicio Andaluz de Salud) y, en
              paralelo, atiendo consulta privada. Completé el Máster en Terapias de
              Tercera Generación (UNIR) y continúo formándome con el Máster en
              Psiquiatría Legal dirigido por el Prof. Alfredo Calcedo en la Universidad
              Complutense de Madrid.
            </p>
            <p>
              Mi práctica clínica combina la psicofarmacología con un enfoque integrador
              que toma prestadas herramientas de la terapia cognitivo-conductual, la
              dialéctico-conductual y las terapias contextuales. Creo en una psiquiatría
              que dedica tiempo, explica y acompaña.
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-sage-tint">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { n: "MIR", t: "Hospital Universitario de Jaén", s: "Especialización en Psiquiatría 2022–2026" },
              { n: "SAS", t: "Hospital de Antequera", s: "Facultativa Especialista de Área" },
              { n: "20+", t: "Publicaciones y pósters", s: "En congresos nacionales e internacionales" },
              { n: "Colegiada", t: "292306690", s: "Colegio de Médicos de Málaga" },
            ].map((b) => (
              <div key={b.t}>
                <p className="font-display text-5xl text-accent">{b.n}</p>
                <p className="font-display text-2xl mt-4">{b.t}</p>
                <p className="text-sm text-muted-foreground mt-2">{b.s}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
