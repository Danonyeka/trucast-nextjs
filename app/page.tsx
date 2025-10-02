// app/page.tsx (SERVER COMPONENT)
import type { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trucast-ng.com'),
  title: 'Trucast Nigeria — Electrical Accessories, LED Lighting & Smart Devices',
  description:
    'Shop electrical accessories in Nigeria—premium switches, sockets, LED lighting & smart devices. Retail & wholesale, fast nationwide delivery, SON compliant.',
  alternates: { canonical: 'https://www.trucast-ng.com/' },
  openGraph: {
    title: 'Trucast Nigeria — Electrical Accessories, LED Lighting & Smart Devices',
    description:
      'Shop electrical accessories in Nigeria—premium switches, sockets, LED lighting & smart devices. Retail & wholesale, fast nationwide delivery, SON compliant.',
    url: 'https://www.trucast-ng.com/',
    siteName: 'Trucast Nigeria',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trucast Nigeria — Premium electrical accessories & smart devices',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trucast Nigeria — Electrical Accessories, LED Lighting & Smart Devices',
    description:
      'Shop electrical accessories in Nigeria—premium switches, sockets, LED lighting & smart devices. Retail & wholesale, fast nationwide delivery, SON compliant.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
};

export default function Page() {
  return (
    <>
      {/* Hero slideshow (client) */}
      <div className="mx-auto max-w-7xl px-4 pt-4 md:pt-6">
        <HeroSlider />
      </div>

      {/* Rest of homepage (client) */}
      <HomeClient />
    </>
  );
}
