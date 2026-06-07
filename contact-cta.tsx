"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://galaxy-prod.tlcdn.com/view/user_38Rxhwj6puHTW9VpZVizHQeySzr/ab0e457a52f941248439d98573f3d836.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/about",     label: "About"    },
    { href: "/#why-res",  label: "Why RES?" },
    { href: "/#contact",  label: "Contact"  },
  ];

  const scrolled = isScrolled || isAbout;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-lg border-b border-[#E8C84A]/30"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "relative transition-all duration-300",
              scrolled ? "w-14 h-14" : "w-16 h-16"
            )}>
              <Image
                src={LOGO_URL}
                alt="Regal Empowerment Solutions Logo"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="leading-none hidden sm:block">
              <div className={cn(
                "font-black text-xs tracking-widest uppercase transition-colors",
                scrolled ? "text-[#4C1D95]" : "text-white"
              )}>
                Regal Empowerment
              </div>
              <div className="text-[#D4AF37] text-[10px] font-bold tracking-[0.25em] uppercase">
                Solutions
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-[#D4AF37]",
                  scrolled ? "text-[#2D0057]" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:2057373752">
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#2D0057] font-black rounded-full px-5 shadow-md text-sm">
                <Phone className="h-4 w-4 mr-2" />
                205-737-3752
              </Button>
            </a>
          </div>

          {/* ── Mobile burger ── */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen
              ? <X className={cn("h-6 w-6", scrolled ? "text-[#4C1D95]" : "text-white")} />
              : <Menu className={cn("h-6 w-6", scrolled ? "text-[#4C1D95]" : "text-white")} />
            }
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#EDE9FE] py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#4C1D95] hover:text-[#D4AF37] hover:bg-[#F5F3FF] font-semibold rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <a href="tel:2057373752">
                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#2D0057] font-black rounded-full">
                  <Phone className="h-4 w-4 mr-2" /> 205-737-3752
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
