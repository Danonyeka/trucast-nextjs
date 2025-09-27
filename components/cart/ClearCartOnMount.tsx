'use client';
import { useEffect, useRef } from 'react';
import { useCart } from '@/components/cart/CartContext';

export default function ClearCartOnMount() {
  const { clear, ready } = useCart();
  const ran = useRef(false);

  useEffect(() => {
    if (ready && !ran.current) {
      clear();            // wipes localStorage + context
      ran.current = true; // ensure it runs once
    }
  }, [ready, clear]);

  return null;
}
