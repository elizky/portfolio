import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { sideProjects } from "@/lib/data";
import { useTranslations } from "next-intl";

interface ProjectsListPageProps {
  title: string;
  aboutProjects: string;
}

export function ProjectsListPage({
  title,
  aboutProjects,
}: ProjectsListPageProps) {
  const t = useTranslations("Projects");
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold px-6 ">{title}</h3>
      <CardContent className="space-y-6">
        <p>{aboutProjects}</p>
        <div className="grid gap-4">
          {sideProjects.map(({ title, slug, image }) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="flex items-center space-x-4 bg-secondary p-4 rounded gap-2 cursor-pointer group shadow"
            >
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={image}
                  alt={t(`${title.toLowerCase()}.name`)}
                />
                <AvatarFallback>
                  {t(`${title.toLowerCase()}.name`).split("")[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-semibold">
                  {t(`${title.toLowerCase()}.name`)}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(`${title.toLowerCase()}.description`)}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all ease-in-out" />
            </Link>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
