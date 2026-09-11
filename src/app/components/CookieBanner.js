'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_CONSENT_EVENT = 'cookie-consent-changed';

export function getCookieConsent() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

function persistConsent(value) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = getCookieConsent();
    if (!current) {
      setVisible(true);
    }

    const handleOpenSettings = () => setVisible(true);
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const accept = () => {
    persistConsent('accepted');
    setVisible(false);
  };

  const refuse = () => {
    persistConsent('refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="container mx-auto px-4 md:px-6 py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex-1">
          <h2 id="cookie-banner-title" className="font-serif text-lg text-gray-900 mb-1">
            Cookies
          </h2>
          <p id="cookie-banner-desc" className="text-sm text-gray-600 leading-relaxed">
            Ce site n&apos;utilise pas de cookies publicitaires. Avec votre accord, nous pouvons
            charger Google Maps sur la page contact (cookies tiers).{' '}
            <Link
              href="/mentions-legales#cookies"
              className="underline hover:text-gray-900"
            >
              En savoir plus
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            type="button"
            onClick={refuse}
            className="px-6 py-2.5 border border-gray-800 text-gray-800 text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition-colors"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-6 py-2.5 bg-gray-800 text-white text-sm uppercase tracking-wider font-medium hover:bg-gray-700 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
