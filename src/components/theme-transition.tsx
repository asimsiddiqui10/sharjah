"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/**
 * Crossfades body background-color and the hero skyline images on theme
 * toggle. Everything else snaps instantly (next-themes' disableTransitionOnChange
 * is left enabled in the provider).
 *
 * Why Web Animations API (element.animate) instead of CSS transitions:
 * next-themes briefly injects `* { transition: none !important }` while
 * the .dark class flips, which would suppress any CSS transition. The
 * Web Animations API is a separate timing model and runs regardless.
 */
const LIGHT_BG = "#ffffff";
const DARK_BG = "#07090f";
const DURATION = 500;
const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export function ThemeTransition() {
  const { resolvedTheme } = useTheme();
  const prevRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!resolvedTheme) return;

    // Skip the very first run — that's the initial mount, not a user toggle.
    if (prevRef.current === undefined) {
      prevRef.current = resolvedTheme;
      return;
    }
    if (prevRef.current === resolvedTheme) return;

    const prev = prevRef.current;
    prevRef.current = resolvedTheme;

    const isDark = resolvedTheme === "dark";
    const fromBg = prev === "dark" ? DARK_BG : LIGHT_BG;
    const toBg = isDark ? DARK_BG : LIGHT_BG;

    // Respect reduced motion.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Body background fade
    document.body.animate(
      [{ backgroundColor: fromBg }, { backgroundColor: toBg }],
      { duration: DURATION, easing: EASING }
    );

    // Skyline crossfade — every theme-paired background image on the page.
    document
      .querySelectorAll<HTMLElement>('[data-skyline="light"]')
      .forEach((el) =>
        el.animate(
          [{ opacity: isDark ? 1 : 0 }, { opacity: isDark ? 0 : 1 }],
          { duration: DURATION, easing: EASING }
        )
      );
    document
      .querySelectorAll<HTMLElement>('[data-skyline="dark"]')
      .forEach((el) =>
        el.animate(
          [{ opacity: isDark ? 0 : 1 }, { opacity: isDark ? 1 : 0 }],
          { duration: DURATION, easing: EASING }
        )
      );
  }, [resolvedTheme]);

  return null;
}
