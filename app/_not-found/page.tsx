// app/_not-found/page.tsx
// Server component (no "use client")
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { redirect } from 'next/navigation';

export default function LegacyUnderscoreNotFound() {
  // Send anyone hitting /_not-found to the homepage (or change to '/categories')
  redirect('/');
}
