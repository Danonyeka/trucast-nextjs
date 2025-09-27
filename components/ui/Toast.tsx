'use client';
import React, { createContext, useCallback, useContext, useState } from 'react';

type Toast = { id: number; text: string };

const ToastCtx = createContext<(text: string) => void>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const show = useCallback((text: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, text }]);
    // auto hide
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2400);
  }, []);

  return (
    <ToastCtx.Provider value={show}>
      {children}
      {/* simple centered stack */}
      <div className="fixed z-[9999] inset-x-0 top-16 flex justify-center pointer-events-none">
        <div className="space-y-2">
          {toasts.map((t) => (
            <div
              key={t.id}
              className="pointer-events-auto rounded-lg bg-black/90 text-white px-4 py-2 shadow"
            >
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  return useContext(ToastCtx);
}
