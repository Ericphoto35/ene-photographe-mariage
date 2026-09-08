import Link from "next/link";
import { navLinks, site, socialLinks } from "@/lib/data";
import { BrandMark } from "./BrandMark";

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-col">
            <BrandMark size="lg" />
            <p className="site-footer-desc">{site.footerLine}</p>
          </div>

          <div className="site-footer-col">
            <h3 className="site-footer-heading">Liens Rapides</h3>
            <ul className="site-footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer-col">
            <h3 className="site-footer-heading">Contact</h3>
            <div className="site-footer-contact">
              <a href={site.phoneHref} className="site-footer-contact-row">
                <PhoneIcon />
                <span>{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="site-footer-contact-row">
                <MailIcon />
                <span>{site.email}</span>
              </a>
            </div>

            <div className="site-footer-social-block">
              <h4 className="site-footer-subheading">Suivez-nous</h4>
              <div className="site-footer-socials">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer-social"
                    aria-label={link.label}
                  >
                    <InstagramIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>
            © {year} Monsieur R Photographe de Mariage. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
