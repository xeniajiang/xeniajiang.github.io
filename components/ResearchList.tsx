"use client";

import { useState } from "react";
import type { ResearchProject, ThemeId } from "@/src/data/siteContent";
import { InlineText } from "./InlineText";

export function ResearchList({
  heading,
  projects,
  statement,
  activeTheme = null,
}: {
  heading: string;
  projects: readonly ResearchProject[];
  statement?: string;
  activeTheme?: ThemeId | null;
}) {
  const [isDetailed, setIsDetailed] = useState(false);

  return (
    <section
      className={`site-shell content-section${isDetailed ? "" : " is-compact"}`}
      id="research"
    >
      <div className="section-heading-with-controls">
        <h2 className="section-heading">{heading}</h2>
        <button
          aria-controls="research-projects"
          aria-expanded={isDetailed}
          className="details-toggle"
          onClick={() => setIsDetailed((current) => !current)}
          type="button"
        >
          {isDetailed ? "Hide details" : "Show details"}
        </button>
      </div>
      <div className="research-list" id="research-projects">
        {projects.map((project) => (
          <article
            className={`research-row themed-item${
              activeTheme
                ? project.themes?.includes(activeTheme)
                  ? " is-theme-match"
                  : " is-theme-nonmatch"
                : ""
            }`}
            id={project.href.slice(1)}
            key={project.number}
          >
            <span className="research-number" aria-hidden="true">
              {project.number}
            </span>
            <span className="research-copy">
              <span className="research-title">{project.title}</span>
              <span className="research-subtitle">{project.subtitle}</span>
              {project.status && (
                <span className="research-status">{project.status}</span>
              )}
              {isDetailed && (
                <span className="research-description">
                  {project.description}
                </span>
              )}
            </span>
          </article>
        ))}
      </div>
      {statement && (
        <p className="research-agenda-statement">
          <InlineText text={statement} />
        </p>
      )}
    </section>
  );
}
