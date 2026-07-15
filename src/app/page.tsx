import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  AirVent,
  Banknote,
  Brush,
  Building2,
  Camera,
  CalendarDays,
  Car,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Clock4,
  Cog,
  Droplets,
  FileText,
  Hammer,
  KeyRound,
  Leaf,
  Lock,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Plug,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactForm } from "@/components/contact-form";
import { Reveal, RevealGroup } from "@/components/reveal";

const STATS = [
  { value: "750+", label: "Residential units managed" },
  { value: "40+", label: "Years established in Sharjah" },
  { value: "100%", label: "In-house team — no outsourcing" },
  { value: "24/7", label: "Maintenance response" },
];

const TRUST_BADGES = [
  { icon: Building2, label: "750+ Residential units" },
  { icon: CalendarDays, label: "40+ Years in Sharjah" },
  { icon: ShieldCheck, label: "100% In-house management" },
  { icon: ClipboardCheck, label: "Ejari registered" },
];

const WHY_US = [
  {
    icon: Building2,
    title: "We own what we manage",
    body: "Every unit is owned and operated by us — no agents, no middlemen, no landlord chain. One point of accountability for everything.",
  },
  {
    icon: Wrench,
    title: "In-house maintenance team",
    body: "Our full-time crew handles everything from a dripping tap to a full AC overhaul — no contractor delays, no job queues, no excuses.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Transparent & compliant",
    body: "Ejari-registered contracts, RERA-compliant renewals, documented deposits, and no hidden fees — straightforward from day one.",
  },
  {
    icon: Users,
    title: "Long-term relationships",
    body: "Many tenants have stayed a decade or more; some families for two generations. We think in relationships, not lease cycles.",
  },
];

const SERVICES = [
  {
    icon: KeyRound,
    title: "Residential leasing",
    body: "Viewings, clear tenancy agreements, Ejari registration, and documented move-in handovers — with direct pricing and no agent commission.",
  },
  {
    icon: ClipboardList,
    title: "Tenancy management",
    body: "Renewals, RERA-compliant rent reviews, documentation, and escalations — handled by a team that knows your file.",
  },
  {
    icon: Cog,
    title: "Preventive maintenance",
    body: "A year-round PPM programme — AC servicing, elevator certification, fire systems, plumbing and electrical checks — so things don't break in the first place.",
  },
  {
    icon: Building2,
    title: "Facilities & common areas",
    body: "Daily cleaning, landscaping, lighting, waste management, and pool upkeep — shared spaces held to the same standard as the units.",
  },
  {
    icon: Lock,
    title: "On-site security",
    body: "Directly employed security staff, CCTV monitoring, and access control — integrated with our management team, familiar with every resident.",
  },
  {
    icon: Banknote,
    title: "Finance & rent",
    body: "Rent collection, post-dated cheques, deposits held per UAE law, and VAT-compliant invoicing — all in-house and fully transparent.",
  },
];

const UNITS = [
  { type: "Studio", size: "from 350 sq ft", body: "Efficient, well-planned units with fitted kitchens and independent SEWA meters." },
  { type: "1 Bedroom", size: "from 600 sq ft", body: "Our most popular layout — many with balconies and built-in wardrobes." },
  { type: "2 Bedroom", size: "from 900 sq ft", body: "Spacious family apartments with generous living areas; some with maid's rooms." },
  {
    type: "3 Bedroom",
    size: "from 1,200 sq ft",
    body: "Our flagship family homes — three full-size bedrooms, a generous living and dining area, two bathrooms, and ample storage. Ideal for larger and multi-generational families.",
    highlight: true,
  },
];

const BUILDING_FEATURES = [
  { icon: ShieldCheck, label: "24-hour security" },
  { icon: Camera, label: "CCTV in common areas" },
  { icon: Car, label: "Parking" },
  { icon: ClipboardCheck, label: "Certified elevators" },
  { icon: Leaf, label: "Pest control" },
  { icon: Droplets, label: "Direct SEWA connection" },
];

const TRADES = [
  { icon: AirVent, label: "Air conditioning" },
  { icon: Droplets, label: "Plumbing" },
  { icon: Plug, label: "Electrical" },
  { icon: Hammer, label: "Carpentry & joinery" },
  { icon: Brush, label: "Painting & finishing" },
  { icon: Leaf, label: "Pest control" },
  { icon: Cog, label: "Building systems" },
  { icon: Wrench, label: "General repairs" },
];

const TESTIMONIALS = [
  {
    quote:
      "I've been a tenant for eleven years and have no intention of leaving. Every maintenance issue gets sorted the same week — usually the same day.",
    author: "Ahmed K.",
    role: "Tenant — 11 years",
  },
  {
    quote:
      "Their team walked me through every step, and I was moved in within a week. It felt like dealing with family, not a company.",
    author: "Priya M.",
    role: "Tenant — 3 years",
  },
  {
    quote:
      "The building is always clean, common areas are well-lit, and the security team knows every resident by name. They get the small things right.",
    author: "Mohammed Al R.",
    role: "Tenant — 7 years",
  },
];

