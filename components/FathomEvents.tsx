"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fathom?: {
      trackEvent: (name: string, opts?: { _value?: number }) => void;
    };
  }
}

export default function FathomEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("http")) return;

      // Skip same-domain links
      try {
        const url = new URL(href);
        if (url.hostname === window.location.hostname) return;

        const name = url.hostname.replace("www.", "");
        window.fathom?.trackEvent(`Click: ${name}`);
      } catch {
        // invalid URL, ignore
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
