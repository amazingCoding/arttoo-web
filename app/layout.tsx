import type { Metadata } from 'next';
import './globals.css';
import { Suspense } from 'react';
import { UserProvider } from '@/contexts/UserContext';
import { WalletProviders } from '@/contexts/walletProviders';


export const metadata: Metadata = {
  title: 'Arttoo',
  description: 'Art Is The Visual Proof Of History For Humanity',
  openGraph: {
    type: 'website',
    siteName: 'Arttoo',
    title: 'Arttoo',
    description: 'Art Is The Visual Proof Of History For Humanity',
    url: 'https://arttoo.co.uk',
    images: [
      {
        url: '/hero.jpg',
        alt: 'Arttoo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arttoo',
    images: [
      {
        url: '/hero.jpg',
        alt: 'Arttoo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">

        <Suspense>
          <WalletProviders>
            <UserProvider>
              {children}
            </UserProvider>
          </WalletProviders>
        </Suspense>

      </body>
    </html>
  );
}