const FAQ = [
  {
    q: "Do you charge agent fees for leasing?",
    a: "No. We own and manage our own portfolio, so there is no agent involved and no commission charged to tenants. What you see is what you pay.",
  },
  {
    q: "How is my rent set, and how are increases handled?",
    a: "Rent follows current Sharjah market rates. Any increase at renewal is applied strictly per the RERA rent index and communicated in writing at least 90 days before your lease expires.",
  },
  {
    q: "Are all your contracts registered on Ejari?",
    a: "Yes. Every tenancy agreement is registered on Ejari as required by Sharjah's Real Estate Registration Department, and you receive your certificate at onboarding.",
  },
  {
    q: "What happens if I have a maintenance issue?",
    a: "Log it by phone, WhatsApp, or the tenant portal. Requests are acknowledged within 4 hours; standard issues are resolved within 48 hours, and emergencies are same-day priorities.",
  },
  {
    q: "How does the security deposit work?",
    a: "Your deposit is held in compliance with UAE tenancy law. At move-out we conduct a documented handover inspection; any deductions are itemised and agreed in writing, and the balance is returned promptly.",
  },
  {
    q: "What if I need to leave before my lease ends?",
    a: "Contact our management team as soon as you know. Depending on your contract, options include mutual termination, lease assignment, or a standard notice arrangement.",
  },
];

