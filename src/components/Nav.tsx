"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Container from "@/components/Container";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
    <header className="w-full bg-transparent fixed top-0 z-50">
      {/* 100% width on mobile, 80% on md+ */}
      <Container>
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Swediana – Hem">
            <Image
              src="/logo.svg"
              alt="Swediana"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop menu (centered) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-teal-400 hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-teal-400 ">
                    Tjänster
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 w-64">
                    <ul className="grid gap-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/moving"
                            className="block rounded-md px-3 py-2 hover:bg-accent"
                          >
                            Flytt
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cleaning"
                            className="block rounded-md px-3 py-2 hover:bg-accent"
                          >
                            Städning
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/omOss"
                      className="px-3 py-2 text-white hover:text-teal-400"
                    >
                      Om oss
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/faq"
                      className="px-3 py-2 text-white hover:text-teal-400"
                    >
                      FAQ
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/kontakt"
                      className="px-3 py-2 text-white hover:text-teal-400"
                    >
                      Kontakt
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA (right) */}
          <div className="hidden md:flex">
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2  rounded-full shadow-md"
              asChild
            >
              <Link href="/boka" aria-label="Boka nu">
                Boka nu
              </Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 bg-transparent hover:bg-white/10"
                  aria-label="Öppna meny"
                >
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 bg-slate-900 border-l border-white/20"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Meny</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-2">
                  <Link
                    href="/services"
                    className="px-2 py-2 text-white rounded hover:bg-white/10"
                  >
                    Tjänster
                  </Link>
                  <Link
                    href="/omOss"
                    className="px-2 py-2 text-white rounded hover:bg-white/10"
                  >
                    Om oss
                  </Link>
                  <Link
                    href="/faq"
                    className="px-2 py-2 text-white rounded hover:bg-white/10"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/kontakt"
                    className="px-2 py-2 text-white rounded hover:bg-white/10"
                  >
                    Kontakt
                  </Link>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white mt-4">
                    <Link href="/boka">Boka nu</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
