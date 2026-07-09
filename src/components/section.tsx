import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-6 py-20 sm:py-28",
        // Anchored sections need to clear the fixed navbar when scrolled to.
        id && "scroll-mt-24",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className="font-serif mt-4 text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
        style={{ fontFamily: "var(--font-eb-garamond)" }}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
