import { InlineText } from "./InlineText";

type PersonContent = {
  englishName: string;
  chineseName: string;
  nameSeparator: string;
  role: string;
  institution: string;
  introduction: readonly string[];
  portrait: string;
  portraitAlt: string;
};

export function Hero({
  person,
  introduction = person.introduction,
}: {
  person: PersonContent;
  introduction?: readonly string[];
}) {
  return (
    <section className="hero" id="biography" aria-labelledby="hero-title">
      <div className="hero-image-wrap">
        {/* Replace the portrait at public/images/portrait.png. */}
        {/* eslint-disable-next-line @next/next/no-img-element -- the supplied portrait is already an optimized local asset */}
        <img
          className="hero-image"
          src={person.portrait}
          alt={person.portraitAlt}
          width="1024"
          height="1365"
        />
      </div>
      <div className="hero-identity">
        <h1 className="hero-title" id="hero-title">
          {person.englishName}
        </h1>
        <p className="hero-chinese-name" lang="zh-CN">
          {person.chineseName}
        </p>
        <div className="eyebrow-group">
          <span>{person.role}</span>
          <span>{person.institution}</span>
        </div>
      </div>
      <div className="hero-introduction">
        {introduction.map((paragraph) => (
          <p key={paragraph}>
            <InlineText text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}
