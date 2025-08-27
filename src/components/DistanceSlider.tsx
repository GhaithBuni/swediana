"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function DistanceSlider({
  value,
  onChange,
  className,
}: {
  value?: number; // meters
  onChange?: (v: number) => void;
  className?: string; // optional width override
}) {
  const [internal, setInternal] = React.useState<number>(value ?? 10);
  const current = value ?? internal;

  const ticks = [10, 20, 30, 40, 50];

  return (
    // cap width here
    <div className={cn("w-full max-w-3xl", className)}>
      <h3 className="mb-3 text-xl font-semibold text-primary-foreground">
        Närmaste punkt en flyttbil kan stå
      </h3>

      {/* Slider */}
      <Slider
        value={[current]}
        onValueChange={(v) => {
          const val = v[0];
          setInternal(val);
          onChange?.(val);
        }}
        min={10}
        max={50}
        step={10}
        className="select-none w-full"
      />

      {/* Track/Thumb styling override (optional) */}
      <style jsx global>{`
        .slider-root {
          width: 100%;
        }
        .slider-track {
          background: color-mix(in oklab, var(--color-primary) 15%, white);
          height: 6px;
          border-radius: 9999px;
        }
        .slider-range {
          background: transparent;
        }
        .slider-thumb {
          width: 20px;
          height: 20px;
          background: #3a3a3a;
          border-radius: 9999px;
          border: 2px solid #3a3a3a;
          outline: none;
        }
      `}</style>

      {/* Tick labels */}
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
