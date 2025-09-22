'use client';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartButton(){
  const { count } = useCart();
  return (
    <Link href="/cart" className="relative btn-outline">
      Cart{count > 0 ? ` (${count})` : ''}
    </Link>
  );
}
