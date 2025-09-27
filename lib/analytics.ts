declare global { interface Window { plausible?: (e: string, opts?: { props?: Record<string, any> }) => void } }
export function track(event: string, props?: Record<string, any>) {
  if (typeof window !== 'undefined') window.plausible?.(event, props ? { props } : undefined);
}
