"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { BrandMark } from "./BrandMark";
import { ArrowIcon } from "./MainButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] pad py-5 transition-colors duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between">
          <BrandMark size="md" />

          <button
            type="button"
            className={`burger ${open ? "open" : ""}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`nav-scrim ${open ? "open" : ""}`}
        aria-label="Fermer le menu"
        onClick={() => setOpen(false)}
      />

      <nav className={`nav-overlay ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="flex h-full flex-col justify-end px-8 pb-16 pt-28 md:px-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
              <ArrowIcon className="h-7 w-7" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
