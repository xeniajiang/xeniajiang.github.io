import type {
  SelectedWritingItem,
  ThemeId,
} from "@/src/data/siteContent";
import { TransitionLink } from "./TransitionLink";

export function WritingList({
  heading,
  arrowSymbol,
  writing,
  activeTheme = null,
}: {
  heading: string;
  arrowSymbol: string;
  writing: readonly SelectedWritingItem[];
  activeTheme?: ThemeId | null;
}) {
  const orderedWriting = [...writing].sort((a, b) => a.order - b.order);
  const columns = [orderedWriting.slice(0, 6), orderedWriting.slice(6)];

  const renderItem = (item: SelectedWritingItem) => {
    const themeClass = activeTheme
      ? item.themes.includes(activeTheme)
        ? " is-theme-match"
        : " is-theme-nonmatch"
      : "";
    const isFeatured = item.order <= 3;
    const featuredClass = isFeatured ? " is-featured" : "";
    const content = (
      <>
        <span className="writing-index" aria-hidden="true">
          <span className="writing-number">
            {String(item.order).padStart(2, "0")}
          </span>
          {isFeatured && <span className="writing-star">☆</span>}
        </span>
        <span className="writing-language">
          <span className="writing-title">{item.titleEn}</span>
          <span className="writing-subtitle">{item.subtitleEn}</span>
          <span className="writing-end">
            <time className="writing-meta" dateTime={item.date}>
              {item.date}
            </time>
            {item.url && (
              <span className="row-arrow" aria-hidden="true">
                {arrowSymbol}
              </span>
            )}
          </span>
        </span>
      </>
    );

    return item.url ? (
      <TransitionLink
        className={`writing-row is-linked themed-item${featuredClass}${themeClass}`}
        href={item.url}
        id={`writing-${item.id}`}
        key={item.id}
      >
        {content}
      </TransitionLink>
    ) : (
      <article
        className={`writing-row themed-item${featuredClass}${themeClass}`}
        id={`writing-${item.id}`}
        key={item.id}
      >
        {content}
      </article>
    );
  };

  return (
    <section
      className={`site-shell content-section writing-section${
        activeTheme ? " is-filtering" : ""
      }`}
    >
      <h2 className="section-heading">{heading}</h2>
      <div className="writing-list">
        {columns.map((column, index) => (
          <div className="writing-column" key={index}>
            {column.map(renderItem)}
          </div>
        ))}
      </div>
    </section>
  );
}
