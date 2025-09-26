// app/sitemap.ts
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.trucast-ng.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/categories`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/wholesale`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE_URL}/returns`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE_URL}/search`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.3 },
    { url: `${BASE_URL}/accessibility`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/blog`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${BASE_URL}/guides`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    // Keep /shop ONLY if it’s a real page (not just an alias of /categories)
    { url: `${BASE_URL}/shop`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
  ];

  // Category detail routes you’re using in the homepage grid
  const categorySlugs = ['switches', 'sockets', 'smart-lock', 'recessed-light'];
  const categoryRoutes: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/categories/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // If you have dynamic posts/products, map them the same way:
  // const posts = await getAllBlogPosts(); // your data source
  // const blogRoutes = posts.map(p => ({
  //   url: `${BASE_URL}/blog/${p.slug}`,
  //   lastModified: new Date(p.updatedAt ?? p.publishedAt ?? now),
  //   changeFrequency: 'monthly',
  //   priority: 0.5,
  // }));

  return [...staticRoutes, ...categoryRoutes /*, ...blogRoutes */];
}
