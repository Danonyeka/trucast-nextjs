// app/p/[slug]/error.tsx
'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Product route error:', error); }, [error]);
  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold">Sorry, something went wrong.</h1>
      {error?.digest && <p className="mt-2 text-sm text-zinc-600">Ref: <code>{error.digest}</code></p>}
      <button className="btn mt-6" onClick={() => reset()}>Try again</button>
    </div>
  );
}
