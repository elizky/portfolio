import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  description: string;
}

interface ProjectsListPageProps {
  title: string;
  aboutProjects: string[];
  projects: Project[];
}

export function ProjectsListPage({ title, aboutProjects, projects }: ProjectsListPageProps) {
  return (
    <Card className='space-y-6 p-6'>
      <CardHeader>
        <CardTitle className='text-3xl font-bold'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        {aboutProjects.map((paragraph, index) => (
          <p key={index} className='text-lg'>
            {paragraph}
          </p>
        ))}

        <div className='grid gap-4'>
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className='hover:bg-secondary transition-colors cursor-pointer'>
                <CardContent className='flex items-center justify-between p-4'>
                  <div>
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                    <p className='text-muted-foreground'>{project.description}</p>
                  </div>
                  <ChevronRight className='w-5 h-5' />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
