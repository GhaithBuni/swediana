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
    <div className="w-full flex justify-around items-center p-4 border-b">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">Swediana</h1>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tjänster</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[300px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/cleaning"
                        className="block rounded-md p-3 hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          Städning
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Hemstädning, flyttstädning, storstädning.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/moving"
                        className="block rounded-md p-3 hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          Flytt
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Flytthjälp, packning och transport.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/kontakt" className={navigationMenuTriggerStyle()}>
                  Kontakt
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/omOss" className={navigationMenuTriggerStyle()}>
                  Om oss
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium px-2">
                Tjänster
              </Link>
              <Link href="/about" className="text-lg font-medium px-2">
                Kontakt
              </Link>
              <Link href="/contact" className="text-lg font-medium px-2">
                Om oss
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Nav;
