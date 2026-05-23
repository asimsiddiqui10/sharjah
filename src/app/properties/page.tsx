import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Car,
  Check,
  ClipboardCheck,
  Droplets,
  Flame,
  Recycle,
  ShieldCheck,
  Sparkles,
  Trees,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { RevealGroup } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Properties",
  description:
    "750 owner-managed homes across Sharjah — from studios to spacious family apartments in some of the city's most established communities.",
};

const UNITS = [
  {
    type: "Studio apartments",
    size: "from 350 sq ft",
    ideal: "Single occupants, young professionals, couples",
    body: "Well-planned, efficient studio units with fully fitted kitchens, independent SEWA meters, and access to all building facilities.",
  },
  {
    type: "1-bedroom apartments",
    size: "from 600 sq ft",
    ideal: "Couples, professionals seeking more space, small families",
    body: "Our most popular unit type — a full bedroom, living area, fitted kitchen, and bathroom. Many include a balcony and built-in wardrobes.",
  },
  {
    type: "2-bedroom apartments",
    size: "from 900 sq ft",
    ideal: "Growing families, shared occupancy, professionals working from home",
    body: "Spacious family apartments with two full bedrooms, a generous living and dining area, fitted kitchen, and 1–2 bathrooms. Some include maid's rooms.",
  },
  {
    type: "3-bedroom apartments",
    size: "from 1,200 sq ft",
    ideal: "Larger families, multi-generational households",
    body: "Our largest apartment configuration. Full-size rooms, large living areas, 2 bathrooms, and ample storage.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Long-term maintenance history",
    body: "Our oldest buildings have four decades of documented maintenance, upgrade, and improvement records.",
  },
  {
    title: "Consistent standards",
    body: "We set the maintenance and presentation standard across all 750 units — not unit-by-unit depending on outside landlord preferences.",
  },
  {
    title: "No sub-landlord complexity",
    body: "You deal with the owner. There is no landlord above us to refer to, no approval chain that delays decisions.",
  },
  {
    title: "Investment in improvement",
    body: "We regularly refresh common areas, upgrade units between tenancies, and invest in energy efficiency across the portfolio.",
  },
];

const FEATURES = [
  { icon: Car, label: "Covered or open parking" },
  { icon: ShieldCheck, label: "24-hour security" },
  { icon: Camera, label: "CCTV in all common areas" },
  { icon: Sparkles, label: "Regular deep cleaning" },
  { icon: ClipboardCheck, label: "Annually-certified elevators" },
  { icon: Recycle, label: "Central waste management" },
  { icon: Trees, label: "Pest control programme" },
  { icon: Wrench, label: "Emergency maintenance line" },
  { icon: ClipboardCheck, label: "Ejari-registered leases" },
  { icon: Droplets, label: "Direct SEWA utility connection" },
  { icon: Flame, label: "Civil Defence fire compliance" },
  { icon: Check, label: "Documented handovers" },
];

const LOCATIONS = [
  "Easy access to Sheikh Mohammed Bin Zayed Road, Al Wahda Street, University City Road",
  "Walking distance or short drive to mosques, schools, and daily shopping",
  "Close to Sharjah's business districts and industrial areas",
  "Convenient access to Dubai via key border corridors",
];

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={
          <>
            750 homes. Built with pride. <span className="text-gradient">Managed with care</span>.
          </>
        }
        intro="Every unit in our portfolio is owned and managed by us. From studios to spacious family apartments, we offer a range of residential options across Sharjah's best-connected and most established communities."
      />

      {/* WHY DIFFERENT */}
      <Section>
        <SectionHeader
          eyebrow="Why our properties are different"
          title="Not just managed. Owner-cared."
          intro="When a company owns its own portfolio — rather than managing it on behalf of outside owners — the standard changes. We invest in our buildings because they're ours."
        />
        <RevealGroup className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2" step={80}>
          {DIFFERENTIATORS.map((d) => (
            <article key={d.title} className="card-base flex h-full flex-col p-7">
              <h3
                className="font-serif text-xl tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {d.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {d.body}
              </p>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* UNIT TYPES */}
      <Section>
        <SectionHeader
          eyebrow="Unit types available"
          title="Find your home."
        />
        <RevealGroup className="mt-14 grid auto-rows-fr gap-5 lg:grid-cols-2" step={80}>
          {UNITS.map((u) => (
            <article key={u.type} className="card-base flex h-full flex-col p-8">
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="font-serif text-2xl tracking-tight"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  {u.type}
                </h3>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {u.size}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {u.body}
              </p>
              <div className="hairline my-6" />
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Ideal for
              </div>
              <p className="mt-2 text-sm text-foreground/85">{u.ideal}</p>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* FEATURES */}
      <Section>
        <SectionHeader
          eyebrow="Building features"
          title="What every building offers."
        />
        <ul className="mt-12 grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-5 py-4 text-sm"
            >
              <Icon className="h-4 w-4 text-brand-600 dark:text-brand-accent shrink-0" />
              {label}
            </li>
          ))}
        </ul>
      </Section>

      {/* LOCATION */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="Location advantage"
            title="Well-located. Well-connected."
            intro="Our portfolio is distributed across Sharjah's most established and well-connected residential areas. We chose locations that work for families and working residents — not just locations that were convenient to develop."
          />
          <ul className="space-y-4">
            {LOCATIONS.map((l) => (
              <li key={l} className="card-base flex gap-4 p-6 text-sm">
                <Check className="mt-0.5 h-4 w-4 text-brand-600 dark:text-brand-accent shrink-0" />
                <span className="text-foreground/85 leading-relaxed">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA BLOCK */}
      <Section>
        <div className="card-base flex flex-col gap-6 p-10 sm:flex-row sm:items-end sm:justify-between sm:p-14">
          <div>
            <span className="eyebrow">Ready to view?</span>
            <h3
              className="font-serif mt-4 text-3xl tracking-tight"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              Find your next home.
            </h3>
            <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
              Our leasing team is available to discuss available units, arrange
              viewings, and walk you through the rental process. No agents.
              No fees. Just a direct conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              View available units <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact leasing team
            </Link>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Have a unit type in mind?"
        body="Tell us what you're looking for — bedroom count, area, move-in date — and we'll come back with what we have available."
        primaryLabel="Send an enquiry"
        secondaryHref="/why-us"
        secondaryLabel="Why choose us"
      />
    </>
  );
}
