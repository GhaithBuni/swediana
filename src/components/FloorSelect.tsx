"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // or remove and use template strings

type FloorValue = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10+";

const OPTIONS: FloorValue[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10+",
];

export default function FloorSelect({
  value,
  onChange,
  label = "Våning",
}: {
  value?: FloorValue;
  onChange?: (v: FloorValue) => void;
  label?: string;
}) {
  const [internal, setInternal] = React.useState<FloorValue>(value ?? "1");
  const selected = value ?? internal;

  const handleChange = (v: string) => {
    const fv = v as FloorValue;
    setInternal(fv);
    onChange?.(fv);
  };

  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-primary-foreground">
        {label}
      </h3>

      <RadioGroup
        value={selected}
        onValueChange={handleChange}
        className="grid grid-cols-5 gap-4 sm:grid-cols-5"
        aria-label="Välj våning"
      >
        {OPTIONS.map((opt) => {
          const isSelected = selected === opt;
          return (
            <label key={opt} className="cursor-pointer">
              {/* keep the native radio for a11y, hide visually */}
              <RadioGroupItem value={opt} className="sr-only" />

              <Card
                className={cn(
                  "h-14 w-14 rounded-full flex items-center justify-center text-base font-medium transition border",
                  isSelected
                    ? "bg-black text-white border-black"
                    : "bg-primary/10 text-foreground border-transparent hover:bg-primary/15"
                )}
              >
                {opt}
              </Card>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
}
