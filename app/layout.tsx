import { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import Script from 'next/script';

import { getAllPosts } from '@/lib/notion';

import './globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import Drawer from '@/components/drawer';
import BreadcrumbNav from '@/components/breadcrumb';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.izky.dev/'),
  title: {
    default: 'Izky',
    template: 'Izky | %s',
  },
  description: 'Developer, producer, and creator.',
  keywords: [
    'Izky',
    'Nicolas Gonzalez',
    'izky dev',
    'calculizky',
    'bitacorizky',
    'dividizky',
    'isqui',
    'izki',
  ],
  openGraph: {
    title: 'Izky',
    description: 'Developer, producer, and creator.',
    url: 'https://www.izky.dev/',
    siteName: 'Izky',
    images: [
      {
        url: '/avatar.png',
        width: 800,
        height: 600,
        alt: 'Imagen de izky',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();
  const posts = await getAllPosts();

  return (
    <html lang={locale} className={`${inconsolata.variable}`}>
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="9d91314b-e6d3-4b91-b8af-83d7f07067f0"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen font-sans bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Drawer posts={posts} />
          <main className="p-6 md:p-12 pt-20 max-w-3xl mx-auto">
            <BreadcrumbNav />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
