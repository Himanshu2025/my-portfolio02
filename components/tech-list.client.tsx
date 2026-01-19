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
} from "react-icons/si";

const techs = [
  "TypeScript",
  "JavaScript",
  "Golang",
  "AWS",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "GraphQL",
];

const iconMap: Record<string, React.ComponentType<any>> = {
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Golang": SiGo,
  "AWS": SiAmazonaws,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Python": SiPython,
  "FastAPI": SiFastapi,
  "GraphQL": SiGraphql,
  "Docker": SiDocker,
};

const colorMap: Record<string, string> = {
  "TypeScript": "#3178c6",
  "JavaScript": "#f7df1e",
  "Golang": "#00ADD8",
  "AWS": "#FF9900",
  "React": "#61DAFB",
  "Next.js": "#000000",
  "Node.js": "#83CD29",
  "Python": "#3776AB",
  "FastAPI": "#009688",
  "GraphQL": "#E10098",
  "Docker": "#2496ED",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.28 } },
};

export default function TechList() {
  const mid = Math.ceil(techs.length / 2);
  const left = techs.slice(0, mid);
  const right = techs.slice(mid);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
      className="grid grid-cols-2 gap-4"
    >
      {[...left, ...right].map((tech) => {
        const Icon = iconMap[tech];
        return (
          <motion.div key={tech} className="flex items-center gap-3" variants={item}>
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/6">
              {Icon ? (
                (() => {
                  if (tech === "Next.js") {
                    return <Icon className="w-5 h-5 text-black dark:text-white" />;
                  }
                  return <Icon className="w-5 h-5" style={{ color: colorMap[tech] || undefined }} />;
                })()
              ) : (
                <span className="text-xs">•</span>
              )}
            </div>
            <div className="text-sm text-default-900 dark:text-white">{tech}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
