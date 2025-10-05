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

type Props = {
  product: Product;
  className?: string; // <-- allow external classes
};

export default function AddToCartButton({ product, className }: Props) {
  const add = useCart((s) => s.add);

  const out = isOutOfStock(product);
  const price = displayPriceNGN(product); // undefined if out of stock

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

  const enabled =
    'rounded-xl px-5 py-3 font-medium transition bg-emerald-600 text-white hover:bg-emerald-700';
  const disabled =
    'rounded-xl px-5 py-3 font-medium transition bg-zinc-200 text-zinc-500 cursor-not-allowed';
  const btnClass = `${out ? disabled : enabled}${className ? ` ${className}` : ''}`;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={out}
      aria-disabled={out}
      className={btnClass}
    >
      {out ? 'Out of stock' : <>Add — {NGN(price!)}</>}
    </button>
  );
}
