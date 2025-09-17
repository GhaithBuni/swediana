// SummaryCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CleaningIncludes from "@/components/CleaningIncludes";

type ExtraObj = Record<string, number>;
type Props = {
  title: string;
  movingPrice: number;
  extra: Partial<Record<string, "JA" | "NEJ">>;
  extraService: Record<string, number>[]; // [{ ...prices }]
  size: React.RefObject<HTMLInputElement | null>;
  cleaningPrice: number; // <-- you already have this
};

// UI key -> API key (remove flyttstad here so we don't double count it)
const KEY_MAP: Record<string, string> = {
  packa: "packagingAllRooms",
  packaKitchen: "packagingKitchen",
  montera: "mounting",
};

const LABELS: Record<string, string> = {
  packa: "Packning (alla rum)",
  packaKitchen: "Packning (Bara Kök)",
  montera: "Montering",
  flyttstad: "Flyttstäd",
};

export default function SummaryCard({
  title,
  movingPrice,
  extra,
  extraService,
  size,
  cleaningPrice, // <-- use it
}: Props) {
  const priceTable = extraService?.[0] ?? {};
  const sizeValue = parseFloat(size.current?.value || "1");

  // selected extra keys
  const selected = Object.entries(extra)
    .filter(([, v]) => v === "JA")
    .map(([k]) => k);

  // extras from table (per KVM) — exclude cleaning here
  const extrasTotal = selected.reduce((sum, k) => {
    if (k === "flyttstad") return sum; // handle separately
    const apiKey = KEY_MAP[k] ?? k;
    const p = priceTable[apiKey] ?? 0;
    return sum + p * sizeValue;
  }, 0);

  // cleaning: own variable (fixed). If yours is per KVM, change to: cleaningPrice * sizeValue
  const cleaningSelected = selected.includes("flyttstad");
  const rawCleaning = cleaningPrice; // or just cleaningPrice if it's fixed
  const cleaningLine = cleaningSelected ? rawCleaning * 0.85 : 0; // 15% discount

  const grandTotal = movingPrice + extrasTotal + cleaningLine;

  return (
    <aside className="sticky top-16 self-start w-full">
      <div className="w-full md:max-w-sm md:ml-auto">
        <Card className="relative w-full bg-primary text-white rounded-[28px] overflow-hidden shadow-md">
          <div className="absolute inset-x-0 top-0 h-16 bg-primary/20" />

          <CardHeader className="relative flex flex-col items-center justify-center pt-8">
            <CardTitle className="text-2xl">Bokning uppgifter</CardTitle>
            <div className="w-40 border-b border-white/60 my-2" />
            <CardDescription className="text-lg text-white">
              {title}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative divide-y divide-white/30">
            <div className="flex justify-between items-center py-2 px-4">
              <p>Flytthjälp</p>
              <p>{movingPrice}kr</p>
            </div>

            {selected.length > 0 && (
              <div className="py-1 px-4 text-sm opacity-80">Tillägg</div>
            )}
            {/* per-KVM extras */}
            {selected
              .filter((k) => k !== "flyttstad")
              .map((k) => {
                const apiKey = KEY_MAP[k] ?? k;
                const price = (priceTable[apiKey] ?? 0) * sizeValue;
                return (
                  <div
                    key={k}
                    className="flex justify-between items-center py-2 px-4"
                  >
                    <p>{LABELS[k] ?? k}</p>
                    <p>{price} kr</p>
                  </div>
                );
              })}

            {/* cleaning (own variable) */}
            {cleaningSelected && (
              <div className="flex justify-between items-center py-2 px-4">
                <p>
                  {LABELS["flyttstad"]}{" "}
                  <span className="text-sm opacity-75">(15% rabatt)</span>
                </p>
                <p>
                  <span className="line-through mr-2 opacity-70">
                    {rawCleaning} kr
                  </span>
                  {cleaningLine} kr
                </p>
              </div>
            )}

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
            <p>{grandTotal} Kr</p>
          </CardFooter>
        </Card>

        <CleaningIncludes />
      </div>
    </aside>
  );
}
