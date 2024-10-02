import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTranslations, useMessages } from "next-intl";
import { BlogListProps, BlogMessages } from "@/lib/interfaces";



export function BlogList({ title, aboutProjects }: BlogListProps) {
  const t = useTranslations("BlogList");
  const messages = useMessages() as unknown as BlogMessages;
  const postKeys = Object.keys(messages?.BlogList?.posts || {});

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold px-6 ">{title}</h3>
      <CardContent className="space-y-6">
        <p>{aboutProjects}</p>
        <div className="grid gap-4">
          {postKeys.map((key) => (
            <Link
              key={key}
              href={`/blog/${key}`}
              className="flex items-center space-x-4 bg-secondary p-4 rounded gap-2 cursor-pointer group shadow"
            >
              <div className="flex-1">
                <h4 className="font-semibold">{t(`posts.${key}.title`)}</h4>
                <p className="text-sm text-muted-foreground">
                  {t(`posts.${key}.createdBy`)} - {t(`posts.${key}.date`)}
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
