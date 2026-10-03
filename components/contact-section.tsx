import { siteConfig } from "@/config/site";

const linkClass =
  "font-stretch-condensed text-[15px] font-bold uppercase tracking-[0.06em] underline decoration-2 underline-offset-[6px] hover:bg-ink hover:text-cover";

export default function ContactSection() {
  const { email, github, linkedin, resume } = siteConfig.links;

  return (
    <section className="bg-cover text-ink" id="contact">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
        <h2 className="border-b-[3px] border-ink pb-2 font-stretch-condensed text-[13px] font-bold uppercase tracking-[0.06em]">
          Contact
        </h2>

        <a
          className="mt-8 block w-fit max-w-full break-words font-stretch-expanded text-[clamp(1.6rem,5.4vw,4.75rem)] font-black leading-[0.95] tracking-[-0.03em] underline decoration-[4px] underline-offset-[10px] transition-colors hover:bg-ink hover:text-cover sm:mt-12"
          href={`mailto:${email}`}
        >
          {email}
        </a>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 sm:mt-14">
          <li>
            <a className={linkClass} href={github} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className={linkClass} href={linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a className={linkClass} href={resume} rel="noreferrer" target="_blank">
              Resume
            </a>
          </li>
        </ul>

        <footer className="mt-20 flex flex-wrap justify-between gap-4 border-t-[3px] border-ink pt-3 font-stretch-condensed text-[13px] font-bold uppercase tracking-[0.06em] sm:mt-28">
          <span>{siteConfig.name}</span>
          <span>Melbourne, Australia</span>
        </footer>
      </div>
    </section>
  );
}
