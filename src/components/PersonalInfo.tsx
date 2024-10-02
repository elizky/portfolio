import Image from "next/image";
import { Copy } from "lucide-react";
import { RainbowButton } from "./magicui/rainbow-button";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import { useTranslations } from "next-intl";

export default function PersonalInfo() {
  const t = useTranslations("personalInfo");

  return (
    <CardContent className="p-6">
      <div className="flex items-center justify-end mb-4">
        <a
          href="/NicolasGonzalez-en.pdf"
          rel="noopener noreferrer"
          target="_blank"
          download
        >
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 text-xs font-semibold tracking-wider cursor-pointer"
          >
            {t("resumeBadge")}
          </Badge>
        </a>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-1">{t("heading")}</h1>
          <p className="text-muted-foreground mb-4">{t("description")}</p>
          <div className="flex space-x-2">
            <RainbowButton>{t("hireMeButton")}</RainbowButton>
            <Button size="sm" variant="outline" className="flex items-center">
              <Copy className="w-4 h-4 mr-2" />
              {t("copyEmailButton")}
            </Button>
          </div>
        </div>
        <Image
          src="/avatar.png"
          alt="Izky"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
    </CardContent>
  );
}
