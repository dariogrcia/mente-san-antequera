import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "Trayectoria · CV de la Dra. Isabel Contreras Pérez" },
      { name: "description", content: "Formación, experiencia profesional, publicaciones científicas, congresos y formación complementaria de la Dra. Isabel Contreras Pérez." },
      { property: "og:title", content: "Trayectoria · Dra. Isabel Contreras Pérez" },
      { property: "og:description", content: "CV completo: formación MIR, másteres, publicaciones y congresos en psiquiatría." },
    ],
  }),
  component: CV,
});

const formacion = [
  { t: "Especialista en Psiquiatría (MIR)", o: "Hospital Universitario de Jaén", d: "2022 — 2026" },
  { t: "Grado en Medicina", o: "Universidad de Granada · Campus de Salud", d: "2015 — 2021" },
  { t: "Título Superior en Música, especialidad Piano", o: "Conservatorio Superior «Victoria Eugenia» de Granada", d: "2015 — 2021" },
  { t: "Máster en Terapias de Tercera Generación", o: "Universidad Internacional de La Rioja (UNIR) · 60 ECTS", d: "2024 — 2026" },
  { t: "Máster en Psiquiatría Legal", o: "Universidad Complutense de Madrid · Dir. Prof. Alfredo Calcedo", d: "2025 — 2027 (en curso)" },
];

const experiencia = [
  { t: "Facultativa Especialista en Psiquiatría", o: "Hospital de Antequera · Servicio Andaluz de Salud (SAS)", d: "Junio 2026 — Actualidad" },
  { t: "Médico Interno Residente en Psiquiatría", o: "Hospital Universitario de Jaén", d: "2022 — 2026" },
  { t: "Rotación externa · Unidad de Trastornos de la Conducta Alimentaria", o: "Hospital Regional de Málaga", d: "Abril — Mayo 2025" },
  { t: "Rotación externa · Psiquiatría de Enlace e Interconsultas", o: "Hospital Virgen del Macarena (Sevilla)", d: "Marzo — Abril 2026" },
];

const meritos = [
  { t: "2.º Premio – Primera edición «Retos en Psiquiatría»", o: "Laboratorios farmacéuticos ROVI s.a.", d: "2023" },
  { t: "Matrícula de Honor en 2.º de Bachillerato", o: "IES Aguilar y Eslava, Cabra (Córdoba)", d: "2014 / 2015" },
];

const publicaciones = [
  { t: "Eficacia de la terapia asistida con perros sobre la sintomatología del TEA en niños y adolescentes", r: "Psicoevidencias (ISSN 2254-4046) · revisado por pares", d: "Agosto 2024" },
  { t: "Eficacia de la terapia dialéctico conductual en pacientes adultos con trastorno límite de personalidad", r: "Psicoevidencias (ISSN 2254-4046) · revisado por pares", d: "Febrero 2025" },
  { t: "Eficacia de la terapia con videojuegos en la mejora de los síntomas del TDAH en niños y adolescentes", r: "Psicoevidencias (ISSN 2254-4046) · revisado por pares", d: "Mayo 2025" },
  { t: "Eficacia de la terapia cognitivo conductual en pacientes adultos con trastorno límite de personalidad", r: "Psicoevidencias (ISSN 2254-4046) · revisado por pares", d: "Diciembre 2025" },
];

