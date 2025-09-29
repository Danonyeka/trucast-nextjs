// app/product/[sku]/layout.tsx
import type { Metadata } from 'next'
import { catalog } from '@/lib/products'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

export async function generateMetadata(
  { params }: { params: { sku: string } }
): Promise<Metadata> {
  const p = catalog.find(x => x.slug === params.sku || x.sku === params.sku)

  const title = p ? `${p.name} | Trucast Nigeria` : 'Product | Trucast Nigeria'
  const description =
    p?.desc ||
    'Shop electrical accessories in Nigeria—premium switches, sockets, LED lighting & smart devices. Fast nationwide delivery.'
  const imgUrl = p?.img || '/og.jpg'
  const canonical = `${SITE_URL}/product/${params.sku}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title,
      description,
      type: 'website',            // ✅ FIX: Next.js doesn’t accept "product" here
      images: [{ url: imgUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imgUrl],
    },
    // If you insist on og:type=product, remove the openGraph.type above
    // and uncomment the line below to emit a custom meta tag:
    // other: { 'og:type': 'product' },
  }
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
