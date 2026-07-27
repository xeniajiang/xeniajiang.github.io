import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/xingzhi-translation.en.md?raw";

const article = selectedWriting[2];

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function XingzhiTranslationPage() {
  return (
    <TranslationPage item={article}>
      <ArticleMarkdown source={articleMarkdown} />
    </TranslationPage>
  );
}
