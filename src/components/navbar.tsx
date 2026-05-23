"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/why-us", label: "Why Us" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/tenants", label: "Tenants" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className={cn(
          "glass-nav relative mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border border-white/40 pl-2 pr-2 py-2 backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 transition-all",
          scrolled && "shadow-lg"
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-1/2 rounded-t-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
            mixBlendMode: "overlay",
          }}
        />

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 pl-2 pr-3 shrink-0"
          aria-label="Al Majaz Al Khleej home"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/images/logo.png"
              alt=""
              width={64}
              height={64}
              className="h-full w-full object-contain p-0.5"
              priority
            />
          </span>
          <span
            className="hidden sm:inline font-serif font-bold text-[17px] tracking-tight leading-none"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Al Majaz Al Khleej
          </span>
          <span
            className="sm:hidden font-serif font-bold text-base tracking-tight leading-none"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            MAK
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex items-center rounded-full px-3.5 py-2 text-sm transition-colors",
                    active
                      ? "text-foreground bg-foreground/[0.06]"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-1 pr-1">
          <ThemeToggle />
          <Link
            href="/contact"
            className="btn btn-primary text-sm hidden sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-card/95 backdrop-blur-xl p-3 shadow-xl">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors",
                      active
                        ? "bg-foreground/[0.06] text-foreground"
                        : "text-foreground/80 hover:bg-foreground/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link href="/contact" className="btn btn-primary w-full">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
