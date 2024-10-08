import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function MediumPosts() {
  const t = useTranslations("MediumPosts");

  const mediumPosts = [
    {
      title: t("post1.title"),
      link: "https://medium.com/@nigd22/cálculos-y-carnes-cómo-creé-dividizky-en-un-fin-de-semana-6e748afb99b6",
    },
    {
      title: t("post2.title"),
      link: "https://medium.com/@nigd22/discover-the-new-features-in-calculizky-2b4378d0a7f6",
    },
    {
      title: t("post3.title"),
      link: "https://medium.com/@nigd22/from-idea-to-deployment-in-a-weekend-how-i-created-calculizky-a-web-app-for-expense-management-5c5a9fd06237",
    },
    {
      title: t("post4.title"),
      link: "https://medium.com/@nigd22/bitacorizky-a-personal-touch-side-project-df34db7468b8",
    },
  ];

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-red-300"></div>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {mediumPosts.map((post, index) => (
          <Link
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-secondary p-4 rounded gap-2 cursor-pointer group shadow hover:bg-secondary/80 transition-colors"
          >
            <h4 className="font-medium w-10/12 truncate">{post.title}</h4>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ease-in-out" />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
