import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export function TransitionLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
