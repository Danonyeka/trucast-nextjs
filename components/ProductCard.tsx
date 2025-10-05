'use client';

import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';
import type { Product } from '@/lib/products';
import { displayPriceNGN, isOutOfStock } from '@/lib/products';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ProductCard({ product }: { product: Product }) {
  const price = displayPriceNGN(product);           // undefined when out of stock or price <= 0
  const out = isOutOfStock(product) || price == null;

  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-square bg-zinc-100">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-5">
        <p className="font-semibold">{product.name}</p>
        <p className="text-xs text-zinc-500">SKU: {product.sku}</p>
        <p className="mt-1 font-bold">{price != null ? NGN(price) : '₦0'}</p>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{product.desc}</p>

        <div className="mt-6 flex items-center gap-3">
          {/* This handles “Out of stock” + disabling when price <= 0 */}
          <AddToCartButton product={product} className="rounded-xl px-5 py-3" />

          <Link
            href={`/p/${encodeURIComponent(product.slug ?? product.sku)}`}
            className="btn btn-outline"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
