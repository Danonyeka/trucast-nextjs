// app/cart/CartClient.tsx
'use client';

import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext';
import { site } from '@/lib/site';
import { useToast } from '@/components/ui/Toast';

function NGN(n: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function CartClient() {
  const toast = useToast();
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

  // Price helper (supports either price or priceNGN on each item)
  const priceFor = (i: any) =>
    typeof i.price === 'number' ? i.price : (i.priceNGN ?? 0);

  const message =
    `Hello Trucast,\nI'd like to order:\n` +
    items.map((i) => `• ${i.name} (x${i.qty}) — ${NGN(priceFor(i) * i.qty)}`).join('\n') +
    `\nSubtotal: ${NGN(subtotal)}`;

  const waHref = `https://wa.me/${String(site.phone).replace(/\D/g, '')}?text=${encodeURIComponent(
    message
  )}`;

  const handleWhatsAppCheckout = () => {
    // open WA first (so popup blockers don't complain), then clear cart
    window.open(waHref, '_blank', 'noopener,noreferrer');
    clear();
    toast('Cart cleared. Opening WhatsApp…');
  };

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="card p-5">
          {items.map((i: any) => (
            <div key={i.sku ?? i.id} className="flex items-center gap-4 border-b py-3 last:border-b-0">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-zinc-100">
                <SmartImage src={i.img ?? i.image} alt={i.name} fill className="object-contain" />
              </div>

              <div className="flex-1">
                <p className="font-medium">{i.name}</p>
                {(i.sku || i.id) && (
                  <p className="text-xs text-zinc-500">SKU: {i.sku ?? i.id}</p>
                )}
                <p className="text-sm">{NGN(priceFor(i))}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="btn-outline"
                  aria-label="Decrease quantity"
                  onClick={() => setQty(i.sku ?? i.id, Math.max(1, i.qty - 1))}
                >
                  −
                </button>
                <span className="w-8 text-center" aria-live="polite">{i.qty}</span>
                <button
                  className="btn-outline"
                  aria-label="Increase quantity"
                  onClick={() => setQty(i.sku ?? i.id, i.qty + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="btn-outline"
                aria-label={`Remove ${i.name}`}
                onClick={() => remove(i.sku ?? i.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            className="btn-outline mt-4"
            onClick={() => {
              clear();
              toast('Cart cleared');
            }}
          >
            Clear cart
          </button>
        </div>

        <div className="card h-max p-5">
          <p className="font-semibold">Order Summary</p>
          <div className="mt-3 flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-bold">{NGN(subtotal)}</span>
          </div>

          {/* WhatsApp checkout */}
          <button
            type="button"
            className="btn-primary mt-5 w-full justify-center"
            onClick={handleWhatsAppCheckout}
          >
            Checkout via WhatsApp
          </button>

          <p className="mt-2 text-xs text-zinc-500">
            We’ll confirm delivery fees and timelines.
          </p>
        </div>
      </div>
    </div>
  );
}
