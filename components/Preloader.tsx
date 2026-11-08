"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-col" />
      <div className="preloader-col" />
      <div className="preloader-col" />
      <div className="preloader-col" />
      <div className="preloader-logo">
        <BrandMark href={null} size="lg" />
      </div>
    </div>
  );
}
