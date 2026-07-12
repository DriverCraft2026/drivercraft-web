import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://drivercraft.net'),
  title: 'DriverCraft | Survival PvP Java & Bedrock 1.21.5',
  description: 'Servidor Survival PvP Java & Bedrock 1.21.5 con Gemas, Reyes, Pets, Misiones, Casino, Economía, Clanes y Comunidad.',
  icons: { icon: '/images/logos/favicon.png', apple: '/images/logos/server-icon.png' },
  openGraph: {
    title: 'DriverCraft | Tu aventura comienza aquí',
    description: 'Gemas legendarias, Reyes desafiantes, Pets, Misiones, Casino, Economía y PvP competitivo.',
    images: ['/images/hero/hero-spawn.webp'],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
