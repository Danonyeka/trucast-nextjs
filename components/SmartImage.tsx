// components/SmartImage.tsx
'use client'

import Image, { ImageProps } from 'next/image'

export default function SmartImage(props: ImageProps) {
  const { src, sizes, ...rest } = props

  // Local path? (served from /public)
  const isLocal = typeof src === 'string' && src.startsWith('/')

  // --- Temporary safety: normalize product image filenames ---
  // We saw requests going to lower-cased paths like /images/products/trc-....png.
  // All real files in /public/images/products are UPPERCASE (TRC-....png),
  // and one file had an accidental space in the name.
  let fixedSrc = src
  if (typeof src === 'string' && src.startsWith('/images/products/')) {
    const dir = '/images/products/'
    const qIndex = src.indexOf('?')
    const base = qIndex === -1 ? src : src.slice(0, qIndex)
    const query = qIndex === -1 ? '' : src.slice(qIndex)

    // Take the filename part and fix common issues:
    // 1) Force uppercase (matches files in repo)
    // 2) Remove stray spaces in the filename (e.g. "TRC-SW-MS- MINDU.png")
    const filename = base.slice(dir.length).toUpperCase().replace(/\s+/g, '')
    fixedSrc = dir + filename + query
  }

  return (
    <Image
      // If it's a local file under /public, render as a plain <img>.
      // (prevents optimizer/CDN from doing anything surprising)
      unoptimized={isLocal}
      // Next/Image with `fill` needs a sizes hint; provide a sensible default.
      sizes={('fill' in rest && rest.fill && !sizes) ? '100vw' : sizes}
      src={fixedSrc as any}
      {...rest}
    />
  )
}
