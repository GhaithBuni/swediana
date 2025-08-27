"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <div className="w-full bg-transparent fixed top-0 z-50">
      <div className="md:w-4/5 mx-auto flex items-center justify-between px-6 md:px-10 py-4 border-b-2 border-white">
        {/* Logo */}
        <Link href="/" passHref className="flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Swediana Logo"
            className="h-8 md:h-15 w-auto"
          />
        </Link>

        {/* Desktop menu - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8 mt-5 ">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 lg:gap-15   ">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-teal-400  hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-teal-400 text-xl md:text-1xl ">
                  Tjänster
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Add dropdown content here if needed */}
                  <div className="p-4 w-[200px]">
                    <p>Dropdown content</p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/omOss"
                    className="bg-transparent text-white hover:bg-transparent  text-xl md:text-1xl hover:text-teal-400 "
                  >
                    Om oss
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/faq"
                    className="bg-transparent text-white hover:bg-transparent text-xl md:text-1xl  hover:text-teal-400"
                  >
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/kontakt"
                    className="bg-transparent text-white hover:bg-transparent  text-xl md:text-1xl hover:text-teal-400"
                  >
                    Kontakt
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button - Right aligned */}
        <div className="hidden md:flex items-center mt-5">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white  px-12 py-6  shadow-md text-xl md:text-1xl ">
            Boka nu
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/30 bg-transparent hover:bg-white/10"
              >
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 bg-slate-900 border-l border-white/20"
            >
              <nav className="mt-6 flex flex-col gap-4">
                <Link
                  href="/services"
                  className="text-lg font-medium px-2 py-2 text-white hover:text-teal-400"
                >
                  Tjänster
                </Link>
                <Link
                  href="/omOss"
                  className="text-lg font-medium px-2 py-2 text-white hover:text-teal-400"
                >
                  Om oss
                </Link>
                <Link
                  href="/faq"
                  className="text-lg font-medium px-2 py-2 text-white hover:text-teal-400"
                >
                  FAQ
                </Link>
                <Link
                  href="/kontakt"
                  className="text-lg font-medium px-2 py-2 text-white hover:text-teal-400"
                >
                  Kontakt
                </Link>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white mt-4">
                  Boka nu
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Nav;
