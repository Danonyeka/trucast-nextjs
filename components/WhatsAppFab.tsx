// components/WhatsAppFab.tsx
'use client'

import { site } from '@/lib/site'
import { track } from '@/lib/analytics'

export default function WhatsAppFab() {
  if (!site?.waLink) return null

  return (
    <a
      href={site.waLink}
      target="_blank"
      rel="noopener"
      onClick={() => track?.('whatsapp_click', { place: 'fab' })}
      aria-label="Chat with Trucast on WhatsApp"
      className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6 grid place-items-center rounded-full h-14 w-14 bg-green-500 text-white shadow-lg hover:scale-105 active:scale-95 transition"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.57 5.9L0 24l6.27-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.38l-.36-.21-3.73.98.99-3.64-.23-.37A9.94 9.94 0 1122 12c0 5.51-4.49 10-10 10zm5.28-7.45c-.29-.15-1.74-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.95 1.14-.18.2-.35.22-.64.07-.29-.15-1.2-.44-2.3-1.41-.85-.75-1.43-1.68-1.61-1.97-.18-.29-.02-.45.13-.6.13-.13.29-.35.44-.53.15-.18.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.45 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.16 5.02 4.43.7.3 1.24.47 1.66.6.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.99-1.4.25-.69.25-1.28.18-1.4-.07-.12-.26-.2-.55-.35z"/>
      </svg>
    </a>
  )
}
