import React from "react";

export type WorkExperience = {
  company: string;
  role: string;
  dateRange?: string;
  bullets: string[];
};

const FIGURE = /(~?\d+(?:–\d+)?%|\d+\+|\bhalved\b)/g;

function highlightFigures(text: string) {
  return text.split(FIGURE).map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="bg-cover px-0.5 font-semibold text-ink">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export default function WorkExperienceCard({ work }: { work: WorkExperience }) {
  const isCurrent = work.dateRange?.includes("Present");

  return (
    <article className="grid grid-cols-12 gap-x-5 gap-y-5 border-t-[3px] border-ink py-8 sm:py-10">
      <header className="col-span-12 lg:col-span-5">
        {work.dateRange && (
          <p className="flex items-center gap-2 font-stretch-condensed text-[13px] font-bold uppercase tracking-[0.06em]">
            {isCurrent && <span className="bg-cover px-1.5 py-0.5">Now</span>}
            {work.dateRange}
          </p>
        )}
        <h3 className="mt-3 font-stretch-expanded text-3xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance sm:text-4xl">
          {work.company}
        </h3>
        <p className="mt-2 text-lg font-medium">{work.role}</p>
      </header>

      {work.bullets.length > 0 && (
        <ul className="col-span-12 flex max-w-[68ch] flex-col gap-3 lg:col-span-7">
          {work.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[17px] leading-relaxed text-ink-soft">
              <span aria-hidden="true" className="mt-[0.7em] h-[3px] w-3 shrink-0 bg-ink" />
              <span>{highlightFigures(b)}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
