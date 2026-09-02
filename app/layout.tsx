import type { Metadata } from 'next';
import './globals.css';
import './envelope.css';
import './gallery.css';

export const metadata: Metadata = {
  title: 'Баярын мэнд, миний хайр ♥',
  description: 'Хамгийн онцгой хүнд зориулсан жижигхэн хайрын захиа.',
  openGraph: { title: 'Баярын мэнд, миний хайр ♥', description: 'Хамгийн онцгой хүнд зориулсан', images: [{ url: '/og.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Баярын мэнд, миний хайр ♥', description: 'Хамгийн онцгой хүнд зориулсан', images: ['/og.png'] },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="mn"><body>{children}</body></html>}
