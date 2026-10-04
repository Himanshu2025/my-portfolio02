"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import { experiences, versionOf } from "@/config/experience";

const releases = experiences.map((e, i) => ({
  version: versionOf(e.dateRange),
  label: e.short,
  href: i === 0 ? "#home" : `#release-${versionOf(e.dateRange)}`,
}));

export default function ReleaseRail() {
  const [active, setActive] = useState(releases[0].href);

  useEffect(() => {
    const targets = releases
      .map((r) => document.getElementById(r.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);

        if (visible.length) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Releases" className="sticky top-14 hidden self-start pt-12 lg:block">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-soft">Releases</h2>
      <ol>
        {releases.map((r) => (
          <li key={r.version}>
            <a
              aria-current={active === r.href ? "location" : undefined}
              className={clsx(
                "flex items-baseline justify-between gap-3 px-2.5 py-2 text-sm transition-colors",
                active === r.href ? "bg-tag text-paper" : "text-ink hover:bg-wash",
              )}
              href={r.href}
            >
              <span className="font-extrabold tabular-nums">{r.version}</span>
              <span className={clsx("truncate", active === r.href ? "text-[#dfe5ff]" : "text-soft")}>
                {r.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
