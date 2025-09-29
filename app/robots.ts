// app/robots.ts
import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'
const IS_PROD = SITE_URL.includes('trucast-ng.com')

export default function robots(): MetadataRoute.Robots {
  // On non-production (preview/staging), block crawling entirely
  if (!IS_PROD) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Keep thin/utility paths out of crawl
      { userAgent: '*', disallow: ['/search', '/api/', '/admin/', '/preview/'] },
      // Add others you don't want crawled, e.g. '/cart', '/checkout', '/account'
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // 'host' is optional and mostly ignored by Google; harmless to keep
    host: SITE_URL.replace(/^https?:\/\//, ''),
  }
}
