// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { categories, catalog } from '@/lib/products'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

// Stable timestamp per build/deploy
const BUILD_TIME = new Date()
const url = (path: string) => `${BASE_URL}${path}`

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url('/'),              lastModified: BUILD_TIME, changeFrequency: 'weekly',  priority: 1.0 },
    { url: url('/about'),         lastModified: BUILD_TIME, changeFrequency: 'yearly',  priority: 0.6 },
    { url: url('/categories'),    lastModified: BUILD_TIME, changeFrequency: 'weekly',  priority: 0.8 },
    { url: url('/wholesale'),     lastModified: BUILD_TIME, changeFrequency: 'monthly', priority: 0.7 },
    { url: url('/contact'),       lastModified: BUILD_TIME, changeFrequency: 'yearly',  priority: 0.5 },
    { url: url('/returns'),       lastModified: BUILD_TIME, changeFrequency: 'yearly',  priority: 0.5 },
    { url: url('/accessibility'), lastModified: BUILD_TIME, changeFrequency: 'yearly',  priority: 0.3 },
    { url: url('/guides'),        lastModified: BUILD_TIME, changeFrequency: 'weekly',  priority: 0.6 },
    { url: url('/blog'),          lastModified: BUILD_TIME, changeFrequency: 'weekly',  priority: 0.6 },
    // NOTE: intentionally excluding /search from sitemap
    // If /shop is only an alias/redirect, keep it excluded; otherwise include the canonical one only.
    // { url: url('/shop'),       lastModified: BUILD_TIME, changeFrequency: 'weekly',  priority: 0.6 },
  ]

  // Categories from your actual data
  const categoryRoutes: MetadataRoute.Sitemap = (categories ?? []).map((c) => ({
    url: url(`/categories/${c.slug}`),
    lastModified: BUILD_TIME,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  // Products (only if you have product detail pages and slugs)
  const productRoutes: MetadataRoute.Sitemap = (catalog ?? [])
    .filter((p) => p.slug) // ensure slug exists
    .map((p) => ({
      url: url(`/p/${p.slug}`), // adjust if your route differs
      lastModified: BUILD_TIME,       // use p.updatedAt if available
      changeFrequency: 'monthly',
      priority: 0.5,
    }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}
