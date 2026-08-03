"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkExperienceCard, {
  type WorkExperience,
} from "@/components/work-experience-card";

const experiences: WorkExperience[] = [
  {
    company: "LaunchKey Lab",
    role: "Full-Stack Developer",
    dateRange: "Apr 2026 - Jun 2026",
    bullets: [
      "Shipped production features end-to-end across a TanStack Start application (TanStack Query, React, TypeScript), owning each feature from technical spec through to deployment.",
      "Delivered 4 timeboxed spike builds (3–5 day prototypes) to validate technical feasibility of new product directions, giving stakeholders working demos that informed go/no-go decisions and avoided weeks of speculative build-out.",
      "Translated Figma designs into pixel-accurate, responsive pages in React + TypeScript, partnering with design to ship UI that matched spec on first review.",
      "Took part in designing the relational database schema with Prisma ORM, contributing data models and safe, reviewable migrations that established the foundations for new product modules.",
      "Accelerated delivery by ~30% using AI-assisted workflows (Cursor, Claude Code), configuring custom hooks, rules, skills, and MCP integrations to standardise scaffolding, refactoring, and test generation, while maintaining quality through structured code review.",
    ],
    accent: "amber",
  },
  {
    company: "People for Nature",
    role: "Volunteer Frontend Developer",
    dateRange: "Jan 2026 - April 2026",
    bullets: [
      "Developed automated content management system using Next.js, WordPress (headless CMS), and GraphQL to dynamically manage 50+ categorized blog posts across 10+ conservation project pages.",
      "Reduced manual content management overhead by 70%, enabling conservation team to focus on core environmental initiatives rather than technical website maintenance.",
      "Worked with non-technical stakeholders to translate organizational needs into technical solutions, supporting research and conservation teams.",
    ],
    accent: "emerald",
  },
  {
    company: "Monash University",
    role: "Full Stack Developer & Project Coordinator",
    dateRange: "Jul 2025 - Oct 2025",
    bullets: [
      "Collaborated with 5-person cross-functional team to ship 6 new features including map-based and data model features across 3 iterations, consistently meeting goals.",
      "Created modular APIs and reusable React components, making the codebase easier to maintain and cutting repetition by 30%.",
      "Set up CI/CD pipelines with testing and version control, which halved deployment time and improved build stability.",
    ],
    accent: "amber",
  },
  {
    company: "AI SaaS Startup (Stealth)",
    role: "Full Stack Developer",
    dateRange: "Nov 2024 - Jul 2025",
    bullets: [
      "Delivered 12+ full-stack features from database to UI, building modular React/TypeScript components integrated with Node.js backend.",
      "Implemented user activity logging and seamless frontend-backend data flow for better traceability and user experience.",
      "Worked in agile sprints with the product owner to clarify requirements, deliver MVPs on time, and incorporate feedback quickly.",
    ],
    accent: "sky",
  },
  {
    company: "Jio Platforms Limited",
    role: "Headend Engineer",
    dateRange: "Feb 2023 - Nov 2023",
    bullets: [
      "Monitored video stream reliability, reducing downtime incidents and improving overall service stability.",
      "Collaborated with cross-functional teams to troubleshoot real-time issues, ensuring smooth delivery of high-traffic live events.",
      "Monitored streaming infrastructure and coordinated with technical teams to reduce incident response time, supporting reliable delivery of 100+ live channels to millions of concurrent viewers during IPL 2023.",
    ],
    accent: "indigo",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-[11px] font-medium uppercase tracking-widest text-default-400 mb-2">
            Career
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Professional Experience
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-default-500 max-w-lg">
            Roles, responsibilities, and impact across companies and projects.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {experiences.map((e, i) => (
          <WorkExperienceCard
            key={`${e.company}-${e.dateRange}`}
            work={e}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
