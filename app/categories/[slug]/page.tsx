// app/categories/[slug]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  byCategory,
  deriveStatus,
  displayPriceNGN,
  type Product,
} from '@/lib/products';
import AddToCartButton from '@/components/AddToCartButton';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = { title: 'Category | Trucast Nigeria' };

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

const imgSrc = (s?: string) =>
  !s ? '/products/placeholder.png' : /^(https?:)?\//.test(s) ? s : `/${s}`;

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const products: Product[] = byCategory(params.slug);

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold capitalize">
        {params.slug.replace(/-/g, ' ')}
      </h1>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const out = deriveStatus(p) !== 'in_stock';
          const price = displayPriceNGN(p);

          return (
            <div key={p.sku} className="card p-5">
              <Link
                href={`/p/${encodeURIComponent(p.slug || p.sku)}`}
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-100">
                  <Image
                    src={imgSrc(p.img)}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                    onError={(e) => ((e.currentTarget as any).src = '/products/placeholder.png')}
                  />
                  {out && (
                    <span className="absolute left-2 top-2 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                      Out of stock
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-zinc-500">SKU: {p.sku}</p>
                  <p className="mt-1 font-bold">
                    {price !== undefined ? NGN(price) : '₦0'}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
                    {p.desc}
                  </p>
                </div>
              </Link>

              <div className="mt-4 flex gap-3">
                {/* This auto-disables + shows “Out of stock” when needed */}
                <AddToCartButton product={p} />
                <Link
                  href={`/p/${encodeURIComponent(p.slug || p.sku)}`}
                  className="btn btn-outline"
                >
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
