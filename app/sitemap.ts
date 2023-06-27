export default async function sitemap() {
  const routes = ['', '/projects', '/blog'].map((route) => ({
    url: `https://izky.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
