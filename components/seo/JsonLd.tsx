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
      // must be a string:
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
    /** Optional base URL to absolutize logo */
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
    addressCountry?: string // 'NG'
    telephone?: string
    email?: string
    image?: string // absolute or '/path'
    openingHours?: string // e.g. "Mo-Fr 09:00-17:00"
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
  props: Base & {
    name: string
    url: string
    /** Path to your search page with `{search_term_string}` placeholder */
    searchPath?: string // e.g. '/search?q={search_term_string}'
  }
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
    url: string // canonical URL of the post
    image?: string // absolute or '/og.jpg'
    datePublished: string // ISO
    dateModified?: string // ISO
    authorName?: string // defaults to org
    publisherName?: string // defaults to org
    publisherLogo?: string // absolute or '/og.jpg'
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
    url: string // canonical to the product
    image?: string // absolute or '/path'
    price: number | string
    priceCurrency?: 'NGN' | string
    availability?: string // schema.org URL or short e.g. "http://schema.org/InStock"
    brandName?: string
    baseUrl?: string
  }
) {
  const base = props.baseUrl || props.url
  const data = clean({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    sku: props.sku,
    image: props.image ? [abs(props.image, base)] : undefined,
    brand: props.brandName ? { '@type': 'Brand', name: props.brandName } : undefined,
    offers: clean({
      '@type': 'Offer',
      url: props.url,
