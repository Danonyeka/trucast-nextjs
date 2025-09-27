'use client';

import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { readJSON, writeJSON } from '@/lib/storage';

// Allow either price or priceNGN (both NGN units)
export type CartItem = {
  id: string;
  name: string;
  qty: number;
  // Either of these may exist based on your product model:
  price?: number;      // NGN
  priceNGN?: number;   // NGN
  image?: string;
  variant?: string;
};

// Helper to read unit price regardless of which field is present
function unitPrice(i: CartItem) {
  // prefer `price`, fall back to `priceNGN`, else 0
  return (typeof i.price === 'number' ? i.price : i.priceNGN) ?? 0;
}

type CartState = { items: CartItem[] };
type Action =
  | { type: 'ADD'; item: CartItem }
  | { type: 'REMOVE'; id: string; variant?: string }
  | { type: 'SET_QTY'; id: string; variant?: string; qty: number }
  | { type: 'CLEAR' };

const CART_KEY = 'trucast_cart_v1';

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD': {
      const items = [...state.items];
      const idx = items.findIndex(
        (i) => i.id === action.item.id && i.variant === action.item.variant
      );
      if (idx > -1) {
        items[idx] = { ...items[idx], qty: items[idx].qty + action.item.qty };
      } else {
        items.push(action.item);
      }
      return { items };
    }
    case 'SET_QTY': {
      const items = state.items
        .map((i) =>
          i.id === action.id && i.variant === action.variant ? { ...i, qty: action.qty } : i
        )
        .filter((i) => i.qty > 0);
      return { items };
    }
    case 'REMOVE': {
      return {
        items: state.items.filter((i) => !(i.id === action.id && i.variant === action.variant)),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

type CartCtx = {
  state: CartState;
  /** direct convenience accessors */
  items: CartItem[];
  subtotal: number; // sum of unitPrice * qty (NGN)
  add: (item: CartItem) => void;
  setQty: (id: string, qty: number, variant?: string) => void;
  remove: (id: string, variant?: string) => void;
  clear: () => void;
  ready: boolean;
  count: number;
};

const Context = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // 1) Re-hydrate once on the client
  useEffect(() => {
    const saved = readJSON<CartState>(CART_KEY, { items: [] });
    if (saved.items?.length) {
      dispatch({ type: 'CLEAR' });
      for (const item of saved.items) dispatch({ type: 'ADD', item });
    }
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2) Persist on every change
  useEffect(() => {
    if (!ready) return; // avoid overwriting with empty state during first render
    writeJSON(CART_KEY, state);
  }, [state, ready]);

  // 3) Keep tabs in sync
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === CART_KEY && e.newValue) {
        const latest = readJSON<CartState>(CART_KEY, { items: [] });
        dispatch({ type: 'CLEAR' });
        for (const item of latest.items) dispatch({ type: 'ADD', item });
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const api = useMemo<CartCtx>(() => {
    const items = state.items;
    const count = items.reduce((n, i) => n + i.qty, 0);
    // NGN subtotal using either price or priceNGN
    const subtotal = items.reduce((sum, i) => sum + unitPrice(i) * i.qty, 0);

    return {
      state,
      items,
      subtotal,
      add: (item) => dispatch({ type: 'ADD', item }),
      setQty: (id, qty, variant) => dispatch({ type: 'SET_QTY', id, qty, variant }),
      remove: (id, variant) => dispatch({ type: 'REMOVE', id, variant }),
      clear: () => dispatch({ type: 'CLEAR' }),
      ready,
      count,
    };
  }, [state, ready]);

  return <Context.Provider value={api}>{children}</Context.Provider>;
}

export function useCart() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error('useCart must be used within <CartProvider>');
  return ctx;
}

// (Optional) currency formatter you can import where needed
export function formatNGN(n: number) {
  return n.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });
}
