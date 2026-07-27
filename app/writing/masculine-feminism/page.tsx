import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/masculine-feminism.en.md?raw";

const article = selectedWriting[0];

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function MasculineFeminismTranslationPage() {
  return (
    <TranslationPage item={article}>
      <ArticleMarkdown source={articleMarkdown} />
    </TranslationPage>
  );
}
