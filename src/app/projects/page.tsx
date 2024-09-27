import { ProjectsListPage } from '@/components/projects/ProjectsList';
import { projects } from '@/lib/data';

const title = 'Projects';

const aboutProjects = [
  "In my journey as a developer, I discovered that the best ideas and projects arise from personal needs. I firmly believe that if something has benefited me, it can also help others. That's why I've channeled my passion for technology and programming into creating personal projects that solve everyday problems and provide innovative solutions.",
];

export default function Projects() {
  return <ProjectsListPage title={title} aboutProjects={aboutProjects} projects={projects} />;
}
