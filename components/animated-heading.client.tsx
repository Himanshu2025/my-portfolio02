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

import { useEffect, useRef, useState } from "react";

export default function AnimatedHeading({ text, tag = "h1", className = "", stagger = 0.03 }: Props & { waitForLoader?: boolean }) {
  const Tag: any = tag;
  const chars = Array.from(text);
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [loaderDone, setLoaderDone] = useState(() => {
    try {
      // if a loader overlay is present, wait; otherwise allow animations immediately
      return !Boolean(document?.querySelector?.(".fixed.inset-0.z-50"));
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    const handler = () => setLoaderDone(true);
    window.addEventListener("loaderComplete", handler);
    return () => window.removeEventListener("loaderComplete", handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const shouldAnimate = inView && loaderDone;

  return (
    <Tag className={className} ref={ref}>
      <motion.span
        variants={container(stagger)}
        initial="hidden"
        animate={shouldAnimate ? "show" : "hidden"}
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
