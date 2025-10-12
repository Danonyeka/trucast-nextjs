// app/p/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalog, findBySlugOrSku, isOutOfStock, displayPriceNGN } from '@/lib/products';
import AddToCartButton from '@/components/AddToCartButton';

// --- helpers (local, so we don't depend on anything else) ---
const clamp = (s: string, max = 160) =>
  s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';

function formatNGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

// ✅ Unique, product-specific meta for each product page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = findBySlugOrSku(decodeURIComponent(params.slug));

  if (!p) {
    return {
      title: 'Product not found | Trucast',
      description: 'The product you’re looking for is not available.',
    };
  }

  const price = displayPriceNGN(p);
  const priceText = typeof price === 'number' ? ` Price: ${formatNGN(price)}.` : '';
  const baseDesc = (p.desc || '').replace(/\s+/g, ' ').trim();

  const description = clamp(
    `${p.name}: ${baseDesc}${priceText} Buy genuine Trucast electrical accessories with fast nationwide delivery.`
  );

  return {
    title: `${p.name} | Trucast`,
    description,
    openGraph: { description, title: `${p.name} | Trucast` },
    twitter: { description, title: `${p.name} | Trucast` },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = findBySlugOrSku(decodeURIComponent(params.slug));
  if (!p) return notFound();

  const price = displayPriceNGN(p);
  const out = isOutOfStock(p);

  return (
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
          <Image src={p.img} alt={p.name} fill className="object-contain" priority />
        </div>

        <div>
          <h1 className="text-4xl font-bold leading-tight">{p.name}</h1>
          <p className="mt-1 text-sm text-zinc-500">SKU: {p.sku}</p>

          {price !== undefined && (
            <p className="mt-4 text-3xl font-extrabold">{formatNGN(price)}</p>
          )}

          <p className="mt-4 text-zinc-700">{p.desc}</p>

          <div className="mt-6 flex items-center gap-3">
            <AddToCartButton product={p} className="btn" />
            <Link href="/cart" className="btn btn-outline">
              Go to Cart
            </Link>
          </div>

          {out && (
            <p className="mt-2 text-sm text-amber-700">
              Currently out of stock — price hidden until restock.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// optional SSG
export function generateStaticParams() {
  return catalog.map((p) => ({ slug: encodeURIComponent(p.slug || p.sku) }));
}
