import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  nombre: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().optional(),
  mensaje: z.string().min(1),
});

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator(ContactSchema)
  .handler(async ({ data }) => {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass || pass.startsWith("xxxx")) {
      throw new Error("Credenciales de Gmail no configuradas");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Web consulta" <${user}>`,
      to: user,
      replyTo: data.email,
      subject: `Nueva solicitud de cita — ${data.nombre}`,
      text: [
        `Nombre: ${data.nombre}`,
        `Email: ${data.email}`,
        `Teléfono: ${data.telefono || "No indicado"}`,
        ``,
        `Mensaje:`,
        data.mensaje,
      ].join("\n"),
    });
  });
