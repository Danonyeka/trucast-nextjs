import Link from 'next/link'
import SmartImage from '@/components/SmartImage'
import { categoryMap, byCategory } from '@/lib/products'
import AddToCartButton from '@/components/cart/AddToCartButton'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryMap[params.slug]
  if (!category) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link href="/categories" className="link mt-4 inline-block">← Back to Categories</Link>
      </div>
    )
  }

  const items = byCategory(params.slug)

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">{category}</h1>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((p) => (
          <div key={p.sku} className="card overflow-hidden">
            <div className="relative aspect-square bg-zinc-100">
              <SmartImage
                src={p.img}
                alt={p.alt ?? p.name}
                fill
                className="object-contain"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-zinc-500">SKU: {p.sku}</p>
              <p className="text-sm text-zinc-600 mt-1">{p.desc}</p>

              <div className="mt-3 flex items-center justify-between">
                <Link href={`/product/${p.sku}`} className="link">View</Link>
                <AddToCartButton id={p.sku} name={p.name} priceNGN={p.priceNGN} image={p.img} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
