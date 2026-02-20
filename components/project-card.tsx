"use client";

import React from "react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech?: string[];
  demoLink?: string;
  githubLink?: string;
  accent?: string;
  liveLink?: string;
  password?: string;
};

/* ---- small accent-colour lookup ---- */
const ACCENT_MAP: Record<string, { border: string; dot: string; chip: string }> = {
  emerald: {
    border: "border-t-emerald-400",
    dot: "bg-emerald-400",
    chip: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
  },
  amber: {
    border: "border-t-amber-400",
    dot: "bg-amber-400",
    chip: "bg-amber-400/10 text-amber-300 ring-amber-400/20",
  },
  teal: {
    border: "border-t-teal-400",
    dot: "bg-teal-400",
    chip: "bg-teal-400/10 text-teal-300 ring-teal-400/20",
  },
  sky: {
    border: "border-t-sky-400",
    dot: "bg-sky-400",
    chip: "bg-sky-400/10 text-sky-300 ring-sky-400/20",
  },
};

const fallbackAccent = {
  border: "border-t-default-400",
  dot: "bg-default-400",
  chip: "bg-default-100 text-default-600 ring-default-200",
};

function resolveAccent(accent?: string) {
  if (!accent) return fallbackAccent;
  return ACCENT_MAP[accent] ?? fallbackAccent;
}

/* ---- external-link arrow icon ---- */
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const colors = resolveAccent(project.accent);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      {/* Card wrapper */}
      <div
        className={`
          relative flex flex-col h-full overflow-hidden rounded-2xl
          border-t-2 ${colors.border}
          border border-default-200/50
          bg-default-50/50 dark:bg-default-50/[0.03]
          backdrop-blur-sm
          transition-all duration-300 ease-out
          hover:border-default-300/70 hover:shadow-lg hover:shadow-default-200/10
          dark:hover:shadow-none dark:hover:border-default-200/30
          hover:-translate-y-1
        `}
      >
        {/* Top section: status dot + title */}
        <div className="px-5 pt-5 pb-0 sm:px-6 sm:pt-6">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground text-balance">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-1 text-sm text-default-500">{project.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <div className="px-5 pt-3 sm:px-6 flex-1">
          <p className="text-sm leading-relaxed text-default-500">
            {project.description}
          </p>
        </div>

        {/* Tech chips */}
        {project.tech && project.tech.length > 0 && (
          <div className="px-5 pt-4 sm:px-6 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${colors.chip}`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions bar */}
        <div className="mt-auto px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4 border-t border-default-100/60 dark:border-default-100/10">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-default-500 transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Source</span>
            </a>
          )}

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-default-500 transition-colors hover:text-foreground"
            >
              <span>Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-default-500 transition-colors hover:text-foreground"
            >
              <span>Live</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}

          {project.password && (
            <span className="ml-auto text-xs text-default-400">
              pw: <code className="rounded bg-default-100 px-1 py-0.5 text-default-600 dark:bg-default-100/10 dark:text-default-300">{project.password}</code>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
