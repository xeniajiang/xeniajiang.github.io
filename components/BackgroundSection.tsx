import { TransitionLink } from "./TransitionLink";

type ContactItem = {
  label: string;
  value: string;
  detail?: string;
  href: string;
};

type EducationItem =
  | string
  | {
      primary: string;
      details?: readonly string[];
    };

export function BackgroundSection({
  content,
}: {
  content: {
    heading: string;
    educationHeading: string;
    education: readonly EducationItem[];
    contactHeading: string;
    contactItems: readonly ContactItem[];
  };
}) {
  return (
    <section
      className="site-shell background-section"
      id="background"
      aria-label={content.heading}
    >
      <div className="background-columns">
        <section>
          <h2>{content.educationHeading}</h2>
          <ul className="education-list">
            {content.education.map((item) => (
              <li key={typeof item === "string" ? item : item.primary}>
                <span className="education-primary">
                  {typeof item === "string" ? item : item.primary}
                </span>
                {typeof item !== "string" &&
                  item.details?.map((detail) => (
                    <span className="education-secondary" key={detail}>
                      {detail}
                    </span>
                  ))}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{content.contactHeading}</h2>
          <dl>
            {content.contactItems.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  {item.href ? (
                    <TransitionLink href={item.href}>
                      <span className="contact-value">{item.value}</span>
                      {item.detail && (
                        <span className="contact-detail">{item.detail}</span>
                      )}
                    </TransitionLink>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
