"use client";

import React from "react";
import { motion } from "framer-motion";

export type WorkExperience = {
  company: string;
  role: string;
  dateRange?: string;
  bullets: string[];
  accent?: string; // key: "emerald" | "amber" | "sky" | "indigo" etc.
};

/* ---- accent-colour lookup (same pattern as project-card) ---- */
const ACCENT_MAP: Record<string, { line: string; dot: string; badge: string }> = {
  emerald: {
    line: "bg-emerald-400",
    dot: "bg-emerald-400 ring-emerald-400/20",
    badge: "bg-emerald-400/10 text-emerald-400 ring-emerald-400/20",
  },
  amber: {
    line: "bg-amber-400",
    dot: "bg-amber-400 ring-amber-400/20",
    badge: "bg-amber-400/10 text-amber-400 ring-amber-400/20",
  },
  sky: {
    line: "bg-sky-400",
    dot: "bg-sky-400 ring-sky-400/20",
    badge: "bg-sky-400/10 text-sky-400 ring-sky-400/20",
  },
  indigo: {
    line: "bg-indigo-400",
    dot: "bg-indigo-400 ring-indigo-400/20",
    badge: "bg-indigo-400/10 text-indigo-400 ring-indigo-400/20",
  },
};

const fallback = {
  line: "bg-default-300",
  dot: "bg-default-400 ring-default-200",
  badge: "bg-default-100 text-default-500 ring-default-200",
};

function resolveAccent(accent?: string) {
  if (!accent) return fallback;
  return ACCENT_MAP[accent] ?? fallback;
}

export default function WorkExperienceCard({
  work,
  index = 0,
  isLast = false,
}: {
  work: WorkExperience;
  index?: number;
  isLast?: boolean;
}) {
  const colors = resolveAccent(work.accent);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative flex gap-5 sm:gap-8"
    >
      {/* ---- Timeline spine ---- */}
      <div className="relative flex flex-col items-center pt-1.5" aria-hidden="true">
        {/* Dot */}
        <span
          className={`z-10 h-3 w-3 shrink-0 rounded-full ring-4 ring-background ${colors.dot}`}
        />
        {/* Connecting line */}
        {!isLast && (
          <span className={`mt-1 w-px flex-1 ${colors.line} opacity-20`} />
        )}
      </div>

      {/* ---- Card ---- */}
      <div
        className={`
          group relative flex-1 mb-8 overflow-hidden rounded-2xl
          border border-default-200/50
          bg-default-50/50 dark:bg-default-50/[0.03]
          backdrop-blur-sm
          transition-all duration-300 ease-out
          hover:border-default-300/70 hover:shadow-lg hover:shadow-default-200/10
          dark:hover:shadow-none dark:hover:border-default-200/30
          hover:-translate-y-0.5
        `}
      >
        {/* Header */}
        <div className="px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                {work.company}
              </h3>
              <p className="mt-0.5 text-sm text-default-500">{work.role}</p>
            </div>

            {work.dateRange && (
              <span
                className={`inline-flex items-center self-start whitespace-nowrap rounded-md px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${colors.badge}`}
              >
                {work.dateRange}
              </span>
            )}
          </div>
        </div>

        {/* Bullet points */}
        <div className="px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
          <ul className="flex flex-col gap-2.5">
            {work.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-default-500">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-default-400" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
