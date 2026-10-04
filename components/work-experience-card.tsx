import type { Experience } from "@/config/experience";

import { versionOf } from "@/config/experience";

const FIGURE = /(~?\d+(?:–\d+)?%|\d+\+|\bhalved\b)/g;

function highlightFigures(text: string) {
  return text.split(FIGURE).map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="bg-tag-wash px-[3px] font-semibold text-tag">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export default function WorkExperienceCard({ work }: { work: Experience }) {
  const version = versionOf(work.dateRange);

  return (
    <article
      className="grid scroll-mt-20 gap-x-8 gap-y-4 border-b border-line py-8 last:border-b-0 last:pb-0 md:grid-cols-[180px_minmax(0,1fr)]"
      id={`release-${version}`}
    >
      <div>
        <p className="text-[22px] font-extrabold leading-none tracking-[-0.02em] text-tag">{version}</p>
        <p className="mt-2 font-mono text-sm text-soft">{work.dateRange}</p>
      </div>

      <div className="min-w-0">
        <h3 className="text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
          {work.company}
          <span className="font-medium text-soft"> · {work.role}</span>
        </h3>

        {work.bullets.length > 0 && (
          <ul className="mt-4 max-w-[70ch]">
            {work.bullets.map((b, i) => (
              <li key={i} className="relative py-1.5 pl-[30px] leading-relaxed text-ink">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 grid h-[22px] w-5 place-items-center bg-added-wash font-mono text-sm font-bold text-added"
                >
                  +
                </span>
                {highlightFigures(b)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
