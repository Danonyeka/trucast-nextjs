'use client';
import ClearCartOnMount from '@/components/cart/ClearCartOnMount';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function CheckoutSuccessPage() {
  const params = useSearchParams();
  const orderId = params.get('order') ?? params.get('ref') ?? undefined;

  return (
    <div className="container py-12">
      <ClearCartOnMount />
      <h1 className="text-2xl font-semibold">Order received 🎉</h1>
      {orderId && <p className="text-sm text-zinc-600 mt-2">Reference: {orderId}</p>}
      <p className="mt-3">We’ve sent a confirmation. Thanks for choosing Trucast!</p>
      <div className="mt-6">
        <Link href="/categories" className="btn-primary">Continue shopping</Link>
      </div>
    </div>
  );
}
