"use client";

import * as React from "react";
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
import { X, Loader2 } from "lucide-react";
const API_BASE = process.env.NEXT_PUBLIC_API_KEY || "";

export default function SummaryCard() {
  const {
    priceDetails,
    discountCode,
    appliedDiscount,
    discountError,
    isValidatingDiscount,
    setDiscountCode,
    validateAndApplyDiscount,
    removeDiscount,
  } = useBookingStore();

  const handleApplyDiscount = async () => {
    await validateAndApplyDiscount(API_BASE);
  };

  const handleRemoveDiscount = () => {
    removeDiscount();
  };

  const kr = (n: number) =>
    new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(
      Math.round(Number(n) || 0)
    ) + " kr";

  const isApplied = !!appliedDiscount;

  return (
    <aside className="w-full max-w-full overflow-hidden">
      <Card className="relative w-full bg-primary text-white rounded-2xl sm:rounded-[28px] overflow-hidden shadow-md">
        <CardHeader className="relative flex flex-col items-center justify-center pt-6 sm:pt-8 px-4">
          <CardTitle className="text-xl sm:text-2xl">
            Bokning uppgifter
          </CardTitle>
          <div className="w-32 sm:w-40 border-b border-white/60 my-2" />
          <CardDescription className="text-base sm:text-lg text-white">
            Flytthjälp
          </CardDescription>
        </CardHeader>

        <CardContent className="relative divide-y divide-white/30 px-2 sm:px-4">
          {priceDetails.lines.map((l) => (
            <div
              key={l.key}
              className="flex justify-between items-center py-2 px-2 sm:px-4 gap-2"
            >
              <p className="text-sm sm:text-base flex-1 min-w-0">
                {l.label}{" "}
                {l.meta && (
                  <span className="text-xs sm:text-sm opacity-75">
                    ({l.meta})
                  </span>
                )}
              </p>
              <p
                className={`text-sm sm:text-base whitespace-nowrap ${
                  l.key === "discount" ? "text-green-300 font-semibold" : ""
                }`}
              >
                {kr(l.amount)}
              </p>
            </div>
          ))}

          {/* Discount Code Input Section */}
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

      
    </aside>
  );
}
