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
import Threads from "@/components/threads-bg.client";
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
    <section className="relative flex items-center min-h-[calc(100vh-10rem)] py-12 sm:py-16">
      {/* ---- Threads animated background ---- */}
      <div className="pointer-events-none absolute inset-0 -mx-6 sm:-mx-8 overflow-hidden opacity-20 dark:opacity-30">
        <Threads
          color={[0.44, 0.59, 1]}
          amplitude={1.2}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* ---- ProfileCard ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:order-1"
        >
          <ProfileCard
            avatarUrl="/Image_01.jpeg"
            name="Himanshu"
            title="Full Stack Developer"
            handle="Himanshu2025"
            status="Open to work"
            contactText="Contact"
            showUserInfo={true}
            enableTilt={true}
            behindGlowColor="rgba(100, 150, 255, 0.5)"
            behindGlowSize="60%"
            onContactClick={() => {
              window.open(
                "https://www.linkedin.com/in/himanshu-kulkarni2025/",
                "_blank"
              );
            }}
          />
        </motion.div>

        {/* ---- Text content ---- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 md:order-0"
        >
          {/* Greeting */}
          <motion.div variants={fadeUp}>
            <span className="inline-block text-[11px] font-medium uppercase tracking-widest text-default-400 mb-2">
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
    </section>
  );
}
