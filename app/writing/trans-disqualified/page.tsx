import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/trans-disqualified.en.md?raw";

const article = selectedWriting.find(
  (item) => item.id === "trans-disqualified",
)!;

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function TransDisqualifiedTranslationPage() {
  return (
    <TranslationPage item={article}>
      <ArticleMarkdown source={articleMarkdown} />
    </TranslationPage>
  );
}
