"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiTypescript,
  SiJavascript,
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

const TanStackIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => (
  <img src="/tanstack.png" alt="TanStack" className={className} style={style} width={16} height={16} />
);

const CursorIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => (
  <img src="/cursor-ai.png" alt="Cursor AI" className={className} style={style} width={16} height={16} />
);

const ClaudeCodeIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => (
  <img src="/claude-code.png" alt="Claude Code" className={className} style={style} width={16} height={16} />
);

// Ordered flat list (rendered in this sequence)
const orderedTechs: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "TanStack",
  "Node.js",
  "Prisma",
  "FastAPI",
  "GraphQL",
  "Auth0",
  "Supabase",
  "Vercel",
  "AWS",
  "Docker",
  "Cursor",
  "Claude Code",
  "Python",
];

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  AWS: SiAmazonaws,
  "TanStack": TanStackIcon,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Cursor: CursorIcon,
  "Claude Code": ClaudeCodeIcon,
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
  "TanStack": "#F97316",
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
      {orderedTechs.map((tech) => {
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
                style={{ color: tech === "Next.js" ? undefined : colorMap[tech] }}
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
