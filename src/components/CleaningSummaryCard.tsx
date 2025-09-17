"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ExtraObj = Record<string, number>;
type YesNo = "JA" | "NEJ";

// 🔧 Allow numbers for quantity-capable extras (e.g., Persienner)
type ExtraValue = YesNo | number;

type Props = {
  title: string;
  cleaningPrice: number;
  extra: Partial<Record<string, ExtraValue>>;
  extraService: ExtraObj[];
};

const KEY_MAP: Record<string, string> = {
  Persienner: "Persinner", // <- make sure this matches your API key exactly
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

export default function CleaningSummaryCard({
  title,
  cleaningPrice,
  extra,
  extraService,
}: Props) {
  const priceTable = extraService?.[0] ?? {};

  // Sum fixed JA/NEJ extras + numeric quantity extras
  let extrasTotal = 0;

  // Build line items to render
  const lines: Array<{
    key: string;
    label: string;
    amount: number;
    detail?: string;
  }> = [];

  Object.entries(extra).forEach(([k, v]) => {
    const apiKey = KEY_MAP[k] ?? k;
    const unit = priceTable[apiKey] ?? 0;

    if (typeof v === "number" && v > 0) {
      // quantity-based (e.g., Persienner)
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
      // fixed add-on
      const amount = unit;
      extrasTotal += amount;
      lines.push({
        key: k,
        label: LABELS[k] ?? k,
        amount,
      });
    }
    // if v === "NEJ" or 0/undefined → skip
  });

  const grandTotal = cleaningPrice + extrasTotal;

  return (
    <aside className="sticky top-16 self-start w-full">
      <Card className="relative w-full bg-primary text-white rounded-[28px] overflow-hidden shadow-md">
        <CardHeader className="relative flex flex-col items-center justify-center pt-8">
          <CardTitle className="text-2xl">Bokning uppgifter</CardTitle>
          <div className="w-40 border-b border-white/60 my-2" />
          <CardDescription className="text-lg text-white">
            {title}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative divide-y divide-white/30">
          {/* Base cleaning */}
          <div className="flex justify-between items-center py-2 px-4">
            <p>Flyttstäd</p>
            <p>{kr(cleaningPrice)}</p>
          </div>

          {/* Extras (fixed and quantity-based) */}
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

// simple kr formatter
function kr(n: number) {
  return (
    new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(
      Math.round(n)
    ) + " kr"
  );
}
