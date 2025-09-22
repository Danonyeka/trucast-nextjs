'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/lib/products';

type CartItem = { sku: string; name: string; priceNGN: number; img: string; qty: number };
type CartState = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (sku: string) => void;
  setQty: (sku: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartCtx = createContext<CartState | null>(null);
const KEY = 'trucast.cart.v1';

function safeLoad(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (Array.isArray(data)) return data as CartItem[];
    return [];
  } catch {
    return [];
  }
}

function safeSave(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try { window.localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => { setItems(safeLoad()); }, []);
  useEffect(() => { safeSave(items); }, [items]);

  function add(p: Product, qty = 1) {
    setItems(prev => {
      const i = prev.findIndex(x => x.sku === p.sku);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { sku: p.sku, name: p.name, priceNGN: p.priceNGN, img: p.img, qty }];
    });
  }
  function remove(sku: string) { setItems(prev => prev.filter(x => x.sku !== sku)); }
  function setQty(sku: string, qty: number) {
    setItems(prev => prev.map(x => x.sku === sku ? { ...x, qty: Math.max(1, qty) } : x));
  }
  function clear() { setItems([]); safeSave([]); }

  const count = items.reduce((a, b) => a + b.qty, 0);
  const subtotal = items.reduce((a, b) => a + b.qty * b.priceNGN, 0);
  const value = useMemo(() => ({ items, add, remove, setQty, clear, count, subtotal }), [items]);
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
