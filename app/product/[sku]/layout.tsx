// app/product/[sku]/layout.tsx
import type { Metadata } from 'next'
import { catalog } from '@/lib/products'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

const clamp = (s: string, max = 160) =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…'

export async function generateMetadata(
  { params }: { params: { sku: string } }
): Promise<Metadata> {
  const p = catalog.find(x => x.sku === params.sku)

  if (!p) {
    // Let 404 page be indexable if you prefer; most keep it noindex
    return {
      title: 'Product not found | Trucast Nigeria',
      robots: { index: false, follow: true },
      description:
        'This product could not be found on Trucast Nigeria.',
    }
  }

  const description = clamp(
    (p.desc && `${p.name} — ${p.desc}`) ||
      `${p.name} — premium electrical accessory in Nigeria. Shop retail or wholesale with fast delivery and SON-compliant quality.`
  )

  return {
    title: `${p.name} | Trucast Nigeria`,
    description,
    alternates: {
      canonical: `${SITE_URL}/product/${p.sku}`,
    },
    openGraph: {
      title: `${p.name} | Trucast Nigeria`,
      description,
      url: `${SITE_URL}/product/${p.sku}`,
      images: p.img ? [{ url: p.img }] : undefined,
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${p.name} | Trucast Nigeria`,
      description,
      images: p.img ? [p.img] : undefined,
    },
  }
}

// Inject Product structured data (helps rich results)
export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { sku: string }
}) {
  const p = catalog.find(x => x.sku === params.sku)
  const price =
    (p as any)?.priceNGN ?? (p as any)?.price ?? undefined

  return (
    <>
      {p && (
        <script
          type="application/ld+json"
          // Minimal, safe Product schema. Expand with rating/brand if available.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: p.name,
              sku: p.sku,
              description: p.desc,
              image: p.img ? new URL(p.img, SITE_URL).toString() : undefined,
              offers: price
                ? {
                    '@type': 'Offer',
                    priceCurrency: 'NGN',
                    price: String(price),
                    availability: 'https://schema.org/InStock',
                    url: `${SITE_URL}/product/${p.sku}`,
                  }
                : undefined,
            }),
          }}
        />
      )}
      {children}
    </>
  )
}
