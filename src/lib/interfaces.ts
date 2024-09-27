export interface RelatedProjects {
  image: string;
  title: string;
  description: string;
  slug: string;
}
export interface SideProjects {
  image: string;
  name: string;
  description: string;
  link: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  problemContent: string[];
  solutionContent: string[];
  stackContent: string[];
  techStack: string[];
  featuresSubtitle: string;
  featuresContent: string[];
  images: string[];
  link: string;
}

export interface ProjectDetailPageProps {
  project: Project;
  relatedProjects: RelatedProjects[];
}
