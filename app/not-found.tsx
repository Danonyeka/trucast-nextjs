// app/not-found.tsx  (server component)
import Link from 'next/link'

export const metadata = { title: '404 — Page not found' }

export default function NotFound() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-zinc-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn-primary">Go to Home</Link>
        <Link href="/shop" className="btn-outline">Shop</Link>
        <Link href="/contact" className="btn-outline">Contact</Link>
      </div>
    </div>
  )
}
