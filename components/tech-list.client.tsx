"use client";

import { motion } from "framer-motion";
import React from "react";

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
];

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
      className="flex gap-x-2"
    >
      <motion.ul className="list-disc pl-3 text-sm text-white marker:text-amber-400" variants={container}>
        {left.map((tech) => (
          <motion.li key={tech} className="py-0.5" variants={item}>
            {tech}
          </motion.li>
        ))}
      </motion.ul>

      <motion.ul className="list-disc pl-3 text-sm text-white marker:text-amber-400" variants={container}>
        {right.map((tech) => (
          <motion.li key={tech} className="py-0.5" variants={item}>
            {tech}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
