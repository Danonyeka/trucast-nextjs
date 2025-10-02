// app/cart/page.tsx
import type { Metadata } from 'next';
import CartClient from './CartClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Your Cart | Trucast Nigeria',
  description:
    'Review items in your cart and proceed to checkout on Trucast Nigeria.',
  alternates: { canonical: '/cart' },
};

export default function Page() {
  return <CartClient />;
}
