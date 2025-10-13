"use client";
import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function DistanceSlider({
  value,
  onChange,
  className,
}: {
  value: number; // controlled
  onChange: (v: number) => void; // controlled
  className?: string;
}) {
  const ticks = [10, 20, 30, 40, 50];

  return (
    <div className={cn("w-full max-w-3xl", className)}>
      <h3 className="mb-3 text-xl font-semibold text-primary-foreground">
        Närmaste punkt en flyttbil kan stå
      </h3>

      <Slider
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        min={10}
        max={50}
        step={10}
        className="select-none w-full"
      />

      {/* (optional styles) */}

      <div className="mt-3 grid grid-cols-5 w-full text-sm text-foreground/80">
        {ticks.map((t) => (
          <div key={t} className="text-center">
            {t}m
          </div>
        ))}
      </div>
    </div>
  );
}
