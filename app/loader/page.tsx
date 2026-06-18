import type { Metadata } from "next";

import IntroLoader from "@/components/intro-loader.client";

export const metadata: Metadata = {
  title: `Loading — ${process.env.NEXT_PUBLIC_SITE_NAME ?? "Himanshu"}`,
};

export default function LoaderPage() {
  return (
    <main>
      <IntroLoader tagline="building great web apps" duration={3000} />
    </main>
  );
}
