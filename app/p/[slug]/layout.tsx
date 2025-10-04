import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Product | Trucast Nigeria',
  description: 'Electrical accessories and lighting from Trucast Nigeria.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
