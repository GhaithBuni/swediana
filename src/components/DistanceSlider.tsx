"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

export default function DistanceSlider({
  value,
  onChange,
}: {
  value?: number; // meters
  onChange?: (v: number) => void;
}) {
  const [internal, setInternal] = React.useState<number>(value ?? 10);
  const current = value ?? internal;

  const ticks = [10, 20, 30, 40, 50];

  return (
    <div className="w-full">
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
        className="select-none"
      />

      {/* Track/Thumb styling override */}
      <style jsx global>{`
        /* shadcn slider parts (radix) */
        .slider-root {
          width: 100%;
        }
        .slider-track {
          background: color-mix(in oklab, var(--color-primary) 15%, white);
          height: 6px;
          border-radius: 9999px;
        }
        .slider-range {
          background: transparent; /* keep only light track like the mock */
        }
        .slider-thumb {
          width: 20px;
          height: 20px;
          background: #3a3a3a; /* dark thumb like screenshot */
          border-radius: 9999px;
          border: 2px solid #3a3a3a;
          outline: none;
        }
      `}</style>

      {/* Tick labels */}
      <div className="mt-3 grid grid-cols-5 text-sm text-foreground/80">
        {ticks.map((t) => (
          <div key={t} className="text-center">
            {t}m
          </div>
        ))}
      </div>
    </div>
  );
}
