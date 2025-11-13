"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
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
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  const [openServices, setOpenServices] = React.useState(false);

  const linkBase =
    "flex items-center justify-between px-3 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors";
  const isActive = (href: string) =>
    pathname === href
      ? "bg-white/10 text-white ring-1 ring-white/10"
      : "text-white/90";

  return (
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
        className="
          w-[82vw] max-w-sm p-0
          bg-slate-900/90 backdrop-blur
          border-l border-white/10
          text-white
          flex flex-col
        "
      >
        {/* Header */}
        <SheetHeader className="px-4 pb-4 pt-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Swediana"
              width={28}
              height={28}
              className="h-7 w-auto"
              priority
            />
            <SheetTitle className="text-white/95 tracking-tight"></SheetTitle>
          </div>
        </SheetHeader>

        {/* Scrollable links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {/* Tjänster (collapsible) */}
          <button
            type="button"
            onClick={() => setOpenServices((v) => !v)}
            className={`${linkBase} w-full`}
            aria-expanded={openServices}
            aria-controls="services-submenu"
          >
            <span className="font-medium">Tjänster</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                openServices ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id="services-submenu"
            className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
              openServices ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <ul className="mt-1 pl-2 space-y-1">
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/flytthjalpinfo"
                      className={`block ${linkBase} ${isActive("/flytthjalp")}`}
                    >
                      Flytthjälp
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/flyttstadinfo"
                      className={`block ${linkBase} ${isActive(
                        "/services/cleaning"
                      )}`}
                    >
                      FlyttStädning
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/foretagstad"
                      className={`block ${linkBase} ${isActive(
                        "/services/cleaning"
                      )}`}
                    >
                      Företagstädning
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/byggstadinfo"
                      className={`block ${linkBase} ${isActive(
                        "/services/cleaning"
                      )}`}
                    >
                      Byggstäadning
                    </Link>
                  </SheetClose>
                </li>
                  <li>
                  <SheetClose asChild>
                    <Link
                      href="/fonsterputs"
                      className={`block ${linkBase} ${isActive(
                        "/services/cleaning"
                      )}`}
                    >
                      Fönsterputs
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </div>
          </div>

          <SheetClose asChild>
            <Link href="/omOss" className={`${linkBase} ${isActive("/omOss")}`}>
              Om oss
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/faq" className={`${linkBase} ${isActive("/faq")}`}>
              FAQ
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/kontakt"
              className={`${linkBase} ${isActive("/kontakt")}`}
            >
              Kontakt
            </Link>
          </SheetClose>
        </nav>

        {/* Sticky CTA */}
        <div className="p-4 border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent pb-[env(safe-area-inset-bottom)]">
          <SheetClose asChild>
            <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-900/20">
              <Link href="/boka" className="w-full text-center">
                Boka nu
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#007a7b]" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Swediana – Hem">
            <Image
              src="/logo.svg"
              alt="Swediana"
              width={200}
              height={100}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop menu (centered) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <NavigationMenu className="">
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
                            href="/flytthjalpinfo"
                            className="block rounded-md px-3 py-2 hover:bg-accent"
                          >
                            Flytthjälp
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/flyttstadinfo"
                            className="block rounded-md px-3 py-2 hover:bg-accent"
                          >
                            Flyttstädning
                          </Link>
                        </NavigationMenuLink>
                      </li>
                       <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/foretagstad"
                            className="block rounded-md px-3 py-2 hover:bg-accent"
                          >
                            Företagstädning
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/byggstadinfo"
                            className="block rounded-md px-3 py-2 hover:bg-accent"
                          >
                            Byggstädning
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/fonsterputs"
                            className="block rounded-md px-3 py-2 hover:bg-accent"
                          >
                            Fönsterputs
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
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
