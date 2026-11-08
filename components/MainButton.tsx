export function ArrowIcon({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

export function MainButton({
  href,
  left,
  right,
}: {
  href: string;
  left: string;
  right: string;
}) {
  return (
    <a href={href} className="main-btn">
      <span className="main-btn-row">
        <span className="main-btn-text">
          <span className="main-btn-col shift">
            <span>{left}</span>
            <span>{left}</span>
          </span>
          <span className="main-btn-col">
            <span>{right}</span>
            <span>{right}</span>
          </span>
        </span>
        <ArrowIcon />
      </span>
      <span className="main-btn-line" />
    </a>
  );
}
