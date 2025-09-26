import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  title: string;
  image: StaticImageData | string; // <— allow static imports too
};

export default function CategoryCard({ href, title, image }: Props) {
  return (
    <Link href={href} className="block group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          loading="lazy"
          quality={70}
        />
      </div>
      <p className="mt-2 text-sm font-medium">{title}</p>
    </Link>
  );
}
