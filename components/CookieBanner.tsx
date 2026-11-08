"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-changed";

export function getCookieConsent(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

function persistConsent(value: "accepted" | "refused") {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = getCookieConsent();
    if (!current) {
      const timer = window.setTimeout(() => setVisible(true), 0);
      const handleOpenSettings = () => setVisible(true);
      window.addEventListener("open-cookie-settings", handleOpenSettings);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("open-cookie-settings", handleOpenSettings);
      };
    }

    const handleOpenSettings = () => setVisible(true);
    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const accept = () => {
    persistConsent("accepted");
    setVisible(false);
  };

  const refuse = () => {
    persistConsent("refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/15 bg-ink/95 backdrop-blur-md pad py-6"
    >
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p
            id="cookie-banner-title"
            className="display text-2xl tracking-wide text-paper"
          >
            Préférences de cookies
          </p>
          <p id="cookie-banner-desc" className="mt-2 text-xs leading-5 text-muted">
            Ce site n&apos;utilise pas de cookies publicitaires. Avec votre accord, nous pouvons
            charger Google Maps sur la page contact (cookies tiers).{" "}
            <Link
              href="/mentions-legales#cookies"
              className="text-paper underline underline-offset-4"
            >
              En savoir plus
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={refuse}
            className="border border-white/25 px-6 py-3 text-xs tracking-[0.16em] text-muted transition-colors hover:border-paper hover:text-paper"
          >
            REFUSER
          </button>
          <button
            type="button"
            onClick={accept}
            className="border border-paper bg-paper px-6 py-3 text-xs tracking-[0.16em] text-ink transition-opacity hover:opacity-85"
          >
            ACCEPTER
          </button>
        </div>
      </div>
    </div>
  );
}

