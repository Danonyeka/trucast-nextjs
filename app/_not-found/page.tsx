// app/_not-found/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function UnderscoreNotFoundRoute() {
  // Intentionally empty: prevents SSG failure if something links to /_not-found
  return null;
}
