import { InlineText } from "./InlineText";

export function TextSection({
  heading,
  paragraphs,
  className = "",
  id,
}: {
  heading: string;
  paragraphs: readonly string[];
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={`site-shell text-section ${className}`.trim()}
      id={id}
    >
      <h2 className="section-heading">{heading}</h2>
      <div className="text-section-copy">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <InlineText text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}
