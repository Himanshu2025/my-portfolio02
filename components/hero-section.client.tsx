"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/config/site";

const EMAIL = siteConfig.links.email;

const TECH = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "TanStack",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "FastAPI",
  "GraphQL",
  "Auth0",
  "Supabase",
  "Vercel",
  "AWS",
  "Azure",
  "Docker",
  "Terraform",
  "Playwright",
  "Cursor",
  "Claude Code",
  "Python",
];

const ease = [0.16, 1, 0.3, 1] as const;

function CoverLine({
  children,
  controls,
  delay,
}: {
  children: React.ReactNode;
  controls: ReturnType<typeof useAnimation>;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        animate={controls}
        className="block"
        custom={delay}
        variants={{
          hidden: { y: "105%" },
          shown: (d: number) => ({ y: 0, transition: { duration: 0.9, ease, delay: d } }),
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HeroSection({
  githubUrl,
  linkedinUrl,
}: {
  githubUrl: string;
  linkedinUrl: string;
}) {
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const play = () => {
      controls.set("hidden");
      controls.start("shown");
    };

    window.addEventListener("loaderComplete", play, { once: true });

    return () => window.removeEventListener("loaderComplete", play);
  }, [controls, reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-cover text-ink" id="home">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-5 px-5 pb-12 pt-5 sm:px-8 lg:min-h-[calc(100svh-3rem)] lg:pb-14">
        <div className="col-span-12 flex items-baseline justify-between gap-4 border-b-[3px] border-ink pb-2 font-stretch-condensed text-[13px] font-bold uppercase tracking-[0.06em]">
          <span>Melbourne, Australia</span>
          <span className="text-right">Forward Deployed Engineer · Flectēre</span>
        </div>

        <h1 className="relative z-10 col-span-12 mt-6 font-stretch-semi-expanded text-[clamp(2.75rem,11.5vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.035em] sm:font-stretch-expanded lg:mt-10">
          <CoverLine controls={controls} delay={0}>
            Hi, I am
          </CoverLine>
          <CoverLine controls={controls} delay={0.12}>
            Himanshu!
          </CoverLine>
        </h1>

        <motion.figure
          animate={controls}
          className="relative col-span-12 mt-8 aspect-[4/5] sm:col-span-6 sm:col-start-7 sm:row-span-2 sm:row-start-2 sm:mt-0 sm:aspect-auto sm:min-h-[34rem] lg:col-span-5 lg:col-start-8"
          custom={0.2}
          variants={{
            hidden: { clipPath: "inset(100% 0 0 0)" },
            shown: (d: number) => ({
              clipPath: "inset(0% 0 0 0)",
              transition: { duration: 1.1, ease, delay: d },
            }),
          }}
        >
          <Image
            fill
            priority
            alt="Himanshu Kulkarni at a coastal lookout"
            className="object-cover object-[70%_62%]"
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
            src="/Image_01.jpeg"
          />
        </motion.figure>

        <div className="col-span-12 mt-8 flex flex-col gap-8 sm:col-span-6 sm:row-start-3 lg:col-span-6 lg:mt-12">
          <p className="max-w-[34ch] text-xl font-medium leading-snug sm:text-2xl">
            I&apos;m a Melbourne-based full-stack developer and forward deployed
            engineer. I take features end to end, from design and database
            schema to tested, deployed code.
          </p>

          <div className="flex flex-col gap-3">
            <a
              className="w-fit break-all font-stretch-expanded text-2xl font-extrabold tracking-[-0.02em] underline decoration-[3px] underline-offset-[6px] transition-colors hover:bg-ink hover:text-cover sm:text-3xl"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
            <div className="flex gap-6 font-stretch-condensed text-sm font-bold uppercase tracking-[0.06em]">
              <a className="underline-offset-4 hover:underline" href={githubUrl} rel="noreferrer" target="_blank">
                GitHub
              </a>
              <a className="underline-offset-4 hover:underline" href={linkedinUrl} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="border-t-[3px] border-ink pt-3">
            <h2 className="font-stretch-condensed text-[13px] font-bold uppercase tracking-[0.06em]">
              Tech I work with
            </h2>
            <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 font-stretch-condensed text-lg font-semibold leading-tight">
              {TECH.map((tech, i) => (
                <li key={tech}>
                  {tech}
                  {i < TECH.length - 1 && (
                    <span aria-hidden="true" className="pl-2 text-ink/40">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
