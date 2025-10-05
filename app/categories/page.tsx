// app/categories/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic'; // avoid SSG crash
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Shop by Category | Trucast Nigeria',
  description:
    'Shop by category: electrical accessories in Nigeria—switches, sockets, LED lighting, smart devices and more. Secure checkout and fast nationwide delivery.',
  alternates: { canonical: '/categories' },
  openGraph: {
    title: 'Shop by Category | Trucast Nigeria',
    description:
      'Explore Trucast product categories for retail and wholesale orders.',
    url: '/categories',
  },
};

type Cat = { slug: string; title: string };

type Counts = { total: number; inStock: number; outOfStock: number };

export default async function CategoriesIndex() {
  let list: Cat[] = [];
  let countsByCat: Record<string, Counts> = {};

  try {
    const mod = await import('@/lib/products');

    // Prefer an exported `categories` array if present
    const arr = (mod as any).categories as any[] | undefined;
    if (Array.isArray(arr) && arr.length) {
      list = arr
        .map((c: any) => ({
          slug: c?.slug ?? c?.key ?? c?.id ?? '',
          title: c?.title ?? c?.name ?? '',
        }))
        .filter((c) => c.slug && c.title);
    }

    // Fallback to `categoryMap` object
    if (!list.length && (mod as any).categoryMap) {
      const map = (mod as any).categoryMap as Record<string, string>;
      list = Object.entries(map).map(([slug, title]) => ({ slug, title }));
    }

    // Build availability counts per category if we have a catalog
    const catalog = (mod as any).catalog as any[] | undefined;
    if (Array.isArray(catalog) && catalog.length) {
      const statusOf = (p: any) =>
        p?.stock?.status ?? (p?.priceNGN > 0 ? 'in_stock' : 'out_of_stock');

      countsByCat = catalog.reduce<Record<string, Counts>>((acc, p: any) => {
        const catSlug = String(p?.category ?? '');
        if (!catSlug) return acc;
        const prev = acc[catSlug] ?? { total: 0, inStock: 0, outOfStock: 0 };
        const status = statusOf(p);
        prev.total += 1;
        if (status === 'in_stock') prev.inStock += 1;
        else prev.outOfStock += 1;
        acc[catSlug] = prev;
        return acc;
      }, {});
    }
  } catch (e) {
    console.error('[categories] failed to load categories/categoryMap', e);
  }

  // Final fallback so the page never crashes
  if (!list.length) {
    list = [
      { slug: 'smart-lock', title: 'Smart Lock' },
      { slug: 'recessed-light', title: 'Recessed Light' },
      { slug: 'sockets', title: 'Sockets' },
      { slug: 'smart-plugs', title: 'Smart Plugs' },
      { slug: 'bulbs', title: 'LED Bulbs' },
      { slug: 'motion-sensors', title: 'Motion Sensors' },
      { slug: 'smart-breaker', title: 'Smart Breaker' },
      { slug: 'alu-profile', title: 'Alu Profile' },
    ];
  }

  // JSON-LD for the list
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: list.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `/categories/${c.slug}`,
      name: c.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="container py-16">
        <h1 className="text-3xl font-bold">Shop by Category</h1>
        <p className="mt-2 text-zinc-600">Browse our most requested ranges.</p>

        {list.length === 0 ? (
          <p className="mt-6 text-sm text-zinc-600">
            No categories available right now. Please check back soon.
          </p>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => {
              const stat = countsByCat[c.slug];
              const hasCounts = !!stat;
              return (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className="card p-5 transition hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                  aria-label={`Open ${c.title} category`}
                >
                  <p className="font-semibold">{c.title}</p>

                  {hasCounts ? (
                    <p className="mt-1 text-sm text-zinc-600">
                      {stat.inStock} available
                      {stat.outOfStock > 0 && (
                        <>
                          {' '}
                          · <span className="font-medium text-amber-700">
                            {stat.outOfStock} out of stock
                          </span>
                        </>
                      )}
                    </p>
                  ) : (
                    <p className="mt-1 text-sm text-zinc-600">
                      Availability updating…
                    </p>
                  )}

                  <span className="link mt-3 inline-block">
                    Open {c.title} →
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
