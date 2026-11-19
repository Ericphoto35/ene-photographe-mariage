"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    wpShowReviews?: (vendorId: number, color: string) => void;
  }
}

export function MariagesNetReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  const initWidget = () => {
    if (typeof window !== "undefined" && typeof window.wpShowReviews === "function") {
      window.wpShowReviews(426109, "black");
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const makeResponsive = () => {
      const root = el.querySelector<HTMLElement>("#wp-widget-reviews");
      if (!root) return;
      root.style.width = "100%";
      root.style.maxWidth = "100%";

      const children = root.querySelectorAll<HTMLElement>("div, iframe, table");
      children.forEach((child) => {
        if (child.tagName === "IFRAME") {
          child.style.width = "100%";
          child.style.maxWidth = "100%";
        } else if (child.style.width && child.style.width.endsWith("px")) {
          child.style.width = "100%";
          child.style.maxWidth = "100%";
        }
      });

      const links = root.querySelectorAll<HTMLAnchorElement>("a");
      links.forEach((link) => {
        const text = (link.textContent || "").trim().toLowerCase();
        if (text.includes("lisez tous") || text.includes("tous nos avis")) {
          link.classList.add("mariages-net-all-btn");
        }
      });
    };

    makeResponsive();
    const observer = new MutationObserver(makeResponsive);
    observer.observe(el, { childList: true, subtree: true, attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mariages-net-section mt-16 w-full border border-white/12 bg-panel/35 p-5 sm:p-8 md:p-10"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs tracking-[0.18em] text-[#d69a58]">AVIS VÉRIFIÉS MARIAGES.NET</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            Retrouvez l&apos;ensemble des témoignages et avis vérifiés des couples que j&apos;ai
            accompagnés sur Mariages.net.
          </p>
        </div>
        <a
          href="https://www.mariages.net/photo-mariage/loeil-de-monsieur-r-photographe-de-mariage--e426109/avis"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="shrink-0 text-xs tracking-[0.16em] text-paper underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          VOIR TOUS LES AVIS SUR MARIAGES.NET ↗
        </a>
      </div>

      <div className="mariages-net-widget-wrap w-full">
        <div id="wp-widget-reviews" className="w-full">
          <div id="wp-widget-preview" className="text-xs text-muted">
            Lire{" "}
            <a
              href="https://www.mariages.net/photo-mariage/loeil-de-monsieur-r-photographe-de-mariage--e426109/avis"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="underline underline-offset-4 hover:text-paper"
            >
              nos avis
            </a>{" "}
            à &nbsp;
            <a
              href="https://www.mariages.net"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="inline-block align-middle"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn1.mariages.net/assets/img/logos/gen_logoHeader.svg"
                height={20}
                alt="Mariages.net"
              />
            </a>
          </div>
        </div>
      </div>

      <Script
        src="https://cdn1.mariages.net/js/wp-widget.js?symfnw-FR48-1-20261118-003-0_www_m_"
        strategy="afterInteractive"
        onReady={initWidget}
      />
    </div>
  );
}
