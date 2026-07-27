"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/src/data/siteContent";
import { TransitionLink } from "./TransitionLink";

type HeaderContent = {
  site: { homeHref: string };
  person: {
    englishName: string;
    chineseName: string;
    nameSeparator: string;
  };
  navigation: readonly NavigationItem[];
  language?: { label: string; href: string };
  accessibility: {
    homeLabel: string;
    primaryNavigationLabel: string;
    mobileNavigationLabel: string;
  };
  interface: {
    menuOpenLabel: string;
    menuClosedLabel: string;
  };
};

export function Header({ content }: { content: HeaderContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isSinglePage = pathname === "/" || pathname === "/zh";

  const closeMenu = () => setIsOpen(false);
  const isCurrent = (href: string) =>
    href.startsWith("#")
      ? isSinglePage && activeSection === href
      : pathname === href;

  useEffect(() => {
    if (!isSinglePage) return;

    const sectionLinks = content.navigation.filter((item) =>
      item.href.startsWith("#"),
    );
    const sections = sectionLinks
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const updateActiveSection = () => {
      const activationLine =
        window.scrollY + Math.min(window.innerHeight * 0.3, 220);
      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      let currentSection = "";

      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= activationLine) {
          currentSection = `#${section.id}`;
        }
      }

      if (isAtPageEnd && sections.length > 0) {
        currentSection = `#${sections[sections.length - 1].id}`;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [content.navigation, isSinglePage]);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <TransitionLink
          className="wordmark"
          href={content.site.homeHref}
          aria-label={content.accessibility.homeLabel}
        >
          {content.person.englishName} {content.person.nameSeparator}{" "}
          {content.person.chineseName}
        </TransitionLink>
        <nav
          className="desktop-nav"
          aria-label={content.accessibility.primaryNavigationLabel}
        >
          {content.navigation.map((item) => (
            <TransitionLink
              className={`nav-link${isCurrent(item.href) ? " is-current" : ""}`}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              key={item.label}
            >
              {item.label}
            </TransitionLink>
          ))}
          {content.language && (
            <TransitionLink
              className={`language-link${
                isCurrent(content.language.href) ? " is-current" : ""
              }`}
              href={content.language.href}
              aria-current={
                isCurrent(content.language.href) ? "page" : undefined
              }
              lang="zh-CN"
            >
              {content.language.label}
            </TransitionLink>
          )}
        </nav>
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen
            ? content.interface.menuOpenLabel
            : content.interface.menuClosedLabel}
        </button>
        <nav
          className={`mobile-nav${isOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-label={content.accessibility.mobileNavigationLabel}
        >
          {content.navigation.map((item) => (
            <TransitionLink
              className={isCurrent(item.href) ? "is-current" : undefined}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              key={item.label}
              onClick={closeMenu}
            >
              {item.label}
            </TransitionLink>
          ))}
          {content.language && (
            <TransitionLink
              className={
                isCurrent(content.language.href) ? "is-current" : undefined
              }
              href={content.language.href}
              aria-current={
                isCurrent(content.language.href) ? "page" : undefined
              }
              lang="zh-CN"
              onClick={closeMenu}
            >
              {content.language.label}
            </TransitionLink>
          )}
        </nav>
      </div>
    </header>
  );
}
