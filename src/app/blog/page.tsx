import { BlogList } from "@/components/blog/BlogList";
import FollowMe2 from "@/components/FollowMe2";
import Footer from "@/components/Footer";
import PersonalInfo from "@/components/PersonalInfo";
import { LetsTalk } from "@/components/LetsTalk";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Blog");
  return (
    <Card className="space-y-8 pb-6">
      <PersonalInfo />
      <BlogList  title={t("title")} aboutProjects={t("subtitle")} />
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
