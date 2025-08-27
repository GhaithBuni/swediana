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
  onChange?: (v: "JA" | "NEJ") => void;
}) {
  const [internal, setInternal] = React.useState<"JA" | "NEJ" | null>(
    value ?? null
  );
  const current = value ?? internal;

  const set = (v: "JA" | "NEJ") => {
    setInternal(v);
    onChange?.(v);
  };

  return (
    <RadioGroup
      value={current ?? undefined}
      onValueChange={(v) => set(v as "JA" | "NEJ")}
      className="flex items-center gap-4"
      aria-label="Välj JA eller NEJ"
    >
      {(["JA", "NEJ"] as const).map((opt) => {
        const active = current === opt;
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

type ServiceKey =
  | "packa"
  | "montera"
  | "bortforsling"
  | "flyttstad"
  | "magasinering";

export default function ExtraServices({
  value,
  onChange,
}: {
  value?: Partial<Record<ServiceKey, "JA" | "NEJ">>;
  onChange?: (v: Partial<Record<ServiceKey, "JA" | "NEJ">>) => void;
}) {
  const [state, setState] = React.useState<
    Partial<Record<ServiceKey, "JA" | "NEJ">>
  >(value ?? {});

  const setField = (key: ServiceKey, v: "JA" | "NEJ") => {
    const next = { ...state, [key]: v };
    setState(next);
    onChange?.(next);
  };

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-primary-foreground">
        Extra tjänster
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Rad 1 */}
        <div>
          <p className="mb-3 text-foreground">Behöver du hjälp att packa?</p>
          <YesNoPills
            value={state.packa ?? null}
            onChange={(v) => setField("packa", v)}
          />
        </div>

        <div>
          <p className="mb-3 text-foreground">
            Behöver du hjälp att Montera/Nedmontera?
          </p>
          <YesNoPills
            value={state.montera ?? null}
            onChange={(v) => setField("montera", v)}
          />
        </div>

        {/* Rad 2 */}
        <div>
          <p className="mb-3 text-foreground">
            Behöver du hjälp med Bortforsling?
          </p>
          <YesNoPills
            value={state.bortforsling ?? null}
            onChange={(v) => setField("bortforsling", v)}
          />
        </div>

        <div>
          <p className="mb-3 text-foreground">
            Behöver du flyttstäd?{" "}
            <span className="font-medium">Får du 15% Rabatt</span>
          </p>
          <YesNoPills
            value={state.flyttstad ?? null}
            onChange={(v) => setField("flyttstad", v)}
          />
        </div>

        {/* Rad 3 */}
        <div>
          <p className="mb-3 text-foreground">Behöver du magasinering?</p>
          <YesNoPills
            value={state.magasinering ?? null}
            onChange={(v) => setField("magasinering", v)}
          />
        </div>
      </div>
    </section>
  );
}
