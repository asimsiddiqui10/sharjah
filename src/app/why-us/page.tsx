import type { Metadata } from "next";
import { Check, Minus, X } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { RevealGroup } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "We own, manage, and maintain our own residential portfolio in Sharjah — since 1984. See what makes us different from agencies and private landlords.",
};

const DIFFS = [
  {
    title: "We own what we manage.",
    body: "Most property management companies work on behalf of external landlords. We own every unit in our portfolio. That changes the dynamic entirely — our decisions are made as owners, not as agents.",
  },
  {
    title: "No middlemen, no outsourcing.",
    body: "Maintenance, management, security, accounts — every person you speak to works for us, and is directly accountable to us. No third-party contractor to blame, no agency delay to explain.",
  },
  {
    title: "40+ years of local knowledge.",
    body: "We've been operating in Sharjah since 1984. We know the regulatory landscape, the rental market, community standards, and the practical challenges of managing residential property here.",
  },
  {
    title: "A tenant is a long-term relationship.",
    body: "Our average tenancy length is significantly above the market average. We invest in the relationship from the start. Renewal is always our preferred outcome.",
  },
  {
    title: "One point of accountability.",
    body: "In most managed properties, tenants are caught between a landlord, a management company, and a contractor — each pointing to the other. With us, there is one entity responsible for everything.",
  },
  {
    title: "Full regulatory compliance — always.",
    body: "Ejari, RERA, UAE labour law, VAT, Civil Defence, Sharjah Municipality — we treat compliance as a minimum standard, not a burden. Your lease is legal, your building is certified.",
  },
];

type Mark = "yes" | "no" | "partial";
const COMPARE: { feature: string; us: Mark; agency: Mark; private: Mark; usText?: string; agencyText?: string; privateText?: string }[] = [
  { feature: "Ownership of property", us: "yes", agency: "no", private: "yes", usText: "Owner", agencyText: "Manages on behalf of others", privateText: "Owner" },
  { feature: "In-house maintenance team", us: "yes", agency: "no", private: "no", usText: "Fully in-house", agencyText: "Outsourced contractors", privateText: "Usually outsourced" },
  { feature: "24/7 maintenance availability", us: "yes", agency: "no", private: "no", usText: "Yes", agencyText: "Limited", privateText: "Rarely" },
  { feature: "Direct contact (no middlemen)", us: "yes", agency: "no", private: "partial", usText: "Always", agencyText: "Multi-layer chain", privateText: "Sometimes" },
  { feature: "Ejari compliance", us: "yes", agency: "yes", private: "partial", usText: "100%", agencyText: "Usually", privateText: "Inconsistent" },
  { feature: "Response time for maintenance", us: "yes", agency: "no", private: "no", usText: "24–48 hrs", agencyText: "Days to weeks", privateText: "Unpredictable" },
  { feature: "Experience in Sharjah", us: "yes", agency: "partial", private: "partial", usText: "40+ years", agencyText: "Varies", privateText: "Varies" },
  { feature: "Single point of accountability", us: "yes", agency: "no", private: "partial", usText: "Yes", agencyText: "Fragmented", privateText: "Partial" },
  { feature: "Long-term relationship focus", us: "yes", agency: "no", private: "partial", usText: "Yes", agencyText: "Commission-driven", privateText: "Varies" },
];

const MarkIcon = ({ mark }: { mark: Mark }) => {
  if (mark === "yes") return <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
  if (mark === "no") return <X className="h-4 w-4 text-rose-500/80" />;
  return <Minus className="h-4 w-4 text-amber-500" />;
};

const TESTIMONIALS = [
  {
    quote:
      "I've watched this company maintain its standards over fifteen years of being a tenant. Buildings that have been standing since the 1990s still feel well-kept. That's not an accident — it's what happens when a company actually cares.",
    author: "Abdullah F.",
    role: "Tenant since 2009",
  },
  {
    quote:
      "My parents rented from this company before I did. That kind of continuity tells you everything you need to know about how they treat people.",
    author: "Fatima Al H.",
    role: "Tenant since 2017, following her parents",
  },
  {
    quote:
      "I moved here from overseas and was apprehensive about the rental process. From the moment I contacted them, every step was explained clearly. They registered my contract, walked me through my rights, and have been responsive ever since.",
    author: "James O.",
    role: "Tenant since 2021",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="The difference"
        title={
          <>
            This is what <span className="text-gradient">40 years of getting it right</span> looks like.
          </>
        }
        intro="We're not a property management agency. We're not a landlord portal. We're a family company that owns, manages, and maintains its own residential portfolio in Sharjah — and has done so since 1984."
      />

      {/* CORE DIFFERENCES */}
      <Section>
        <SectionHeader
          eyebrow="The core differences"
          title="What makes us different from everyone else."
        />
        <RevealGroup className="mt-14 grid auto-rows-fr gap-5 lg:grid-cols-2" step={80}>
          {DIFFS.map((d, i) => (
            <article key={d.title} className="card-base flex h-full flex-col p-8">
              <div className="flex items-start gap-6">
                <span
                  className="font-serif text-3xl text-gradient leading-none"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    className="font-serif text-xl tracking-tight"
                    style={{ fontFamily: "var(--font-eb-garamond)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* COMPARISON */}
      <Section>
        <SectionHeader
          eyebrow="Us vs. the typical property market"
          title="An honest comparison."
        />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="px-5 py-4 font-medium">Feature</th>
                <th className="px-5 py-4 font-medium text-brand-700 dark:text-brand-accent">
                  Al Majaz Al Khleej
                </th>
                <th className="px-5 py-4 font-medium text-muted-foreground">
                  Typical agency
                </th>
                <th className="px-5 py-4 font-medium text-muted-foreground">
                  Private landlord
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 ? "bg-card/40" : ""}>
                  <td className="border-t border-border px-5 py-4 font-medium">
                    {row.feature}
                  </td>
                  <td className="border-t border-border px-5 py-4">
                    <span className="inline-flex items-center gap-2">
                      <MarkIcon mark={row.us} />
                      <span>{row.usText}</span>
                    </span>
                  </td>
                  <td className="border-t border-border px-5 py-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <MarkIcon mark={row.agency} />
                      <span>{row.agencyText}</span>
                    </span>
                  </td>
                  <td className="border-t border-border px-5 py-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <MarkIcon mark={row.private} />
                      <span>{row.privateText}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="What our long-term tenants say"
          title="Decades of trust — in their words."
        />
        <RevealGroup className="mt-14 grid auto-rows-fr gap-6 lg:grid-cols-3" step={90}>
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="card-base flex h-full flex-col p-8">
              <blockquote
                className="font-serif text-lg leading-snug text-balance"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-8 text-sm">
                <div className="font-medium">{t.author}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </Section>

      <CtaBanner
        title="Want to see for yourself?"
        body="Book a viewing or speak directly with our leasing team — and judge the difference in person."
        primaryLabel="Speak to leasing"
        secondaryHref="/properties"
        secondaryLabel="See properties"
      />
    </>
  );
}
