"use client";

import { useState } from "react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

const linkClass =
  "font-stretch-condensed text-[13px] font-semibold uppercase tracking-[0.06em] text-paper/80 underline-offset-[6px] decoration-2 decoration-cover transition-colors hover:text-paper hover:underline";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <nav
        aria-label="Main"
        className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a
          className="font-stretch-expanded text-[15px] font-black uppercase tracking-[-0.01em] text-paper"
          href="#home"
          onClick={close}
        >
          Himanshu Kulkarni
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <a className={linkClass} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center gap-5 md:flex">
          <li>
            <a className={linkClass} href={siteConfig.links.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className={linkClass} href={siteConfig.links.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="font-stretch-condensed inline-flex h-8 items-center bg-cover px-3 text-[13px] font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-paper"
              href={siteConfig.links.resume}
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          className="font-stretch-condensed text-[13px] font-bold uppercase tracking-[0.06em] text-paper md:hidden"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        className={clsx("border-t border-paper/15 md:hidden", !isMenuOpen && "hidden")}
        id="mobile-menu"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <a
                className="font-stretch-expanded block py-3 text-2xl font-black uppercase text-paper"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <a className={linkClass} href={siteConfig.links.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a className={linkClass} href={siteConfig.links.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a className={linkClass} href={siteConfig.links.resume} rel="noreferrer" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
