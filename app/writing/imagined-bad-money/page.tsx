import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/imagined-bad-money.en.md?raw";

const article = selectedWriting.find(
  (item) => item.id === "imagined-bad-money",
)!;

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function ImaginedBadMoneyTranslationPage() {
  return (
    <TranslationPage item={article}>
      <ArticleMarkdown source={articleMarkdown} />
    </TranslationPage>
  );
}
