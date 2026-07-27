import type { Metadata } from "next";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { TranslationPage } from "@/components/TranslationPage";
import { selectedWriting } from "@/src/data/siteContent";
import articleMarkdown from "@/translations/dress-gender-reading.en.md?raw";

const article = selectedWriting.find(
  (item) => item.id === "dress-gender-reading",
)!;

export const metadata: Metadata = {
  title: article.titleEn,
  description: article.subtitleEn,
};

export default function DressGenderReadingTranslationPage() {
  return (
    <TranslationPage item={article}>
      <ArticleMarkdown
        source={articleMarkdown}
        figures={{
          "model-flow": (
            <figure className="article-figure">
              <img
                src="/images/writing/dress-gender-reading/01-model-flow.png"
                width="4000"
                height="2500"
                loading="lazy"
                decoding="async"
                alt="Flowchart showing how anthropometric data enter a gender-reading model."
              />
            </figure>
          ),
          "thigh-circumference": (
            <figure className="article-figure article-figure-wide">
              <img
                src="/images/writing/dress-gender-reading/02-thigh-circumference.png"
                width="2171"
                height="1102"
                loading="lazy"
                decoding="async"
                alt="Comparison of female-leaning reading probabilities with and without thigh circumference."
              />
            </figure>
          ),
          "sensitivity-analysis": (
            <figure className="article-figure">
              <img
                src="/images/writing/dress-gender-reading/03-sensitivity-analysis.png"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
                alt="Sensitivity analysis of bust and hip circumference in the gender-reading model."
              />
            </figure>
          ),
          "ratio-space": (
            <figure className="article-figure">
              <img
                src="/images/writing/dress-gender-reading/04-ratio-space.png"
                width="1524"
                height="1032"
                loading="lazy"
                decoding="async"
                alt="Waist-to-hip ratio and bust-to-waist ratio space with modified and unmodified case positions."
              />
            </figure>
          ),
          "model-boundary-pca": (
            <figure className="article-figure article-figure-wide">
              <img
                src="/images/writing/dress-gender-reading/05-model-boundary-pca.png"
                width="1593"
                height="987"
                loading="lazy"
                decoding="async"
                alt="Reading-probability boundary and principal component analysis of unmodified body space."
              />
            </figure>
          ),
        }}
      />
    </TranslationPage>
  );
}
