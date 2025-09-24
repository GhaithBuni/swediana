"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCleaningStore } from "@/stores/byggStore";

const KEY_MAP: Record<string, string> = {
  Persienner: "Persinner", // <- double-check this matches your API payload key
  badrum: "ExtraBadrum",
  toalett: "ExtraToalett",
  Inglasadduschhörna: "inglassadDusch",
};

const LABELS: Record<string, string> = {
  Persienner: "Persienner",
  badrum: "Extra Badrum",
  toalett: "Extra Toalett",
  Inglasadduschhörna: "Inglasad Duschhörna",
};

const kr = (n: number) =>
  new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(
    Math.round(Number(n) || 0)
  ) + " kr";

export default function ByggSummaryCard() {
  const { basePrice, extrasTable, extras } = useCleaningStore();

  const priceTable = extrasTable?.[0] ?? {};
  let extrasTotal = 0;

  const lines: Array<{
    key: string;
    label: string;
    amount: number;
    detail?: string;
  }> = [];

  // Base cleaning
  lines.push({
    key: "base",
    label: "Byggstäd",
    amount: Number(basePrice) || 0,
  });

  // Extras (fixed & quantity)
  Object.entries(extras || {}).forEach(([k, v]) => {
    const apiKey = KEY_MAP[k] ?? k;
    const unit = Number(priceTable[apiKey] ?? 0);

    if (typeof v === "number" && v > 0) {
      const qty = v;
      const amount = unit * qty;
      extrasTotal += amount;
      lines.push({
        key: k,
        label: LABELS[k] ?? k,
        amount,
        detail: `${qty} × ${kr(unit)}`,
      });
    } else if (v === "JA") {
      const amount = unit;
      extrasTotal += amount;
      lines.push({
        key: k,
        label: LABELS[k] ?? k,
        amount,
      });
    }
  });

  const grandTotal = (Number(basePrice) || 0) + extrasTotal;

  return (
    <aside className="sticky top-16 self-start w-full">
      <Card className="relative w-full bg-primary text-white rounded-[28px] overflow-hidden shadow-md">
        <CardHeader className="relative flex flex-col items-center justify-center pt-8">
          <CardTitle className="text-2xl">Bokning uppgifter</CardTitle>
          <div className="w-40 border-b border-white/60 my-2" />
          <CardDescription className="text-lg text-white">
            Byggstäd
          </CardDescription>
        </CardHeader>

        <CardContent className="relative divide-y divide-white/30">
          {lines.map((line) => (
            <div
              key={line.key}
              className="flex justify-between items-center py-2 px-4"
            >
              <p>
                {line.label}
                {line.detail && (
                  <span className="ml-2 text-sm opacity-80">
                    ({line.detail})
                  </span>
                )}
              </p>
              <p>{kr(line.amount)}</p>
            </div>
          ))}

          <div className="flex items-center gap-2 py-6 px-4">
            <Input
              placeholder="Rabattskod"
              className="w-full bg-transparent text-white placeholder:text-white/80 ring-1 ring-white/50 rounded-full px-4"
            />
            <Button className="bg-[#95fff8] text-black px-4 rounded-lg">
              Använd
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center py-3 px-4 border-t border-white/30">
          <p>Totalt pris:</p>
          <p>{kr(grandTotal)}</p>
        </CardFooter>
      </Card>
    </aside>
  );
}
