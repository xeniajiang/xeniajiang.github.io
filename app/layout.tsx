import type { Metadata } from "next";
import { contact, siteContent } from "@/src/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteContent.site.metadata.defaultTitle,
    template: siteContent.site.metadata.titleTemplate,
  },
  description: siteContent.site.metadata.description,
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.person.englishName,
  alternateName: siteContent.person.chineseName,
  url: "https://xeniajiang.github.io/",
  jobTitle: siteContent.person.role,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: siteContent.person.institution,
  },
  sameAs: [contact.orcid, contact.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteContent.site.locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
