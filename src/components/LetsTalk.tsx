import Calendar from "./Calendar";
import { useTranslations } from "next-intl";

export function LetsTalk() {
  const t = useTranslations("LetsTalk");

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-12">
      <h3>{t("title")}</h3>
      <p>{t("description")}</p>
      <div className="flex justify-center gap-4 mt-4">
        <Calendar time="15min" text={t("15min")} />
        <Calendar time="30min" text={t("30min")} />
      </div>
    </div>
  );
}
