/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Card from './ui/card';
import Image from 'next/image';

const relatedPost = [
  {
    title: 'Bitacorizky: A personal touch Side Project',
    image: '/bitacorizky.png',
    date: 'Jan 15, 2024',
    link: 'https://medium.com/@nigd22/bitacorizky-a-personal-touch-side-project-df34db7468b8',
  },
  {
    title:
      'From Idea to Deployment in a Weekend: How I Created Calculizky, a Web App for Expense Management',
    image: '/calculizky.png',
    date: 'Feb 8, 2024',
    link: 'https://medium.com/@nigd22/from-idea-to-deployment-in-a-weekend-how-i-created-calculizky-a-web-app-for-expense-management-5c5a9fd06237',
  },
  {
    title: 'Discover the New Features in Calculizky!',
    image: '/an-old-calulator.jpg',
    date: 'Jun 13, 2024',
    link: 'https://medium.com/@nigd22/discover-the-new-features-in-calculizky-2b4378d0a7f6',
  },
];

const RelatedPost = () => {
  return (
    <Card title='Related Posts'>
      <div className='space-y-4'>
        {relatedPost.map((post) => (
          <Link
            key={post.title}
            href={post.link}
            className='flex items-center space-x-4 hover:underline underline-offset-2'
            prefetch={false}
            target='blank'
          >
            <Image
              src={post.image}
              alt={`image of ${post.title}`}
              width={40}
              height={40}
              className='rounded-lg'
            />
            <div className='w-3/4'>
              <h4 className='text-ellipsis overflow-hidden truncate'>{post.title}</h4>
              <p className='text-xs text-muted-foreground'>{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default RelatedPost;
