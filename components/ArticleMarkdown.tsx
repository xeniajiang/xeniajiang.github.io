import { Fragment, type ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.+?\*\*|\*.+?\*)/g);

  return parts
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }

      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      }

      return <Fragment key={index}>{part}</Fragment>;
    });
}

export function ArticleMarkdown({
  source,
  figure,
  figures,
}: {
  source: string;
  figure?: ReactNode;
  figures?: Record<string, ReactNode>;
}) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let quoteParagraphs: string[][] = [];
  let quoteParagraph: string[] = [];
  let skippedTitle = false;
  let skippedSubtitle = false;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push(
      <p key={`p-${blocks.length}`}>
        {renderInline(paragraph.join(" "))}
      </p>,
    );
    paragraph = [];
  };

  const flushQuoteParagraph = () => {
    if (quoteParagraph.length === 0) return;
    quoteParagraphs.push(quoteParagraph);
    quoteParagraph = [];
  };

  const flushQuote = () => {
    flushQuoteParagraph();
    if (quoteParagraphs.length === 0) return;
    blocks.push(
      <blockquote key={`quote-${blocks.length}`}>
        {quoteParagraphs.map((linesInParagraph, index) => (
          <p key={index}>{renderInline(linesInParagraph.join(" "))}</p>
        ))}
      </blockquote>,
    );
    quoteParagraphs = [];
  };

  for (const line of lines) {
    if (!skippedTitle && line.startsWith("# ")) {
      skippedTitle = true;
      continue;
    }

    if (skippedTitle && !skippedSubtitle && line.startsWith("## ")) {
      skippedSubtitle = true;
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      const quoteLine = line.replace(/^>\s?/, "");
      if (quoteLine) {
        quoteParagraph.push(quoteLine);
      } else {
        flushQuoteParagraph();
      }
      continue;
    }

    flushQuote();

    if (line.trim() === "[[FIGURE_PLACEHOLDER]]") {
      flushParagraph();
      if (figure) {
        blocks.push(
          <Fragment key={`figure-${blocks.length}`}>{figure}</Fragment>,
        );
      }
      continue;
    }

    const namedFigure = line.trim().match(/^\[\[FIGURE:([a-z0-9-]+)\]\]$/i);
    if (namedFigure) {
      flushParagraph();
      const content = figures?.[namedFigure[1]];
      if (content) {
        blocks.push(
          <Fragment key={`figure-${blocks.length}`}>{content}</Fragment>,
        );
      }
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push(
        <h2 key={`h2-${blocks.length}`}>
          {renderInline(line.slice(3))}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      blocks.push(
        <h3 key={`h3-${blocks.length}`}>
          {renderInline(line.slice(4))}
        </h3>,
      );
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushQuote();

  return <div className="article-body">{blocks}</div>;
}
