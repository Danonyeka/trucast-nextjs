import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { categoryMap } from '@/lib/products';
import CatalogBrowser from '@/components/CatalogBrowser';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const slug = params.slug === 'smart-locks' ? 'smart-lock' : params.slug;
  const title = categoryMap[slug] || 'Products';
  const description = `Browse Trucast ${title.toLowerCase()} in Nigeria. Filter by listed specifications and enquire on WhatsApp for pricing, compatibility and availability.`;
  return { title, description, alternates: { canonical: `/categories/${slug}` }, openGraph: { title, description } };
}
export default function CategoryPage({ params }: { params: { slug: string } }) {
  if (params.slug === 'smart-locks') permanentRedirect('/categories/smart-lock');
  if (!categoryMap[params.slug]) notFound();
  return <section className="container py-12"><h1 className="text-3xl font-bold">{categoryMap[params.slug]}</h1><p className="mt-3 text-zinc-600">Choose your category and narrow the range using the listed product specifications.</p><CatalogBrowser initialCategory={params.slug} /></section>;
}
