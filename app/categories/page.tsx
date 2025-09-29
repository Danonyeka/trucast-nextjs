// app/categories/page.tsx
import Link from 'next/link'
import type { Metadata } from 'next'
import { categories } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop by Category | Trucast Nigeria',
  description:
    'Shop by category: electrical accessories in Nigeria—switches, sockets, LED lighting, smart devices and more. Secure checkout and fast nationwide delivery.',
}

export default function CategoriesIndex() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Shop by Category</h1>
      <p className="mt-2 text-zinc-600">Browse our most requested ranges.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className="card p-5 hover:shadow-md transition"
            aria-label={`Open ${c.title} category`}
          >
            <p className="font-semibold">{c.title}</p>
            <span className="link mt-2 inline-block">Open {c.title} →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
