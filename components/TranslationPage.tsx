import type { SelectedWritingItem } from "@/src/data/siteContent";
import { siteContent } from "@/src/data/siteContent";
import { Header } from "./Header";
import { TransitionLink } from "./TransitionLink";

const profileUrl = siteContent.site.profileMetadata.url;

const articleHeaderContent = {
  ...siteContent,
  navigation: siteContent.navigation.map((item) => ({
    ...item,
    href: `/${item.href}`,
  })),
};

function serializeStructuredData(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function TranslationPage({
  item,
  children,
  forthcoming = false,
  deck,
}: {
  item: SelectedWritingItem;
  children?: React.ReactNode;
  forthcoming?: boolean;
  deck?: React.ReactNode;
}) {
  const articleUrl = new URL(
    item.translationUrl,
    siteContent.site.homeMetadata.url,
  ).href;
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    headline: item.titleEn,
    alternativeHeadline: item.subtitleEn,
    datePublished: item.date,
    author: {
      "@type": "Person",
      "@id": `${siteContent.site.homeMetadata.url}#person`,
      name: siteContent.person.englishName,
      url: profileUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(articleStructuredData),
        }}
      />
      <Header content={articleHeaderContent} />
      <main
        className={`article-page${
          forthcoming ? " translation-placeholder" : ""
        }`}
      >
        <article className="site-shell article-shell">
          <TransitionLink
            className="article-back"
            href={`/#writing-${item.id}`}
            instantHash
            pageDirection="back"
            historyBack
          >
            {siteContent.interface.translationBackLabel}
          </TransitionLink>
          <header className="article-header">
            <h1>{item.titleEn}</h1>
            <p className="article-deck">{deck ?? item.subtitleEn}</p>
            <time className="article-date" dateTime={item.date}>
              {item.date}
            </time>
            {forthcoming && (
              <p className="translation-status">
                {siteContent.interface.translationForthcomingLabel}
              </p>
            )}
          </header>
          {children}
          <nav className="article-end-navigation" aria-label="Article navigation">
            <TransitionLink
              className="article-back article-back-bottom"
              href={`/#writing-${item.id}`}
              instantHash
              pageDirection="back"
              historyBack
            >
              {siteContent.interface.translationBackLabel}
            </TransitionLink>
          </nav>
        </article>
      </main>
    </>
  );
}
