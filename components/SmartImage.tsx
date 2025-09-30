'use client'

import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  src?: string
  alt?: string
  /** if provided, only used for non-root and non-http src values */
  baseUrl?: string
  /** local placeholder shown if the image fails */
  fallbackSrc?: string
}

const PLACEHOLDER = '/images/placeholder-product.png'

const isHttp = (u?: string) => !!u && /^https?:\/\//i.test(u)

/**
 * SmartImage:
 * - leaves root-relative paths ("/images/...") alone ✅
 * - allows absolute http(s) URLs ✅
 * - optionally prefixes a baseUrl for bare paths ("images/foo.png")
 * - falls back to a local placeholder on error
 */
export default function SmartImage({
  src,
  alt = '',
  baseUrl,
  fallbackSrc = PLACEHOLDER,
  ...rest
}: Props) {
  const resolved =
    !src
      ? fallbackSrc
      : src.startsWith('/')                 // already root-relative → keep
      ? src
      : isHttp(src)                         // absolute remote → keep
      ? src
      : baseUrl
      ? `${baseUrl}${src}`                  // only prefix if baseUrl exists
      : `/${src.replace(/^\/+/, '')}`       // make it root-relative

  return (
    <Image
      src={resolved}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      onError={(e: any) => {
        try { e.currentTarget.src = fallbackSrc } catch {}
      }}
      // Local /images/* work everywhere without the optimizer:
      unoptimized={resolved.startsWith('/')}
      {...rest}
    />
  )
}
