import Image from 'next/image';
import { aboutMe, sideProjects } from '@/lib/data';
import { Card } from '@/components/ui/card';
import PersonalInfo from '@/components/PersonalInfo';
import ProjectCard from '@/components/ProjectCard';
import { LetsTalk } from '@/components/LetsTalk';
import FollowMe2 from '@/components/FollowMe2';
import Footer from '@/components/Footer';

export default function AboutPage() {
  function About() {
    return (
      <section className='px-6'>
        {about.map((paragraph, index) => (
          <p key={index} className=''>
            {paragraph}
          </p>
        ))}
      </section>
    );
  }

  function More() {
    return (
      <section className='px-6'>
        {bio.map((paragraph, index) => (
          <p key={index} className='mb-2'>
            {paragraph}
          </p>
        ))}
      </section>
    );
  }
  const { name, avatar, about, bio } = aboutMe;
  return (
    <Card className='space-y-8 pb-6'>
      <PersonalInfo />
      <About />
      <Image
        src={avatar}
        alt={name}
        width={400}
        height={400}
        className='rounded-lg mx-auto px-6'
      />
      <More />
      <section className='px-6'>
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
      <section className='px-4'>
        <FollowMe2 />
      </section>
      <Footer />
    </Card>
  );
}
