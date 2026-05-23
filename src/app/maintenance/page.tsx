import type { Metadata } from "next";
import {
  AirVent,
  Brush,
  Cog,
  Droplets,
  Hammer,
  Leaf,
  PhoneCall,
  Plug,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { RevealGroup } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Maintenance",
  description:
    "Full in-house maintenance team in Sharjah — air conditioning, plumbing, electrical, carpentry, painting, pest control. No contractors, no call queues, 24/7 emergency response.",
};

const TRADES = [
  { icon: AirVent, title: "Air conditioning", body: "Full AC servicing, filter cleaning, gas refilling, compressor repair, duct inspection, and seasonal maintenance. Every unit's AC system is logged and serviced on a preventive schedule." },
  { icon: Droplets, title: "Plumbing", body: "From a dripping tap to a full bathroom renovation — our licensed plumbers handle leaks, blockages, fixture replacements, water heater maintenance, and all drainage issues." },
  { icon: Plug, title: "Electrical", body: "Fault finding, wiring repairs, fixture replacements, fuse board work, and lighting upgrades. All electrical work is carried out safely, in compliance with UAE standards." },
  { icon: Hammer, title: "Carpentry & joinery", body: "Doors, windows, cupboards, kitchen units, wardrobes, and all timber fixtures. Our carpenters handle both repair and replacement across all building types." },
  { icon: Brush, title: "Painting & finishing", body: "Unit refreshes between tenancies, touch-up painting, full repaints, and common area finishing. All done to a consistent standard before any new tenant moves in." },
  { icon: Wrench, title: "General maintenance", body: "Tiling, flooring, waterproofing, sealant work, and anything that doesn't fall neatly into a single trade — our general maintenance team handles it." },
  { icon: Leaf, title: "Pest control", body: "Scheduled pest control programme across all buildings, with on-demand callouts when needed. Covered under your tenancy at no additional charge." },
  { icon: Cog, title: "Mechanical & building systems", body: "Elevator maintenance coordination, water pump servicing, fire suppression system testing, and all other building mechanical systems — monitored, logged, and maintained." },
];

const PROCESS = [
  { title: "Log your request", body: "Call us, WhatsApp us, or log it through our tenant portal. We log every request with a time stamp and job reference number." },
  { title: "Acknowledgement", time: "Within 4 hours", body: "You'll receive confirmation that your request has been received and assigned, along with an estimated response time." },
  { title: "Assessment", time: "Within 24 hours", body: "A member of our maintenance team will assess the job — either remotely or with a visit — and confirm the scope of work and timeline." },
  { title: "Completion", time: "Within 48 hours", body: "Standard maintenance jobs are completed within 48 hours of logging. Emergencies — power loss, major leaks, AC failure in summer — are treated as same-day priorities." },
  { title: "Sign-off", body: "Once the job is done, our team will confirm completion with you and note it in our maintenance log. If you're not satisfied, it's not closed." },
];

const EMERGENCY = [
  "Complete electricity failure in a unit",
  "Major water leak or flooding",
  "AC failure (prioritised in summer months)",
  "Lift breakdown",
  "Security-related structural damage",
  "Gas-related concerns",
];

