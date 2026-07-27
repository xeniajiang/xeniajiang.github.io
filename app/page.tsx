import type { Metadata } from "next";
import { BackgroundSection } from "@/components/BackgroundSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InlineText } from "@/components/InlineText";
import { ThemedWork } from "@/components/ThemedWork";
import { TransitionLink } from "@/components/TransitionLink";
import { siteContent } from "@/src/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.site.homeMetadata.title,
  description: siteContent.site.homeMetadata.description,
};

export default function Home() {
  return (
    <>
      <Header content={siteContent} />
      <main className="page-transition">
        <Hero
          person={siteContent.person}
          introduction={siteContent.home.introduction}
        />
        <p className="site-shell home-writer-introduction">
          {siteContent.selectedWriting[0].url ? (
            <TransitionLink href={siteContent.selectedWriting[0].url}>
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
