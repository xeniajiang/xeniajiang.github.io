"use client";

import { useState } from "react";
import type { SiteContent, ThemeId } from "@/src/data/siteContent";
import { ResearchAgendas } from "./ResearchAgendas";
import { ResearchList } from "./ResearchList";
import { TextSection } from "./TextSection";
import { ThemeIndex } from "./ThemeIndex";
import { WritingList } from "./WritingList";

export function ThemedWork({ content }: { content: SiteContent }) {
  const [activeTheme, setActiveTheme] = useState<ThemeId | null>(null);

  return (
    <>
      <ThemeIndex
        options={content.themeOptions}
        activeTheme={activeTheme}
        onChange={setActiveTheme}
      />
      <ResearchList
        heading={content.interface.researchHeading}
        projects={content.research}
        statement={content.person.introduction[2]}
        activeTheme={activeTheme}
      />
      <ResearchAgendas
        heading={content.interface.researchAgendasHeading}
        agendas={content.researchAgendas}
        activeTheme={activeTheme}
      />
      <TextSection
        heading="Writing"
        paragraphs={[content.person.introduction[3]]}
        className="writing-profile"
        id="writing"
      />
      <WritingList
        heading="Selected Writing"
        arrowSymbol={content.interface.arrowSymbol}
        writing={content.selectedWriting}
        activeTheme={activeTheme}
      />
    </>
  );
}
