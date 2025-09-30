// components/SmartImage.tsx
'use client'

import Image, { ImageProps } from 'next/image'

export default function SmartImage(props: ImageProps) {
  const { src, sizes, ...rest } = props
  const isLocal = typeof src === 'string' && src.startsWith('/')

  return (
    <Image
      // If it's a local file under /public, render as a plain <img> under the hood.
      // This avoids optimizer/config issues while keeping the same API everywhere.
      unoptimized={isLocal}
      // Next/Image with `fill` needs a sizes hint; provide a sensible default.
      sizes={('fill' in rest && rest.fill && !sizes) ? '100vw' : sizes}
      src={src}
      {...rest}
    />
  )
}
