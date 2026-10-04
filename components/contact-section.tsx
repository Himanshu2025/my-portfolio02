import { SiGithub, SiLinkedin } from "react-icons/si";

import { siteConfig } from "@/config/site";

const ghostClass =
  "inline-flex h-12 items-center gap-2 border-[1.5px] border-ink px-5 text-[15px] font-semibold transition-colors hover:bg-wash";

export default function ContactSection() {
  const { github, linkedin, resume } = siteConfig.links;

  return (
    <section aria-labelledby="contact-heading" className="scroll-mt-14 pt-14" id="contact">
      <h2 className="text-3xl font-extrabold tracking-[-0.02em]" id="contact-heading">
        Contact
      </h2>

      <ul className="mt-6 flex flex-wrap gap-3">
        <li>
          <a className={ghostClass} href={github} rel="noreferrer" target="_blank">
            <SiGithub aria-hidden="true" className="h-[18px] w-[18px]" />
            GitHub
          </a>
        </li>
        <li>
          <a className={ghostClass} href={linkedin} rel="noreferrer" target="_blank">
            <SiLinkedin aria-hidden="true" className="h-[18px] w-[18px] text-[#0A66C2]" />
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
