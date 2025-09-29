// app/page.tsx (SERVER COMPONENT)
import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
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
    images: [{ url: '/og.jpg' }],
    locale: 'en_NG',
    type: 'website',
  },
}

export default function Page() {
  return <HomeClient />
}
