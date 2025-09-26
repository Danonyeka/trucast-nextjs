import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

type Props = Omit<ImageProps, 'alt'> & {
  alt: string;
  className?: string;
};

export default function SmartImage({ className, ...props }: Props) {
  // Defaults that are safe: lazy below-the-fold, WebP/AVIF via next/image
  return (
    <Image
      {...props}
      className={clsx(className)}
      // if you always pass width/height or use static import, CLS is avoided
      // Next will auto-lazy for non-priority images
    />
  );
}
