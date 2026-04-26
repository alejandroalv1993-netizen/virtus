"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Historia", href: "/historia" },
  { name: "Valores", href: "/valores" },
  { name: "Tradición", href: "/tradicion" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "glass py-3 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-black/5 bg-black/5 group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/logo.webp" 
              alt="Virtus Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter serif text-foreground">
            VIRTUS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link 
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-black/5 text-xs uppercase tracking-widest font-medium transition-colors"
                    )}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-4 w-px bg-black/10 mx-2" />

          <Button variant="ghost" size="icon" render={<Link href="/admin"><User className="h-4 w-4" /></Link>} className="rounded-full hover:bg-black/5" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <Button variant="ghost" size="icon" render={<Link href="/admin"><User className="h-4 w-4" /></Link>} className="rounded-full" />
          
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Menu className="h-5 w-5" /></Button>}>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-l border-black/5">
              <SheetHeader className="mb-12">
                <SheetTitle className="serif text-3xl font-black tracking-tighter text-left">VIRTUS</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium serif border-b border-black/5 pb-4 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-12 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Editorial N° 01</p>
                <div className="h-px w-full bg-black/5" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
