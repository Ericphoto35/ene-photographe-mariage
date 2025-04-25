/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Désactiver les vérifications ESLint pendant la construction
    ignoreDuringBuilds: true,
  },
  // Désactiver également les vérifications de types TypeScript si nécessaire
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
