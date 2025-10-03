// app/not-found.tsx  (Server Component)
import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-zinc-600">Sorry, we couldn’t find that page.</p>
      <div className="mt-6">
        <Link className="btn-primary" href="/">Go home</Link>
      </div>
    </section>
  );
}
