'use client';

import { useState, useCallback } from 'react';
import { Product, isOutOfStock, displayPriceNGN } from '@/lib/products';

// ⬇️ Change this import to your existing cart hook/store.
// Expected API: const { add } = useCart();  add({ sku, name, priceNGN, img, qty })
import { useCart } from '@/lib/cart'; // <-- replace if your path/name differs

const formatNGN = (n: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);

type Props = {
  product: Product;
  qty?: number; // default 1
  className?: string; // optional extra classes
};

export default function AddToCartButton({ product, qty = 1, className }: Props) {
  const { add } = useCart(); // { add: (item) => void | Promise<void> }
  const [adding, setAdding] = useState(false);

  const price = displayPriceNGN(product);
  const unavailable = isOutOfStock(product) || price == null;

  const onClick = useCallback(async () => {
    if (unavailable || adding) return;
    try {
      setAdding(true);
      await Promise.resolve(
        add({
          sku: product.sku,
          name: product.name,
          priceNGN: price as number,
          img: product.img,
          qty,
        })
      );
    } finally {
      setAdding(false);
    }
  }, [add, adding, price, product, qty, unavailable]);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={unavailable || adding}
      aria-disabled={unavailable || adding}
      className={[
        // base button styles
        'inline-flex items-center justify-center gap-1 rounded-md px-3 py-2',
        'text-sm font-medium text-white bg-black',
        'hover:bg-black/90 focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        'transition-colors',
        className ?? '',
      ].join(' ')}
    >
      {unavailable ? (
        'Out of stock'
      ) : adding ? (
        <>
          <svg
            className="size-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"/>
          </svg>
          Adding…
        </>
      ) : (
        <>Add — {formatNGN(price as number)}</>
      )}
    </button>
  );
}
