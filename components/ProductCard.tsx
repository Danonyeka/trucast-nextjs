'use client';

import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { Product, displayPriceNGN, isOutOfStock } from '@/lib/products';

const formatNGN = (n: number) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n);

export default function ProductCard({ product }: { product: Product }) {
  const price = displayPriceNGN(product);
  const oos = isOutOfStock(product);

  return (
    <div className="group flex flex-col rounded-xl border p-4 hover:shadow-sm transition">
      <Link href={product.slug ? `/p/${product.slug}` : '#'} className="block">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-50">
          <Image
            src={product.img}
            alt={product.alt || product.name}
            fill
            className="object-contain p-3 transition-transform group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 250px, 40vw"
          />
        </div>
        <h3 className="mt-3 line-clamp-2 text-sm font-medium">{product.name}</h3>
      </Link>

      <div className="mt-2 text-sm text-neutral-600 line-clamp-2">{product.desc}</div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-base font-semibold">
          {oos || price == null ? 'Out of stock' : formatNGN(price)}
        </div>

        {/* Add — ₦… button (auto-disables when OOS) */}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