// ——— Contact channels — edit the values below when the real links are ready ———
const WHATSAPP_NUMBER = "971500000000"; // full international number, no "+", spaces, or dashes
const CONTACT_EMAIL = "info@almajazalkhleej.ae";
const BAYUT_URL = "https://www.bayut.com/l/BbILZ5ek";
const DUBIZZLE_URL =
  "https://uae.dubizzle.com/property-agencies/al-majaz-alkhleej-facilities-management-services-300128/?category_0=property-for-rent&category_1=property-for-rent%2Fresidential";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I am interested in your property from your website."
)}`;
const EMAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Property Inquiry"
)}&body=${encodeURIComponent(
  "Hi,\n\nI am interested in one of your properties. Please share more details.\n\nThanks"
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Bayut's app mark — white house on the brand green tile.
function BayutIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.5 2.5 11h2.3v10h5.7v-6.2h3v6.2h5.7V11h2.3L12 2.5z" />
    </svg>
  );
}

// Dubizzle's app mark — white lowercase "d" on the brand red tile.
function DubizzleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="currentColor"
      >
        d
      </text>
    </svg>
  );
}

const CHANNELS = [
  {
    key: "whatsapp",
    title: "WhatsApp",
    secondary: "Chat with us — replies within 2 hours",
    href: WHATSAPP_LINK,
    external: true,
    icon: WhatsAppIcon,
    iconClass: "bg-[#25D366] text-white",
  },
  {
    key: "email",
    title: "Email us",
    secondary: CONTACT_EMAIL,
    href: EMAIL_LINK,
    external: false,
    icon: Mail,
    iconClass: "bg-brand-600 text-white",
  },
  {
    key: "bayut",
    title: "View on Bayut",
    secondary: "Browse our live listings",
    href: BAYUT_URL,
    external: true,
    icon: BayutIcon,
    iconClass: "bg-[#28B16D] text-white",
  },
  {
    key: "dubizzle",
    title: "View on Dubizzle",
    secondary: "Browse our live listings",
    href: DUBIZZLE_URL,
    external: true,
    icon: DubizzleIcon,
    iconClass: "bg-[#EF3E23] text-white",
  },
];

const HOURS = [
  ["Monday – Thursday", "9:00 AM – 6:00 PM"],
  ["Friday", "2:30 PM – 6:30 PM"],
  ["Saturday", "9:00 AM – 6:00 PM"],
  ["Sunday", "Off"],
  ["Emergency line", "24/7"],
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed 100vh skyline as background.
          Two identically-composed images stacked; only opacity swaps
          on theme change so nothing moves visually. */}
      <section id="top" className="relative isolate min-h-screen w-full overflow-hidden">
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

        {/* Readability scrim — denser on the left where text sits. */}
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
                every team member and every decision under one roof.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={BAYUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View available units
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Talk to our team
                </a>
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

      {/* ABOUT — stats + condensed story */}
      <Section id="about" className="pt-4 sm:pt-8">
        <SectionHeader
          eyebrow="About us"
          title="A track record built over a lifetime."
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
        <p className="mt-10 max-w-3xl text-base text-muted-foreground leading-relaxed">
          Founded in Sharjah in 1984 on a simple principle: own the properties,
          manage them directly, maintain them properly, and treat every tenant as
          a long-term relationship. Four decades later, that principle hasn&apos;t
          changed — 750 units across the city&apos;s most established
          neighbourhoods, run by one owner, one team, one standard.
        </p>
      </Section>

      {/* WHY US */}
      <Section id="why-us">
        <SectionHeader
          eyebrow="Why choose us"
          title="Living here feels different."
        />
        <RevealGroup
          className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4"
          step={70}
        >
          {WHY_US.map(({ icon: Icon, title, body, highlight }) => (
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

      {/* SERVICES */}
      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title="Full-service management, under one roof."
        />
        <RevealGroup
          className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3"
          step={70}
        >
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="card-base flex h-full flex-col p-7">
              <div className="relative icon-chip">
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className="font-serif mt-5 text-xl tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {body}
              </p>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* PROPERTIES */}
      <Section id="properties">
        <SectionHeader
          eyebrow="Our properties"
          title="750 units. One standard of living."
          intro="Studios to family apartments across Sharjah's most established, well-connected communities — maintained and improved over decades."
        />
        <RevealGroup
          className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4"
          step={70}
        >
          {UNITS.map((u) => (
            <article
              key={u.type}
              className={`${u.highlight ? "card-gradient" : "card-base"} flex h-full flex-col p-7`}
            >
              <div className="relative flex items-start justify-between gap-3">
                <h3
                  className="font-serif text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  {u.type}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 text-xs whitespace-nowrap ${
                    u.highlight
                      ? "border-white/30 text-white/90"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {u.size}
                </span>
              </div>
              <p
                className={`relative mt-3 text-sm leading-relaxed ${
                  u.highlight ? "text-white/85" : "text-muted-foreground"
                }`}
              >
                {u.body}
              </p>
            </article>
          ))}
        </RevealGroup>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {BUILDING_FEATURES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/85"
            >
              <Icon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-accent" />
              {label}
            </li>
          ))}
        </ul>
      </Section>

      {/* MAINTENANCE */}
      <Section id="maintenance">
        <SectionHeader
          eyebrow="In-house maintenance"
          title="Every trade. Every task. In-house."
          intro="Requests are acknowledged within 4 hours and standard jobs completed within 48 — because our maintenance crew works for us, not for a contractor."
        />
        <ul className="mt-12 flex flex-wrap gap-2.5">
          {TRADES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/85"
            >
              <Icon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-accent" />
              {label}
            </li>
          ))}
        </ul>
        <div className="card-base mt-10 flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h3
              className="font-serif text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              When it can&apos;t wait.
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground leading-relaxed">
              Power failure, a burst pipe, AC down in summer — our emergency line
              is answered 24 hours a day, every day of the year.
            </p>
          </div>
          <a
            href="tel:8001099"
            className="inline-flex shrink-0 items-center gap-3 rounded-2xl border border-brand-400/30 bg-brand-50/60 px-5 py-4 text-sm font-medium text-brand-700 dark:bg-brand-900/40 dark:text-brand-accent dark:border-brand-700/40"
          >
            <PhoneCall className="h-4 w-4" />
            24/7 emergency — 800 1099
          </a>
        </div>
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

      {/* FAQ */}
      <Section id="faq">
        <SectionHeader
          eyebrow="Frequently asked questions"
          title="Answers to what residents ask most."
        />
        <Reveal className="mt-12">
          <FaqAccordion items={FAQ} />
        </Reveal>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <SectionHeader
          eyebrow="Get in touch"
          title="Talk to the people who run this place."
          intro="No switchboards, no ticket queues. When you contact us, you speak to our team directly."
        />
        <RevealGroup
          className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4"
          step={70}
        >
          {CHANNELS.map(({ key, icon: Icon, iconClass, title, secondary, href, external }) => (
            <a
              key={key}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="card-base group flex h-full items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 font-medium text-sm">
                  {title}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                  {secondary}
                </span>
              </span>
            </a>
          ))}
        </RevealGroup>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <ContactForm />

          <aside className="space-y-6">
            <a
              href="tel:8001099"
              className="card-base flex items-center gap-4 p-7 transition-transform hover:-translate-y-0.5"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-accent">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  Call us
                </span>
                <span
                  className="font-serif mt-0.5 block text-2xl tracking-tight"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  800 1099
                </span>
              </span>
            </a>

            <div className="card-base p-7">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-600 dark:text-brand-accent" />
                <h3
                  className="font-serif text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  Office address
                </h3>
              </div>
              <address className="mt-4 not-italic text-sm text-muted-foreground leading-relaxed">
                Al Majaz Al Khleej Facilities Management LLC
                <br />
                Al Majaz, Sharjah
                <br />
                United Arab Emirates
              </address>
            </div>

            <div className="card-base p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-600 dark:text-brand-accent" />
                <h3
                  className="font-serif text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  Office hours
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {HOURS.map(([day, time]) => (
                  <li key={day} className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
