import Image, { type ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'alt'> & {
  alt: string;
  className?: string;
};

export default function SmartImage({ className = '', ...props }: Props) {
  // Keep it simple: pass className straight through, no clsx needed
  return <Image {...props} className={className} />;
}
