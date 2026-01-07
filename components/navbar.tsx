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
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon, Logo } from "@/components/icons";
import { fontSans } from "@/config/fonts";

export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="sticky top-0 z-40">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo size={28} />
            <p className={`${fontSans.variable} font-sans font-semibold text-inherit ml-1`}>Himanshu</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx("text-default-600 hover:text-default-900")}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Desktop social + theme */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex items-center">
          <div className="flex items-center gap-3 mr-3">
            <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
              <LinkedInIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
          </div>
          <div className="mr-3">
            <Link isExternal href="https://drive.google.com/file/d/1qaTWczzKogJhQY00c0Fg0SDtQZG67egE/view?usp=sharing" aria-label="View Resume">
              <Button radius="full" size="sm">View Resume</Button>
            </Link>
          </div>
          <div className="ml-4">
            <ThemeSwitch />
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile social + theme + menu toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="flex items-center gap-3">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
            <LinkedInIcon className="text-default-500" />
          </Link>
        </div>
        <div className="ml-2">
          <Link isExternal href="https://drive.google.com/file/d/1qaTWczzKogJhQY00c0Fg0SDtQZG67egE/view?usp=sharing" aria-label="View Resume">
            <Button radius="full" size="sm">View Resume</Button>
          </Link>
        </div>
        <div className="ml-3">
          <ThemeSwitch />
        </div>
        <NavbarMenuToggle />
      </NavbarContent>
      {/* Mobile slide-down menu */}
      <NavbarMenu className="sm:hidden">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink href={item.href} className="w-full block py-2">
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link isExternal href="https://drive.google.com/file/d/1qaTWczzKogJhQY00c0Fg0SDtQZG67egE/view?usp=sharing" aria-label="View Resume">
            <Button radius="full" size="sm">View Resume</Button>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
 

