'use client';

import { useCart } from '@/lib/cart';
import type { Product } from '@/lib/products';
import { isOutOfStock, displayPriceNGN } from '@/lib/products';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function AddToCartButton({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  const out = isOutOfStock(product);
  const price = displayPriceNGN(product); // undefined when out of stock

  const handleClick = () => {
    if (out || !price) return;
    add({
      sku: product.sku,
      name: product.name,
      img: product.img,
      priceNGN: price,
      qty: 1,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={out}
      aria-disabled={out}
      className={`rounded-xl px-5 py-3 font-medium transition ${
        out
          ? 'cursor-not-allowed bg-zinc-200 text-zinc-500'
          : 'bg-emerald-600 text-white hover:bg-emerald-700'
      }`}
    >
      {out ? 'Out of stock' : <>Add — {NGN(price!)}</>}
    </button>
  );
}
