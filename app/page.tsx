import type { Metadata } from "next";
import { BackgroundSection } from "@/components/BackgroundSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InlineText } from "@/components/InlineText";
import { ThemedWork } from "@/components/ThemedWork";
import { TransitionLink } from "@/components/TransitionLink";
import { contact, siteContent } from "@/src/data/siteContent";

export const metadata: Metadata = {
  title: {
    absolute: siteContent.site.homeMetadata.title,
  },
  description: siteContent.site.homeMetadata.description,
  alternates: {
    canonical: siteContent.site.homeMetadata.url,
  },
  openGraph: {
    type: "profile",
    title: siteContent.site.homeMetadata.title,
    description: siteContent.site.homeMetadata.description,
    url: siteContent.site.homeMetadata.url,
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
    title: siteContent.site.homeMetadata.title,
    description: siteContent.site.homeMetadata.description,
    images: [siteContent.site.homeMetadata.image],
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteContent.site.homeMetadata.url}#website`,
  url: siteContent.site.homeMetadata.url,
  name: siteContent.site.homeMetadata.siteName,
  alternateName: siteContent.site.homeMetadata.alternateNames,
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteContent.site.homeMetadata.url}#profile`,
  url: siteContent.site.homeMetadata.url,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteContent.site.homeMetadata.url}#person`,
    name: siteContent.person.englishName,
    alternateName: [siteContent.person.chineseName],
    url: siteContent.site.homeMetadata.url,
    image: siteContent.site.homeMetadata.image,
    jobTitle: siteContent.person.role,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: siteContent.person.institution,
    },
    sameAs: [contact.orcid, contact.linkedin],
    description: siteContent.site.homeMetadata.profileDescription,
  },
};

function serializeStructuredData(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(profileStructuredData),
        }}
      />
      <Header content={siteContent} />
      <main className="page-transition">
        <Hero
          person={siteContent.person}
          introduction={siteContent.home.introduction}
        />
        <p className="site-shell home-writer-introduction">
          {siteContent.selectedWriting[0].originalUrl ? (
            <TransitionLink href={siteContent.selectedWriting[0].originalUrl}>
              <InlineText text={siteContent.home.publicWriterIntroduction} />
            </TransitionLink>
          ) : (
            <InlineText text={siteContent.home.publicWriterIntroduction} />
          )}
        </p>
        <ThemedWork content={siteContent} />
        <BackgroundSection content={siteContent.background} />
      </main>
    </>
  );
}
