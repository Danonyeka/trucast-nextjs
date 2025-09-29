// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
      // If /shop is NOT a real page, keep this redirect; if it is, remove it.
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

export default nextConfig
