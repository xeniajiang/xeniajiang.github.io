"use client";

import type { ThemeId } from "@/src/data/siteContent";

export function ThemeIndex({
  options,
  activeTheme,
  onChange,
}: {
  options: readonly { id: ThemeId; label: string }[];
  activeTheme: ThemeId | null;
  onChange: (theme: ThemeId | null) => void;
}) {
  return (
    <section
      className="site-shell themes-section"
      aria-labelledby="themes-title"
    >
      <h2 className="section-heading" id="themes-title">
        Research Keywords
      </h2>
      <div
        className="theme-filters"
        id="theme-filters"
        aria-label="Filter work by research keyword"
      >
        <button
          className={`theme-filter${activeTheme === null ? " is-active" : ""}`}
          type="button"
          aria-pressed={activeTheme === null}
          onClick={() => onChange(null)}
        >
          All
        </button>
        {options.map((theme) => {
          const isActive = activeTheme === theme.id;

          return (
            <button
              className={`theme-filter${isActive ? " is-active" : ""}`}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(isActive ? null : theme.id)}
              key={theme.id}
            >
              {theme.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
