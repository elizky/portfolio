export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://izky.vercel.app/sitemap.xml',
    host: 'https://izky.vercel.app',
  };
}
