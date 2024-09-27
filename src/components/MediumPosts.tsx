import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mediumPosts } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function MediumPosts() {
  return (
    <Card className='m-4'>
      <CardHeader>
        <CardTitle className='flex items-center gap-4'>
          <div className='h-2 w-2 rounded-full bg-red-300'></div>
          Medium Posts
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        {mediumPosts.map((post, index) => (
          <Link
            key={index}
            href={post.link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-between bg-secondary p-4 rounded gap-2 cursor-pointer group shadow hover:bg-secondary/80 transition-colors'
          >
            <h4 className='font-medium w-10/12 truncate'>{post.title}</h4>
            <ExternalLink className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ease-in-out' />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
