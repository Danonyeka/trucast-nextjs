// app/_not-found/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { redirect } from 'next/navigation';

export default function LegacyUnderscoreNotFound() {
  // Anything hitting /_not-found goes somewhere safe
  redirect('/'); // or '/categories'
}
