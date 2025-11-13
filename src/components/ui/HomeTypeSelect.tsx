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
  value: HomeType;
  onChange: (v: HomeType) => void;
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
                  "relative h-32 rounded-2xl p-6 flex flex-col items-center justify-center transition border gap-3",
                  isSelected
                    ? "bg-primary text-white border-primary"
                    : "bg-primary/10 text-foreground border-transparent hover:bg-primary/15"
                )}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={label}
                    width={48}
                    height={48}
                    className={cn(
                      "object-contain w-full h-full",
                      isSelected && "brightness-0 invert"
                    )}
                  />
                </div>
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
