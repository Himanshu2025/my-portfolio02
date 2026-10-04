"use client";

import { useCallback, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function IntroLoader({
  title = "Himanshu",
  tagline = "Full-stack developer",
  duration = 2400,
  onComplete,
}: {
  title?: string;
  tagline?: string;
  duration?: number;
  onComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  const finish = useCallback(() => {
    if (phase !== "loading") return;
    setProgress(100);
    setPhase("exiting");
    try {
      window.dispatchEvent(new Event("loaderComplete"));
    } catch {
      // ignore
    }
    setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 400);
  }, [phase, onComplete]);

  useEffect(() => {
    try {
      document.getElementById("initial-loader")?.remove();
    } catch {
      // ignore
    }

    let start: number | null = null;
    let desired = 0;
    let actual = 0;
    let raf = 0;

    const step = (ts: number) => {
      if (!start) start = ts;

      const elapsed = ts - start;
      const frac = Math.min(1, elapsed / duration);

      desired = Math.max(desired, (1 - Math.pow(1 - frac, 3)) * 100);
      actual += (desired - actual) * 0.15;
      setProgress(Math.min(100, Math.round(actual)));

      if (elapsed < duration || actual < 99.5) {
        raf = requestAnimationFrame(step);
      } else {
        setProgress(100);
        setTimeout(() => finish(), 200);
      }
    };

    raf = requestAnimationFrame(step);

    const fallback = setTimeout(() => finish(), duration + 1500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [duration, finish]);

  if (phase === "done") {
    return null;
  }

  const nameChars = title.split("");

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[60] flex items-center justify-center bg-paper"
        exit={{ opacity: 0, y: -12 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-8 px-6">
          <div className="flex items-baseline gap-[2px]">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black tracking-[-0.035em] text-tag sm:text-6xl"
                initial={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.3,
                  delay: 0.05 + i * 0.04,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.p
            animate={{ opacity: 1 }}
            className="font-mono text-sm text-soft"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {tagline}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, scaleX: 1 }}
            className="w-48 sm:w-64"
            initial={{ opacity: 0, scaleX: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="h-[3px] w-full overflow-hidden bg-line">
              <motion.div
                className="h-full bg-tag"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
