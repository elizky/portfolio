export interface SideProjects {
  title: string;
  slug: string;
  image: string;
  images: string[];
  link: string;
  techStack: string[];
}
export interface ProjectDetailPageProps {
  project: SideProjects;
  relatedProjects: SideProjects[];
}

export interface Post {
  article: any;
  title: string;
  createdBy: string;
  date: string;
}

export interface BlogMessages {
  BlogList: {
    posts: Record<string, Post>;
  };
}

export interface BlogListProps {
  title: string;
  aboutProjects: string;
}

export interface ProjectMessages {
  BlogList: {
    posts: Record<string, Post>;
  };
}