// components/SmartImage.tsx
'use client'

import Image, { ImageProps } from 'next/image'

function normalizeProductImagePath(src: string): string {
  const dir = '/images/products/'
  if (!src.startsWith(dir)) return src

  // Split off any query/hash
  const q = src.indexOf('?')
  const h = src.indexOf('#')
  const cut = [q, h].filter(i => i >= 0).reduce((m, i) => Math.min(m, i), Infinity)
  const head = cut === Infinity ? src : src.slice(0, cut)
  const tail = cut === Infinity ? ''   : src.slice(cut)

  // Decode once, remove whitespace, fix case only for the filename
  let filename = decodeURIComponent(head.slice(dir.length)).replace(/\s+/g, '')
  const dot = filename.lastIndexOf('.')
  if (dot > 0) {
    const name = filename.slice(0, dot).toUpperCase()
    const ext  = filename.slice(dot + 1).toLowerCase()
    filename = `${name}.${ext}`
  } else {
    filename = filename.toUpperCase()
  }

  return dir + filename + tail
}

export default function SmartImage(props: ImageProps) {
  const { src, sizes, ...rest } = props
  const isLocal = typeof src === 'string' && src.startsWith('/')

  const fixedSrc =
    typeof src === 'string' ? normalizeProductImagePath(src) : (src as any)

  return (
    <Image
      unoptimized={isLocal}
      sizes={('fill' in rest && (rest as any).fill && !sizes) ? '100vw' : sizes}
      src={fixedSrc}
      {...rest}
    />
  )
}