const posters = [
  { t: "Incendio en casa. A propósito de un caso", c: "Encuentros Nacionales en Psiquiatría: Conducta Suicida", d: "Abril 2023" },
  { t: "Alguien está poniendo a mi familia en mi contra", c: "29.º Congreso de Patología Dual", d: "Octubre 2022" },
  { t: "¿Trastorno facticio? A propósito de un caso", c: "8.º Congreso Nacional SEDUP", d: "Mayo 2023" },
  { t: "Risperidona inyectable en esquizofrenia paranoide", c: "Congreso Andaluz de Psiquiatría", d: "Septiembre 2023" },
  { t: "Abuso de sustancias, psicosis y conducta suicida en TP", c: "Congreso Nacional de Patología Dual", d: "Abril 2024" },
  { t: "Juegos, tóxicos y esquizofrenia. A propósito de un caso", c: "Congreso Nacional de Patología Dual", d: "Abril 2024" },
  { t: "El primer hijo de la tierra. A propósito de un caso", c: "8.º Congreso Nacional SEDUP", d: "Mayo 2023" },
  { t: "Ley en Psiquiatría: la relación entre alienistas y jueces", c: "8.º Congreso Nacional SEDUP", d: "Mayo 2023" },
  { t: "Intento autolítico con insulina lenta", c: "8.º Congreso Nacional SEDUP", d: "Mayo 2023" },
  { t: "Insomnio de larga data. A propósito de un caso", c: "Congreso Andaluz de Psiquiatría", d: "Septiembre 2023" },
  { t: "Cariprazine in obsessive compulsive disorder. A series of cases", c: "ECNP Congress (Barcelona)", d: "Octubre 2023" },
  { t: "Esquizofrenia con causa. A propósito de un caso", c: "XXVI Congreso Nacional de Psiquiatría", d: "Noviembre 2023" },
  { t: "Desmontando un síndrome de Munchausen", c: "XXVI Congreso Nacional de Psiquiatría", d: "Noviembre 2023" },
  { t: "Conocimiento del médico sobre la terapia electroconvulsiva", c: "XXVI Congreso Nacional de Psiquiatría", d: "Noviembre 2023" },
  { t: "Predicción del riesgo suicida en gestantes mediante aprendizaje automático", c: "XXVI Congreso Nacional de Psiquiatría", d: "Noviembre 2023" },
  { t: "Cetoacidosis diabética en contexto de intoxicación etílica con ideas autolíticas", c: "Congreso Nacional de Patología Dual", d: "Abril 2024" },
  { t: "Adicciones que tejen delirios. Síndrome de Clérambault", c: "Congreso Nacional de Patología Dual", d: "Abril 2024" },
  { t: "¿El cuerpo prisión del alma o el alma prisión del cuerpo?", c: "Congreso Nacional de Patología Dual", d: "Abril 2024" },
  { t: "La parafrenia. A propósito de un caso", c: "XXVII Congreso Nacional de Psiquiatría", d: "Octubre 2024" },
  { t: "Sialorrea inducida por clozapina en pacientes con esquizofrenia", c: "IX Congreso Nacional SEDUP", d: "Noviembre 2024" },
  { t: "Cognición social deficitaria multicausal", c: "IX Congreso Nacional SEDUP", d: "Noviembre 2024" },
  { t: "¿Amnesia disociativa? A propósito de un caso", c: "IX Congreso Nacional SEDUP", d: "Noviembre 2024" },
  { t: "Hiperfrecuentación y conducta suicida en urgencias psiquiátricas", c: "IX Congreso Nacional SEDUP", d: "Noviembre 2024" },
  { t: "Síndrome de hiperémesis cannabinoide. A propósito de un caso", c: "27.º Congreso de Patología Dual SEPD", d: "Junio 2025" },
  { t: "Renacimiento dual: vortioxetina como puente terapéutico en depresión resistente y alcoholismo crónico", c: "Congreso de Patología Dual (SEPD)", d: "Junio 2025" },
  { t: "Saborear sin tragar: caso clínico de CHSP en anorexia nerviosa restrictiva", c: "XXIV Congreso Sociedad Andaluza de Psiquiatría", d: "Septiembre 2025" },
  { t: "Eficacia de la toxina botulínica tipo A en depresión resistente: revisión sistemática", c: "XXIV Congreso Sociedad Andaluza de Psiquiatría", d: "Septiembre 2025" },
  { t: "Acompañamiento intensivo comunitario en el trastorno esquizotípico", c: "XXIV Congreso Sociedad Andaluza de Psiquiatría", d: "Septiembre 2025" },
  { t: "Competencias culturales y abordaje comunitario intensivo", c: "XXIV Congreso Sociedad Andaluza de Psiquiatría", d: "Septiembre 2025" },
  { t: "Síndrome alucinatorio en el servicio de urgencias", c: "XXIV Congreso Sociedad Andaluza de Psiquiatría", d: "Septiembre 2025" },
  { t: "Adherencia errática y confrontación terapéutica en esquizofrenia", c: "XXIV Congreso Sociedad Andaluza de Psiquiatría", d: "Septiembre 2025" },
  { t: "Video game therapy and ADHD in children and adolescents", c: "ECNP Congress", d: "Octubre 2025" },
  { t: "Adicción a las nuevas tecnologías en un adolescente", c: "XXVIII Congreso Nacional de Psiquiatría", d: "Noviembre 2025" },
  { t: "Delirium sobre demencia por infección por C. difficile en urgencias psiquiátricas", c: "10.º Congreso Nacional SEDUP", d: "Noviembre 2025" },
  { t: "Encefalitis autoinmune como presentación inicial de un cuadro psicótico agudo", c: "XVII Encuentros Nacionales en Psiquiatría", d: "Abril 2026" },
];

