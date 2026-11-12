// app/p/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalog, findBySlugOrSku, isOutOfStock } from '@/lib/products';
import ProductEnquiryLink from '@/components/ProductEnquiryLink';

// --- helpers (local, so we don't depend on anything else) ---
const clamp = (s: string, max = 160) =>
  s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';


// ✅ Unique, product-specific meta for each product page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = findBySlugOrSku(decodeURIComponent(params.slug));

  if (!p) {
    return {
      title: 'Product not found | Trucast',
      description: 'The product you’re looking for is not available.',
    };
  }

  const baseDesc = (p.desc || '').replace(/\s+/g, ' ').trim();

  const description = clamp(
    `${p.name}: ${baseDesc} Buy genuine Trucast electrical accessories with fast nationwide delivery.`
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

<p className="mt-4 text-lg font-semibold">Contact us for pricing</p>

          <p className="mt-4 text-zinc-700">{p.desc}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ProductEnquiryLink product={p} />
            <Link href="/categories" className="btn btn-outline">
              Browse products
            </Link>
          </div>

          {out && (
            <p className="mt-2 text-sm text-amber-700">
              Currently out of stock — ask about availability.
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
