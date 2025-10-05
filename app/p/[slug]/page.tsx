// app/p/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalog, findBySlugOrSku, isOutOfStock, displayPriceNGN } from '@/lib/products';
import AddToCartButton from '@/components/AddToCartButton';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
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
            <p className="mt-4 text-3xl font-extrabold">{NGN(price)}</p>
          )}

          <p className="mt-4 text-zinc-700">{p.desc}</p>

          <div className="mt-6 flex items-center gap-3">
            {/* This is the button you were missing */}
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
