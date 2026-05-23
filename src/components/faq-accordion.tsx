"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-6 px-6 py-5 text-left transition-colors hover:bg-muted/40"
            >
              <span
                className="font-serif flex-1 text-lg sm:text-xl tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "mt-1.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors",
                  isOpen && "bg-foreground text-background border-transparent"
                )}
              >
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
