"use client";
import * as React from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HomeType = "lagenhet" | "Hus" | "forrad" | "kontor";

const OPTIONS: { id: HomeType; label: string; src: string }[] = [
  { id: "lagenhet", label: "Lägenhet", src: "/lagenhet.svg" },
  { id: "Hus", label: "Hus", src: "/hus.svg" },
  { id: "forrad", label: "Förråd", src: "/forrad.svg" },
  { id: "kontor", label: "Kontor", src: "/kontor.svg" },
];

export default function HomeTypeSelect({
  value,
  onChange,
}: {
  value: HomeType; // <-- required, controlled
  onChange: (v: HomeType) => void; // <-- required
}) {
  return (
    <div className="max-w-3xl">
      <RadioGroup
        value={value}
        onValueChange={(v) => onChange(v as HomeType)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        aria-label="Välj boendetyp"
      >
        {OPTIONS.map(({ id, label, src }) => {
          const isSelected = value === id;
          return (
            <label key={id} className="cursor-pointer">
              <RadioGroupItem value={id} className="sr-only" />
              <Card
                className={cn(
                  "relative h-32 rounded-2xl p-6 flex flex-col items-center justify-center transition border",
                  isSelected
                    ? "bg-black text-white border-black"
                    : "bg-primary/10 text-foreground border-transparent hover:bg-primary/15"
                )}
              >
                <Image
                  src={src}
                  alt={label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span
                  className={cn(
                    "text-base font-medium",
                    isSelected ? "text-white" : "text-foreground/90"
                  )}
                >
                  {label}
                </span>
              </Card>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
}
