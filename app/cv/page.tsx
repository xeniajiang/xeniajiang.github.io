import { Header } from "@/components/Header";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/src/data/siteContent";

export default function CvPlaceholder() {
  return (
    <>
      <Header content={siteContent} />
      <main className="page-transition inner-page placeholder-route">
        <PageIntro
          kicker={siteContent.cvPage.kicker}
          title={siteContent.cvPage.title}
          introduction={siteContent.cvPage.body}
        />
      </main>
    </>
  );
}
