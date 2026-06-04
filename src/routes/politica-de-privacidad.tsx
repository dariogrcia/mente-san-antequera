import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad · Dra. Isabel Contreras Pérez" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PoliticaPrivacidad,
});

function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 lg:px-10 pt-16 lg:pt-24 pb-24">
          <p className="eyebrow"><span className="rule" />Privacidad</p>
          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
            Política de privacidad
          </h1>
          <p className="mt-6 text-foreground/60 text-sm">Última actualización: junio de 2026</p>

          <div className="mt-12 space-y-10 text-foreground/80 leading-relaxed">
            <Block title="Responsable del tratamiento">
              <ul className="space-y-1 list-none">
                <li><strong>Identidad:</strong> Isabel Contreras Pérez</li>
                <li><strong>Número de colegiada:</strong> 292306690 — Colegio de Médicos de Málaga</li>
                <li><strong>Correo electrónico:</strong> isacompe@gmail.com</li>
              </ul>
            </Block>

            <Block title="Datos que recogemos">
              <p>A través del formulario de contacto recogemos los siguientes datos personales:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Nombre</li>
                <li>Correo electrónico</li>
                <li>Teléfono (opcional)</li>
                <li>Contenido del mensaje</li>
              </ul>
              <p className="mt-4">No se recogen datos de salud a través de este formulario. La comunicación de información clínica se realiza únicamente en el contexto de la consulta profesional.</p>
            </Block>

            <Block title="Finalidad y base legal">
              <p>Tus datos se utilizan exclusivamente para gestionar tu solicitud de cita y establecer contacto contigo. La base legal es tu consentimiento explícito al enviar el formulario (art. 6.1.a RGPD).</p>
            </Block>

            <Block title="Conservación de los datos">
              <p>Los datos se conservan el tiempo necesario para gestionar tu solicitud y, en caso de iniciar una relación clínica, conforme a la legislación sanitaria aplicable. Si no se inicia relación clínica, se eliminan en un plazo máximo de 12 meses.</p>
            </Block>

            <Block title="Destinatarios">
              <p>No se ceden datos a terceros, salvo obligación legal. Los datos del formulario son recibidos directamente por la Dra. Isabel Contreras Pérez a través de su cuenta de correo electrónico.</p>
            </Block>

            <Block title="Tus derechos">
              <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a <a href="mailto:isacompe@gmail.com" className="underline underline-offset-4 hover:text-accent">isacompe@gmail.com</a>. Si consideras que el tratamiento no es conforme al RGPD, puedes presentar reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">aepd.es</a>).</p>
            </Block>

            <Block title="Cookies">
              <p>Este sitio web no utiliza cookies de rastreo ni analítica de terceros. Solo se emplean las cookies técnicas estrictamente necesarias para el funcionamiento de la página.</p>
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
