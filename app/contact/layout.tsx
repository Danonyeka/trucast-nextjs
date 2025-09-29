// app/contact/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Trucast Nigeria',
  description:
    'Contact Trucast Nigeria for quotes, orders or support on electrical accessories in Nigeria—LED lighting, switches, sockets and smart devices. Call, WhatsApp or email.',
  robots: { index: true, follow: true },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
