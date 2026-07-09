"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", id: "about", label: "About" },
  { href: "#why-us", id: "why-us", label: "Why Us" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#properties", id: "properties", label: "Properties" },
  { href: "#maintenance", id: "maintenance", label: "Maintenance" },
  { href: "#faq", id: "faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
        <a
          href="#top"
          className="flex items-center gap-2 pl-2 pr-3 shrink-0"
          aria-label="Al Majaz Al Khleej home"
        >
          <span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/images/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-contain p-0.5"
              priority
            />
          </span>
          <span className="font-bold text-[13px] sm:text-sm tracking-tight leading-none whitespace-nowrap">
            Al Majaz Al Khleej
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "inline-flex items-center rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === link.id
                    ? "text-foreground bg-foreground/[0.06]"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-1 pr-1">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn btn-primary text-sm hidden sm:inline-flex"
          >
            Contact
          </a>
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors",
                    active === link.id
                      ? "bg-foreground/[0.06] text-foreground"
                      : "text-foreground/80 hover:bg-foreground/5"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
