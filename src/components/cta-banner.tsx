import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBanner({
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Contact us today",
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div
          aria-hidden
          className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h3
              className="font-serif text-balance text-3xl sm:text-4xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              {title}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={primaryHref} className="btn btn-primary">
              {primaryLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn btn-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
