import type { Metadata } from "next";

import IntroLoader from "@/components/intro-loader.client";

export const metadata: Metadata = {
  title: `Loading — ${process.env.NEXT_PUBLIC_SITE_NAME ?? "Himanshu"}`,
};

export default function LoaderPage() {
  return (
    <main>
      <IntroLoader tagline="Crafting scalable web experiences" duration={3000} />
    </main>
  );
}
