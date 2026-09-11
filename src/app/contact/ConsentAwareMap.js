'use client';

import { useEffect, useState } from 'react';
import { COOKIE_CONSENT_EVENT, getCookieConsent } from '../components/CookieBanner';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42619.231801043694!2d-1.7296468549145179!3d48.115984290937526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ede2fa7d69085%3A0x40ca5cd36e4ab30!2sRennes!5e0!3m2!1sfr!2sfr!4v1746433869508!5m2!1sfr!2sfr';

export default function ConsentAwareMap() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    setConsent(getCookieConsent());

    const onChange = (event) => setConsent(event.detail);
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  if (consent === 'accepted') {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte de Rennes - L'Oeil de Monsieur R photographe mariage"
      />
    );
  }

  return (
    <div className="h-full w-full bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      <p className="text-gray-700 mb-4 max-w-md">
        La carte Google Maps n&apos;est affichée qu&apos;avec votre consentement aux cookies
        tiers.
      </p>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
        className="px-6 py-2.5 bg-gray-800 text-white text-sm uppercase tracking-wider font-medium hover:bg-gray-700 transition-colors"
      >
        Gérer les cookies
      </button>
    </div>
  );
}
