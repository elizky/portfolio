import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectDetailPageProps, ProjectMessages } from "@/lib/interfaces";
import { useMessages, useTranslations } from "next-intl";

export function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  const { slug, title } = project;
  const t = useTranslations(`Projects.${slug}.article`);
  const t2 = useTranslations(`Projects`);

  const messages = useMessages() as any;
  const featuresContent = messages?.Projects?.[slug].article
    .featuresContent as ProjectMessages;

  if (slug === "planizky") {
    return (
      <h3 className="text-2xl font-semibold py-32 text-center">
        {t2("underConstruction")}
      </h3>
    );
  }

  return (
    <div>
      <h1 className="sr-only">{title}</h1>
      <CardHeader className="space-y-8">
        <p className="">{t("longDescription")}</p>
        <Link href={project.link} className="w-full">
          <Button className="w-full">{t("goTo")}</Button>
        </Link>
      </CardHeader>
      <CardContent className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {t("problemSubtitle")}
          </h2>

          <p className="mb-2">{t("problemContent")}</p>
        </section>

        <div className="relative h-80 w-full">
          <Image
            src={project.images[0]}
            alt={`${title} screenshot`}
            fill
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {" "}
            {t("solutionSubtitle")}
          </h2>
          <p className="mb-2">{t("solutionContent")}</p>
        </section>

        <div className="relative h-80 w-full">
          <Image
            src={project.images[0]}
            alt={`${title} screenshot`}
            fill
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t("stackSubtitle")}</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
            <p className="my-2">{t("stackContent")}</p>
          </div>
        </section>

        <div className="relative h-80 w-full">
          <Image
            src={project.images[0]}
            alt={`${title} screenshot`}
            fill
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-center">
            {t("featuresSubtitle")}
          </h3>
          <div className="flex flex-wrap gap-2">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {Object.values(featuresContent).map((val) => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="relative h-80 w-full">
          <Image
            src={project.images[0]}
            alt={`${title} screenshot`}
            fill
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('otherProjects')}</h2>
          <div className="grid gap-4">
            {relatedProjects.map((relatedProject, index) => (
              <Link key={index} href={`/projects/${relatedProject.slug}`}>
                <Card className="hover:bg-secondary transition-colors">
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-semibold">{relatedProject.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedProject.title}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </CardContent>
    </div>
  );
}
