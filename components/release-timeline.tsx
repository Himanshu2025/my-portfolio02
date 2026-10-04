import clsx from "clsx";

import { experiences, versionOf } from "@/config/experience";

export default function ReleaseTimeline() {
  return (
    <nav aria-label="Releases" className="border-b border-line py-10">
      <ol className="-mx-5 flex overflow-x-auto px-5 sm:mx-0 sm:px-0">
        {experiences.map((e, i) => {
          const version = versionOf(e.dateRange);
          const current = i === 0;

          return (
            <li key={version} className="min-w-[150px] flex-1">
              <a className="group block pr-4" href={`#release-${version}`}>
                <span className="relative block h-3">
                  <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-line" />
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "absolute left-0 top-0 h-3 w-3 border-2",
                      current ? "border-tag bg-tag" : "border-ink bg-paper group-hover:bg-ink",
                    )}
                  />
                </span>
                <span
                  className={clsx(
                    "mt-4 block text-lg font-extrabold tracking-[-0.02em]",
                    current ? "text-tag" : "group-hover:text-tag",
                  )}
                >
                  {version}
                </span>
                <span className="mt-0.5 block text-sm text-soft">{e.short}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
