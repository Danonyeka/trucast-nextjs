// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Serve images directly from /public (works well with your SmartImage logic)
  images: {
    unoptimized: true,
  },

  // Redirect old SKU-based product URLs to the new slug route
  async redirects() {
  return [
    { source: '/product/:path*', destination: '/p/:path*', permanent: true },
  ];
},
};

export default nextConfig;
