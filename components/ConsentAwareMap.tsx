"use client";

import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "./CookieBanner";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42619.231801043694!2d-1.7296468549145179!3d48.115984290937526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ede2fa7d69085%3A0x40ca5cd36e4ab30!2sRennes!5e0!3m2!1sfr!2sfr!4v1746433869508!5m2!1sfr!2sfr";

export function ConsentAwareMap() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setConsent(getCookieConsent()), 0);

    const onChange = (event: Event) => {
      const custom = event as CustomEvent<string>;
      setConsent(custom.detail);
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
    };
  }, []);

  if (consent === "accepted") {
    return (
      <div className="border border-white/15 bg-panel/40 p-3">
        <div className="mb-2 flex items-center justify-between text-xs tracking-[0.16em] text-muted">
          <span>LOCALISATION — RENNES &amp; BRETAGNE</span>
          <span>48° 06′ N, 1° 40′ W</span>
        </div>
        <div className="h-80 w-full overflow-hidden grayscale contrast-125">
          <iframe
            src={MAP_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de Rennes - L'Oeil de Monsieur R photographe mariage"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-72 w-full flex-col items-center justify-center border border-white/15 bg-panel/35 px-6 text-center">
      <p className="text-xs tracking-[0.18em] text-[#d69a58]">CARTE INTERACTIVE</p>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted">
        La carte Google Maps n&apos;est affichée qu&apos;avec votre consentement aux cookies tiers.
      </p>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
        className="mt-6 border border-paper/40 px-6 py-3 text-xs tracking-[0.16em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
      >
        GÉRER LES COOKIES
      </button>
    </div>
  );
}

