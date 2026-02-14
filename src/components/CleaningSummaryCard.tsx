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
    Math.round(Number(n) || 0),
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
    <aside className="w-full max-w-full overflow-hidden">
      <Card className="relative w-full bg-primary text-white rounded-2xl sm:rounded-[28px] overflow-hidden shadow-md">
        <CardHeader className="relative flex flex-col items-center justify-center pt-6 sm:pt-8 px-4">
          <CardTitle className="text-xl sm:text-2xl">
            Bokning uppgifter
          </CardTitle>
          <div className="w-32 sm:w-40 border-b border-white/60 my-2" />
          <CardDescription className="text-base sm:text-lg text-white">
            Flyttstäd
          </CardDescription>
        </CardHeader>

        <CardContent className="relative divide-y divide-white/30 px-2 sm:px-4">
          {priceDetails.lines.map((line) => (
            <div
              key={line.key}
              className="flex justify-between items-center py-2 px-2 sm:px-4 gap-2"
            >
              <p className="text-sm sm:text-base flex-1 min-w-0">
                {line.label}
                {line.meta && (
                  <span className="text-xs sm:text-sm opacity-75 ml-2">
                    ({line.meta})
                  </span>
                )}
              </p>
              <p
                className={`text-sm sm:text-base whitespace-nowrap ${
                  line.key === "discount" ? "text-green-300 font-semibold" : ""
                }`}
              >
                {kr(line.amount)}
              </p>
            </div>
          ))}

          {/* Discount Code Input */}
          <div className="py-4 sm:py-6 px-2 sm:px-4 space-y-2">
            {appliedDiscount ? (
              <div className="flex items-center justify-between bg-white/10 rounded-full px-3 sm:px-4 py-2 gap-2">
                <span className="text-[#95fff8] text-xs sm:text-sm truncate">
                  Rabattkod tillämpad: {appliedDiscount.code}
                </span>
                <Button
                  onClick={handleRemoveDiscount}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-red-300 h-auto p-1 flex-shrink-0"
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
                    className="w-full bg-white/10 text-white placeholder:text-white/60 border-white/30 focus:border-white/50 focus:ring-2 focus:ring-white/20 rounded-full px-3 sm:px-4 text-sm sm:text-base h-9 sm:h-10"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleApplyDiscount();
                      }
                    }}
                  />
                  <Button
                    onClick={handleApplyDiscount}
                    disabled={isValidatingDiscount || !discountCode.trim()}
                    className="bg-white text-primary px-4 sm:px-6 rounded-full hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base h-9 sm:h-10 flex-shrink-0 font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
                  >
                    {isValidatingDiscount ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Använd"
                    )}
                  </Button>
                </div>
                {discountError && (
                  <p className="text-red-300 text-xs sm:text-sm px-2">
                    {discountError}
                  </p>
                )}
              </>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center py-3 px-3 sm:px-4 border-t border-white/30">
          <p className="font-semibold text-sm sm:text-base">Totalt pris:</p>
          <p className="text-lg sm:text-xl font-bold">
            {kr(priceDetails.totals.grandTotal)}
          </p>
        </CardFooter>
      </Card>
      <CleaningIncludes />
    </aside>
  );
}
