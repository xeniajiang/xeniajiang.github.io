import type { Metadata } from "next";
import { siteContent } from "@/src/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xeniajiang.github.io/"),
  title: {
    default: siteContent.site.metadata.defaultTitle,
    template: siteContent.site.metadata.titleTemplate,
  },
  description: siteContent.site.metadata.description,
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
          dangerouslySetInnerHTML={{
            __html:
              '(()=>{try{const instant=sessionStorage.getItem("xenia:instant-anchor")==="1";const anchor=sessionStorage.getItem("xenia:anchor-target");const direction=sessionStorage.getItem("xenia:page-direction");if(instant){sessionStorage.removeItem("xenia:instant-anchor");sessionStorage.removeItem("xenia:anchor-target");document.documentElement.dataset.instantAnchor="true";if("scrollRestoration"in history)history.scrollRestoration="manual";const place=()=>{const target=anchor&&document.getElementById(anchor);if(target)target.scrollIntoView({block:"start",behavior:"auto"});document.documentElement.dataset.anchorReady="true";};if(document.readyState==="loading")addEventListener("DOMContentLoaded",place,{once:true});else place();}if(direction==="forward"||direction==="back"){sessionStorage.removeItem("xenia:page-direction");document.documentElement.dataset.pageDirection=direction;}if(instant||direction){addEventListener("load",()=>setTimeout(()=>{document.documentElement.removeAttribute("data-instant-anchor");document.documentElement.removeAttribute("data-anchor-ready");document.documentElement.removeAttribute("data-page-direction");if("scrollRestoration"in history)history.scrollRestoration="auto";},700),{once:true});}}catch{}})();',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
