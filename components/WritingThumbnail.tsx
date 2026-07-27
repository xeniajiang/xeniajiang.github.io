"use client";

import { useState } from "react";

export function WritingThumbnail({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`writing-thumbnail${failed ? " is-fallback" : ""}`}
      aria-hidden={failed ? "true" : undefined}
    >
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element -- direct loading is required to provide a graceful missing-image fallback
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </span>
  );
}
