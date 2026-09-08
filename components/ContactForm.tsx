"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="text-sm">
        Merci ! Votre message a bien été reçu. Je vous réponds sous 24 à 48 heures.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-6">
      <input className="form-input" name="name" placeholder="Votre nom" required />
      <input className="form-input" type="email" name="email" placeholder="Votre email" required />
      <input className="form-input" name="date" placeholder="Date du mariage" />
      <textarea
        className="form-input min-h-32 resize-y"
        name="message"
        placeholder="Parlez-moi de votre projet"
        required
      />
      <button type="submit" className="border border-paper px-6 py-3">
        Envoyer
      </button>
    </form>
  );
}
