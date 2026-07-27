import type { SelectedWritingItem } from "@/src/data/siteContent";
import { siteContent } from "@/src/data/siteContent";
import { Header } from "./Header";
import { TransitionLink } from "./TransitionLink";

const articleHeaderContent = {
  ...siteContent,
  navigation: siteContent.navigation.map((item) => ({
    ...item,
    href: `/${item.href}`,
  })),
};

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
  return (
    <>
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
