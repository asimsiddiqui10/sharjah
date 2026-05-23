import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock4,
  KeyRound,
  MessageSquare,
  Users,
  Wrench,
  CalendarDays,
  ShieldCheck,
  FileText,
  MapPin,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal, RevealGroup } from "@/components/reveal";

const STATS = [
  { value: "750+", label: "Residential units managed" },
  { value: "40+", label: "Years established in Sharjah" },
  { value: "100%", label: "In-house team — no outsourcing" },
  { value: "24/7", label: "Maintenance response" },
];

const FEATURES = [
  {
    icon: Building2,
    title: "Owner-managed properties",
    body: "Every unit is owned and operated by us. There's no third-party landlord chain — when you have a question, you talk to the people accountable.",
  },
  {
    icon: Wrench,
    title: "In-house maintenance team",
    body: "Our full-time crew handles everything from a dripping tap to a full AC overhaul — no contractor delays, no job queues, no excuses.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Transparent lease process",
    body: "Clear tenancy agreements, Ejari-registered contracts, documented deposits, and no hidden fees. Straightforward from day one.",
  },
  {
    icon: MapPin,
    title: "40 years of Sharjah knowledge",
    body: "We know this city, its communities, its regulations, and its rental market inside-out. Better-managed buildings, smoother experience.",
  },
  {
    icon: Users,
    title: "A team that knows your name",
    body: "Our on-ground management team is present, accessible, and responsive. You won't be chasing voicemails — you'll speak to someone who knows your building.",
  },
  {
    icon: MessageSquare,
    title: "Simple, modern communication",
    body: "Reach us by phone, WhatsApp, or the tenant portal. Log requests, view lease documents, raise a concern — all in one place.",
  },
];

const STEPS = [
  { n: 1, title: "Enquire", body: "Contact us directly — by phone, WhatsApp, or through this site. No agents, no fees for enquiries." },
  { n: 2, title: "View the unit", body: "We'll arrange a viewing at your convenience. Our team walks you through the property honestly." },
  { n: 3, title: "Sign & register", body: "Clear tenancy agreement, registered on Ejari — fully compliant with Sharjah and UAE regulations." },
  { n: 4, title: "Move in", body: "Receive your keys with a documented handover. Our team is available from day one." },
  { n: 5, title: "We're here throughout", body: "For the life of your tenancy, our management and maintenance teams are a call or message away." },
];

const TESTIMONIALS = [
  {
    quote:
      "I've been a tenant for eleven years and have no intention of leaving. Every maintenance issue gets sorted the same week — usually the same day. I've never had to chase anyone.",
    author: "Ahmed K.",
    role: "Tenant — 11 years",
  },
  {
    quote:
      "When I first moved to Sharjah, I was nervous about the tenancy process. Their team walked me through every step, and I was moved in within a week. It felt like dealing with family, not a company.",
    author: "Priya M.",
    role: "Tenant — 3 years",
  },
  {
    quote:
      "The building is always clean, common areas are well-lit, and the security team knows every resident by name. It's the small things that make the difference — and they get all of them right.",
    author: "Mohammed Al R.",
    role: "Tenant — 7 years",
  },
];

