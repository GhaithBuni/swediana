"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

type AccessValue = "stairs" | "elevator" | "large-elevator";

const OPTIONS: { id: AccessValue; label: string; icon: string }[] = [
  { id: "stairs", label: "Trappa", icon: "/stairs.svg" },
  { id: "elevator", label: "Hiss", icon: "/elevator.svg" },
  {
    id: "large-elevator",
    label: "Stor Hiss",
    icon: "/large-elevator.svg",
  },
];

export default function AccessSelect({
  value,
  onChange,
}: {
  value?: AccessValue;
  onChange?: (v: AccessValue) => void;
}) {
  const [internal, setInternal] = React.useState<AccessValue>(
    value ?? "stairs"
  );
  const selected = value ?? internal;

  const handleChange = (v: string) => {
    const val = v as AccessValue;
    setInternal(val);
    onChange?.(val);
  };

  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-primary-foreground">
        Tillgång
      </h3>

      <RadioGroup
        value={selected}
        onValueChange={handleChange}
        className="grid gap-4 sm:grid-cols-2"
      >
        {OPTIONS.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <label key={opt.id} className="cursor-pointer">
              <RadioGroupItem value={opt.id} className="sr-only" />

              <Card
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl p-6 text-center transition border",
                  isSelected
                    ? "bg-black text-white border-black"
                    : "bg-primary/10 text-foreground border-transparent hover:bg-primary/15"
                )}
              >
                <Image
                  src={opt.icon}
                  alt={opt.label}
                  width={100}
                  height={100}
                  className="mb-3"
                />
                <span className="text-sm font-medium">{opt.label}</span>
              </Card>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
}
