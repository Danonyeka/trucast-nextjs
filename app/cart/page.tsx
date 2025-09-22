'use client';
import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext';
import { site } from '@/lib/site';
function NGN(n: number) { return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n); }

export default function CartPage() {
  const { items, setQty, remove, subtotal, clear } = useCart();
  if (items.length === 0) {
    return (<div className="container py-16"><h1 className="text-2xl font-bold">Your cart is empty</h1><Link href="/categories" className="btn-primary mt-6 inline-block">Start Shopping</Link></div>);
  }
  const message = `Hello Trucast,\nI'd like to order:\n` + items.map(i => `• ${i.name} (x${i.qty}) — ₦${(i.priceNGN * i.qty).toLocaleString('en-NG')}`).join('\n') + `\nSubtotal: ₦${subtotal.toLocaleString('en-NG')}`;
  const wa = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="mt-6 grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="card p-5">
          {items.map(i => (
            <div key={i.sku} className="flex items-center gap-4 py-3 border-b last:border-b-0">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-zinc-100">
                <SmartImage src={i.img} alt={i.name} fill className="object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{i.name}</p>
                <p className="text-xs text-zinc-500">SKU: {i.sku}</p>
                <p className="text-sm">{NGN(i.priceNGN)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="btn-outline" onClick={() => setQty(i.sku, Math.max(1, i.qty - 1))}>−</button>
                <span className="w-8 text-center">{i.qty}</span>
                <button className="btn-outline" onClick={() => setQty(i.sku, i.qty + 1)}>+</button>
              </div>
              <button className="btn-outline" onClick={() => remove(i.sku)}>Remove</button>
            </div>
          ))}
          <button className="btn-outline mt-4" onClick={clear}>Clear cart</button>
        </div>
        <div className="card p-5 h-max">
          <p className="font-semibold">Order Summary</p>
          <div className="mt-3 flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-bold">{NGN(subtotal)}</span>
          </div>
          <a href={wa} target="_blank" className="btn-primary w-full justify-center mt-5">Checkout via WhatsApp</a>
          <p className="text-xs text-zinc-500 mt-2">We’ll confirm delivery fees and timelines.</p>
        </div>
      </div>
    </div>
  );
}
