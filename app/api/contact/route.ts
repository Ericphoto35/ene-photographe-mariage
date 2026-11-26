import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  eventDate?: string;
  eventLocation?: string;
  eventType?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const {
      name,
      email,
      phone = "",
      eventDate = "",
      eventLocation = "",
      eventType = "Mariage",
      message,
      consent,
    } = body;

    if (!consent) {
      return NextResponse.json(
        { message: "Le consentement au traitement des données est requis." },
        { status: 400 },
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Veuillez renseigner les champs obligatoires." },
        { status: 400 },
      );
    }

    const host = process.env.EMAIL_HOST?.trim();
    const port = Number(process.env.EMAIL_PORT?.trim() || "465");
    const user = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.trim();
    const recipient = process.env.EMAIL_TO?.trim() || user || "contact@loeil-de-monsieur-r.fr";

    if (!host || !user || !pass) {
      console.error("Configuration SMTP manquante (EMAIL_HOST, EMAIL_USER ou EMAIL_PASS).");
      return NextResponse.json(
        {
          message:
            "Le serveur d'envoi d'emails n'est pas configuré (variables EMAIL_HOST / EMAIL_USER / EMAIL_PASS manquantes).",
          code: "SMTP_NOT_CONFIGURED",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"L'Oeil de Monsieur R - Contact" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `Nouveau contact : ${name} (${eventType})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #4a5568;">Nouvelle demande de contact</h2>
          <p><strong>De :</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p><strong>Détails de l'événement :</strong></p>
          <ul style="background-color: #f7fafc; padding: 15px 30px; border-radius: 8px;">
            <li><strong>Type :</strong> ${eventType}</li>
            <li><strong>Date :</strong> ${eventDate || "Non précisée"}</li>
            <li><strong>Lieu :</strong> ${eventLocation || "Non précisé"}</li>
          </ul>
          
          <p><strong>Message :</strong></p>
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi SMTP:", error);
    const detail = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json(
      {
        message: `Une erreur est survenue lors de l'envoi (${detail}).`,
      },
      { status: 500 },
    );
  }
}
