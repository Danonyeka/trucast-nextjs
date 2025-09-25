'use client';

import Script from 'next/script';

type Base = { id?: string };

export function OrganizationLd(props: Base & {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: props.name,
    url: props.url,
    logo: props.logo,
    sameAs: props.sameAs || [],
  };
  return (
    <Script
      id={props.id || 'org-ld'}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessLd(props: Base & {
  name: string;
  url: string;
  streetAddress: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string; // e.g. 'NG'
  telephone?: string;
  email?: string;
  image?: string;
  openingHours?: string; // e.g. "Mo-Fr 09:00-17:00"
}) {
  const address: any = {
    '@type': 'PostalAddress',
    streetAddress: props.streetAddress,
    addressLocality: props.addressLocality,
    addressRegion: props.addressRegion,
    postalCode: props.postalCode,
    addressCountry: props.addressCountry,
  };

  // Remove empty fields
  Object.keys(address).forEach(k => (address as any)[k] == null && delete (address as any)[k]);

  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: props.name,
    url: props.url,
    email: props.email,
    telephone: props.telephone,
    image: props.image,
    address,
  };
  if (props.openingHours) data.openingHours = [props.openingHours];

  Object.keys(data).forEach(k => data[k] == null && delete data[k]);

  return (
    <Script
      id={props.id || 'localbusiness-ld'}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostingLd(props: Base & {
  headline: string;
  description: string;
  url: string;          // canonical URL of the post
  image?: string;       // absolute or site-root path (e.g. '/og.jpg')
  datePublished: string; // ISO string: '2025-09-10'
  dateModified?: string; // ISO string
  authorName?: string;   // 'Trucast Nigeria' (defaults to org)
  publisherName?: string;// 'Trucast Nigeria'
  publisherLogo?: string;// absolute or '/og.jpg'
}) {
  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.headline,
    description: props.description,
    mainEntityOfPage: props.url,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    image: props.image,
    author: {
      '@type': 'Organization',
      name: props.authorName || props.publisherName || 'Trucast Nigeria',
    },
    publisher: {
      '@type': 'Organization',
      name: props.publisherName || 'Trucast Nigeria',
      logo: props.publisherLogo ? {
        '@type': 'ImageObject',
        url: props.publisherLogo,
      } : undefined,
    },
  };

  // Clean undefined fields
  if (!data.publisher.logo) delete data.publisher.logo;
  Object.keys(data).forEach(k => data[k] == null && delete data[k]);

  return (
    <Script
      id={props.id || 'blogposting-ld'}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
