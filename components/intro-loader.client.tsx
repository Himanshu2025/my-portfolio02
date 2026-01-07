"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function IntroLoader({
  tagline = "Welcome — crafting scalable digital experiences",
  duration = 3000,
  onComplete,
}: {
  tagline?: string;
  duration?: number;
  onComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let start: number | null = null;
    let desired = 0;
    let actual = 0;
    let raf = 0;

    // entrance animation
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // base desired progress from time fraction
      const timeFrac = Math.min(1, elapsed / duration);
      desired = Math.max(desired, timeFrac * 100);

      // occasional random spike to feel async
      if (Math.random() < 0.02 && desired < 98) {
        desired = Math.min(98, desired + 3 + Math.random() * 8);
      }

      // ease actual progress toward desired (smoothing)
      actual += (desired - actual) * 0.12;

      // small jitter to avoid perfectly linear numbers
      const display = Math.min(100, Math.round(actual + (Math.random() * 0.4)));
      setProgress(display);

      if (elapsed < duration || actual < 99.5) {
        raf = requestAnimationFrame(step);
      } else {
        // finish
        setProgress(100);
        setTimeout(() => onComplete?.(), 350);
      }
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [controls, duration, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={controls}
        className="w-full max-w-2xl px-6 py-12"
      >
        <div className="flex flex-col items-start gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-5xl font-extrabold">Hi, I am Himanshu</h1>
            <p className="text-lg text-default-300/80">{tagline}</p>
          </div>

          <div className="w-full">
            <div className="w-full h-2 bg-white/6 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 shadow-md"
                style={{ width: `${progress}%`, transition: "width 220ms linear" }}
              />
            </div>
            <div className="mt-2 text-xs text-default-300/70">Loading — {progress}%</div>
          </div>

          <div className="flex items-center gap-3 text-sm text-default-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <path d="M6 12h6l2-3" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-default-300/70">Welcome, creating the ultimate web experience...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
