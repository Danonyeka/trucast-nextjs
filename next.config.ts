// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Serve images directly from /public (no optimizer/proxy)
  images: { unoptimized: true },

  
  // Redirect old /product/* to the new slug route /p/*
  async redirects() {
    return [
      {
        source: '/product/:path*',
        destination: '/p/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
