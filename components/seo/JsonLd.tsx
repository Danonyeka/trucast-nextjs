// components/seo/JsonLd.tsx
// Server-friendly JSON-LD helpers (no 'use client', no next/script)

type Base = { id?: string }
type Json = Record<string, unknown> | Array<Record<string, unknown>>

/** Render raw JSON-LD (SSR-safe) */
export default function JsonLd({ id, data }: { id?: string; data: Json }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/* ---------------------------- internal helpers ---------------------------- */

const isHttp = (u?: string) => !!u && /^https?:\/\//i.test(u)

/** Absolutize a URL if it starts with '/' */
const abs = (u: string | undefined, baseUrl?: string) =>
  !u ? undefined : isHttp(u) ? u : baseUrl ? `${baseUrl}${u}` : u

/** Remove only null/undefined; keep 0/false/'' */
function clean<T extends Record<string, any>>(obj: T): T {
  Object.keys(obj).forEach((k) => {
    const v = obj[k]
    if (v === null || v === undefined) delete obj[k]
  })
  return obj
}

/* --------------------------------- ORG LD -------------------------------- */

export function OrganizationLd(
  props: Base & {
    name: string
    url: string
    logo?: string
    sameAs?: string[]
    baseUrl?: string
  }
) {
  const data = clean({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: props.name,
    url: props.url,
    logo: abs(props.logo, props.baseUrl || props.url),
    sameAs: (props.sameAs || []).filter(Boolean),
  })
  return <JsonLd id={props.id || 'org-ld'} data={data} />
}

/* ---------------------------- LOCAL BUSINESS LD --------------------------- */

export function LocalBusinessLd(
  props: Base & {
    name: string
    url: string
    streetAddress: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
    telephone?: string
    email?: string
    image?: string
    openingHours?: string
    baseUrl?: string
  }
) {
  const address = clean({
    '@type': 'PostalAddress',
    streetAddress: props.streetAddress,
    addressLocality: props.addressLocality,
    addressRegion: props.addressRegion,
    postalCode: props.postalCode,
    addressCountry: props.addressCountry,
  })

  const data = clean({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: props.name,
    url: props.url,
    email: props.email,
    telephone: props.telephone,
    image: abs(props.image, props.baseUrl || props.url),
    address,
    openingHours: props.openingHours ? [props.openingHours] : undefined,
  })

  return <JsonLd id={props.id || 'localbusiness-ld'} data={data} />
}

/* ------------------------------ WEBSITE LD ------------------------------- */

export function WebSiteLd(
  props: Base & { name: string; url: string; searchPath?: string }
) {
  const data = clean({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: props.name,
    url: props.url,
    potentialAction: props.searchPath
      ? {
          '@type': 'SearchAction',
          target: `${props.url}${props.searchPath}`,
          'query-input': 'required name=search_term_string',
        }
      : undefined,
  })
  return <JsonLd id={props.id || 'website-ld'} data={data} />
}

/* ------------------------------ BLOGPOSTING LD --------------------------- */

export function BlogPostingLd(
  props: Base & {
    headline: string
    description: string
    url: string
    image?: string
    datePublished: string
    dateModified?: string
    authorName?: string
    publisherName?: string
    publisherLogo?: string
    baseUrl?: string
  }
) {
  const base = props.baseUrl || props.url
  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.headline,
    description: props.description,
    mainEntityOfPage: props.url,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    image: abs(props.image, base),
    author: {
      '@type': 'Organization',
      name: props.authorName || props.publisherName || 'Trucast Nigeria Limited',
    },
    publisher: {
      '@type': 'Organization',
      name: props.publisherName || 'Trucast Nigeria Limited',
      logo: props.publisherLogo
        ? { '@type': 'ImageObject', url: abs(props.publisherLogo, base) }
        : undefined,
    },
  }
  if (!data.publisher.logo) delete data.publisher.logo
  clean(data)
  return <JsonLd id={props.id || 'blogposting-ld'} data={data} />
}

/* ------------------------------- PRODUCT LD ------------------------------ */

export function ProductLd(
  props: Base & {
    name: string
    description?: string
    sku?: string
    url: string
    image?: string
    price: number | string
    priceCurrency?: 'NGN' | string
    availability?: string
    brandName?: string
    baseUrl?: string
  }
) {
  const base = props.baseUrl || props.url

  // Robust price + availability handling
  const priceNum =
    typeof props.price === 'string' ? Number(props.price) : props.price
  const hasValidPrice =
    typeof priceNum === 'number' && isFinite(priceNum) && priceNum > 0

  const resolvedAvailability =
    props.availability ||
    (hasValidPrice
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock')

  const data = clean({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    sku: props.sku,
    image: props.image ? [abs(props.image, base)] : undefined,
    brand: props.brandName
      ? { '@type': 'Brand', name: props.brandName }
      : undefined,
    offers: clean({
      '@type': 'Offer',
      url: props.url,
      priceCurrency: props.priceCurrency || 'NGN',
      price: hasValidPrice ? priceNum : undefined,
      availability: resolvedAvailability,
      seller: { '@type': 'Organization', name: 'Trucast Nigeria Limited' },
    }),
  })

  return <JsonLd id={props.id || 'product-ld'} data={data} />
}

/* ---------------------------- BREADCRUMB LIST LD ------------------------- */

export function BreadcrumbLd(
  props: Base & { items: Array<{ name: string; item: string }> }
) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: props.items.map((x, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: x.name,
      item: x.item,
    })),
  }
  return <JsonLd id={props.id || 'breadcrumb-ld'} data={data} />
}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
/>
