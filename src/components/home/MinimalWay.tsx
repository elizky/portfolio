import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { MediumPosts } from './MediumPosts';
import { TechStack } from './TechStack';
import Footer from '../Footer';
import PersonalInfo from './PersonalInfo';
import { LetsTalk } from '../LetsTalk';
import FollowMe from '../FollowMe';
import ProjectCard from '../ProjectCard';
import { sideProjects } from '@/lib/data';

function ProjectsCard() {
  return (
    <Card className='m-4 '>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='flex items-center gap-4'>
          <div className='h-2 w-2 rounded-full bg-red-300'></div>
          Projects
        </CardTitle>
        <Button variant='secondary' className='text-sm'>
          View All
          <ChevronRight className='w-4 h-4 ml-1' />
        </Button>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {sideProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </CardContent>
    </Card>
  );
}

function SecondCard() {
  return (
    <Card className='m-4'>
      <CardHeader>
        <CardTitle className='flex items-center gap-4'>
          <div className='h-2 w-2 rounded-full bg-red-300'></div>
          Products
        </CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        {['DesignSystem', 'Prototype', 'PortfolioKit'].map((product, index) => (
          <div key={index} className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl'>
                {product[0]}
              </div>
              <div>
                <h3 className='font-semibold'>{product}</h3>
              </div>
            </div>
            <Badge variant='secondary' className='font-normal'>
              UI KIT
              <ExternalLink className='w-3 h-3 ml-1' />
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function MinimalWay() {
  return (
    <Card className='space-y-4 pb-6'>
      <PersonalInfo />
      <ProjectsCard />
      <LetsTalk />
      <TechStack />
      <FollowMe />
      <MediumPosts />
      <Footer />
    </Card>
  );
}
