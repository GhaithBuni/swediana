"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // shadcn button
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
                  ? "bg-primary text-white border-primary"
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

type ServiceKey = "Persienner" | "badrum" | "toalett" | "Inglasadduschhörna";

export default function ExtraServices({
  value = {},
  onChange,
}: {
  value?: Partial<Record<ServiceKey, any>>; // Persienner = number, others = JA|NEJ
  onChange: (v: Partial<Record<ServiceKey, any>>) => void;
}) {
  const setField = (key: ServiceKey, v: any) =>
    onChange({ ...value, [key]: v });

  // Handler for Persienner
  const persiennerCount = value.Persienner ?? 0;
  const increment = () => setField("Persienner", persiennerCount + 1);
  const decrement = () =>
    setField("Persienner", Math.max(0, persiennerCount - 1));

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-primary-foreground">
        Extra tjänster
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Persienner with stepper */}
        <div>
          <p className="mb-3 text-foreground">Persienner (antal)</p>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={decrement}
            >
              –
            </Button>
            <span className="min-w-[2rem] text-center text-lg font-semibold">
              {persiennerCount}
            </span>
            <Button
              type="button"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={increment}
            >
              +
            </Button>
          </div>
        </div>

        {/* Extra badrum */}
        <div>
          <p className="mb-3 text-foreground">Extra badrum</p>
          <YesNoPills
            value={value.badrum ?? null}
            onChange={(v) => setField("badrum", v)}
          />
        </div>

        {/* Extra toalett */}
        <div>
          <p className="mb-3 text-foreground">Extra toalett</p>
          <YesNoPills
            value={value.toalett ?? null}
            onChange={(v) => setField("toalett", v)}
          />
        </div>

        {/* Inglasad duschhörna */}
        <div>
          <p className="mb-3 text-foreground">Inglasad duschhörna</p>
          <YesNoPills
            value={value.Inglasadduschhörna ?? null}
            onChange={(v) => setField("Inglasadduschhörna", v)}
          />
        </div>
      </div>
    </section>
  );
}
