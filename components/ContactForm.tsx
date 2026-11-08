"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      eventType: String(formData.get("eventType") ?? "Mariage"),
      eventDate: String(formData.get("eventDate") ?? ""),
      eventLocation: String(formData.get("eventLocation") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(data?.message || "Une erreur est survenue lors de l'envoi.");
      }

      setStatus("done");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue lors de l'envoi.",
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-white/15 bg-panel/40 p-8 max-w-2xl">
        <p className="text-xs tracking-[0.18em] text-[#d69a58]">MESSAGE ENVOYÉ</p>
        <p className="display mt-2 text-3xl text-paper">Merci pour votre message</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          Votre demande a bien été reçue. Je vous réponds dans un délai de 24 à 48 heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <input className="form-input" name="name" placeholder="Votre nom *" required />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Votre email *"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <input className="form-input" type="tel" name="phone" placeholder="Téléphone" />
        <select
          className="form-input bg-ink"
          name="eventType"
          defaultValue="Mariage"
          aria-label="Type d'événement"
        >
          <option value="Mariage">Mariage</option>
          <option value="Séance d'engagement">Séance d&apos;engagement</option>
          <option value="Séance couple">Séance couple</option>
          <option value="Autre">Autre projet</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <input className="form-input" name="eventDate" placeholder="Date du mariage / événement" />
        <input
          className="form-input"
          name="eventLocation"
          placeholder="Lieu de réception (ex: Rennes, Vannes...)"
        />
      </div>

      <textarea
        className="form-input min-h-32 resize-y"
        name="message"
        placeholder="Parlez-moi de votre projet *"
        required
      />

      <label className="flex items-start gap-3 text-xs leading-5 text-muted cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-[#d69a58]"
        />
        <span>
          J&apos;accepte que mes données soient traitées pour répondre à ma demande de contact,
          conformément à la{" "}
          <Link
            href="/mentions-legales#donnees-personnelles"
            className="text-paper underline underline-offset-4"
          >
            politique de confidentialité
          </Link>
          . *
        </span>
      </label>

      {status === "error" && errorMessage ? (
        <p className="text-xs text-[#e57373]">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="cursor-pointer border border-paper px-8 py-3.5 text-xs tracking-[0.16em] text-paper transition-colors hover:bg-paper hover:text-ink disabled:opacity-50"
      >
        {status === "submitting" ? "ENVOI EN COURS..." : "ENVOYER MA DEMANDE"}
      </button>
    </form>
  );
}