const CALENDAR = [
  ["January", "Full AC inspection and filter servicing"],
  ["February", "Electrical system checks"],
  ["March", "Pre-summer AC gas and compressor check"],
  ["April", "Lift certification renewal"],
  ["May", "Fire alarm and extinguisher inspection"],
  ["June", "Pest control (summer programme)"],
  ["July", "Water tank cleaning and inspection"],
  ["August", "Plumbing and drainage inspection"],
  ["September", "Common area deep cleaning"],
  ["October", "Post-summer AC service"],
  ["November", "Exterior and façade inspection"],
  ["December", "Full building audit and annual review"],
];

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="In-house maintenance"
        title={
          <>
            A full maintenance team. <span className="text-gradient">Employed by us. Working for you.</span>
          </>
        }
        intro={"No contractors. No call queues. No “someone will be in touch.” Our maintenance crew is part of our team — which means your problem is our problem, and we solve it fast."}
      />

      {/* PHILOSOPHY */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Our philosophy"
            title="Maintenance the way it should be."
          />
          <div className="space-y-6 text-base text-foreground/85 leading-relaxed">
            <p>
              The decision to maintain an in-house maintenance team rather than
              outsourcing to contractors was made in the early days of our company
              and has never been reconsidered. When a maintenance team works for
              us, they share our values, they know our buildings inside-out, and
              they are accountable to the same management that answers to you.
            </p>
            <p>
              A contracted maintenance company works for their own business. Our
              maintenance team works for ours. The difference in attitude — and in
              outcome — is significant.
            </p>
          </div>
        </div>
      </Section>

      {/* TRADES */}
      <Section>
        <SectionHeader
          eyebrow="What our team covers"
          title="Every trade. Every task. In-house."
        />
        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          step={60}
        >
          {TRADES.map(({ icon: Icon, title, body }, i) => {
            // Spotlight the first trade card with the brand gradient
            const isHighlight = i === 0;
            return (
              <article
                key={title}
                className={`${isHighlight ? "card-gradient" : "card-base"} p-7`}
              >
                <div className="relative icon-chip">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="font-serif mt-5 text-lg tracking-tight relative"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 text-xs leading-relaxed relative ${
                    isHighlight ? "text-white/85" : "text-muted-foreground"
                  }`}
                >
                  {body}
                </p>
              </article>
            );
          })}
        </RevealGroup>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeader
          eyebrow="Maintenance process"
          title="How a job gets done — from your call to our sign-off."
        />
        <RevealGroup
          as="ol"
          className="mt-14 grid gap-5 lg:grid-cols-5"
          step={70}
        >
          {PROCESS.map((step, i) => (
            <li key={step.title} className="card-base p-6">
              <div className="flex items-center gap-3">
                <span
                  className="font-serif text-2xl text-gradient"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3
                className="font-serif mt-5 text-lg tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {step.title}
              </h3>
              {step.time ? (
                <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-[0.12em] text-brand-700 dark:text-brand-accent">
                  {step.time}
                </span>
              ) : null}
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </RevealGroup>
      </Section>

      {/* EMERGENCY */}
      <Section>
        <div className="card-base overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <div className="p-10 sm:p-12">
              <span className="eyebrow">Emergency maintenance</span>
              <h3
                className="font-serif mt-5 text-3xl sm:text-4xl tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                When it can&apos;t wait.
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Some things can&apos;t be scheduled. Total power failure. A burst pipe.
                An AC breakdown in a Sharjah summer. Our emergency maintenance
                line is available 24 hours a day, 7 days a week, 365 days a year.
              </p>
              <a
                href="tel:+97100000000"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-brand-400/30 bg-brand-50/60 px-5 py-4 text-sm font-medium text-brand-700 dark:bg-brand-900/40 dark:text-brand-accent dark:border-brand-700/40"
              >
                <PhoneCall className="h-4 w-4" />
                24/7 emergency line — call now
              </a>
            </div>
            <div className="border-t border-border lg:border-t-0 lg:border-l p-10 sm:p-12 bg-muted/40">
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                What qualifies as an emergency
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {EMERGENCY.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* PPM CALENDAR */}
      <Section>
        <SectionHeader
          eyebrow="Preventive maintenance schedule"
          title="We don't wait for things to break."
          intro="Our Planned Preventive Maintenance programme runs year-round across all 750 units and common areas. This is how older buildings stay in excellent condition — not by reacting to problems, but by preventing them."
        />
        <RevealGroup
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          step={50}
        >
          {CALENDAR.map(([month, activity]) => (
            <div key={month} className="card-base p-5">
              <div className="text-xs uppercase tracking-[0.16em] text-brand-600 dark:text-brand-accent">
                {month}
              </div>
              <div className="mt-2 text-sm text-foreground/85 leading-snug">
                {activity}
              </div>
            </div>
          ))}
        </RevealGroup>
        <p className="mt-8 text-sm text-muted-foreground">
          Plus monthly: common area cleaning, security system checks, landscaping.
        </p>
      </Section>

      <CtaBanner
        title="Got a maintenance issue right now?"
        body="Log it in seconds — by phone, WhatsApp, or through the tenant portal. We'll acknowledge within 4 hours."
        primaryLabel="Contact maintenance"
        secondaryHref="/tenants"
        secondaryLabel="Tenant services"
      />
    </>
  );
}
