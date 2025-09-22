'use client';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  width?: number;
  height?: number;
};

export default function SmartImage({ src, alt, fill, className, width, height }: Props) {
  const isSvg = src?.toLowerCase().endsWith('.svg');
  if (isSvg) {
    if (fill) {
      return <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-contain ${className || ''}`} />;
    }
    return <img src={src} alt={alt} className={className} width={width} height={height} />;
  }
  if (fill) {
    return <Image src={src} alt={alt} fill className={className} />;
  }
  return <Image src={src} alt={alt} width={width || 800} height={height || 800} className={className} />;
}
