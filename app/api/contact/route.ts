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

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nouveau contact : ${name} (${eventType})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #4a5568;">Nouvelle demande de contact</h2>
          <p><strong>De :</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p><strong>Détails de l'événement :</strong></p>
          <ul style="background-color: #f7fafc; padding: 15px 30px; border-radius: 8px;">
            <li><strong>Type :</strong> ${eventType}</li>
            <li><strong>Date :</strong> ${eventDate}</li>
            <li><strong>Lieu :</strong> ${eventLocation}</li>
          </ul>
          
          <p><strong>Message :</strong></p>
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue lors de l'envoi." },
      { status: 500 },
    );
  }
}
