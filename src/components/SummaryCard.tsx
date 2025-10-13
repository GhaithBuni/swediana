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
import CleaningIncludes from "@/components/CleaningIncludes";
import { useBookingStore } from "@/stores/bookingStore";

export default function SummaryCard() {
  const { priceDetails } = useBookingStore();
  const kr = (n: number) =>
    new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(
      Math.round(n)
    ) + " kr";

  return (
    <aside className="sticky top-16 self-start w-full">
      <Card className="relative w-full bg-primary text-white rounded-[28px] overflow-hidden shadow-md">
        <CardHeader className="relative flex flex-col items-center justify-center pt-8">
          <CardTitle className="text-2xl">Bokning uppgifter</CardTitle>
          <div className="w-40 border-b border-white/60 my-2" />
          <CardDescription className="text-lg text-white">
            Flytthjälp
          </CardDescription>
        </CardHeader>

        <CardContent className="relative divide-y divide-white/30">
          {priceDetails.lines.map((l) => (
            <div
              key={l.key}
              className="flex justify-between items-center py-2 px-4"
            >
              <p>
                {l.label}{" "}
                {l.meta && (
                  <span className="text-sm opacity-75">({l.meta})</span>
                )}
              </p>
              <p>{kr(l.amount)}</p>
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
          <p>{kr(priceDetails.totals.grandTotal)}</p>
        </CardFooter>
      </Card>

      <CleaningIncludes />
    </aside>
  );
}
