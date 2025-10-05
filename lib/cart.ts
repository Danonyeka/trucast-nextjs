// lib/cart.ts
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem = {
  sku: string;
  name: string;
  priceNGN: number;
  img: string;
  qty: number;
};

type CartState = {
  items: Record<string, CartItem>;

  // actions
  add: (item: CartItem) => void;
  setQty: (sku: string, qty: number) => void;
  inc: (sku: string, step?: number) => void;
  dec: (sku: string, step?: number) => void;
  remove: (sku: string) => void;
  clear: () => void;

  // derived helpers
  count: () => number;     // total units
  subtotal: () => number;  // sum(price * qty)
  list: () => CartItem[];  // array view
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},

      add: (item) =>
        set((state) => {
          const prev = state.items[item.sku];
          const nextQty = (prev?.qty ?? 0) + (item.qty ?? 1);
          return {
            items: {
              ...state.items,
              [item.sku]: { ...(prev ?? item), ...item, qty: nextQty },
            },
          };
        }),

      setQty: (sku, qty) =>
        set((state) => {
          if (qty <= 0) {
            const { [sku]: _removed, ...rest } = state.items;
            return { items: rest };
          }
          const prev = state.items[sku];
          if (!prev) return state;
          return { items: { ...state.items, [sku]: { ...prev, qty } } };
        }),

      inc: (sku, step = 1) =>
        set((state) => {
          const prev = state.items[sku];
          if (!prev) return state;
          return { items: { ...state.items, [sku]: { ...prev, qty: prev.qty + step } } };
        }),

      dec: (sku, step = 1) =>
        set((state) => {
          const prev = state.items[sku];
          if (!prev) return state;
          const nextQty = prev.qty - step;
          if (nextQty <= 0) {
            const { [sku]: _removed, ...rest } = state.items;
            return { items: rest };
          }
          return { items: { ...state.items, [sku]: { ...prev, qty: nextQty } } };
        }),

      remove: (sku) =>
        set((state) => {
          const { [sku]: _removed, ...rest } = state.items;
          return { items: rest };
        }),

      clear: () => set({ items: {} }),

      count: () => Object.values(get().items).reduce((n, it) => n + it.qty, 0),

      subtotal: () =>
        Object.values(get().items).reduce((sum, it) => sum + it.priceNGN * it.qty, 0),

      list: () => Object.values(get().items),
    }),
    {
      name: 'trucast-cart-v1',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
