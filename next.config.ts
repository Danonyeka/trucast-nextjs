// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Serve images directly from /public (no optimizer/proxy)
  images: { unoptimized: true },

  async redirects() {
    return [
      // Canonical pages
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },

      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/returns-and-refunds', destination: '/returns', permanent: true },
      { source: '/return-policy', destination: '/returns', permanent: true },
      { source: '/warranty', destination: '/returns', permanent: true },
      { source: '/accessibility-statement', destination: '/accessibility', permanent: true },

      // Store paths / aliases
      { source: '/shop', destination: '/categories', permanent: true },
      { source: '/store', destination: '/categories', permanent: true },
      { source: '/products', destination: '/categories', permanent: true },
      { source: '/product-category/:slug*', destination: '/categories/:slug*', permanent: true },

      // Blog pluralisation / legacy
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blog/category/:slug*', destination: '/blog', permanent: true },
    ]
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Anything under /product/* → /p/*
      {
        source: '/product/:path*',
        destination: '/p/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

export default nextConfig
