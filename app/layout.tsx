import './globals.css';
import { Inter, Kulim_Park } from 'next/font/google';
import { cn } from '@/lib/utils';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fontKulim = Kulim_Park({
  variable: '--font-kulim',
  weight: ['200', '400', '600', '700', '300'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-inter antialiased',
          fontInter.variable,
          fontKulim.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
