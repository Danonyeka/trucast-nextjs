// app/product/[sku]/layout.tsx
import type { Metadata } from 'next'
import { catalog, categoryMap } from '@/lib/products'
import { ProductLd, BreadcrumbLd } from '@/components/seo/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

export async function generateMetadata(
  { params }: { params: { sku: string } }
): Promise<Metadata> {
  const p = catalog.find(x => x.slug === params.sku || x.sku === params.sku)

  const path = `/product/${p?.slug ?? params.sku}`
  const canonical = `${SITE_URL}${path}`
  const title = p ? `${p.name} | Trucast Nigeria` : 'Product | Trucast Nigeria'
  const description =
    p?.desc ||
    'Shop electrical accessories in Nigeria—premium switches, sockets, LED lighting & smart devices. Fast nationwide delivery.'
  const imgUrl = p?.img || '/og.jpg'

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title,
      description,
      // Keep a valid OG type for Next metadata (omit "product" here)
      type: 'website',
      images: [{ url: imgUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imgUrl],
    },
    // If you really want og:type=product, remove openGraph.type above and do:
    // other: { 'og:type': 'product' },
  }
}

export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { sku: string }
}) {
  // Fetch product again for JSON-LD (cheap lookup from in-memory catalog)
  const p = catalog.find(x => x.slug === params.sku || x.sku === params.sku)

  const canonicalPath = `/product/${p?.slug ?? params.sku}`
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  const breadcrumbItems =
    p
      ? [
          { name: 'Home', item: SITE_URL },
          { name: 'Categories', item: `${SITE_URL}/categories` },
          {
            name: categoryMap[p.category] ?? p.category,
            item: `${SITE_URL}/categories/${p.category}`,
          },
          { name: p.name, item: canonicalUrl },
        ]
      : [
          { name: 'Home', item: SITE_URL },
          { name: 'Categories', item: `${SITE_URL}/categories` },
        ]

  return (
    <>
      {/* JSON-LD (SSR) */}
      {p && (
        <>
          <ProductLd
            name={p.name}
            description={p.desc}
            sku={p.sku}
            url={canonicalUrl}
            image={p.img}
            price={p.priceNGN}
            priceCurrency="NGN"
            brandName="Trucast"
            baseUrl={SITE_URL}
          />
          <BreadcrumbLd items={breadcrumbItems} />
        </>
      )}

      {children}
    </>
  )
}
