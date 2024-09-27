import FollowMe2 from '@/components/FollowMe2';
import Footer from '@/components/Footer';
import PersonalInfo from '@/components/PersonalInfo';
import { LetsTalk } from '@/components/LetsTalk';
import { ProjectsListPage } from '@/components/projects/ProjectsList';
import { Card } from '@/components/ui/card';

const title = 'Projects';

const aboutProjects = [
  "In my journey as a developer, I discovered that the best ideas and projects arise from personal needs. I firmly believe that if something has benefited me, it can also help others. That's why I've channeled my passion for technology and programming into creating personal projects that solve everyday problems and provide innovative solutions.",
];

export default function Projects() {
  return (
    <Card className='space-y-8 pb-6'>
      <PersonalInfo />
      <ProjectsListPage title={title} aboutProjects={aboutProjects} />
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
