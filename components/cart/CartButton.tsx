'use client';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartButton() {
  const { count, ready } = useCart();
  const safeCount = ready ? count : 0; // avoid mismatch
  return (
    <Link href="/cart" className="btn-outline">
      Cart {safeCount > 0 && <span>({safeCount})</span>}
    </Link>
  );
}
