import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  Building2,
  CalendarCheck,
  Check,
  ClipboardList,
  KeyRound,
  Lock,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { RevealGroup } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full residential property management services in Sharjah: leasing, tenancy management, in-house maintenance, security, and facilities — all under one roof.",
};

const SERVICES = [
  {
    icon: KeyRound,
    title: "Residential leasing",
    body: "Finding the right home starts with talking to the right people. Our leasing team manages every step — from the first viewing to the signed contract. Because we own the properties, we can offer direct pricing without agent commissions.",
    items: [
      "Unit viewings at your convenience",
      "Clear, fair tenancy agreement preparation",
      "Ejari registration — all contracts officially recorded",
      "Security deposit documentation and collection",
      "Transparent pricing — no hidden administration fees",
      "Move-in handover with documented condition report",
    ],
    cta: { label: "Enquire about available units", href: "/contact" },
  },
  {
    icon: ClipboardList,
    title: "Tenancy management",
    body: "Our relationship with tenants doesn't end at signing — it's just beginning. Lease renewals, RERA-compliant rent adjustments, and any administrative need are handled by a team that knows your file.",
    items: [
      "Lease renewal management and proactive communication",
      "RERA-compliant rent review and adjustment",
      "Tenancy documentation management",
      "Notice processing and vacation handling",
      "Tenant satisfaction monitoring",
      "Escalation resolution — managed directly, not delegated",
    ],
  },
  {
    icon: Wrench,
    title: "In-house maintenance",
    flag: "Our biggest differentiator",
    body: "Most property management companies outsource maintenance to third-party contractors. We don't. Our full-time, in-house maintenance team is on the ground every day, servicing our portfolio with the speed and care that only comes from being part of the same organisation.",
    items: [
      "Air conditioning — service, repair, seasonal maintenance",
      "Plumbing — minor leaks to full fixture replacements",
      "Electrical — wiring, fuse boards, fixtures, fault finding",
      "Carpentry — doors, windows, fitted furniture, joinery",
      "Painting and finishing — unit refreshes between tenancies",
      "General repairs — whatever needs fixing, our team fixes it",
    ],
    cta: { label: "See the maintenance team", href: "/maintenance" },
  },
  {
    icon: CalendarCheck,
    title: "Planned preventive maintenance",
    body: "We don't wait for things to break. Our PPM schedule ensures every building is proactively inspected and serviced — from AC filter cleans to elevator certifications to fire system checks.",
    items: [
      "AC seasonal servicing and filter replacement",
      "Elevator maintenance and annual certification",
      "Fire alarm, extinguisher, and Civil Defence compliance",
      "Plumbing and drainage inspections",
      "Electrical system checks",
      "Common area, exterior, and pest-control programmes",
    ],
  },
  {
    icon: Building2,
    title: "Facilities & common area management",
    body: "The quality of a building isn't just measured inside the unit — it's measured in the lobby, the corridors, the parking area, and the grounds. Our facilities team maintains every shared space to the same standard we hold the units themselves.",
    items: [
      "Daily cleaning of lobbies, stairwells, corridors, parking",
      "Landscaping and exterior upkeep",
      "Lighting maintenance in all common areas",
      "Waste management and bin areas",
      "Swimming pool maintenance (applicable buildings)",
      "Lift and mechanical system oversight",
    ],
  },
  {
    icon: Lock,
    title: "On-site security",
    body: "Our security team is employed directly by us — not contracted through a third-party agency. They are trained to our standards, familiar with every resident, and integrated with our management team.",
    items: [
      "24/7 on-site security presence (applicable buildings)",
      "CCTV monitoring and system management",
      "Access control management",
      "Visitor log and entry management",
      "Incident reporting directly to management",
      "Parking enforcement and management",
    ],
  },
  {
    icon: Banknote,
    title: "Transparent financial management",
    body: "Rent collection, deposit handling, VAT compliance, and financial documentation — all managed in-house with full transparency. We accept post-dated cheques in line with UAE rental norms.",
    items: [
      "Rent collection and receipt issuance",
      "Post-dated cheque management",
      "Security deposit holding in compliance with UAE law",
      "VAT invoicing (where applicable)",
      "Sharjah municipality fee management",
      "Financial statements and lease summaries on request",
    ],
  },
];

const SUMMARY = [
  ["Residential leasing", "In-house leasing team", "7 days / week"],
  ["Lease & tenancy management", "In-house management", "Business hours + emergency"],
  ["Corrective maintenance", "In-house maintenance crew", "24/7"],
  ["Planned preventive maintenance", "In-house maintenance crew", "Scheduled"],
  ["Common area & facilities", "In-house facilities team", "Daily"],
  ["Security", "In-house security staff", "24/7"],
  ["Accounts & finance", "In-house finance team", "Business hours"],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Full-service property management — <span className="text-gradient">all under one roof</span>.
          </>
        }
        intro="From leasing and tenancy management to daily maintenance and facilities operations, everything is handled in-house by our own team. No outsourcing. No gaps. No excuses."
      />

      <Section>
        <RevealGroup className="space-y-6" step={80}>
          {SERVICES.map(({ icon: Icon, title, flag, body, items, cta }) => (
            <article
              key={title}
              className={`${flag ? "card-gradient" : "card-base"} p-8 sm:p-10`}
            >
              <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                        flag
                          ? "bg-white/15 text-white"
                          : "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-accent"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    {flag ? (
                      <span className="text-[11px] uppercase tracking-[0.16em] text-white/85">
                        {flag}
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className="font-serif mt-6 text-2xl sm:text-3xl tracking-tight"
                    style={{ fontFamily: "var(--font-eb-garamond)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      flag ? "text-white/85" : "text-muted-foreground"
                    }`}
                  >
                    {body}
                  </p>
                  {cta ? (
                    <Link
                      href={cta.href}
                      className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all ${
                        flag
                          ? "text-white"
                          : "text-brand-700 dark:text-brand-accent"
                      }`}
                    >
                      {cta.label} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
                <ul className="grid gap-2 self-center">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm ${
                        flag ? "text-white/90" : "text-foreground/85"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          flag
                            ? "text-white"
                            : "text-brand-600 dark:text-brand-accent"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* SUMMARY TABLE */}
      <Section>
        <SectionHeader
          eyebrow="At a glance"
          title="Services summary."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="px-5 py-4 font-medium text-foreground">Service</th>
                <th className="px-5 py-4 font-medium text-foreground">Handled by</th>
                <th className="px-5 py-4 font-medium text-foreground">Available</th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY.map(([service, by, avail], idx) => (
                <tr
                  key={service}
                  className={idx % 2 ? "bg-card/40" : "bg-card/0"}
                >
                  <td className="border-t border-border px-5 py-4">{service}</td>
                  <td className="border-t border-border px-5 py-4 text-muted-foreground">
                    {by}
                  </td>
                  <td className="border-t border-border px-5 py-4 text-muted-foreground">
                    {avail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBanner
        title="Need a service handled?"
        body="Reach the right team directly — leasing, tenancy, maintenance, or accounts. We answer."
        primaryLabel="Contact our team"
        secondaryHref="/maintenance"
        secondaryLabel="Maintenance details"
      />
    </>
  );
}
