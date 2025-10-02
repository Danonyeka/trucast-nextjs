// app/search/page.tsx
import type { Metadata } from 'next';
import SearchClient from './SearchClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Search | Trucast Nigeria',
  description:
    'Find switches, sockets, LED lighting, smart devices, guides and posts on Trucast Nigeria.',
  alternates: { canonical: '/search' },
};

export default function Page() {
  return <SearchClient />;
}
