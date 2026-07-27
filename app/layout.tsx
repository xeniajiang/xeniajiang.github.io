import type { Metadata } from "next";
import { siteContent } from "@/src/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}