const congresos = [
  "8.º Congreso Nacional SEDUP — Málaga, mayo 2023",
  "Masterclass: Antidepressant Treatment in MDD — Barcelona, octubre 2023",
  "36.º ECNP Congress — Barcelona, octubre 2023",
  "XXVI Congreso Nacional de Psiquiatría — Salamanca, noviembre 2023",
  "26.º Congress of the Spanish Society on Dual Disorders — Mallorca, abril 2024",
  "Congreso APA «Confronting Addiction from Prevention to Recovery» — Nueva York, mayo 2024",
  "Jornadas Ciencia y Experiencia sobre Esquizofrenia (ROVI) — Sevilla, octubre 2024",
  "XXVII Congreso Nacional de Psiquiatría — San Sebastián, octubre 2024",
  "IX Congreso Nacional SEDUP — Córdoba, noviembre 2024",
  "Coloquio con el Experto: Deterioro Cognitivo — SEPG, diciembre 2024",
  "27.º Congreso de Patología Dual SEDP — junio 2025",
  "Jornadas Ciencia y Experiencia sobre Esquizofrenia (ROVI) — Granada, octubre 2025",
  "Congreso Sociedad Andaluza de Psiquiatría — septiembre 2025",
  "XXVIII Congreso Nacional de Psiquiatría — Zaragoza, noviembre 2025",
];

const cursos = [
  "Urgencias Hospitalarias — Complejo Hospitalario de Jaén (2022–2023)",
  "Aproximación práctica a las urgencias psiquiátricas — SEDUP, 46 h (2022–2023)",
  "Atención a víctimas de violencia de género para EIR — Iavante (2023)",
  "Atención a la infancia y adolescencia víctima de violencia de género — Iavante (2023)",
  "Diagnóstico precoz y abordaje de demencias no Alzheimer — Iavante (2023)",
  "Selección y manejo de fármacos en el tratamiento de la depresión — EASP (2023)",
  "Bioética práctica para residentes — Junta de Andalucía, 35 h (2023)",
  "El MIR: responsabilidad y marco legal — CGCOM, 31 h (2022–2023)",
  "Soporte Vital Inmediato — European Resuscitation Council (2023)",
  "Agresiones a profesionales sanitarios — CGCOM, 33 h (2023)",
  "Gestión práctica de las emociones — EASP, 10 h (2023)",
  "Dermatología psiquiátrica — IFOA, 23 h (2023)",
  "Estigma en trastornos adictivos — CGCOM (2022–2023)",
  "Trastornos de la conducta alimentaria — Escuela Madrileña de Salud (2022–2023)",
  "Escenarios clínicos en depresión — online, 30 h (enero 2024)",
  "6.º Curso intensivo de la clozapina — Nemea (marzo 2024)",
  "Psicosis dual — Fundación Patología Dual SEPD, 33 h (2024)",
  "Trastornos mentales y su abordaje en distintos niveles asistenciales — SMA, 100 h (2024)",
  "Discapacidad intelectual y del desarrollo — Plena Inclusión, 10 h (2024)",
  "Autismo 0–6 años: detección, diagnóstico e intervención temprana — 15 h (2024)",
  "Habilidades sociales — AEPSIS, 20 h (2024)",
  "Tratamiento del trastorno de personalidad por dependencia — AEPSIS, 20 h (2024)",
  "DE&CO. Formación en depresión y comorbilidades — SEPM (módulos I y II, 2024–2025)",
  "Depresión 360: claves de la depresión en atención primaria — Lundbeck (2024–2025)",
  "Prevención de la autolesión y el suicidio — Campus Virtual de Salud Pública, 16 h (2024)",
  "Supervisión clínica en intervenciones de salud mental — CVSP, 25 h (2024)",
  "Inteligencia artificial aplicada en psiquiatría — Adamed, 120 h (2024–2025)",
  "Capacitación sobre la respuesta médico-legal a la violencia de pareja y sexual — CVSP, 15 h (2025)",
  "Estimación del consumo de alcohol per cápita en las Américas — CVSP, 10 h (2025)",
  "Trabajo en equipo y metodología de la investigación — formación complementaria",
  "Prevención de Riesgos Laborales — Gesforma (2023)",
];

