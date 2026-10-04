"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./intro-loader.client";

import { experiences, versionOf } from "@/config/experience";

const version = versionOf(experiences[0].dateRange);

export default function FirstVisitLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const isHome = window.location.pathname === "/";
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seen = sessionStorage.getItem("introSeen") === "1";

      if (isHome && !reduced && !seen) {
        sessionStorage.setItem("introSeen", "1");
        setShow(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  if (!show) return null;

  return (
    <IntroLoader
      duration={1000}
      tagline={`installing himanshu@${version}`}
      title={version}
      onComplete={() => setShow(false)}
    />
  );
}
