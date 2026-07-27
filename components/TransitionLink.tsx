"use client";

import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

export function TransitionLink({
  href,
  children,
  instantHash = false,
  pageDirection,
  historyBack = false,
  onClick,
  ...props
}: {
  href: string;
  children: ReactNode;
  instantHash?: boolean;
  pageDirection?: "forward" | "back";
  historyBack?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      (!instantHash && !pageDirection && !historyBack) ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    if (pageDirection) {
      window.sessionStorage.setItem(
        "xenia:page-direction",
        pageDirection,
      );
    }
    if (instantHash) {
      const target = new URL(href, window.location.href).hash.slice(1);
      window.sessionStorage.setItem("xenia:instant-anchor", "1");
      window.sessionStorage.setItem("xenia:anchor-target", target);
    }

    if (historyBack && document.referrer) {
      const referrer = new URL(document.referrer);
      if (
        referrer.origin === window.location.origin &&
        referrer.pathname === "/"
      ) {
        window.history.back();
        return;
      }
    }

    window.location.assign(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
