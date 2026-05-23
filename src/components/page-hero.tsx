import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid bg-grid-mask opacity-50 dark:opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[50vh]"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in srgb, var(--brand-100) 60%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-3xl">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1
            className="font-serif mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}
