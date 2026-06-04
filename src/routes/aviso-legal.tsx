import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal · Dra. Isabel Contreras Pérez" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 lg:px-10 pt-16 lg:pt-24 pb-24">
          <p className="eyebrow"><span className="rule" />Aviso legal</p>
          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
            Aviso legal
          </h1>

          <div className="mt-12 space-y-10 text-foreground/80 leading-relaxed">
            <Block title="Titular del sitio web">
              <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:</p>
              <ul className="mt-4 space-y-1 list-none">
                <li><strong>Nombre:</strong> Isabel Contreras Pérez</li>
                <li><strong>Actividad:</strong> Médica especialista en Psiquiatría (ejercicio privado)</li>
                <li><strong>Número de colegiada:</strong> 292306690 — Colegio de Médicos de Málaga</li>
                <li><strong>Correo electrónico:</strong> isacompe@gmail.com</li>
                <li><strong>Ámbito geográfico:</strong> Cabra (Córdoba) y modalidad online</li>
              </ul>
            </Block>

            <Block title="Objeto y uso del sitio">
              <p>Este sitio web tiene carácter meramente informativo. La información publicada no constituye consejo médico ni relación clínica. Para atención sanitaria, contacta directamente con la Dra. Isabel Contreras Pérez a través de los canales indicados.</p>
            </Block>

            <Block title="Propiedad intelectual">
              <p>Los contenidos de este sitio web —textos, imágenes y diseño— son propiedad de Isabel Contreras Pérez o de sus legítimos titulares. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa y por escrito.</p>
            </Block>

            <Block title="Responsabilidad">
              <p>La titular no garantiza la ausencia de errores en los contenidos ni su actualización permanente. El acceso al sitio web no implica ningún tipo de relación entre el usuario y la titular.</p>
            </Block>

            <Block title="Legislación aplicable">
              <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del uso de este sitio web, las partes se someten a los Juzgados y Tribunales del domicilio del usuario.</p>
            </Block>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-8">
      <h2 className="font-display text-2xl mb-4">{title}</h2>
      {children}
    </div>
  );
}
