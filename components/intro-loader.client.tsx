"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({
  tagline = "Full-stack developer",
  duration = 2400,
  onComplete,
}: {
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
    // allow exit animation to play before unmounting
    setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 700);
  }, [phase, onComplete]);

  useEffect(() => {
    // remove any SSR static loader
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

      // ease-out curve for natural feel
      desired = Math.max(desired, (1 - Math.pow(1 - frac, 3)) * 100);

      // smooth toward desired
      actual += (desired - actual) * 0.15;
      setProgress(Math.min(100, Math.round(actual)));

      if (elapsed < duration || actual < 99.5) {
        raf = requestAnimationFrame(step);
      } else {
        setProgress(100);
        // small pause before exit
        setTimeout(() => finish(), 200);
      }
    };

    raf = requestAnimationFrame(step);

    // safety fallback
    const fallback = setTimeout(() => finish(), duration + 1500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [duration, finish]);

  if (phase === "done") return null;

  const nameChars = "Himanshu".split("");

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <div className="flex flex-col items-center gap-8 px-6">
          {/* Name - letter stagger */}
          <div className="flex items-baseline gap-[2px]">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.06,
                  ease: "easeOut",
                }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm uppercase tracking-widest text-white/40"
          >
            {tagline}
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-48 sm:w-64"
          >
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full bg-white/80"
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
