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
import CleaningIncludes from "./CleaningIncludes";
import { Loader2, X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const kr = (n: number) =>
  new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(
    Math.round(Number(n) || 0)
  ) + " kr";

export default function ByggSummaryCard() {
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
    await validateAndApplyDiscount(process.env.NEXT_PUBLIC_API_KEY!);
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
            Byggstäd
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
                {line.amount < 0 ? "-" : ""}
                {kr(Math.abs(line.amount))}
              </p>
            </div>
          ))}

          {/* Discount Code Section */}
          <div className="py-4 sm:py-6 px-2 sm:px-4 space-y-2">
            {appliedDiscount ? (
              // Show applied discount with remove button
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    Rabattkod tillämpad: {appliedDiscount.code}
                  </p>
                  <p className="text-xs opacity-75">
                    {appliedDiscount.type === "percentage"
                      ? `${appliedDiscount.value}% rabatt`
                      : `${kr(appliedDiscount.value)} rabatt`}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeDiscount}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              // Show discount input
              <>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Rabattkod"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !isValidatingDiscount) {
                        handleApplyDiscount();
                      }
                    }}
                    disabled={isValidatingDiscount}
                    className="w-full bg-white/10 text-white placeholder:text-white/60 border-white/30 focus:border-white/50 focus:ring-2 focus:ring-white/20 rounded-full px-3 sm:px-4 text-sm sm:text-base h-9 sm:h-10"
                  />
                  <Button
                    onClick={handleApplyDiscount}
                    disabled={isValidatingDiscount || !discountCode.trim()}
                    className="bg-white text-primary px-4 sm:px-6 rounded-full hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base h-9 sm:h-10 flex-shrink-0 font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                  >
                    {isValidatingDiscount ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Använd"
                    )}
                  </Button>
                </div>
                {discountError && (
                  <p className="text-xs text-red-300 px-2">{discountError}</p>
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
