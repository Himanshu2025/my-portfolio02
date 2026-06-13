"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiGo,
  SiAmazonaws,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  
  SiPython,
  SiDocker,
  SiGraphql,
  SiFastapi,
  SiSupabase,
  SiPrisma,
  SiVercel,
  SiAuth0,
} from "react-icons/si";

const TanStackStartIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <text x="12" y="16" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Inter, Arial, sans-serif">
      TS
    </text>
  </svg>
);

const TanStackQueryIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
    <text x="12" y="16" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Inter, Arial, sans-serif">
      TQ
    </text>
  </svg>
);

const techs = [
  "TypeScript",
  "JavaScript",
  "Golang",
  "AWS",
  "Supabase",
  "TanStack Start",
  "TanStack Query",
  "React",
  "Next.js",
  "Node.js",
  "Prisma",
  "Auth0",
  "Vercel",
  "Cursor",
  "Claude Code",
  "Python",
  "FastAPI",
  "GraphQL",
] as const;

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Golang: SiGo,
  AWS: SiAmazonaws,
  "TanStack Start": TanStackStartIcon,
  "TanStack Query": TanStackQueryIcon,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  FastAPI: SiFastapi,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Supabase: SiSupabase,
  Prisma: SiPrisma,
  Vercel: SiVercel,
  Auth0: SiAuth0,
};

const colorMap: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Golang: "#00ADD8",
  AWS: "#FF9900",
  React: "#61DAFB",
  "Next.js": "currentColor",
  "Node.js": "#83CD29",  
  Python: "#3776AB",
  FastAPI: "#009688",
  GraphQL: "#E10098",
  Docker: "#2496ED",
  Supabase: "#3ECF8E",
  Prisma: "#2D9CDB",
  Auth0: "#EB5424",
  Vercel: "currentColor",
  Cursor: "#7C3AED",
  "Claude Code": "#FF6A00",
  "TanStack Start": "#F97316",
  "TanStack Query": "#2563EB",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.3 } },
};

export default function TechList() {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial="hidden"
      variants={container}
      viewport={{ once: true, amount: 0.4 }}
      whileInView="show"
    >
      {techs.map((tech) => {
        const Icon = iconMap[tech];

        return (
          <motion.div
            key={tech}
            className="group inline-flex items-center gap-2 rounded-lg border border-default-200/50 bg-default-50/50 dark:bg-default-50/[0.03] px-3 py-2 text-sm transition-colors hover:border-default-300/70 hover:bg-default-100/50 dark:hover:bg-default-50/[0.06]"
            variants={item}
          >
            {Icon && (
              <Icon
                className="h-4 w-4 shrink-0"
                style={{
                  color: tech === "Next.js" ? undefined : colorMap[tech],
                }}
              />
            )}
            <span className="text-default-600 dark:text-default-400 text-xs font-medium">
              {tech}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
