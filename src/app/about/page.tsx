import type { Metadata } from "next";
import {
  Handshake,
  ShieldCheck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { RevealGroup } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Established in Sharjah since 1984, we own and manage 750+ residential units with a fully in-house team. Learn our story, our values, and what sets us apart.",
};

const PILLARS = [
  {
    title: "Ownership mentality",
    body: "Because we own every unit we manage, we think like owners — not agents. Every improvement we make, every standard we uphold, every issue we resolve is an investment in something we genuinely care about.",
  },
  {
    title: "In-house accountability",
    body: "Never outsource what we can do better ourselves. Maintenance, management, accounts — all directly employed, all directly accountable. There is never a question of whose responsibility it is. It's ours.",
  },
  {
    title: "Long-term relationships",
    body: "Many of our tenants have been with us for a decade or more. Some families have lived in our buildings for two generations. We think in relationships, not lease cycles.",
  },
];

const TEAM = [
  {
    icon: Handshake,
    title: "Management & leasing",
    body: "Our leasing team handles every aspect of the tenant relationship — from the first enquiry through to lease renewal. Empowered to make decisions without waiting for layers of approval.",
  },
  {
    icon: Wallet,
    title: "Accounts & finance",
    body: "Rent collection, deposit handling, VAT compliance, and financial reporting — all in-house, all transparent, all in full compliance with UAE financial regulations.",
  },
  {
    icon: Wrench,
    title: "In-house maintenance crew",
    body: "Electricians, plumbers, AC technicians, carpenters, and general maintenance staff — all directly employed. No call-out delays. When you log a request, our team responds.",
  },
  {
    icon: ShieldCheck,
    title: "Security & facilities",
    body: "Our on-site security and facilities staff maintain common areas, manage access control, and ensure every building feels safe and well-kept.",
  },
];

const COMPLIANCE = [
  ["Ejari", "All tenancy contracts registered with the Sharjah Real Estate Registration Department."],
  ["RERA", "All rent increases in full compliance with the Real Estate Regulatory Agency's published index."],
  ["Sharjah Municipality", "Building maintenance, health, safety, and facility standards aligned with municipality requirements."],
  ["UAE Labour Law (MOHRE)", "All staff under proper employment contracts; salaries disbursed via the Wage Protection System."],
  ["VAT Compliance", "All applicable VAT obligations filed and submitted on time."],
  ["Civil Defence", "Current fire safety certificates, regular drills, and equipment inspections across the portfolio."],
];

const PROMISES = [
  "You will always deal with someone from our team — never a subcontracted third party.",
  "Maintenance requests will be acknowledged within 4 hours and resolved within 48 hours for standard issues.",
  "Your lease agreement will be clear, fair, and fully Ejari-registered.",
  "Your security deposit will be held in compliance with UAE tenancy law and returned promptly on a clean, documented departure.",
  "You will always have a named contact in our management office — someone who knows your unit and your history with us.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Over <span className="text-gradient">40 years</span> of building a better standard.
          </>
        }
        intro="We started with a vision for well-managed, well-maintained residential living in Sharjah. More than four decades later, that vision has grown into 750 units — and a reputation that speaks for itself."
      />

      {/* HISTORY */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Our history"
            title="Where we started, and where we stand."
          />
          <div className="space-y-6 text-base text-foreground/85 leading-relaxed">
            <p>
              When our founders established this company in Sharjah in the 1980s,
              the city was growing rapidly and the demand for quality residential
              accommodation was outpacing supply. The founding principle was
              straightforward: own the properties, manage them directly, maintain
              them properly, and treat every tenant as a long-term relationship
              rather than a short-term transaction.
            </p>
            <p>
              That principle has never changed. Over the decades, we expanded our
              portfolio unit by unit, always staying true to the belief that good
              property management is about people first. We never outsourced our
              maintenance. We never handed management to a third party. We kept
              everything in-house, because accountability only works when there&apos;s
              someone directly responsible.
            </p>
            <p>
              Today, we manage 750 residential units across some of Sharjah&apos;s most
              established neighbourhoods. Our team includes leasing managers,
              accounts staff, on-ground supervisors, and a full in-house
              maintenance crew. Everyone who represents this company works for
              this company — and takes personal pride in the standard we hold
              ourselves to.
            </p>
          </div>
        </div>
      </Section>

      {/* PILLARS */}
      <Section>
        <SectionHeader
          eyebrow="Our philosophy"
          title="How we think about property management."
        />
        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-3" step={90}>
          {PILLARS.map((p, i) => (
            <article key={p.title} className="card-base p-8">
              <div
                className="font-serif text-3xl text-gradient"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                0{i + 1}
              </div>
              <h3
                className="font-serif mt-6 text-2xl tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* TEAM */}
      <Section>
        <SectionHeader
          eyebrow="Our team"
          title="The people behind the portfolio."
          intro="From our management office to our on-ground maintenance crew, every person who works here is committed to the same standard — the one our founders set over 40 years ago."
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2" step={80}>
          {TEAM.map(({ icon: Icon, title, body }) => (
            <article key={title} className="card-base p-8">
              <div className="flex items-start gap-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    className="font-serif text-xl tracking-tight"
                    style={{ fontFamily: "var(--font-eb-garamond)" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* COMPLIANCE */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Compliance & certifications"
            title="Doing things right — every time."
            intro="We take regulatory compliance seriously, not as a checkbox exercise but as a reflection of our values. Our operations are fully aligned with:"
          />
          <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2" step={60}>
            {COMPLIANCE.map(([label, body]) => (
              <li key={label} className="card-base p-6">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-600 dark:text-brand-accent">
                  {label}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* PROMISES */}
      <Section>
        <SectionHeader
          eyebrow="Our commitment"
          title="What we promise every resident."
        />
        <RevealGroup as="ul" className="mt-12 grid gap-4 lg:grid-cols-2" step={70}>
          {PROMISES.map((p, i) => (
            <li
              key={p}
              className="card-base flex items-start gap-5 p-6"
            >
              <span
                className="font-serif text-2xl text-gradient leading-none"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                0{i + 1}
              </span>
              <p className="text-sm text-foreground/85 leading-relaxed">{p}</p>
            </li>
          ))}
        </RevealGroup>
        <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
          <Users className="h-4 w-4 text-brand-500 dark:text-brand-accent" />
          <span>One owner. One team. One standard — held since 1984.</span>
        </div>
      </Section>

      <CtaBanner
        title="Want to meet the team?"
        body="Our office is open six days a week. Walk in, call, or message — you'll always reach someone who can help."
        primaryLabel="Get in touch"
        secondaryHref="/services"
        secondaryLabel="See our services"
      />
    </>
  );
}
