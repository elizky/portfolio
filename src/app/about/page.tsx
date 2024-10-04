import Image from "next/image";
import { sideProjects } from "@/lib/data";
import { Card } from "@/components/ui/card";
import PersonalInfo from "@/components/PersonalInfo";
import ProjectCard from "@/components/ProjectCard";
import { LetsTalk } from "@/components/LetsTalk";
import FollowMe2 from "@/components/FollowMe2";
import Footer from "@/components/Footer";
import { useMessages, useTranslations } from "next-intl";
import { AboutMessage } from "@/lib/interfaces";

export default function AboutPage() {
  const t = useTranslations("AboutMe");
  const tProjects = useTranslations("Projects");
  const messages = useMessages() as unknown as AboutMessage;
  const moreAbout = messages.AboutMe.bio;

  const aboutMe = {
    name: "Izky",
    avatar: "/avatar-izky.png",
    about: t("title"),
    bio: t("bio"),
  };

  return (
    <Card className="space-y-8 pb-6">
      <PersonalInfo />
      <section className="px-6">
        <p>{aboutMe.about}</p>
      </section>
      <Image
        src={aboutMe.avatar}
        alt={aboutMe.name}
        width={400}
        height={400}
        className="rounded-lg mx-auto px-6"
      />
      <section className="px-6 space-y-8">
        {Object.values(moreAbout).map((val) => (
          <p key={val}>{val}</p>
        ))}
      </section>
      <section className="px-6">
        <h2 className="text-2xl font-semibold mb-2">{tProjects("title")}</h2>
        <div className="space-y-4 py-4">
          {sideProjects.map(({ title, link, image }) => (
            <ProjectCard
              key={title}
              name={tProjects(`${title.toLowerCase()}.name`)}
              description={tProjects(`${title.toLowerCase()}.description`)}
              link={link}
              image={image}
            />
          ))}
        </div>
      </section>
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
