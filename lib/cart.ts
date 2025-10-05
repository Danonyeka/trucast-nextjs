'use client';
import { create } from 'zustand';

type CartItem = {
  sku: string;
  name: string;
  priceNGN: number;
  img: string;
  qty: number;
};
type CartState = {
  items: Record<string, CartItem>;
  add: (item: CartItem) => void;
};

export const useCart = create<CartState>((set) => ({
  items: {},
  add: (item) =>
    set((state) => {
      const prev = state.items[item.sku];
      const nextQty = (prev?.qty ?? 0) + item.qty;
      return {
        items: {
          ...state.items,
          [item.sku]: { ...item, qty: nextQty },
        },
      };
    }),
}));
