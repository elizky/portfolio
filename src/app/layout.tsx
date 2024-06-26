import type { Metadata } from 'next';
import { Lora, Noto_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/lib/theme-provider';

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
  keywords: ['Izky', 'Nicolas Gonzalez', 'izky dev'],
  openGraph: {
    title: 'Izky',
    description: 'Developer, producer, and creator.',
    url: 'https://www.izky.dev/',
    siteName: 'Izky',
    images: [
      {
        url: 'public/avatar.png',
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
