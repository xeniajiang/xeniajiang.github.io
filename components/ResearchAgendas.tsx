"use client";

import { useState } from "react";
import type { ResearchAgenda, ThemeId } from "@/src/data/siteContent";

export function ResearchAgendas({
  heading,
  agendas,
  activeTheme = null,
}: {
  heading: string;
  agendas: readonly ResearchAgenda[];
  activeTheme?: ThemeId | null;
}) {
  const [isDetailed, setIsDetailed] = useState(false);

  return (
    <section
      className={`site-shell agendas-section${isDetailed ? "" : " is-compact"}`}
      aria-labelledby="agendas-title"
    >
      <div className="section-heading-with-controls">
        <h2 className="section-heading" id="agendas-title">
          {heading}
        </h2>
        <button
          aria-controls="research-agenda-items"
          aria-expanded={isDetailed}
          className="details-toggle"
          onClick={() => setIsDetailed((current) => !current)}
          type="button"
        >
          {isDetailed ? "Hide details" : "Show details"}
        </button>
      </div>
      <div className="agenda-grid" id="research-agenda-items">
        {agendas.map((agenda) => (
          <article
            className={`agenda-item themed-item${
              activeTheme
                ? agenda.themes?.includes(activeTheme)
                  ? " is-theme-match"
                  : " is-theme-nonmatch"
                : ""
            }`}
            id={agenda.href.slice(1)}
            key={agenda.number}
          >
            <span className="agenda-number" aria-hidden="true">
              {agenda.number}
            </span>
            <span className="agenda-copy">
              <span className="agenda-title">{agenda.title}</span>
              {agenda.subtitle && (
                <span className="agenda-subtitle">{agenda.subtitle}</span>
              )}
              {isDetailed && (
                <span className="agenda-description">{agenda.description}</span>
              )}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
