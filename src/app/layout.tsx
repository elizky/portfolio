import type { Metadata } from 'next';
import { Lora, Noto_Sans } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/lib/theme-provider';
import { DockFooter } from '@/components/Dock';

const noto = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
});

const lora = Lora({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.izky.dev/'),
  title: {
    default: 'Izky',
    template: '%s | Izky',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-screen bg-primary-foreground font-sans antialiased',
          lora.variable,
          noto.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <main className='min-h-screen'>
              <div className='max-w-lg sm:max-w-xl mx-auto p-4 pb-16 space-y-6'>
                {children}
              </div>
            </main>
            <DockFooter />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