function CV() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
          <p className="eyebrow"><span className="rule" />Trayectoria</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] max-w-5xl">
            Currículum <em className="italic font-light text-accent">profesional</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-foreground/70 leading-relaxed">
            Formación reglada, experiencia hospitalaria, publicaciones científicas y
            actividad académica. Una trayectoria construida con rigor y vocación clínica.
          </p>
        </section>

        <Section title="Formación académica">
          <Timeline items={formacion} />
        </Section>

        <Section title="Experiencia profesional">
          <Timeline items={experiencia} />
        </Section>

        <Section title="Méritos académicos">
          <Timeline items={meritos} />
        </Section>

        <Section title="Publicaciones científicas">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {publicaciones.map((p) => (
              <article key={p.t} className="bg-background p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.d}</p>
                <p className="font-display text-2xl mt-3 leading-snug">{p.t}</p>
                <p className="text-sm text-foreground/70 mt-3 italic">{p.r}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Pósters y comunicaciones en congresos" subtitle={`${posters.length} comunicaciones aceptadas`}>
          <ul className="divide-y divide-border border-y border-border">
            {posters.map((p) => (
              <li key={p.t} className="py-6 grid md:grid-cols-12 gap-4">
                <p className="md:col-span-2 text-xs uppercase tracking-[0.18em] text-muted-foreground pt-1">{p.d}</p>
                <div className="md:col-span-10">
                  <p className="font-display text-xl leading-snug">{p.t}</p>
                  <p className="text-sm text-foreground/65 mt-1 italic">{p.c}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Congresos y jornadas">
          <ul className="columns-1 md:columns-2 gap-12 space-y-3 text-foreground/80">
            {congresos.map((c) => (
              <li key={c} className="break-inside-avoid border-l border-accent/40 pl-4 py-1 text-sm leading-relaxed">
                {c}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Cursos y formación complementaria" subtitle={`${cursos.length} formaciones acreditadas`}>
          <ul className="columns-1 md:columns-2 gap-12 space-y-3 text-foreground/80">
            {cursos.map((c) => (
              <li key={c} className="break-inside-avoid border-l border-accent/40 pl-4 py-1 text-sm leading-relaxed">
                {c}
              </li>
            ))}
          </ul>
        </Section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 text-center border-t border-border">
          <p className="font-display italic text-2xl text-foreground/80">
            «Formarse no es acumular títulos; es ensanchar la mirada clínica.»
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-12 mb-12">
        <div className="lg:col-span-4">
          <p className="eyebrow"><span className="rule" />Sección</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05]">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-3">{subtitle}</p>}
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

function Timeline({ items }: { items: { t: string; o: string; d: string }[] }) {
  return (
    <ol className="space-y-8">
      {items.map((it) => (
        <li key={it.t} className="grid md:grid-cols-12 gap-4 border-t border-border pt-6">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-muted-foreground pt-1">{it.d}</p>
          <div className="md:col-span-9">
            <p className="font-display text-2xl leading-tight">{it.t}</p>
            <p className="text-sm text-foreground/70 mt-2">{it.o}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
