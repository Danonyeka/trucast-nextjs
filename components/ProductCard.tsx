import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';
import type { Product } from '@/lib/products';
import { isOutOfStock, displayPriceNGN } from '@/lib/products';

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
      <div className="relative aspect-[4/3] bg-zinc-100">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {out && (
          <span className="absolute left-2 top-2 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
            Out of stock
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-xs text-zinc-500">SKU: {product.sku}</p>

        <p className="mt-2 text-xl font-bold">
          {out ? <span className="text-zinc-500">Out of stock</span> : NGN(price!)}
        </p>

        {product.features?.length ? (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            {product.features.slice(0, 3).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex gap-3">
          <AddToCartButton product={product} />
          <Link
            href={`/p/${encodeURIComponent(product.slug || product.sku)}`}
            className="rounded-xl border px-5 py-3 font-medium text-zinc-700 hover:bg-zinc-50"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
