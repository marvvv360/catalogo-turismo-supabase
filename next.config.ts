import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // puerto y ruta se dejan vacíos para permitir cualquier imagen de este dominio
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;