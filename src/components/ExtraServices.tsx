"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function YesNoPills({
  value,
  onChange,
}: {
  value?: "JA" | "NEJ" | null;
  onChange: (v: "JA" | "NEJ") => void;
}) {
  return (
    <RadioGroup
      value={value ?? undefined}
      onValueChange={(v) => onChange(v as "JA" | "NEJ")}
      className="flex items-center gap-4"
      aria-label="Välj JA eller NEJ"
    >
      {(["JA", "NEJ"] as const).map((opt) => {
        const active = value === opt;
        return (
          <label key={opt} className="cursor-pointer">
            <RadioGroupItem value={opt} className="sr-only" />
            <Card
              className={cn(
                "h-14 w-14 rounded-full flex items-center justify-center text-sm font-semibold transition border",
                active
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
  );
}

type ServiceKey = "packa" | "montera" | "flyttstad" | "packaKitchen";

export default function ExtraServices({
  value = {},
  onChange,
}: {
  value?: Partial<Record<ServiceKey, "JA" | "NEJ">>;
  onChange: (v: Partial<Record<ServiceKey, "JA" | "NEJ">>) => void;
}) {
  const setField = (key: ServiceKey, v: "JA" | "NEJ") =>
    onChange({ ...value, [key]: v });

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-primary-foreground">
        Extra tjänster
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div>
          <p className="mb-3 text-foreground">Behöver du hjälp att packa?</p>
          <YesNoPills
            value={value.packa ?? null}
            onChange={(v) => setField("packa", v)}
          />
        </div>
        <div>
          <p className="mb-3 text-foreground">
            Behöver du hjälp att packa (Bara Kök)?
          </p>
          <YesNoPills
            value={value.packaKitchen ?? null}
            onChange={(v) => setField("packaKitchen", v)}
          />
        </div>

        <div>
          <p className="mb-3 text-foreground">
            Behöver du hjälp att Montera/Nedmontera?
          </p>
          <YesNoPills
            value={value.montera ?? null}
            onChange={(v) => setField("montera", v)}
          />
        </div>

        <div>
          <p className="mb-3 text-foreground">
            Behöver du flyttstäd?{" "}
            <span className="font-medium">Får du 15% Rabatt</span>
          </p>
          <YesNoPills
            value={value.flyttstad ?? null}
            onChange={(v) => setField("flyttstad", v)}
          />
        </div>
      </div>
    </section>
  );
}
