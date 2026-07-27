"use client";

import { useState } from "react";
import type {
  SelectedWritingItem,
  ThemeId,
} from "@/src/data/siteContent";
import { TransitionLink } from "./TransitionLink";

export function WritingList({
  heading,
  writing,
  activeTheme = null,
}: {
  heading: string;
  writing: readonly SelectedWritingItem[];
  activeTheme?: ThemeId | null;
}) {
  const [language, setLanguage] = useState<"zh" | "en">("en");
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
    const isEnglish = language === "en";
    const title = isEnglish ? item.titleEn : item.titleZh;
    const subtitle = isEnglish ? item.subtitleEn : item.subtitleZh;
    const primaryHref = isEnglish
      ? item.translationUrl
      : item.originalUrl;
    const isLinked = Boolean(primaryHref);
    const primaryContent = (
      <>
        <span className="writing-index" aria-hidden="true">
          <span className="writing-number">
            {String(item.order).padStart(2, "0")}
          </span>
          {isFeatured && <span className="writing-star">☆</span>}
        </span>
        <span className="writing-language" lang={isEnglish ? "en" : "zh-CN"}>
          <span className="writing-title">{title}</span>
          <span className="writing-subtitle">{subtitle}</span>
        </span>
      </>
    );

    return (
      <article
        className={`writing-row${isLinked ? " is-linked" : ""} themed-item${featuredClass}${themeClass}`}
        id={`writing-${item.id}`}
        key={item.id}
      >
        {isLinked ? (
          <TransitionLink
            className="writing-primary-link"
            href={primaryHref}
            pageDirection={isEnglish ? "forward" : undefined}
            aria-label={
              isEnglish
                ? `Read the English translation of ${item.titleEn}`
                : `阅读中文原文：${item.titleZh}`
            }
          >
            {primaryContent}
          </TransitionLink>
        ) : (
          <div
            className="writing-primary-link is-disabled"
            aria-disabled="true"
          >
            {primaryContent}
          </div>
        )}
        <div className="writing-end">
          <time className="writing-meta" dateTime={item.date}>
            {item.date}
          </time>
          {isLinked && (
            <span className="row-arrow" aria-hidden="true">
              →
            </span>
          )}
        </div>
      </article>
    );
  };

  return (
    <section
      className={`site-shell content-section writing-section${
        activeTheme ? " is-filtering" : ""
      }`}
    >
      <div className="writing-heading-row">
        <h2 className="section-heading">{heading}</h2>
        <div className="writing-language-toggle" aria-label="Writing language">
          <button
            className={language === "zh" ? "is-active" : ""}
            type="button"
            aria-pressed={language === "zh"}
            onClick={() => setLanguage("zh")}
          >
            中
          </button>
          <span aria-hidden="true">|</span>
          <button
            className={language === "en" ? "is-active" : ""}
            type="button"
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>
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
