import { NextResponse } from "next/server";

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
    const { name, email, message, consent } = body;

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

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue lors de l'envoi." },
      { status: 500 },
    );
  }
}

