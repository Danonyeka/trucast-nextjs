'use client';
import { useState } from 'react';
import { site } from '@/lib/site';

export default function ProductEnquiry() {
  const [items, setItems] = useState('');
  const [location, setLocation] = useState('');
  return <form className="card p-6 space-y-4" onSubmit={event => {
    event.preventDefault();
    const message = `Hello Trucast, I would like a product quote.\nProducts / SKUs and quantities: ${items.trim()}\nDelivery town / city: ${location.trim()}`;
    window.location.href = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  }}>
    <h3 className="text-xl font-semibold">Prepare your product enquiry</h3>
    <label className="block text-sm font-medium" htmlFor="enquiry-items">Products / SKUs and quantities</label>
    <textarea id="enquiry-items" required maxLength={2000} value={items} onChange={e => setItems(e.target.value)} className="w-full rounded-lg border border-zinc-300 p-3" placeholder="e.g. S06 switches — 20 units" rows={3} />
    <label className="block text-sm font-medium" htmlFor="enquiry-location">Delivery town or city</label>
    <input id="enquiry-location" required maxLength={120} autoComplete="address-level2" value={location} onChange={e => setLocation(e.target.value)} className="w-full rounded-lg border border-zinc-300 p-3" placeholder="e.g. Port Harcourt" />
    <button className="btn-primary" type="submit">Continue to WhatsApp ↗</button>
    <p className="text-xs text-zinc-600">Opens a draft for you to review and send in WhatsApp. This form does not save your details or place an order.</p>
  </form>;
}
