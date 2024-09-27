import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectDetailPageProps } from '@/lib/interfaces';

export function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  const filteredRelatedProjects = relatedProjects.filter(
    (relatedProject) => relatedProject.title !== project.title,
  );

  return (
    <div>
      <h1 className='sr-only'>{project.title}</h1>
      <CardHeader className='space-y-8'>
        <p className=''>{project.description}</p>
        <Link href={project.link} className='w-full'>
          <Button className='w-full'>Live Website</Button>
        </Link>
      </CardHeader>
      <CardContent className='space-y-8'>
        <section>
          <h2 className='text-2xl font-semibold mb-4'>The Problem to Solve</h2>
          {project.problemContent.map((paragraph, index) => (
            <p key={index} className='mb-2'>
              {paragraph}
            </p>
          ))}
        </section>

        <div className='relative h-80 w-full'>
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            fill
            objectFit='cover'
            className='rounded-lg shadow-md'
          />
        </div>

        <section>
          <h2 className='text-2xl font-semibold mb-4'>Our Solution</h2>
          {project.solutionContent.map((paragraph, index) => (
            <p key={index} className='mb-2'>
              {paragraph}
            </p>
          ))}
        </section>

        <div className='relative h-80 w-full'>
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            fill
            objectFit='cover'
            className='rounded-lg shadow-md'
          />
        </div>

        <section>
          <h2 className='text-2xl font-semibold mb-4'>Tech Stack</h2>
          <div className='flex flex-wrap gap-2'>
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant='secondary'>
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <div className='relative h-80 w-full'>
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            fill
            objectFit='cover'
            className='rounded-lg shadow-md'
          />
        </div>

        <div className='relative h-80 w-full'>
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            fill
            objectFit='cover'
            className='rounded-lg shadow-md'
          />
        </div>

        <section>
          <h2 className='text-2xl font-semibold mb-4'>Other Projects</h2>
          <div className='grid gap-4'>
            {filteredRelatedProjects.map((relatedProject, index) => (
              <Link key={index} href={`/projects/${relatedProject.slug}`}>
                <Card className='hover:bg-secondary transition-colors'>
                  <CardContent className='flex items-center justify-between p-4'>
                    <div>
                      <h3 className='font-semibold'>{relatedProject.title}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {relatedProject.description}
                      </p>
                    </div>
                    <ChevronRight className='w-5 h-5' />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </CardContent>
    </div>
  );
}
