import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { NGN, isOutOfStock } from '@/lib/products'; // or wherever these live
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const out = isOutOfStock(product);

  // normalize + cache-bust proof src (and a graceful fallback)
  const initialSrc = useMemo(() => {
    const raw = product.img?.startsWith('/') ? product.img : `/${product.img ?? ''}`;
    return encodeURI(raw || '/products/placeholder.jpg');
  }, [product.img]);

  const [imgSrc, setImgSrc] = useState(initialSrc);

  return (
    <div className="card overflow-hidden">
      <Link href={`/p/${encodeURIComponent(product.slug || product.sku)}`} className="block">
        <div className="relative aspect-[4/3] bg-zinc-100">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            // important: skip the optimizer to avoid stale 404s for newly-added files
            unoptimized
            onError={() => setImgSrc('/products/placeholder.jpg')}
            priority={false}
          />
        </div>
      </Link>

      <div className="p-5">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-xs text-zinc-500">SKU: {product.sku}</p>

        {out ? (
          <p className="mt-1 font-semibold text-amber-700">Out of stock</p>
        ) : (
          <p className="mt-1 font-bold">{NGN(product.priceNGN)}</p>
        )}

        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{product.desc}</p>

        <div className="mt-4 flex gap-3">
          {/* your AddToCartButton already auto-disables when out */}
          <AddToCartButton product={product} className="btn" />
          <Link href={`/p/${encodeURIComponent(product.slug || product.sku)}`} className="btn btn-outline">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
