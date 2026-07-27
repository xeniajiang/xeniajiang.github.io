import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/between-silence-and-silence.en.md?raw";

const article = selectedWriting.find(
  (item) => item.id === "between-silence-and-silence",
)!;

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function BetweenSilenceAndSilenceTranslationPage() {
  return (
    <TranslationPage
      item={article}
      deck={
        <>
          Lesbian Subjectivity and Micro-Resistance in <em>Shanghai Lalas</em>
        </>
      }
    >
      <ArticleMarkdown source={articleMarkdown} />
    </TranslationPage>
  );
}
