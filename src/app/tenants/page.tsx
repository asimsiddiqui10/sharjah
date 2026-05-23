import type { Metadata } from "next";
import {
  Building2,
  CreditCard,
  DoorOpen,
  FileText,
  Globe,
  MessageCircle,
  Phone,
  RefreshCcw,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { FaqAccordion } from "@/components/faq-accordion";
import { RevealGroup, Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Tenant Services",
  description:
    "Everything you need as a resident — contact options, tenant rights, lease and payment guidance, and answers to your most common questions.",
};

const REACH = [
  { icon: Phone, title: "Call us", body: "Speak directly to our management or maintenance team during business hours. For emergencies, our 24/7 line is always answered." },
  { icon: MessageCircle, title: "WhatsApp", body: "Message our team on WhatsApp for non-urgent queries, maintenance requests, or general questions. Most messages are responded to within 2 hours." },
  { icon: Globe, title: "Tenant portal", body: "Log maintenance requests, view your tenancy documents, download receipts, and track the status of your jobs — all in one place." },
  { icon: Building2, title: "Visit our office", body: "Our management office is open six days a week. Walk in, speak to our team in person, and get a straight answer." },
];

const RESOURCES = [
  { icon: FileText, title: "Your tenancy agreement", body: "Your contract is registered on Ejari and gives you full legal standing as a tenant in the UAE. A copy is always available on request or through the tenant portal." },
  { icon: CreditCard, title: "Rent payment", body: "We accept post-dated cheques in accordance with UAE standard practice. Our accounts team will provide full guidance on payment structure at the time of lease signing." },
  { icon: Shield, title: "Security deposit", body: "Your security deposit is held in compliance with UAE tenancy law. At the end of your tenancy, deductions (if any) will be clearly documented and agreed upon at the handover inspection." },
  { icon: RefreshCcw, title: "Lease renewal", body: "We'll contact you 90 days before your lease expires to discuss renewal. Any rent adjustment will be based on the RERA rent index and communicated in writing in advance." },
  { icon: DoorOpen, title: "Moving out", body: "We require notice in writing in accordance with your contract. Our team will conduct a documented handover inspection, and your deposit will be processed promptly once the unit is cleared." },
];

const RIGHTS = [
  "A legally registered Ejari contract",
  "Written notice for any rent increase, in compliance with the RERA rent index",
  "A safe, well-maintained property meeting all municipality standards",
  "The right to a documented inspection at move-in and move-out",
  "Full return of your security deposit subject to a fair, documented deduction process",
  "Minimum 12-months notice for eviction for owner occupancy (per UAE law)",
  "Protection under the Sharjah Rental Dispute Committee in the event of unresolved disputes",
];

const FAQ = [
  { q: "Do you charge agent fees for leasing?", a: "No. Because we own and manage our own portfolio, there is no agent involved and no commission fee charged to tenants. What you see is what you pay." },
  { q: "How is my rent set, and how are increases handled?", a: "Rent is set based on current Sharjah market rates. Any increase at renewal is applied strictly in accordance with the RERA rent increase calculator and communicated to you in writing at least 90 days before your lease expires." },
  { q: "Are all your contracts registered on Ejari?", a: "Yes. Every tenancy agreement we issue is registered on Ejari as required by Sharjah's Real Estate Registration Department. You will receive your Ejari certificate as part of your onboarding documentation." },
  { q: "What happens if I have a maintenance issue?", a: "Log it with our team by phone, WhatsApp, or through the tenant portal. Standard issues are resolved within 48 hours. Emergencies — power loss, major leaks, AC failure in summer — are treated as same-day priorities." },
  { q: "Do you use external contractors for maintenance?", a: "No. Our maintenance team is fully employed in-house. This means faster response times, consistent standards, and direct accountability." },
  { q: "How does the security deposit work?", a: "Your deposit is collected at the time of lease signing and held in compliance with UAE tenancy law. At the end of your tenancy, we conduct a documented handover inspection. Any deductions are clearly itemised and agreed upon in writing. The balance is returned promptly." },
  { q: "Can I renew my lease, and is renewal guaranteed?", a: "We actively encourage renewal and will approach you 90 days before your lease expires. Renewal is subject to continued compliance with your tenancy agreement terms. We have a very high renewal rate — most of our tenants renew year after year." },
  { q: "What if I need to leave before my lease ends?", a: "Please contact our management team as soon as you know your circumstances have changed. Depending on your contract terms, options may include a mutual agreement to terminate, a lease assignment, or a standard notice period arrangement." },
  { q: "Are your buildings suitable for families?", a: "Yes. Many of our buildings house multi-generational families, and we have residents who have been with us for decades. Our buildings are managed with family living in mind — safe common areas, good maintenance standards, and a security presence." },
  { q: "How do I make a complaint?", a: "Contact our management team directly — by phone, WhatsApp, or in writing. We take complaints seriously and will confirm receipt within 4 hours. If you are not satisfied with the resolution, you may escalate to Sharjah's Rental Dispute Committee, and we will cooperate fully." },
];

export default function TenantsPage() {
  return (
    <>
      <PageHero
        eyebrow="For residents"
        title={
          <>
            Everything you need as a resident — <span className="text-gradient">simple, clear, accessible</span>.
          </>
        }
        intro="Managing your home shouldn't require chasing people. We've made it straightforward to log maintenance requests, access your documents, and reach our team whenever you need us."
      />

      {/* HOW TO REACH US */}
      <Section>
        <SectionHeader
          eyebrow="How to reach us"
          title="We're easy to find."
        />
        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          step={60}
        >
          {REACH.map(({ icon: Icon, title, body }) => (
            <article key={title} className="card-base p-7">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-accent">
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

      {/* RESOURCES */}
      <Section>
        <SectionHeader
          eyebrow="Tenant resources"
          title="What you need to know as a resident."
        />
        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2" step={70}>
          {RESOURCES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="card-base p-7">
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

      {/* RIGHTS */}
      <Section id="rights">
        <SectionHeader
          eyebrow="Your rights as a tenant"
          title="We uphold them."
          intro="We operate within the full framework of Sharjah and UAE tenancy law. As a tenant with us, you are entitled to:"
        />
        <ul className="mt-12 grid gap-3 lg:grid-cols-2">
          {RIGHTS.map((r) => (
            <li
              key={r}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 px-5 py-4 text-sm"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 text-brand-600 dark:text-brand-accent shrink-0" />
              <span className="text-foreground/85 leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground leading-relaxed">
          We take these obligations seriously. In over 40 years of operation, we
          have maintained a track record of resolving disputes directly with
          tenants rather than through formal proceedings.
        </p>
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

      <CtaBanner
        title="Question not answered?"
        body="Our management office answers every enquiry within 4 business hours. Get in touch — there's always a real person on the other end."
        primaryLabel="Send a message"
        secondaryHref="/maintenance"
        secondaryLabel="Log a maintenance request"
      />
    </>
  );
}
