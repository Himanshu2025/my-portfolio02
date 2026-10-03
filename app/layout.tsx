import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontMono, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import FirstVisitLoader from "@/components/first-visit-loader.client";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/2.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d1117",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth scroll-pt-20">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-paper text-ink font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light", forcedTheme: "light" }}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <FirstVisitLoader />
            <main className="w-full flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
