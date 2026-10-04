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

export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const links = [
    project.liveLink && { href: project.liveLink, label: "Live" },
    project.demoLink && { href: project.demoLink, label: "Demo" },
    project.githubLink && { href: project.githubLink, label: "Source" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <article className={clsx("flex flex-col gap-3 border-[1.5px] border-ink p-[22px]", wide && "md:col-span-2")}>
      <header className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-[34px] font-black leading-none tracking-[-0.03em]">{project.title}</h3>
        {project.liveLink && (
          <span className="bg-added-wash px-2 py-[3px] text-xs font-semibold text-added">Published</span>
        )}
      </header>

      {project.subtitle && <p className="font-medium">{project.subtitle}</p>}
      <p className="leading-[1.55] text-soft">{project.description}</p>

      {project.tech?.length ? <p className="font-mono text-sm text-soft">{project.tech.join(" · ")}</p> : null}

      {project.liveLink && (
        <code className="block break-all bg-wash px-3 py-2.5 font-mono text-sm">
          open {project.liveLink}
          {project.password && <span className="text-soft"> --password {project.password}</span>}
        </code>
      )}

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1">
        {links.map((link) => (
          <a
            key={link.label}
            className="font-semibold text-tag underline-offset-4 hover:underline"
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label} <span aria-hidden="true">↗</span>
            <span className="sr-only">: {project.title} (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </article>
  );
}
