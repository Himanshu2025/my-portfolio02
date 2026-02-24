"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import clsx from "clsx";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import AnimatedHeading from "@/components/animated-heading.client";
import TechList from "@/components/tech-list.client";
import ProfileCard from "@/components/profile-card.client";
import { title } from "@/components/primitives";

/* stagger wrapper */
const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HeroSection({
  githubUrl,
  linkedinUrl,
}: {
  githubUrl: string;
  linkedinUrl: string;
}) {
  return (
    <section id="home" className="relative flex flex-col justify-center py-8 sm:py-12 md:min-h-[calc(100vh-5rem)] md:py-16">
      <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* ---- ProfileCard ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center order-first md:order-1"
        >
          <ProfileCard
            avatarUrl="/Image_01.jpeg"
            name="Himanshu"
            title="Full Stack Developer"
            showUserInfo={false}
            enableTilt={true}
            behindGlowColor="rgba(100, 150, 255, 0.5)"
            behindGlowSize="60%"
          />
        </motion.div>

        {/* ---- Text content ---- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 sm:gap-6 order-last md:order-0"
        >
          {/* Greeting */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <span className="text-[11px] font-medium uppercase tracking-widest text-default-400">
              Welcome
            </span>
            <AnimatedHeading
              text="Hi, I am Himanshu!"
              tag="h1"
              className={title()}
              stagger={0.03}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="max-w-lg text-sm leading-relaxed text-default-500"
          >
            I build web applications and enjoy working across the full stack,
            from scratch to production. I care about clean code, thoughtful
            architecture, and shipping things that work well.
          </motion.p>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <Link
              isExternal
              className={clsx(
                buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  size: "sm",
                }),
                "flex items-center gap-2 text-sm"
              )}
              href={githubUrl}
            >
              <GithubIcon size={16} />
              GitHub
            </Link>
            <Link
              isExternal
              className={clsx(
                buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  size: "sm",
                }),
                "flex items-center gap-2 text-sm"
              )}
              href={linkedinUrl}
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </Link>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="h-px w-full max-w-xs bg-default-200/50"
            aria-hidden="true"
          />

          {/* Tech stack */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-default-400">
              Tech I work with
            </h3>
            <TechList />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex flex-col items-center gap-2 mt-auto pt-8"
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="group flex flex-col items-center gap-2 text-default-400 transition-colors hover:text-default-600"
          aria-label="Scroll to projects"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60 group-hover:opacity-100 transition-opacity"
            >
              <path
                d="M8 3v10m0 0l-3.5-3.5M8 13l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
