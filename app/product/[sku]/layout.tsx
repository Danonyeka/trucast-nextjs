// app/product/[sku]/layout.tsx
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

// Keep a static fallback title; do NOT compute metadata here.
export const metadata: Metadata = {
  title: 'Product | Trucast Nigeria',
  description:
    'Electrical accessories and lighting from Trucast Nigeria.',
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No JSON-LD or product lookups here (avoids SSR crashes).
  return <>{children}</>;
}
