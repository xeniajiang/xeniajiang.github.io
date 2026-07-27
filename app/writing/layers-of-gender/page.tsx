import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/layers-of-gender.en.md?raw";
import frameworkSvg from "@/translations/layers-of-gender-framework.en.svg?raw";

const article = selectedWriting[1];

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function LayersOfGenderTranslationPage() {
  return (
    <TranslationPage item={article}>
      <ArticleMarkdown
        source={articleMarkdown}
        figure={
          <figure
            className="article-figure"
            dangerouslySetInnerHTML={{ __html: frameworkSvg }}
          />
        }
      />
    </TranslationPage>
  );
}
