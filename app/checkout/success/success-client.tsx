'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useCart } from '@/components/cart/CartContext';
import { useToast } from '@/components/ui/Toast';

export default function SuccessClient() {
  const params = useSearchParams();
  const orderId = params.get('order') ?? params.get('ref') ?? undefined;

  const { clear } = useCart();
  const toast = useToast();
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    clear(); // safe even if already cleared on WA click
    toast('Cart cleared — order received 🎉');
    ran.current = true;
  }, [clear, toast]);

  return (
    <>
      <h1 className="text-2xl font-semibold">Order received 🎉</h1>
      {orderId && <p className="text-sm text-zinc-600 mt-2">Reference: {orderId}</p>}
      <p className="mt-3">We’ve sent a confirmation. Thanks for choosing Trucast!</p>
      <div className="mt-6">
        <Link href="/categories" className="btn-primary">Continue shopping</Link>
      </div>
    </>
  );
}