const TRUST_BADGES = [
  { icon: Building2, label: "750+ Residential units" },
  { icon: ShieldCheck, label: "100% In-house management" },
  { icon: CalendarDays, label: "40+ Years in Sharjah" },
  { icon: Wrench, label: "24/7 Maintenance team" },
  { icon: CheckCircle2, label: "Ejari registered" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed 100vh skyline as background.
          Two identically-composed images stacked; only opacity swaps
          on theme change so nothing moves visually. */}
      <section className="relative isolate min-h-screen w-full overflow-hidden">
        {/* Skyline images — identical positions, theme-swapped via opacity.
            ThemeTransition crossfades them with WAAPI on theme change so the
            swap is gradual while everything else snaps. */}
        <div aria-hidden className="absolute inset-0 -z-20">
          <Image
            data-skyline="light"
            src="/images/sharjah-skyline-light.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center dark:opacity-0"
          />
          <Image
            data-skyline="dark"
            src="/images/sharjah-skyline-dark.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-0 dark:opacity-100"
          />
        </div>

        {/* Readability scrim — denser on the left where text sits,
            lighter on the right so the skyline stays visible.
            A second bottom fade dissolves the image into the next section. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background/85 via-background/35 to-background/0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-background via-background/70 to-transparent"
        />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-24 sm:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">Established in Sharjah since 1984</span>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="font-serif mt-6 text-balance text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                More than four decades of{" "}
                <span className="text-gradient">calling Sharjah home</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-lg text-foreground/80 leading-relaxed">
                We own, manage, and maintain 750 residential units across Sharjah —
                with every team member, every technician, and every decision under one roof.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/properties" className="btn btn-primary">
                  View available units
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Talk to our team
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/75">
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-accent" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <Section className="pt-4 sm:pt-8">
        <SectionHeader
          eyebrow="The numbers that speak for us"
          title="A track record built over a lifetime."
          intro="We don't just manage properties — we built this portfolio unit by unit, and we've been perfecting the way we look after it ever since."
        />
        <RevealGroup
          className="mt-14 grid auto-rows-fr grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4"
          step={80}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="stat-number text-gradient">{stat.value}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </RevealGroup>
        <div className="hairline mt-16" />
        <p className="mt-10 max-w-2xl text-base text-muted-foreground leading-relaxed">
          One owner. One vision. Direct accountability. Every decision flows
          through the same team you&apos;ll meet on the ground.
        </p>
      </Section>

      {/* WHY TENANTS CHOOSE US */}
      <Section>
        <SectionHeader
          eyebrow="Why tenants choose us"
          title="Living here feels different."
          intro="When you rent from us, you're dealing directly with the owner's team — not an agent, not a middleman, not a call centre. You get real answers, fast responses, and a team that takes pride in where you live."
        />
        <RevealGroup
          className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3"
          step={70}
        >
          {FEATURES.map(({ icon: Icon, title, body, highlight }) => (
            <article
              key={title}
              className={`${highlight ? "card-gradient" : "card-base"} flex h-full flex-col p-7`}
            >
              <div className="relative icon-chip">
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className="font-serif mt-5 text-xl tracking-tight relative"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed relative ${
                  highlight ? "text-white/85" : "text-muted-foreground"
                }`}
              >
                {body}
              </p>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* OUR PROPERTIES TEASER */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <Image
            src="/images/skyline-frame.png"
            alt="Sharjah skyline framed at sunrise"
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-60 dark:opacity-30"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"
          />
          <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="max-w-xl">
              <span className="eyebrow">Our properties</span>
              <h2
                className="font-serif mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                750 units. One standard of living.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Across Sharjah&apos;s most established residential communities, our portfolio
                offers apartments and family homes that have been maintained, improved,
                and cared for over decades.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/properties" className="btn btn-primary">
                  Browse available units
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/why-us" className="btn btn-ghost">
                  See what makes them different
                </Link>
              </div>
            </div>
            <ul className="space-y-4 text-sm">
              {[
                { icon: KeyRound, label: "Studios from 350 sq ft" },
                { icon: KeyRound, label: "1 BR from 600 sq ft" },
                { icon: KeyRound, label: "2 BR from 900 sq ft" },
                { icon: KeyRound, label: "3 BR from 1,200 sq ft" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 backdrop-blur-sm px-5 py-4"
                >
                  <Icon className="h-4 w-4 text-brand-600 dark:text-brand-accent" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TENANT JOURNEY */}
      <Section>
        <SectionHeader
          eyebrow="How it works"
          title="Renting with us is simple."
        />
        <RevealGroup
          as="ol"
          className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-5"
          step={70}
        >
          {STEPS.map((step) => (
            <li key={step.n} className="card-base flex h-full flex-col p-7">
              <div className="flex items-center gap-3">
                <span
                  className="font-serif text-2xl text-gradient"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  0{step.n}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3
                className="font-serif mt-6 text-lg tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </RevealGroup>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="What our residents say"
          title="Decades of trust — in their words."
        />
        <RevealGroup
          className="mt-14 grid auto-rows-fr gap-6 lg:grid-cols-3"
          step={90}
        >
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="card-base flex h-full flex-col p-8">
              <Clock4 className="h-4 w-4 text-brand-500 dark:text-brand-accent" />
              <blockquote
                className="font-serif mt-6 text-xl leading-snug text-balance"
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

      {/* SHARJAH COMMUNITY */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="eyebrow">Sharjah community</span>
            <h2
              className="font-serif mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              Proudly rooted in Sharjah.
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Sharjah is more than the location of our portfolio — it is where our
            company was founded, where our team lives and works, and where we have
            invested in the community for over four decades. We understand Sharjah&apos;s
            residential culture, its family values, and its standards deeply.
            That understanding shapes every decision we make.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Looking for a home in Sharjah?"
        body="Speak directly with our leasing team. No agents, no fees, no runaround."
        primaryLabel="Contact us today"
        secondaryHref="/properties"
        secondaryLabel="View available units"
      />
    </>
  );
}
