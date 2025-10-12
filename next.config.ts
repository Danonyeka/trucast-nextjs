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

  // 🔒 Caching + Security headers (HSTS)
  async headers() {
    return [
      // Hashed Next build assets
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Next Image optimizer responses
      {
        source: '/_next/image',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Public images (non-hashed) – cache but allow updates
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, s-maxage=2592000' }, // 30 days
        ],
      },
      // Fonts (if served locally)
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      // Root assets (icons, manifest, og)
      {
        source: '/:file(robots.txt|sitemap.xml|manifest.webmanifest|favicon.ico|og.png|og.jpg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800' }, // 7 days
        ],
      },
      // Global security headers incl. HSTS
      {
        source: '/:path*',
        headers: [
          // Enforce HTTPS for repeat visits (HSTS)
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Extra hardening (safe defaults)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
