// app/page.tsx (SERVER COMPONENT)
export const dynamic = 'force-dynamic'; // keep SSR to avoid SSG crash
export const revalidate = 0;

import type { Metadata } from 'next';
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
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function Page() {
  // Render only the client home (it includes the hero slider inside)
  return <HomeClient />;
}
