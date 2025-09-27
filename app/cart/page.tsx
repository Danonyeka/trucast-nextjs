'use client';

import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext';
import { site } from '@/lib/site';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

// Read unit price whether the item has `price` or `priceNGN`
function unitPrice(i: { price?: number; priceNGN?: number }) {
  return (typeof i.price === 'number' ? i.price : i.priceNGN) ?? 0;
}

export default function CartPage() {
  const { items, setQty, remove, subtotal, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link href="/categories" className="btn-primary mt-6 inline-block">
          Start Shopping
        </Link>
      </div>
    );
  }

  // Build WhatsApp message
  const message =
    `Hello Trucast,\nI'd like to order:\n` +
    items
      .map((i) => {
        const p = unitPrice(i);
        const line = `• ${i.name}${i.variant ? ` (${i.variant})` : ''} (x${i.qty}) — ${NGN(
          p * i.qty
        )}`;
        return line;
      })
      .join('\n') +
    `\nSubtotal: ${NGN(subtotal)}`;

  const wa = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="mt-6 grid lg:grid-cols-[1fr_360px] gap-6">
        {/* Items */}
        <div className="card p-5">
          {items.map((i) => {
            const p = unitPrice(i);
            const key = i.id + (i.variant ? `-${i.variant}` : '');
            return (
              <div key={key} className="flex items-center gap-4 py-3 border-b last:border-b-0">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-zinc-100">
                  <SmartImage
                    src={i.image || '/images/placeholder.png'}
                    alt={i.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-medium">{i.name}</p>
                  {i.variant ? <p className="text-xs text-zinc-500">Variant: {i.variant}</p> : null}
                  <p className="text-sm">{NGN(p)}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="btn-outline"
                    onClick={() => setQty(i.id, Math.max(1, i.qty - 1), i.variant)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{i.qty}</span>
                  <button
                    className="btn-outline"
                    onClick={() => setQty(i.id, i.qty + 1, i.variant)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn-outline"
                  onClick={() => remove(i.id, i.variant)}
                  aria-label={`Remove ${i.name}`}
                >
                  Remove
                </button>
              </div>
            );
          })}

          <button className="btn-outline mt-4" onClick={clear}>
            Clear cart
          </button>
        </div>

        {/* Summary */}
        <div className="card p-5 h-max">
          <p className="font-semibold">Order Summary</p>
          <div className="mt-3 flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-bold">{NGN(subtotal)}</span>
          </div>
          <a href={wa} target="_blank" rel="noopener" className="btn-primary w-full justify-center mt-5">
            Checkout via WhatsApp
          </a>
          <p className="text-xs text-zinc-500 mt-2">
            We’ll confirm delivery fees and timelines.
          </p>
        </div>
      </div>
    </div>
  );
}
