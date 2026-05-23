import Link from "next/link";
import Image from "next/image";

const COLS = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/why-us", label: "Why choose us" },
      { href: "/properties", label: "Our portfolio" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All services" },
      { href: "/maintenance", label: "In-house maintenance" },
      { href: "/tenants", label: "Tenant services" },
      { href: "/properties", label: "Available units" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/tenants#faq", label: "FAQs" },
      { href: "/tenants#rights", label: "Tenant rights" },
      { href: "/contact", label: "Departments" },
      { href: "/contact", label: "Office hours" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-contain p-0.5"
                />
              </span>
              <span
                className="font-serif font-bold text-xl leading-none"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                Al Majaz Al Khleej
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Self-owned residential property management in Sharjah, UAE.
              750+ units, in-house team, established 1984.
            </p>
            <div className="flex gap-2 pt-2">
              <Link href="/contact" className="btn btn-primary">
                Talk to our team
              </Link>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Al Majaz Al Khleej Facility Management
            LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Ejari registered</span>
            <span>RERA compliant</span>
            <span>Sharjah, United Arab Emirates</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
