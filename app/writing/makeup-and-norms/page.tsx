import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/makeup-and-norms.en.md?raw";

const article = selectedWriting.find(
  (item) => item.id === "makeup-and-norms",
)!;

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function MakeupAndNormsTranslationPage() {
  return (
    <TranslationPage item={article}>
      <ArticleMarkdown source={articleMarkdown} />
    </TranslationPage>
  );
}
