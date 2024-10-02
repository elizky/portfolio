import FollowMe2 from "@/components/FollowMe2";
import Footer from "@/components/Footer";
import PersonalInfo from "@/components/PersonalInfo";
import { LetsTalk } from "@/components/LetsTalk";
import { ProjectsListPage } from "@/components/projects/ProjectsList";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <Card className="space-y-8 pb-6">
      <PersonalInfo />
      <ProjectsListPage
        title={t("title")}
        aboutProjects={t("aboutProjects")}
      />
      <section>
        <LetsTalk />
      </section>
      <section className="px-4">
        <FollowMe2 />
      </section>
      <Footer />
    </Card>
  );
}
