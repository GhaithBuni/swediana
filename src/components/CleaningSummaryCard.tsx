// components/CleaningSummaryCard.tsx
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
import { useCleaningStore } from "@/stores/cleaningStore";
import CleaningIncludes from "./CleaningIncludes";
import { X, Loader2 } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_KEY || "";

const kr = (n: number) =>
  new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(
    Math.round(Number(n) || 0)
  ) + " kr";

export default function CleaningSummaryCard() {
  const {
    priceDetails,
    discountCode,
    appliedDiscount,
    discountError,
    isValidatingDiscount,
    setDiscountCode,
    validateAndApplyDiscount,
    removeDiscount,
  } = useCleaningStore();

  const handleApplyDiscount = async () => {
    await validateAndApplyDiscount(API_BASE);
  };

  const handleRemoveDiscount = () => {
    removeDiscount();
  };

  return (
    <aside className="sticky top-16 self-start w-full">
      <Card className="relative w-full bg-primary text-white rounded-[28px] overflow-hidden shadow-md">
        <CardHeader className="relative flex flex-col items-center justify-center pt-8">
          <CardTitle className="text-2xl">Bokning uppgifter</CardTitle>
          <div className="w-40 border-b border-white/60 my-2" />
          <CardDescription className="text-lg text-white">
            Flyttstäd
          </CardDescription>
        </CardHeader>

        <CardContent className="relative divide-y divide-white/30">
          {priceDetails.lines.map((line) => (
            <div
              key={line.key}
              className={`flex justify-between items-center py-2 px-4 ${
                line.key === "discount" ? "text-[#95fff8]" : ""
              }`}
            >
              <p>
                {line.label}
                {line.meta && (
                  <span className="ml-2 text-sm opacity-80">({line.meta})</span>
                )}
              </p>
              <p>{kr(line.amount)}</p>
            </div>
          ))}

          {/* Discount Code Input */}
          <div className="py-6 px-4 space-y-2">
            {appliedDiscount ? (
              <div className="flex items-center justify-between bg-white/10 rounded-full px-4 py-2">
                <span className="text-[#95fff8]">
                  Rabattkod tillämpad: {appliedDiscount.code}
                </span>
                <Button
                  onClick={handleRemoveDiscount}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-red-300 h-auto p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Rabattkod"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    disabled={isValidatingDiscount}
                    className="w-full bg-transparent text-white placeholder:text-white/80 ring-1 ring-white/50 rounded-full px-4"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleApplyDiscount();
                      }
                    }}
                  />
                  <Button
                    onClick={handleApplyDiscount}
                    disabled={isValidatingDiscount || !discountCode.trim()}
                    className="bg-[#95fff8] text-black px-4 rounded-lg hover:bg-[#7ee6df] disabled:opacity-50"
                  >
                    {isValidatingDiscount ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Använd"
                    )}
                  </Button>
                </div>
                {discountError && (
                  <p className="text-red-300 text-sm px-2">{discountError}</p>
                )}
              </>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center py-3 px-4 border-t border-white/30">
          <p className="text-lg font-semibold">Totalt pris:</p>
          <p className="text-xl font-bold">
            {kr(priceDetails.totals.grandTotal)}
          </p>
        </CardFooter>
      </Card>
      <CleaningIncludes />
    </aside>
  );
}
