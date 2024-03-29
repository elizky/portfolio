import { Post } from 'interfaces/Post';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from 'services/api';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on front end development, music, and more.',
};

export default async function BlogPage() {
  const data = (await getPosts()) as Post[];
  return (
    <section>
      <h1 className='mb-5 projects'>Blog</h1>
      <div className='prose text-black dark:text-white divide-y-4 divide-primary'>
        <div className='my-8 divide-y '>
          {data.length > 0 ? (
            data.map((post) => (
              <div className='flex flex-col items-start' key={post._id}>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className='flex items-baseline gap-4 text-accent underline-offset-8 transition-all hover:font-extrabold  hover:no-underline'
                >
                  <h3 className='text-accent'>{post.title}</h3>
                </Link>
                <div className='flex space-x-1 text-sm mt-2 max-w-[600px]'>
                  {post.subtitle && <p className='font-mono'>{post.subtitle} - </p>}
                  <p>
                    {new Date(post._createdAt).toISOString().split('T')[0]}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No posts yet</p>
          )}
        </div>
      </div>
    </section>
  );
}
