import Link from "next/link";
import { site } from "@/lib/data";

type BrandMarkProps = {
  href?: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: {
    name: "text-lg md:text-xl",
    tagline: "text-[0.65rem]",
  },
  md: {
    name: "text-xl md:text-2xl",
    tagline: "text-xs",
  },
  lg: {
    name: "text-2xl md:text-3xl",
    tagline: "text-sm",
  },
};

export function BrandMark({ href = "/", size = "md", className = "" }: BrandMarkProps) {
  const classes = sizes[size];

  const content = (
    <span className={`brand-mark inline-flex flex-col ${className}`}>
      <span className={`brand-mark-name ${classes.name}`}>{site.name}</span>
      <span className={`brand-mark-tagline ${classes.tagline}`}>{site.tagline}</span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-block no-underline" aria-label={site.name}>
      {content}
    </Link>
  );
}
