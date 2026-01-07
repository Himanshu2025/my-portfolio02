"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./intro-loader.client";

export default function FirstVisitLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const isHome = window.location.pathname === "/";

      // Show loader on every visit/reload to the homepage
      if (isHome) {
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
        // Hide after completion; show again on next visit/reload
        setShow(false);
      }}
    />
  );
}
