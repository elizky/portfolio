import { CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

interface BlogListProps {
  title: string;
  aboutProjects: string[];
}

export function BlogList({ title, aboutProjects }: BlogListProps) {
  return (
    <div className='space-y-8'>
      <h3 className='text-3xl font-bold px-6 '>{title}</h3>
      <CardContent className='space-y-6'>
        {aboutProjects.map((paragraph, index) => (
          <p key={index} className=''>
            {paragraph}
          </p>
        ))}
        <div className='grid gap-4'>
          {blogPosts.map((project) => (
            <Link
              key={project.slug}
              href={`/blog/${project.slug}`}
              className='flex items-center space-x-4 bg-secondary p-4 rounded gap-2 cursor-pointer group shadow'
            >
              <div className='flex-1'>
                <h4 className='font-semibold'>{project.hero.title}</h4>
                <p className='text-sm text-muted-foreground'>
                  {project.hero.createdBy} - {project.hero.date}
                </p>
              </div>
              <ChevronRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all ease-in-out' />
            </Link>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
