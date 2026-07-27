import type { DialogueItem } from "@/src/data/siteContent";
import { TransitionLink } from "./TransitionLink";

export function DialoguesList({
  heading,
  items,
}: {
  heading: string;
  items: readonly DialogueItem[];
}) {
  return (
    <section className="site-shell dialogues-section">
      <details>
        <summary>
          <span className="section-heading">{heading}</span>
          <span className="dialogues-toggle">View full list</span>
        </summary>
        <ol className="dialogues-list">
          {items.map((item) => {
            const label = (
              <>
                <span className="dialogue-source">
                  {item.author}
                  {item.year ? ` (${item.year})` : ""}
                </span>
                <span aria-hidden="true"> — </span>
                <span lang="zh-CN">{item.title}</span>
              </>
            );

            return (
              <li key={`${item.author}-${item.title}`}>
                {item.href ? (
                  <TransitionLink href={item.href}>{label}</TransitionLink>
                ) : (
                  label
                )}
              </li>
            );
          })}
        </ol>
      </details>
    </section>
  );
}
