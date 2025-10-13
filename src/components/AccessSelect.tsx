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
  { id: "large-elevator", label: "Stor Hiss", icon: "/large-elevator.svg" },
];

export default function AccessSelect({
  value,
  onChange,
}: {
  value: AccessValue; // controlled
  onChange: (v: AccessValue) => void; // controlled
}) {
  return (
    <div className="max-w-3xl">
      <h3 className="mb-3 text-lg font-semibold text-primary-foreground">
        Tillgång
      </h3>

      <RadioGroup
        value={value}
        onValueChange={(v) => onChange(v as AccessValue)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {OPTIONS.map((opt) => {
          const active = value === opt.id;
          return (
            <label key={opt.id} className="cursor-pointer">
              <RadioGroupItem value={opt.id} className="sr-only" />
              <Card
                className={cn(
                  "h-40 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition border",
                  active
                    ? "bg-black text-white border-black"
                    : "bg-primary/10 text-foreground border-transparent hover:bg-primary/15"
                )}
              >
                <Image
                  src={opt.icon}
                  alt={opt.label}
                  width={64}
                  height={64}
                  className="mb-3 object-contain"
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
