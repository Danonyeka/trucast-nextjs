'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useCart } from '@/components/cart/CartContext';

export default function SuccessClient() {
  const params = useSearchParams();
  const orderId = params.get('order') ?? params.get('ref') ?? undefined;

  // Clear cart once user lands here
  const { clear } = useCart();
  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <>
      <h1 className="text-2xl font-semibold">Order received 🎉</h1>
      {orderId && (
        <p className="text-sm text-zinc-600 mt-2">Reference: {orderId}</p>
      )}
      <p className="mt-3">We’ve sent a confirmation. Thanks for choosing Trucast!</p>
      <div className="mt-6">
        <Link href="/categories" className="btn-primary">
          Continue shopping
        </Link>
      </div>
    </>
  );
}
