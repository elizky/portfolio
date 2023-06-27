import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on front end development, music, and more.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className='mb-5'>Blog</h1>
      <p>Under construction</p>
    </section>
  );
}
