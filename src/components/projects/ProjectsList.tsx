import { CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { relatedProjects } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ProjectsListPageProps {
  title: string;
  aboutProjects: string[];
}

export function ProjectsListPage({
  title,
  aboutProjects,
}: ProjectsListPageProps) {
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
          {relatedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className='flex items-center space-x-4 bg-secondary p-4 rounded gap-2 cursor-pointer group shadow'
            >
              <Avatar className='w-12 h-12'>
                <AvatarImage src={project.image} alt={project.title} />
                <AvatarFallback>{project.title.split('')[0]}</AvatarFallback>
              </Avatar>
              <div className='flex-1'>
                <h4 className='font-semibold'>{project.title}</h4>
                <p className='text-sm text-muted-foreground'>
                  {project.description}
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
