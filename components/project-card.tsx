import React from "react";
import clsx from "clsx";

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech?: string[];
  demoLink?: string;
  githubLink?: string;
  liveLink?: string;
  password?: string;
};

function ProjectLinks({ project, size }: { project: Project; size: "lg" | "sm" }) {
  const links = [
    project.liveLink && { href: project.liveLink, label: "Live" },
    project.demoLink && { href: project.demoLink, label: "Demo" },
    project.githubLink && { href: project.githubLink, label: "Source" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link, i) => (
        <a
          key={link.label}
          className={clsx(
            "inline-flex items-center gap-1.5 font-stretch-condensed font-bold uppercase tracking-[0.06em] transition-colors",
            size === "lg" ? "h-11 px-4 text-[15px]" : "h-9 px-3 text-[13px]",
            i === 0
              ? "bg-cover text-ink hover:bg-paper"
              : "border-2 border-paper/70 text-paper hover:border-cover hover:text-cover",
          )}
          href={link.href}
          rel="noreferrer"
          target="_blank"
        >
          {link.label}
          <span aria-hidden="true">↗</span>
          <span className="sr-only">: {project.title} (opens in a new tab)</span>
        </a>
      ))}
      {project.password && (
        <span className="font-stretch-condensed text-[13px] font-semibold uppercase tracking-[0.06em] text-paper/70">
          Password <code className="ml-1 bg-paper/10 px-1.5 py-0.5 font-mono normal-case tracking-normal text-paper">{project.password}</code>
        </span>
      )}
    </div>
  );
}

function TechLine({ tech }: { tech?: string[] }) {
  if (!tech?.length) return null;

  return (
    <p className="font-stretch-condensed text-[15px] font-semibold uppercase tracking-[0.04em] text-cover">
      {tech.join(" / ")}
    </p>
  );
}

export default function ProjectCard({
  project,
  variant = "entry",
}: {
  project: Project;
  variant?: "opener" | "entry";
}) {
  if (variant === "opener") {
    return (
      <article className="grid grid-cols-12 gap-x-5 gap-y-6 border-t-[3px] border-paper py-10 sm:py-14">
        <header className="col-span-12 lg:col-span-6">
          <h3 className="font-stretch-expanded text-[clamp(2.75rem,7vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.035em] text-paper">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-4 text-xl font-semibold text-cover sm:text-2xl">{project.subtitle}</p>
          )}
        </header>
        <div className="col-span-12 flex max-w-[62ch] flex-col gap-6 lg:col-span-6 lg:pt-3">
          <p className="text-[17px] leading-relaxed text-paper/85">{project.description}</p>
          <TechLine tech={project.tech} />
          <ProjectLinks project={project} size="lg" />
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-4 border-t-2 border-paper/40 pt-6">
      <header>
        <h3 className="font-stretch-expanded text-2xl font-black uppercase leading-none tracking-[-0.02em] text-paper sm:text-3xl">
          {project.title}
        </h3>
        {project.subtitle && <p className="mt-2 text-lg font-semibold text-cover">{project.subtitle}</p>}
      </header>
      <p className="max-w-[62ch] text-[15px] leading-relaxed text-paper/80">{project.description}</p>
      <TechLine tech={project.tech} />
      <div className="mt-auto pt-2">
        <ProjectLinks project={project} size="sm" />
      </div>
    </article>
  );
}
