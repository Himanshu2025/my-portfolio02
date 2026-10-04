import { siteConfig } from "@/config/site";

const ghostClass =
  "inline-flex h-10 items-center border-[1.5px] border-ink px-4 text-sm font-semibold transition-colors hover:bg-wash";

export default function ContactSection() {
  const { email, github, linkedin, resume } = siteConfig.links;

  return (
    <section aria-labelledby="contact-heading" className="scroll-mt-14 pt-14" id="contact">
      <h2 className="text-3xl font-extrabold tracking-[-0.02em]" id="contact-heading">
        Contact
      </h2>

      <a
        className="mt-6 block w-fit max-w-full break-words text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] underline decoration-2 underline-offset-[6px] transition-colors hover:text-tag"
        href={`mailto:${email}`}
      >
        {email}
      </a>

      <ul className="mt-8 flex flex-wrap gap-3">
        <li>
          <a className={ghostClass} href={github} rel="noreferrer" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a className={ghostClass} href={linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a className={ghostClass} href={resume} rel="noreferrer" target="_blank">
            Resume
          </a>
        </li>
      </ul>

      <footer className="mt-16 flex flex-wrap justify-between gap-4 border-t border-line pt-4 font-mono text-sm text-soft">
        <span>{siteConfig.name}</span>
        <span>Melbourne, Australia</span>
      </footer>
    </section>
  );
}
