// components/SmartImage.tsx
'use client'

import Image, { ImageProps } from 'next/image'

export default function SmartImage(props: ImageProps) {
  // No URL rewriting, no default `fill`, no onError tricks.
  // Just pass exactly what callers specify.
  return <Image {...props} />
}
