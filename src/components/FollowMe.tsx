import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin } from 'lucide-react';

export default function FollowMe() {
  return (
    <div className='flex justify-between items-center space-x-4 bg-secondary p-6 m-4 rounded-lg gap-2 shadow'>
      <div className='flex items-center gap-4'>
        <div className='h-2 w-2 rounded-full bg-red-300'></div>
        <h4 className='font-semibold'>Follow Me</h4>
      </div>
      <div className='space-x-4'>
        <Link
          href='https://www.linkedin.com/in/nicogonzalez22/'
          target='_blank'
        >
          <Button
            variant='ghost'
            size='icon'
            className='bg-background rounded-full shadow'
          >
            <Linkedin className='h-4 w-4' />
          </Button>
        </Link>
        <Link href='https://github.com/elizky' target='_blank'>
          <Button
            variant='ghost'
            size='icon'
            className='bg-background rounded-full shadow'
          >
            <Github className='h-4 w-4' />
          </Button>
        </Link>
      </div>
    </div>
  );
}
