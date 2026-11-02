import type { ConferenceItem } from "@/src/data/siteContent";

export function Conferences({
  heading,
  conferences,
}: {
  heading: string;
  conferences: readonly ConferenceItem[];
}) {
  return (
    <section className="site-shell conferences-section" id="conferences">
      <h2 className="section-heading">{heading}</h2>
      <div className="conference-list">
        {conferences.map((item) => (
          <article className="conference-row" key={item.number}>
            <span className="conference-number" aria-hidden="true">
              {item.number}
            </span>
            <span className="conference-copy">
              <span className="conference-project">{item.projectTitle}</span>
              <span className="conference-event">{item.conference}</span>
              <span className="conference-status">{item.status}</span>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
