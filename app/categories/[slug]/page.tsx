import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import { categoryMap, byCategory, Product } from '@/lib/products';
import AddToCartButton from '@/components/cart/AddToCartButton';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

/** Fallback: extract bullet features from desc when features[] is missing */
function featuresFromDesc(desc?: string): string[] {
  if (!desc) return [];
  const lines = desc.split(/\r?\n/);
  const start = lines.findIndex((l) => /key features\s*:?\s*$/i.test(l.trim()));
  const slice = start >= 0 ? lines.slice(start + 1) : lines;

  return Array.from(
    new Set(
      slice
        .map((l) => l.trim())
        .filter((l) => /^[-•]\s+/.test(l))
        .map((l) => l.replace(/^[-•]\s+/, '').trim())
        .filter(Boolean),
    ),
  );
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryMap[params.slug];
  if (!category) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link href="/categories" className="link mt-4 inline-block">
          ← Back to Categories
        </Link>
      </div>
    );
  }

  const items = byCategory(params.slug) as Product[];

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">{category}</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => {
          const feats =
            p.features && p.features.length > 0
              ? p.features
              : featuresFromDesc(p.desc);
          const top3 = feats.slice(0, 3);

          return (
            <div
              key={p.sku}
              className="rounded-2xl border bg-white overflow-hidden hover:shadow-md transition"
            >
              <Link href={`/p/${encodeURIComponent(p.slug || p.sku)}`} className="block">
                <div className="aspect-[4/3] bg-zinc-50">
                  <SmartImage
                    src={p.img}
                    alt={p.alt || p.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              <div className="p-4">
                <Link href={`/p/${encodeURIComponent(p.slug || p.sku)}`}>
                  <h2 className="font-semibold line-clamp-2">{p.name}</h2>
                </Link>

                {/* Price */}
                <div className="mt-2 text-xl font-bold">{NGN(p.priceNGN)}</div>

                {/* Description directly under price (trimmed) */}
                {p.desc && (
                  <p className="mt-2 text-sm text-zinc-700 line-clamp-3 whitespace-pre-line">
                    {p.desc}
                  </p>
                )}

                {/* Compact features (first 3) */}
                {top3.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                    {top3.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex items-center gap-3">
                  <AddToCartButton
                    id={p.sku}
                    name={p.name}
                    priceNGN={p.priceNGN}
                    image={p.img}
                  />
                  <Link
                    className="btn-outline"
                    href={`/p/${encodeURIComponent(p.slug || p.sku)}`}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <Link className="link" href="/categories">
          ← Back to Categories
