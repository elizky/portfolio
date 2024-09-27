import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';
import PersonalInfo from '@/components/home/PersonalInfo';
import { LetsTalk } from '@/components/LetsTalk';
import ProjectCard from '@/components/ProjectCard';
import { aboutMe, sideProjects } from '@/lib/data';



export default function AboutPage() {
  const {name, avatar, about,bio} = aboutMe
  return (
    <Card className='space-y-4 pb-6'>
      <PersonalInfo />
      <CardHeader>
        {about.map((paragraph, index) => (
          <p key={index} className='text-muted-foreground'>
            {paragraph}
          </p>
        ))}
      </CardHeader>
      <CardContent className='space-y-6'>
        <Image src={avatar} alt={name} width={400} height={400} className='rounded-lg mx-auto' />

        <section>
          {bio.map((paragraph, index) => (
            <p key={index} className='mb-2'>
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>My Side Projects</h2>
          <div className='space-y-4 py-4'>
            {sideProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section>
          <LetsTalk />
        </section>

        <section>
          <div className='flex justify-between items-center space-x-4 bg-secondary p-6  rounded-lg gap-2 shadow'>
            <div className='flex items-center gap-4'>
              <div className='h-2 w-2 rounded-full bg-red-300'></div>
              <h4 className='font-semibold'>Follow Me</h4>
            </div>
            <div className='space-x-4'>
              <Link href='https://www.linkedin.com/in/nicogonzalez22/' target='_blank'>
                <Button variant='ghost' size='icon' className='bg-background rounded-full shadow'>
                  <Linkedin className='h-4 w-4' />
                </Button>
              </Link>
              <Link href='https://github.com/elizky' target='_blank'>
                <Button variant='ghost' size='icon' className='bg-background rounded-full shadow'>
                  <Github className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
