"use client";

import { useMemo, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FAQItem = { id?: string; question: string; answer: React.ReactNode };

export default function FAQTilesCollapsing({
  items,
  defaultValue = "item-0",
  collapsed = 260, // px collapsed width
  expanded = 460, // px expanded width
  height = 360, // px tile height
  gap = 24, // px gap between tiles
}: {
  items: FAQItem[];
  defaultValue?: string;
  collapsed?: number;
  expanded?: number;
  height?: number;
  gap?: number;
}) {
  // make Accordion controlled so we can also toggle from our overlay
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const rowRef = useRef<HTMLDivElement>(null);
  const itemRefs = useMemo(
    () => items.map(() => ({ current: null as HTMLDivElement | null })),
    [items.length]
  );

  const scrollByOne = (dir: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const delta = (dir === "left" ? -1 : 1) * (collapsed + gap);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleValueChange = (val: string) => {
    setValue(val);
    const idx = Number(val.replace("item-", ""));
    const node = itemRefs[idx]?.current;
    if (node)
      node.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  };

  return (
    <div className="w-full">
      {/* arrows */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Button
          variant="outline"
          size="icon"
          aria-label="Scroll left"
          onClick={() => scrollByOne("left")}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="default"
          size="icon"
          aria-label="Scroll right"
          onClick={() => scrollByOne("right")}
          className="rounded-full bg-slate-800 hover:bg-slate-700"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </Button>
      </div>

      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={handleValueChange}
        className="contents"
      >
        <div
          ref={rowRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none]"
          style={{ gap }}
        >
          {items.map((item, idx) => {
            const v = `item-${idx}`;
            const isOpen = value === v;

            return (
              <AccordionItem
                key={item.id ?? idx}
                value={v}
                ref={(el) => {
                  itemRefs[idx].current = el as HTMLDivElement;
                }}
                className="
                  relative snap-start shrink-0 rounded-3xl overflow-hidden border-0
                  transition-[width] duration-300 ease-out
                  w-[var(--w-collapsed)] data-[state=open]:w-[var(--w-expanded)]
                  bg-[#eaf7f7] text-slate-800
                  data-[state=open]:bg-[#00797a] data-[state=open]:text-white
                "
                style={
                  {
                    ["--w-collapsed" as any]: `${collapsed}px`,
                    ["--w-expanded" as any]: `${expanded}px`,
                    minHeight: `${height}px`,
                  } as React.CSSProperties
                }
              >
                {/* FULL-TILE CLICK OVERLAY (visible only when CLOSED) */}
                {!isOpen && (
                  <button
                    type="button"
                    aria-label={`Open ${item.question}`}
                    onClick={() => handleValueChange(v)}
                    className="absolute inset-0 z-10 block"
                  />
                )}

                {/* header trigger (kept for a11y + collapse when open) */}
                <AccordionTrigger
                  className="relative z-20 p-6 text-left font-semibold text-lg leading-snug hover:no-underline"
                  style={{ minHeight: height * 0.45 }}
                >
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="relative z-20 px-6 pb-6 text-sm leading-relaxed data-[state=open]:text-white/90">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
}
