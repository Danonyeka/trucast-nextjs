import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Product } from '@/lib/products';
import { isOutOfStock } from '@/lib/products';
import AddToCartButton from './AddToCartButton';

// local currency formatter
function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ProductCard({ product }: { product: Product }) {
  const out = isOutOfStock(product);

  // avoid stale image optimizer cache + provide fallback
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
            unoptimized
            onError={() => setImgSrc('/products/placeholder.jpg')}
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
          {/* AddToCartButton auto-disables when out of stock */}
          <AddToCartButton product={product} />
          <Link href={`/p/${encodeURIComponent(product.slug || product.sku)}`} className="btn btn-outline">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
