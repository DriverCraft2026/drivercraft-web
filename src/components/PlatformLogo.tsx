import { Store } from 'lucide-react';

type Props = { name: string; size?: number };

export function PlatformLogo({ name, size = 26 }: Props) {
  const n = name.toLowerCase();
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const;
  if (n.includes('discord')) {
    return <svg {...common}><path d="M20.32 4.37A19.8 19.8 0 0 0 15.36 2.83a13.8 13.8 0 0 0-.63 1.3 18.5 18.5 0 0 0-5.46 0 13.8 13.8 0 0 0-.64-1.3A19.7 19.7 0 0 0 3.68 4.37C.55 9.05-.3 13.6.12 18.08a19.9 19.9 0 0 0 6.08 3.08c.49-.67.93-1.38 1.31-2.13-.72-.27-1.41-.6-2.06-.98.17-.13.34-.25.5-.38a14.2 14.2 0 0 0 12.1 0c.17.13.33.25.5.38-.65.38-1.34.71-2.06.98.39.75.82 1.46 1.31 2.13a19.9 19.9 0 0 0 6.08-3.08c.5-5.2-.85-9.72-3.56-13.71ZM8.02 15.33c-1.18 0-2.15-1.08-2.15-2.41s.95-2.42 2.15-2.42c1.2 0 2.17 1.1 2.15 2.42 0 1.33-.95 2.41-2.15 2.41Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.41s.95-2.42 2.15-2.42c1.2 0 2.17 1.1 2.15 2.42 0 1.33-.95 2.41-2.15 2.41Z"/></svg>;
  }
  if (n.includes('facebook')) {
    return <svg {...common}><path d="M14.2 8.15V6.7c0-.7.47-.86.8-.86h2.04V2.3L14.23 2.28c-3.12 0-3.83 2.34-3.83 3.84v2.03H7.96v3.64h2.44V22h3.8V11.8h2.86l.38-3.64H14.2Z"/></svg>;
  }
  if (n.includes('instagram')) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>;
  }
  if (n.includes('tiktok')) {
    return <svg {...common}><path d="M16.6 2.4c.42 2.55 1.87 4.06 4.2 4.22v3.17c-1.35.13-2.54-.31-4.1-1.27v6.12c0 7.77-8.47 10.2-11.87 4.63-2.19-3.58-.85-9.87 6.17-10.12v3.35c-.44.07-.92.18-1.35.32-1.3.44-2.04 1.25-1.83 2.69.4 2.74 5.42 3.55 5-1.8V2.4h3.78Z"/></svg>;
  }
  return <Store size={size} />;
}
