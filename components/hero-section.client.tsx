import Image from "next/image";

import { siteConfig } from "@/config/site";
import { experiences, versionOf } from "@/config/experience";

const current = experiences[0];

export default function HeroSection() {
  const { email, github, linkedin } = siteConfig.links;

  return (
    <section className="scroll-mt-14 border-b border-line pb-14 pt-10 sm:pt-12" id="home">
      <p className="inline-flex items-center gap-2 bg-added-wash px-2.5 py-1 text-[13px] font-semibold text-added">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-added" />
        Latest release
      </p>

      <p className="mt-5 text-[clamp(4rem,11vw,9.25rem)] font-black leading-[0.9] tracking-[-0.04em] text-tag">
        {versionOf(current.dateRange)}
      </p>

      <h1 className="mt-3 text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.035em] text-balance">
        Hi, I am Himanshu!{" "}
        <span className="font-medium text-soft">
          {current.role} @ {current.company}
        </span>
      </h1>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <p className="max-w-[40ch] text-xl leading-normal text-soft sm:text-[21px]">
            I&apos;m a Melbourne-based{" "}
            <strong className="font-semibold text-ink">full-stack developer and forward deployed engineer</strong>. I
            take features end to end, from design and database schema to tested, deployed code.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="inline-flex h-12 items-center gap-2 bg-ink px-5 text-[15px] font-semibold text-paper transition-colors hover:bg-tag"
              href={`mailto:${email}`}
            >
              <span aria-hidden="true">✉</span>
              {email}
            </a>
            <a
              className="inline-flex h-12 items-center border-[1.5px] border-ink px-5 text-[15px] font-semibold transition-colors hover:bg-wash"
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="inline-flex h-12 items-center border-[1.5px] border-ink px-5 text-[15px] font-semibold transition-colors hover:bg-wash"
              href={linkedin}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="border border-line">
          <div className="relative aspect-square">
            <Image
              fill
              priority
              alt="Himanshu Kulkarni at a coastal lookout"
              className="object-cover object-[70%_66%]"
              sizes="(min-width: 768px) 30vw, 100vw"
              src="/Image_01.jpeg"
            />
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 p-4 text-sm">
            <dt className="text-soft">Maintainer</dt>
            <dd className="font-mono">Himanshu Kulkarni</dd>
            <dt className="text-soft">Region</dt>
            <dd className="font-mono">Melbourne, AU</dd>
            <dt className="text-soft">Current</dt>
            <dd className="font-mono">{current.company}</dd>
          </dl>
        </figure>
      </div>
    </section>
  );
}
