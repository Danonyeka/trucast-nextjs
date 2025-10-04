// app/product/[sku]/layout.tsx
import type { Metadata } from 'next'
import { catalog, categoryMap } from '@/lib/products'
import { ProductLd, BreadcrumbLd } from '@/components/seo/JsonLd'

export const dynamic = 'force-dynamic'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

function safeDecode(s: string) {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

function absUrl(pathOrUrl: string) {
  if (!pathOrUrl) return `${SITE_URL}/og.jpg`
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`
}

export async function generateMetadata(
  { params }: { params: { sku: string } }
): Promise<Metadata> {
  try {
    const raw = (params.sku || '').replace(/%2E/gi, '.')
    const sku = safeDecode(raw)

    const p =
      catalog.find(
        x =>
          x.sku.toLowerCase() === sku.toLowerCase() ||
          (x.slug ? x.slug.toLowerCase() : '') === sku.toLowerCase()
      ) || null

    const safeId = encodeURIComponent(p?.slug || sku).replace(/\./g, '%2E')
    const canonical = `${SITE_URL}/product/${safeId}`

    const title = p ? `${p.name} | Trucast Nigeria` : 'Product | Trucast Nigeria'
    const description = p?.desc
      ? p.desc.replace(/\s+/g, ' ').slice(0, 160)
      : 'Electrical accessories and lighting from Trucast Nigeria.'

    const ogImage = absUrl(p?.img || '/og.jpg')

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: 'Trucast Nigeria',
        type: 'website',
        images: [{ url: ogImage }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    }
  } catch {
    // Absolute fallback so metadata never throws
    const canonical = `${SITE_URL}/product/fallback`
    return {
      title: 'Product | Trucast Nigeria',
      description: 'Electrical accessories and lighting from Trucast Nigeria.',
      alternates: { canonical },
      openGraph: {
        title: 'Product | Trucast Nigeria',
        description:
          'Electrical accessories and lighting from Trucast Nigeria.',
        url: canonical,
        siteName: 'Trucast Nigeria',
        type: 'website',
        images: [{ url: `${SITE_URL}/og.jpg` }],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Product | Trucast Nigeria',
        description:
          'Electrical accessories and lighting from Trucast Nigeria.',
        images: [`${SITE_URL}/og.jpg`],
      },
    }
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

  const p =
    catalog.find(
      x =>
        x.sku.toLowerCase() === sku.toLowerCase() ||
        (x.slug ? x.slug.toLowerCase() : '') === sku.toLowerCase()
    ) || null

  const safeId = encodeURIComponent(p?.slug || sku).replace(/\./g, '%2E')
  const canonicalUrl = `${SITE_URL}/product/${safeId}`

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
            image={absUrl(p.img)}
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
