"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon, Logo } from "@/components/icons";
import { fontSans } from "@/config/fonts";

const RESUME_URL =
  "https://drive.google.com/file/d/1LR_QlVVI_maKzuYpLqXk_CBh_s0txN1D/view?usp=drive_link";

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <NextLink
      href={href}
      className={clsx(
        "relative px-1 py-1 text-sm font-medium transition-colors duration-200",
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out",
        isActive
          ? "text-foreground after:scale-x-100 after:bg-foreground"
          : "text-default-500 hover:text-foreground after:bg-foreground/60 hover:after:scale-x-100",
      )}
    >
      {label}
    </NextLink>
  );
}

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: "sticky top-0 z-50 border-b border-default-200/40 bg-background/70 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60",
        wrapper: "px-4 sm:px-6",
      }}
      isBlurred={false}
    >
      {/* ---- Left: brand + nav links ---- */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit list-none">
          <NextLink
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            href="/"
          >
            <Logo size={28} />
            <span
              className={`${fontSans.variable} font-sans text-base font-semibold tracking-tight text-foreground`}
            >
              Himanshu
            </span>
          </NextLink>
        </NavbarBrand>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* ---- Right: social + resume + theme (desktop) ---- */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex items-center gap-1">
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
            className="inline-flex items-center justify-center rounded-lg p-2 text-default-500 transition-colors hover:text-foreground hover:bg-default-100"
          >
            <LinkedInIcon size={20} />
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href={siteConfig.links.github}
            className="inline-flex items-center justify-center rounded-lg p-2 text-default-500 transition-colors hover:text-foreground hover:bg-default-100"
          >
            <GithubIcon size={20} />
          </Link>

          <div className="mx-2 h-5 w-px bg-default-200/60" aria-hidden="true" />

          <Link
            isExternal
            href={RESUME_URL}
            aria-label="View Resume"
            className="no-underline"
          >
            <Button
              radius="full"
              size="sm"
              variant="flat"
              className="font-medium text-xs px-4"
            >
              Resume
            </Button>
          </Link>

          <div className="mx-1 h-5 w-px bg-default-200/60" aria-hidden="true" />

          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* ---- Right: compact controls + hamburger (mobile) ---- */}
      <NavbarContent className="sm:hidden basis-1 pl-2" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label="Toggle navigation menu"
          className="text-default-500"
        />
      </NavbarContent>

      {/* ---- Mobile slide-down menu ---- */}
      <NavbarMenu className="pt-6 pb-8 gap-0 bg-background/95 backdrop-blur-xl">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
              href={item.href}
              className={clsx(
                "block w-full py-3 text-base font-medium border-b border-default-100 transition-colors",
                pathname === item.href
                  ? "text-foreground"
                  : "text-default-500 hover:text-foreground",
              )}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}

        <div className="mt-6 flex items-center gap-3">
          <Link
            isExternal
            aria-label="Github"
            href={siteConfig.links.github}
            className="inline-flex items-center justify-center rounded-lg p-2 text-default-500 transition-colors hover:text-foreground hover:bg-default-100"
          >
            <GithubIcon size={22} />
          </Link>
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
            className="inline-flex items-center justify-center rounded-lg p-2 text-default-500 transition-colors hover:text-foreground hover:bg-default-100"
          >
            <LinkedInIcon size={22} />
          </Link>
        </div>

        <div className="mt-4">
          <Link
            isExternal
            href={RESUME_URL}
            aria-label="View Resume"
            className="no-underline"
          >
            <Button radius="full" size="sm" variant="flat" className="font-medium px-5">
              View Resume
            </Button>
          </Link>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
 

