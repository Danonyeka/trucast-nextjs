// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container py-16 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-zinc-600">
        The page you’re looking for doesn’t exist. Try these popular links:
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link className="btn" href="/">Home</Link>
        <Link className="btn" href="/categories">Shop by Category</Link>
        <Link className="btn" href="/wholesale">Wholesale</Link>
        <Link className="btn" href="/contact">Contact</Link>
      </div>
    </section>
  )
}
