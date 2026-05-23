import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, Siren } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our leasing or management team directly. No agents, no middlemen. Office in Sharjah. Emergency maintenance line available 24/7.",
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "General enquiries & leasing",
    primary: "+971 6 000 0000",
    secondary: "info@almajazalkhleej.ae",
    href: "tel:+97160000000",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+971 50 000 0000",
    secondary: "Most messages answered within 2 hours",
    href: "https://wa.me/971500000000",
  },
  {
    icon: Siren,
    title: "Emergency maintenance — 24/7",
    primary: "+971 6 000 0001",
    secondary: "Always answered. Always.",
    href: "tel:+97160000001",
  },
];

const DEPARTMENTS = [
  ["Leasing & new tenancies", "leasing@almajazalkhleej.ae", "Sun–Thu, 8am–6pm"],
  ["Current tenant management", "tenants@almajazalkhleej.ae", "Sun–Thu, 8am–6pm"],
  ["Maintenance (standard)", "maintenance@almajazalkhleej.ae", "Sun–Thu, 8am–6pm"],
  ["Emergency maintenance", "+971 6 000 0001", "24/7"],
  ["Accounts & finance", "accounts@almajazalkhleej.ae", "Sun–Thu, 8am–5pm"],
  ["General management", "info@almajazalkhleej.ae", "Sun–Thu, 8am–6pm"],
];

const HOURS = [
  ["Sunday – Thursday", "8:00 AM – 6:00 PM"],
  ["Saturday", "9:00 AM – 1:00 PM"],
  ["Friday", "Closed"],
  ["Emergency maintenance line", "24 hours, 7 days"],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Talk to the people <span className="text-gradient">who run this place</span>.
          </>
        }
        intro="No switchboards. No ticket numbers to wait on. When you contact us, you speak to our team directly."
      />

      {/* CONTACT CARDS */}
      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-5 lg:grid-cols-3">
          {CONTACT_CARDS.map(({ icon: Icon, title, primary, secondary, href }) => (
            <a
              key={title}
              href={href}
              className="card-base group p-7 transition-transform hover:-translate-y-0.5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className="font-serif mt-5 text-xl tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {title}
              </h3>
              <div className="mt-4 text-base font-medium">{primary}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {secondary}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* FORM + DETAILS */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Send a message"
              title="We'll reply within 4 business hours."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
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
                Al Majaz Al Khleej Facility Management LLC
                <br />
                Al Majaz, Sharjah
                <br />
                United Arab Emirates
              </address>
              <p className="mt-4 text-xs text-muted-foreground">
                Free visitor parking is available outside the office.
              </p>
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
                  <li
                    key={day}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base p-7">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-600 dark:text-brand-accent" />
                <h3
                  className="font-serif text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  Email us
                </h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                For general enquiries:
                <br />
                <a
                  href="mailto:info@almajazalkhleej.ae"
                  className="font-medium text-foreground hover:text-brand-700 dark:hover:text-brand-accent"
                >
                  info@almajazalkhleej.ae
                </a>
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* DEPARTMENTS */}
      <Section>
        <SectionHeader
          eyebrow="Reach the right team directly"
          title="Departments."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="px-5 py-4 font-medium">Department</th>
                <th className="px-5 py-4 font-medium">Contact</th>
                <th className="px-5 py-4 font-medium">Hours</th>
              </tr>
            </thead>
            <tbody>
              {DEPARTMENTS.map(([dept, contact, hours], idx) => (
                <tr key={dept} className={idx % 2 ? "bg-card/40" : ""}>
                  <td className="border-t border-border px-5 py-4 font-medium">
                    {dept}
                  </td>
                  <td className="border-t border-border px-5 py-4 text-muted-foreground">
                    {contact}
                  </td>
                  <td className="border-t border-border px-5 py-4 text-muted-foreground">
                    {hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* MAP PLACEHOLDER */}
      <Section>
        <SectionHeader
          eyebrow="Find us"
          title="We're right here in Sharjah."
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-border">
          <div className="relative aspect-[16/7] w-full">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Al+Majaz,+Sharjah&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[20%] dark:invert-[0.92] dark:hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
