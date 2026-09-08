"use client";

import { Header } from "./Header";
import { Preloader } from "./Preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <Header />
      {children}
    </>
  );
}
