import { Suspense } from 'react';
import SuccessClient from './success-client';

// This page depends on runtime URL params, so don't pre-render it.
export const dynamic = 'force-dynamic'; // alternatively: export const revalidate = 0;

export default function CheckoutSuccessPage() {
  return (
    <div className="container py-12">
      <Suspense fallback={<p className="text-sm text-zinc-500">Finalizing…</p>}>
        <SuccessClient />
      </Suspense>
    </div>
  );
}
