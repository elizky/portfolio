import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Izky',
    short_name: 'Izky',
    description: 'Developer, producer, and creator.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0b0a',
    theme_color: '#0d0b0a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
