'use client';

import { useCart } from '@/lib/cart';
import type { Product } from '@/lib/products';
import { isOutOfStock } from '@/lib/products';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}


type Props = {
  product: Product;
  className?: string;
};

export default function AddToCartButton({ product, className }: Props) {
  const add = useCart((s) => s.add);

  // Treat zero/blank price as out of stock, regardless of explicit status
  const price = Number(product.priceNGN ?? 0);
  const out = isOutOfStock(product) || price <= 0;

  const handleClick = () => {
    if (out) return;
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
      {out ? 'Out of stock' : <>Add — {NGN(price)}</>}
    </button>
  );
}
