// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-zinc-600">Sorry — we can’t find that page.</p>
      <Link href="/" className="btn-primary mt-6 inline-block">Go home</Link>
    </div>
  );
}
