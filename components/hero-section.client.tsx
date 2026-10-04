import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { siteConfig } from "@/config/site";
import { experiences, versionOf } from "@/config/experience";

const current = experiences[0];

export default function HeroSection() {
  const { github, linkedin } = siteConfig.links;

  return (
    <section className="scroll-mt-14 border-b border-line pb-14 pt-10 sm:pt-12" id="home">
      <p className="inline-flex items-center gap-2 bg-added-wash px-2.5 py-1 text-[13px] font-semibold text-added">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-added" />
        Latest release
      </p>

      <div className="mt-5 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start lg:gap-14">
        <div>
          <p className="text-[clamp(4rem,9vw,8.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-tag">
            <span className="mr-[0.06em]">v</span>
            {versionOf(current.dateRange).slice(1)}
          </p>

          <h1 className="mt-3 text-[clamp(2.25rem,4.2vw,3.5rem)] font-black leading-[1.02] tracking-[-0.035em] text-balance">
            Hi, I am Himanshu!{" "}
            <span className="block text-[0.78em] font-medium text-soft">
              <span className="whitespace-nowrap">{current.role}</span> @ {current.company}
            </span>
          </h1>

          <p className="mt-8 max-w-[40ch] text-xl leading-normal text-soft sm:text-[21px]">
            I&apos;m a Melbourne-based{" "}
            <strong className="font-semibold text-ink">full-stack developer and forward deployed engineer</strong>. I
            take features end to end, from design and database schema to tested, deployed code.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 bg-ink px-5 text-[15px] font-semibold text-paper transition-colors hover:bg-tag"
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              <SiGithub aria-hidden="true" className="h-[18px] w-[18px]" />
              GitHub
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 border-[1.5px] border-ink px-5 text-[15px] font-semibold transition-colors hover:bg-wash"
              href={linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <SiLinkedin aria-hidden="true" className="h-[18px] w-[18px] text-[#0A66C2]" />
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="border border-line">
          <div className="relative aspect-[4/5]">
            <Image
              fill
              priority
              alt="Himanshu Kulkarni at a coastal lookout"
              className="object-cover object-[70%_66%]"
              sizes="(min-width: 768px) 45vw, 100vw"
              src="/Image_01.jpeg"
            />
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 p-4 text-sm">
            <dt className="text-soft">Maintainer</dt>
            <dd className="font-mono">Himanshu Kulkarni</dd>
            <dt className="text-soft">Region</dt>
            <dd className="font-mono">Melbourne, AU</dd>
          </dl>
        </figure>
      </div>
    </section>
  );
}
