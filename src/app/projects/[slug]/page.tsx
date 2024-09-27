import { ProjectPage } from '@/components/projects/ProjectPage';
import { projects, titlesProyects } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectPage
      title={project.title}
      subtitle={project.subtitle}
      description={project.description}
      problemTitle={titlesProyects.problemTitle}
      problemContent={project.problemContent}
      stackTitle={titlesProyects.stackTitle}
      stackContent={project.stackContent}
      featuresTitle={titlesProyects.featuresTitle}
      featuresSubtitle={project.featuresSubtitle}
      featuresContent={project.featuresContent}
    />
  );
}
