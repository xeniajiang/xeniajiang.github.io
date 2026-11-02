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
            <div className="conference-meta">
              <time className="conference-date">{item.date}</time>
              <span className="conference-number" aria-hidden="true">
                {item.number}
              </span>
            </div>
            <h3 className="conference-project">{item.projectTitle}</h3>
            <p className="conference-event">{item.conference}</p>
            <p className="conference-location">{item.location}</p>
            <p className="conference-status">{item.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
