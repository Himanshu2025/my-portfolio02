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
  SiDotnet,
  SiCsharp,
  SiPython,
  SiDocker,
  SiGraphql,
  SiFastapi,
  SiSupabase,
} from "react-icons/si";

const techs = [
  "TypeScript",
  "JavaScript",
  "Golang",
  "AWS",
  "Supabase",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "GraphQL",
  ".NET",
  "C#",
] as const;

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Golang: SiGo,
  AWS: SiAmazonaws,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  ".NET": SiDotnet,
  "C#": SiCsharp,
  Python: SiPython,
  FastAPI: SiFastapi,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Supabase: SiSupabase,
};

const colorMap: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Golang: "#00ADD8",
  AWS: "#FF9900",
  React: "#61DAFB",
  "Next.js": "currentColor",
  "Node.js": "#83CD29",
  ".NET": "#512BD4",
  "C#": "#178600",
  Python: "#3776AB",
  FastAPI: "#009688",
  GraphQL: "#E10098",
  Docker: "#2496ED",
  Supabase: "#3ECF8E",
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
