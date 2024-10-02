import FollowMe2 from "@/components/FollowMe2";
import Footer from "@/components/Footer";
import { LetsTalk } from "@/components/LetsTalk";
import PersonalInfo from "@/components/PersonalInfo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

const error = () => {
  const t = useTranslations("notFound");

  return (
    <Card className="space-y-8 pb-6 container m-auto">
      <PersonalInfo />
      <div className="flex flex-col gap-4 py-32 text-center">
        <h4>{t("title")}</h4>
        <Button variant="link">
          <Link href="/">{t("link")}</Link>
        </Button>
      </div>
      <section>
        <LetsTalk />
      </section>
      <section className="px-4">
        <FollowMe2 />
      </section>
      <Footer />
    </Card>
  );
};

export default error;
