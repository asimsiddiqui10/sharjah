"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const ENQUIRY_TYPES = [
  "Leasing enquiry",
  "Maintenance request",
  "General question",
  "Tenancy",
  "Complaint",
  "Other",
];

const CONTACT_METHODS = ["Phone", "WhatsApp", "Email"] as const;

const inputClass =
  "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-colors";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card-base flex flex-col items-start gap-4 p-10">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <h3
          className="font-serif text-2xl tracking-tight"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          Thank you — your message has been received.
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
          A member of our team will be in touch within 4 business hours. For
          urgent maintenance, please call our emergency line directly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-secondary mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="card-base p-8 sm:p-10 space-y-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Full name *</span>
          <input
            type="text"
            required
            name="name"
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Phone number *</span>
          <input
            type="tel"
            required
            name="phone"
            placeholder="+971 50 000 0000"
            className={inputClass}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Email address *</span>
          <input
            type="email"
            required
            name="email"
            placeholder="name@example.com"
            className={inputClass}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Enquiry type</span>
          <select name="type" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select an enquiry type
            </option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Message *</span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="How can we help?"
            className={inputClass}
          />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium">Preferred contact method</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {CONTACT_METHODS.map((m, i) => (
            <label
              key={m}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm has-[input:checked]:border-brand-400 has-[input:checked]:bg-brand-50 has-[input:checked]:text-brand-700 dark:has-[input:checked]:bg-brand-900/30 dark:has-[input:checked]:text-brand-accent transition-colors cursor-pointer"
            >
              <input
                type="radio"
                name="contact-method"
                value={m}
                defaultChecked={i === 0}
                className="sr-only"
              />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We&apos;ll respond within 4 business hours.
        </p>
        <button type="submit" className="btn btn-primary">
          Send message <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
