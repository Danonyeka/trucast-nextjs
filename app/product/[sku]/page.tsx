'use client';

import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { catalog } from '@/lib/products';
import { useCart } from '@/components/cart/CartContext';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ProductPage({ params }: { params: { sku: string } }) {
  const product = catalog.find((p) => p.sku === params.sku);
  const { add } = useCart();

  if (!product) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/categories" className="link mt-4 inline-block">
          ← Back to shop
        </Link>
      </div>
    );
  }

  const unitPrice =
    (product as any).priceNGN ?? (product as any).price ?? 0;

  return (
    <div className="container py-16 grid lg:grid-cols-2 gap-8">
      <div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
        <SmartImage
          src={(product as any).img ?? (product as any).image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-zinc-500 mt-1">SKU: {product.sku}</p>
        <p className="text-xl font-bold mt-2">{NGN(unitPrice)}</p>
        <p className="mt-4 text-zinc-700">{(product as any).desc}</p>

        <div className="mt-6 flex gap-3">
          <button
            className="btn-primary"
            onClick={() =>
              add({
                id: product.sku, // use SKU as stable id
                name: product.name,
                qty: 1,
                // provide either price or priceNGN (both NGN units)
                priceNGN: (product as any).priceNGN ?? (product as any).price ?? 0,
                image: (product as any).img ?? (product as any).image,
              })
            }
          >
            Add to Cart
          </button>

          <Link className="btn-outline" href="/cart">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
