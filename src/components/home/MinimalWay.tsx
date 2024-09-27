import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MediumPosts } from '../MediumPosts';
import { TechStack } from './TechStack';
import Footer from '../Footer';
import PersonalInfo from '../PersonalInfo';
import { LetsTalk } from '../LetsTalk';
import FollowMe from '../FollowMe';
import ProjectCard from '../ProjectCard';
import { sideProjects } from '@/lib/data';

function ProjectsCard() {
  return (
    <Card className='m-4'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='flex items-center gap-4'>
          <div className='h-2 w-2 rounded-full bg-red-300'></div>
          Projects
        </CardTitle>
        <Link href='/projects'>
          <Button variant='secondary' className='text-sm'>
            View All
            <ChevronRight className='w-4 h-4 ml-1' />
          </Button>
        </Link>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {sideProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </CardContent>
    </Card>
  );
}

export default function MinimalWay() {
  return (
    <Card className='space-y-8 pb-6'>
      <PersonalInfo />
      <ProjectsCard />
      <TechStack />
      <MediumPosts />
      <LetsTalk />
      <FollowMe />
      <Footer />
    </Card>
  );
}
