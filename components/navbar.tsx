"use client";

import { useState } from "react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

const linkClass = "text-sm text-[#c9d1d9] transition-colors hover:text-paper";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);
  const { github, linkedin, resume } = siteConfig.links;

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a className="text-[15px] font-extrabold tracking-[-0.01em]" href="#home" onClick={close}>
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
            <a className={linkClass} href={github} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className={linkClass} href={linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="inline-flex h-9 items-center bg-tag px-3.5 text-sm font-semibold text-paper transition-colors hover:bg-[#1a37d6]"
              href={resume}
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
          className="text-sm font-semibold text-paper md:hidden"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <div className={clsx("border-t border-paper/15 md:hidden", !isMenuOpen && "hidden")} id="mobile-menu">
        <ul className="flex flex-col px-5 py-3">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <a className="block py-3 text-lg font-semibold" href={item.href} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-wrap gap-x-6 gap-y-3 border-t border-paper/15 pt-4 pb-2">
            <a className={linkClass} href={github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a className={linkClass} href={linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a className={linkClass} href={resume} rel="noreferrer" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
