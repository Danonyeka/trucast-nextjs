// app/product/[sku]/layout.tsx
import type { Metadata } from 'next'
import { catalog, categoryMap } from '@/lib/products'
import { ProductLd, BreadcrumbLd } from '@/components/seo/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

function safeDecode(s: string) {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

export async function generateMetadata(
  { params }: { params: { sku: string } }
): Promise<Metadata> {
  // Normalize the route param (handle %2E for dots and decoding)
  const raw = (params.sku || '').replace(/%2E/gi, '.')
  const sku = safeDecode(raw)

  const p = catalog.find(
    x =>
      x.sku.toLowerCase() === sku.toLowerCase() ||
      (x.slug ? x.slug.toLowerCase() : '') === sku.toLowerCase()
  )

  // Build a canonical URL that *always* escapes dots to avoid host/CDN quirks
  const canonicalPath = `/product/${encodeURIComponent(p?.slug || sku).replace(/\./g, '%2E')}`
  const canonical = `${SITE_URL}${canonicalPath}`

  const title = p ? `${p.name} | Trucast Nigeria` : 'Product | Trucast Nigeria'
  const description = p?.desc
    ? p.desc.replace(/\s+/g, ' ').slice(0, 160)
    : 'Electrical accessories and lighting from Trucast Nigeria.'

  const imgUrl = p?.img || '/og.jpg'

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Trucast Nigeria',
      // Keep "website" to satisfy Next metadata typing
      type: 'website',
      images: [{ url: imgUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imgUrl],
    },
  }
}

export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { sku: string }
}) {
  const raw = (params.sku || '').replace(/%2E/gi, '.')
  const sku = safeDecode(raw)

  const p = catalog.find(
    x =>
      x.sku.toLowerCase() === sku.toLowerCase() ||
      (x.slug ? x.slug.toLowerCase() : '') === sku.toLowerCase()
  )

  const canonicalPath = `/product/${encodeURIComponent(p?.slug || sku).replace(/\./g, '%2E')}`
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  const breadcrumbItems = [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: categoryMap[p?.category || ''] || 'Products', item: `${SITE_URL}/categories` },
    { name: p?.name || sku, item: canonicalUrl },
  ]

  return (
    <>
      {p && (
        <>
          <ProductLd
            id="product-ld"
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
