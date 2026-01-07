"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  tag?: "h1" | "h2" | "p" | "div";
  className?: string;
  stagger?: number;
};

const container = (stagger = 0.03) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const child = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function AnimatedHeading({ text, tag = "h1", className = "", stagger = 0.03 }: Props) {
  const Tag: any = tag;
  const chars = Array.from(text);

  return (
    <Tag className={className}>
      <motion.span
        variants={container(stagger)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        aria-hidden
        className="inline-block"
      >
        {chars.map((c, i) => (
          <motion.span key={i} variants={child} className="inline-block">
            {c === " " ? "\u00A0" : c}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
