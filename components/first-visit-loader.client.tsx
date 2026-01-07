"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./intro-loader.client";

export default function FirstVisitLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const isHome = window.location.pathname === "/";
      // Detect reload navigation (performance navigation API)
      const navEntries = typeof performance.getEntriesByType === "function" ? (performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]) : [];
      const navType = (navEntries && (navEntries[0] as PerformanceNavigationTiming | undefined)?.type) || ((performance as any).navigation && (performance as any).navigation.type === 1 ? "reload" : "navigate");

      // Show loader when user reloads the homepage
      if (isHome && navType === "reload") {
        // small delay to allow the page to hydrate before showing overlay
        setTimeout(() => setShow(true), 80);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  if (!show) return null;

  return (
    <IntroLoader
      tagline={"Crafting scalable web experiences"}
      duration={3000}
      onComplete={() => {
        // simply hide after completion; do not persist so it can show on future reloads
        setShow(false);
      }}
    />
  );
}
