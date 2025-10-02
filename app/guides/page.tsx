// app/guides/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic'; // skip SSG to avoid prerender errors
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Guides | Trucast Nigeria',
  description:
    'Guides to buying electrical accessories in Nigeria: ordering, payments, delivery, warranty and returns. Clear steps for retail and wholesale customers.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Guides | Trucast Nigeria',
    description:
      'Guides to buying electrical accessories in Nigeria: ordering, payments, delivery, warranty and returns.',
    url: '/guides',
  },
};

type Guide = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
};

export default async function GuidesPage() {
  // Load content at runtime (not at module scope) to keep build safe
  let list: Guide[] = [];
  try {
    const mod = await import('@/lib/content');
    const arr = (mod as any).guides;
    list = Array.isArray(arr) ? (arr as Guide[]) : [];
  } catch (e) {
    console.error('[guides] failed to load content:', e);
    list = [];
  }

  // JSON-LD for the list
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: list.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `/guides/${g.slug}`,
      name: g.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="container py-12">
        <h1 className="mb-6 text-2xl font-bold">Guides &amp; Resources</h1>

        {list.length === 0 ? (
          <p className="text-sm text-zinc-600">No guides available right now. Please check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="card p-5 transition hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                <h2 className="font-semibold">{g.title}</h2>
                {g.excerpt && <p className="mt-1 text-sm text-zinc-600">{g.excerpt}</p>}
                {g.category && (
                  <span className="mt-3 inline-block text-xs font-medium text-brand">{g.category}</span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
