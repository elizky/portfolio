import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { SideProjects } from '@/lib/interfaces';
import { Avatar } from './ui/avatar';

export default function ProjectCard({ project }: { project: SideProjects }) {
  return (
    <Link
      href={project.link}
      target={project.link !== '#' ? '_blank' : '_top'}
      className='flex items-center space-x-4 bg-secondary p-4 rounded gap-2 cursor-pointer group shadow'
    >
      <Avatar className='w-12 h-12'>
        <AvatarImage src={project.image} alt={project.name} />
        <AvatarFallback>{project.name.split('')}</AvatarFallback>
      </Avatar>
      <div className='flex-1'>
        <h4 className='font-semibold'>{project.name}</h4>
        <p className='text-sm text-muted-foreground'>{project.description}</p>
      </div>
      <ChevronRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all ease-in-out' />
    </Link>
  );
}
