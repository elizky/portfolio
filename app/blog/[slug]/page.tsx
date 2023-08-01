import { PortableText } from '@portabletext/react';
import { Post } from 'interfaces/Post';
import React from 'react';
import { getAuthor, getPost } from 'services/api';


const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getPost(params.slug)) as Post;
  const author = await getAuthor(data.author._ref);

  return (
    <section className='projects'>
      <h1>{data.title}</h1>

      <div className='prose dark:prose-invert text-black dark:text-white'>
        <p className='mt-5 max-w-[600px] italic'>
          {new Date(data._createdAt).toISOString().split('T')[0]}
        </p>
        <div className='my-8'>
          <PortableText value={data.body} />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
