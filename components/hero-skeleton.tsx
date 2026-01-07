import React from "react";

export default function HeroSkeleton({ className }: { className?: string }) {
  return (
    <section
      aria-hidden
      className={`flex flex-col items-center justify-center gap-4 py-8 md:py-10 ${className ?? ""}`}>
      <div className="mt-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          <div className="w-full flex justify-center">
            <div className="w-72 h-72 md:w-[520px] md:h-[520px] rounded-lg bg-default-200 dark:bg-default-800 animate-pulse" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-6 w-3/4 rounded-md bg-default-200 dark:bg-default-800 animate-pulse" />
            <div className="h-6 w-1/2 rounded-md bg-default-200 dark:bg-default-800 animate-pulse" />
            <div className="h-4 w-full rounded-md bg-default-200 dark:bg-default-800 animate-pulse" />
            <div className="h-4 w-5/6 rounded-md bg-default-200 dark:bg-default-800 animate-pulse" />
            <div className="flex gap-3 mt-2">
              <div className="h-10 w-28 rounded-full bg-default-200 dark:bg-default-800 animate-pulse" />
              <div className="h-10 w-28 rounded-full bg-default-200 dark:bg-default-800 animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
