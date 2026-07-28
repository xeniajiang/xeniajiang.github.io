import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { InlineText } from "@/components/InlineText";
import { contact, siteContent } from "@/src/data/siteContent";

const profileMetadata = siteContent.site.profileMetadata;
const representativeWriting = [...siteContent.selectedWriting]
  .sort((a, b) => a.order - b.order)
  .slice(0, 6);
const profileHeaderContent = {
  ...siteContent,
  navigation: siteContent.navigation.map((item) => ({
    ...item,
    href: `/${item.href}`,
  })),
};

export const metadata: Metadata = {
  title: {
    absolute: profileMetadata.title,
  },
  description: profileMetadata.description,
  alternates: {
    canonical: profileMetadata.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    title: profileMetadata.title,
    description: profileMetadata.description,
    url: profileMetadata.url,
    siteName: siteContent.site.homeMetadata.siteName,
    images: [
      {
        url: siteContent.site.homeMetadata.image,
        alt: siteContent.person.portraitAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profileMetadata.title,
    description: profileMetadata.description,
    images: [siteContent.site.homeMetadata.image],
  },
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${profileMetadata.url}#profile`,
  url: profileMetadata.url,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteContent.site.homeMetadata.url}#person`,
    name: siteContent.person.englishName,
    alternateName: siteContent.person.chineseName,
    url: siteContent.site.homeMetadata.url,
    image: siteContent.site.homeMetadata.image,
    jobTitle: siteContent.person.role,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: siteContent.person.institution,
    },
    sameAs: [contact.orcid, contact.linkedin],
  },
};

function serializeStructuredData(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function XeniaJiangProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(profileStructuredData),
        }}
      />
      <Header content={profileHeaderContent} />
      <main className="article-page profile-page">
        <article className="site-shell article-shell">
          <a className="article-back profile-home-link" href="/">
            {siteContent.profilePage.homeLabel}
          </a>
          <header className="article-header profile-header">
            <p className="profile-kicker">{siteContent.profilePage.kicker}</p>
            <h1>
              {siteContent.person.englishName}{" "}
              <span aria-hidden="true">/</span>{" "}
              <span lang="zh-CN">{siteContent.person.chineseName}</span>
            </h1>
            <p className="article-deck profile-deck">
              <span>{siteContent.person.role}</span>
              <span>{siteContent.person.institution}</span>
            </p>
          </header>

          <div className="article-body profile-body">
            <div className="profile-biography">
              {siteContent.profilePage.biography.map((paragraph) => (
                <p key={paragraph}>
                  <InlineText text={paragraph} />
                </p>
              ))}
            </div>

            <section className="profile-section" aria-labelledby="profile-research">
              <h2 id="profile-research">
                {siteContent.profilePage.researchHeading}
              </h2>
              <p className="profile-section-introduction">
                <InlineText text={siteContent.person.introduction[2]} />
              </p>
              <p className="profile-section-guide">
                {siteContent.profilePage.researchOverviewLead}{" "}
                <a href={siteContent.profilePage.researchOverviewHref}>
                  {siteContent.profilePage.researchOverviewLabel}
                </a>
              </p>
              <div className="profile-research-list">
                {siteContent.research.map((project) => (
                  <article className="profile-research-entry" key={project.number}>
                    <p className="profile-entry-number">{project.number}</p>
                    <h3>{project.title}</h3>
                    <p className="profile-entry-subtitle">{project.subtitle}</p>
                    {project.status && (
                      <p className="profile-entry-status">{project.status}</p>
                    )}
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="profile-section" aria-labelledby="profile-writing">
              <h2 id="profile-writing">
                {siteContent.profilePage.writingHeading}
              </h2>
              <p className="profile-section-introduction">
                <InlineText text={siteContent.person.introduction[3]} />
              </p>
              <p className="profile-section-guide">
                {siteContent.profilePage.writingOverviewLead}{" "}
                <a href={siteContent.profilePage.writingOverviewHref}>
                  {siteContent.profilePage.writingOverviewLabel}
                </a>
              </p>
              <ul className="profile-writing-list">
                {representativeWriting.map((item) => (
                  <li className="profile-writing-entry" key={item.id}>
                    <span className="profile-writing-number" aria-hidden="true">
                      {String(item.order).padStart(2, "0")}
                    </span>
                    <span className="profile-writing-copy">
                      <span className="profile-writing-title">
                        {item.titleEn}
                      </span>
                      <span className="profile-writing-subtitle">
                        {item.subtitleEn}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
