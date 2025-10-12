// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // ✅ Use Next.js optimizer (remove `unoptimized: true`)
    formats: ['image/avif', 'image/webp'],
    // Common responsive widths for full-bleed hero + general images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized results for a long time (CDN friendly)
    minimumCacheTTL: 31536000, // 1 year (in seconds)
  },

  // Redirect old SKU-based product URLs to the new slug route
  async redirects() {
    return [
      { source: '/product/:path*', destination: '/p/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
