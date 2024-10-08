import Image from "next/image";
import { ProjectDetailPage } from "@/components/projects/ProjectPage";
import { Card, CardContent } from "@/components/ui/card";
import { sideProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import { LetsTalk } from "@/components/LetsTalk";
import FollowMe2 from "@/components/FollowMe2";
import Footer from "@/components/Footer";

export default function Project({ params }: { params: { slug: string } }) {
  const project = sideProjects.find((p) => p.slug === params.slug);
  const relatedProjects = sideProjects.filter(
    (relatedProject) => relatedProject.title !== project?.title
  );
  const headerImage = project?.images[0] as string;

  if (!project) {
    notFound();
  }

  function ProjectHeader() {
    return (
      <CardContent className="p-6">
        <Image
          src={headerImage}
          alt={project?.title as string}
          width={494}
          height={191}
          className="rounded-lg"
        />
      </CardContent>
    );
  }

  return (
    <Card className=" pb-6">
      <ProjectHeader />
      <ProjectDetailPage project={project} relatedProjects={relatedProjects} />
      <div className="space-y-8">
        <section>
          <LetsTalk />
        </section>
        <section className="px-4">
          <FollowMe2 />
        </section>
        <Footer />
      </div>
    </Card>
  );
}
