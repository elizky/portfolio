import { BlogList } from '@/components/blog/BlogList';
import FollowMe2 from '@/components/FollowMe2';
import Footer from '@/components/Footer';
import PersonalInfo from '@/components/PersonalInfo';
import { LetsTalk } from '@/components/LetsTalk';
import { ProjectsListPage } from '@/components/projects/ProjectsList';
import { Card } from '@/components/ui/card';

const title = 'Blog';

const aboutProjects = ['Sometimes i like to write articles about... '];

export default function Projects() {
  return (
    <Card className='space-y-8 pb-6'>
      <PersonalInfo />
      <BlogList title={title} aboutProjects={aboutProjects} />
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
