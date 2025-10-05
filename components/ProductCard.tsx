'use client';

import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';
import { isOutOfStock, displayPriceNGN, type Product } from '@/lib/products';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ProductCard({ product }: { product: Product }) {
  const out = isOutOfStock(product);
  const price = displayPriceNGN(product);

  return (
    <div className="card overflow-hidden">
      <Link
        href={`/p/${encodeURIComponent(product.slug || product.sku)}`}
        className="block"
      >
        <div className="relative aspect-square bg-zinc-100">
          {out && (
            <span className="absolute left-2 top-2 rounded-full bg-amber-600 px-2.5 py-1 text-xs font-semibold text-white shadow">
              Out of Stock
            </span>
          )}
          <Image
            src={product.img}
            alt={product.name}
            fill
            className={`object-contain transition-opacity ${out ? 'opacity-60' : ''}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link
          href={`/p/${encodeURIComponent(product.slug || product.sku)}`}
          className="font-semibold line-clamp-2"
        >
          {product.name}
        </Link>
        <p className="text-xs text-zinc-500">SKU: {product.sku}</p>

        {price !== undefined ? (
          <p className="mt-1 font-bold">{NGN(price)}</p>
        ) : (
          <p className="mt-1 font-semibold text-zinc-500">Out of Stock</p>
        )}

        <div className="mt-3">
          <AddToCartButton product={product} className="btn w-full" />
        </div>
      </div>
    </div>
  );
}
