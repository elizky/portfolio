export default async function sitemap() {
  const routes = ['', '/projects', '/blog'].map((route) => ({
    url: `https://www.izky.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
