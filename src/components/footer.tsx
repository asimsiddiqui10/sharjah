import Image from "next/image";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#properties", label: "Properties" },
  { href: "#maintenance", label: "Maintenance" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Home">
            <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src="/images/logo.png"
                alt=""
                width={56}
                height={56}
                className="h-full w-full object-contain p-0.5"
              />
            </span>
            <span
              className="font-serif font-bold text-base leading-none"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              Al Majaz Al Khleej
            </span>
          </a>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hairline my-8" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Al Majaz Al Khleej Facility Management
            LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Toll free: 800 1099</span>
            <span>Ejari registered</span>
            <span>Sharjah, United Arab Emirates</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
