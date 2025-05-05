'use client';

import dynamic from 'next/dynamic';

// Importer dynamiquement les composants avec des animations côté client
export const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
export const ServicesSection = dynamic(() => import("./ServicesSection"), { ssr: false });
export const TestimonialsSection = dynamic(() => import("./TestimonialsSection"), { ssr: false });
