"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal — paints content hidden, then fades + lifts it into view once it
 * intersects the viewport. Uses a single IntersectionObserver per element,
 * unobserves after the first reveal, and respects prefers-reduced-motion
 * (the CSS handles that variant — see globals.css `.reveal`).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the user prefers reduced motion or IO is unavailable, reveal immediately.
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <As
      ref={ref}
      className={cn("reveal", className)}
      style={style}
    >
      {children}
    </As>
  );
}

/**
 * RevealGroup — convenience wrapper that staggers a list of children.
 * Wraps each direct child in a Reveal with an incremental delay.
 */
export function RevealGroup({
  children,
  step = 80,
  initialDelay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  step?: number;
  initialDelay?: number;
  className?: string;
  as?: ElementType;
}) {
  return (
    <As className={className}>
      {Children.map(children, (child, i) =>
        isValidElement(child) ? (
          <Reveal key={i} delay={initialDelay + i * step}>
            {child}
          </Reveal>
        ) : (
          child
        )
      )}
    </As>
  );
}
