import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.trucast-ng.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`,         changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/wholesale`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/categories`,changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/shop`,      changeFrequency: 'weekly', priority: 0.7 },
  ];
}
