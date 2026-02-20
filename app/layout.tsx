import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
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
  themeColor: "black",
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
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark", forcedTheme: "dark" }}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <FirstVisitLoader />
            <main className="mx-auto w-full max-w-5xl flex-1 px-6 pt-8 sm:px-8 sm:pt-12">
              {children}
            </main>
            <footer className="w-full py-6" aria-hidden="true" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
