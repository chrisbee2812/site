"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dog, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Dog className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            West Park Dog Grooming
          </span>
        </Link>

        <div className="hidden flex-1 md:flex md:items-center md:justify-center">
          <NavLinks />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button className="hidden md:inline-flex" asChild>
             <Link href="/services">Book Now</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link href="/" className="mb-4 flex items-center space-x-2">
                     <Dog className="h-6 w-6 text-primary" />
                     <span className="font-bold">West Park</span>
                  </Link>
                  <NavLinks className="flex-col space-x-0 space-y-4 items-start" />
                   <Button className="mt-4" asChild>
                      <Link href="/services">Book Now</Link>
                   </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
