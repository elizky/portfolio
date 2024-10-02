import { BlogMessages } from "@/lib/interfaces";
import { useMessages, useTranslations } from "next-intl";

const Article = ({ slug }: { slug: string }) => {
  const t = useTranslations(`BlogList.posts.${slug}.article`);
  const tError = useTranslations("BlogList.error");
  const messages = useMessages() as unknown as BlogMessages;

  const currentPost = messages?.BlogList?.posts?.[slug]?.article;

  if (!currentPost)
    return (
      <p className="text-muted-foreground text-center">{tError("text")}</p>
    );

  return (
    <article className="prose prose-gray dark:prose-invert">
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 italic">
        {t("1.text")}
      </p>
      {currentPost["1"].subtitle && (
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 italic">
          {t("1.subtitle")}
        </p>
      )}

      {Object.keys(currentPost)
        .filter((key) => key !== "1")
        .map((sectionKey) => (
          <div key={sectionKey}>
            {currentPost[sectionKey].title && (
              <h2>{t(`${sectionKey}.title`)}</h2>
            )}
            {Object.keys(currentPost[sectionKey])
              .filter((textKey) => textKey.startsWith("text"))
              .map((textKey) => (
                <p
                  key={`${sectionKey}-${textKey}`}
                  className="leading-7 [&:not(:first-child)]:mt-6 last:mb-6"
                >
                  {t(`${sectionKey}.${textKey}`)}
                </p>
              ))}
          </div>
        ))}
    </article>
  );
};

export default Article;
