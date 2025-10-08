import Link from 'next/link';
import SmartImage from '@/components/SmartImage';
import type { StaticImageData } from 'next/image';

type Props = {
  href: string;
  title: string;
  image: StaticImageData | string;       // primary image
  hoverImage?: StaticImageData | string; // optional alternate image shown on hover/focus
  subtitle?: string;                     // optional small text under title
  count?: number;                        // optional items count (e.g., 24 products)
  badge?: string;                        // optional small badge (e.g., "New", "Sale")
};

export default function CategoryCard({
  href,
  title,
  image,
  hoverImage,
  subtitle,
  count,
  badge,
}: Props) {
  const metaLine =
    typeof count === 'number'
      ? `${count} item${count === 1 ? '' : 's'}`
      : subtitle;

  // Only treat hoverImage as present when it's a real, non-empty value
  const hasHover =
    (typeof hoverImage === 'string' && hoverImage.trim().length > 0) ||
    (!!hoverImage && typeof hoverImage !== 'string');

  return (
    <Link
      href={href}
      aria-label={title}
      className="group block focus:outline-none"
    >
      <div
        className="
          relative aspect-[4/3] overflow-hidden rounded-xl
          border border-zinc-200 bg-zinc-50
          shadow-sm transition
          hover:shadow-md focus-visible:shadow-md
          focus-visible:ring-4 focus-visible:ring-emerald-200
        "
      >
        {/* Primary image */}
        <SmartImage
          src={image}
          alt={title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          className={`object-cover transition-opacity duration-300 ${
            hasHover ? 'opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0' : ''
          }`}
          loading="lazy"
          quality={70}
          priority={false}
        />

        {/* Hover/Fallback image (only rendered when we truly have one) */}
        {hasHover && (
          <SmartImage
            src={hoverImage as any}
            alt={`${title} alternate view`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            loading="lazy"
            quality={70}
          />
        )}

        {/* Subtle zoom layer */}
        <div className="pointer-events-none absolute inset-0 scale-100 transition-transform duration-300 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]" />

        {/* Optional badge */}
        {badge && (
          <span
            className="
              absolute left-2 top-2 z-10 rounded-full bg-black/60 px-2.5 py-1
              text-xs font-medium text-white backdrop-blur
            "
          >
            {badge}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="mt-2">
        <p className="text-sm font-medium text-zinc-900">{title}</p>
        {metaLine && <p className="text-xs text-zinc-500">{metaLine}</p>}
      </div>
    </Link>
  );
}
