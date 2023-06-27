import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Lora, Noto_Sans } from 'next/font/google';
import Sidebar from '../components/sidebar';
import { Analytics } from '@vercel/analytics/react';

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
  title: {
    default: 'Nicolas Gonzalez',
    template: '%s | Nicolas Gonzalez',
  },
  description: 'Developer, producer, and creator.',
  openGraph: {
    title: 'Nicolas Gonzalez',
    description: 'Developer, producer, and creator.',
    url: 'https://izky.vercel.app',
    siteName: 'Nicolas Gonzalez',
    images: [
      {
        url: 'https://izky.vercel.app/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Nicolas Gonzalez',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={
        (clsx('text-black bg-white dark:text-white dark:bg-[#111010]'),
        noto.variable,
        lora.variable)
      }
    >
      <body className='antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto'>
        <Sidebar />
        <main className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
