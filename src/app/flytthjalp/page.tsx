"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ExtraServices from "@/components/ExtraServices";
import BookingDetails from "@/components/BookingDetails";
import SummaryCard from "@/components/SummaryCard";
import AddressSection from "@/components/AddressSection";
import { useBookingStore } from "@/stores/bookingStore";
import { initialBookingSchema } from "../schema/schema";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Page = () => {
  const {
    from,
    to,
    setFrom,
    setTo,
    sizeValue,
    setSize,
    extra,
    setExtra,
    cleaningExtra,
    setCleaningExtra,
    fetchPrices,
  } = useBookingStore();

  const sizeRef = useRef<HTMLInputElement>(null);

  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const onclick = async () => {
    // Clear previous errors
    setErrors({});

    // Get current values
    const sz = Number(sizeRef.current?.value || 0);
    const fromPostcode = from.postcode || "";
    const toPostcode = to.postcode || "";

    // Validate
    const result = initialBookingSchema.safeParse({
      size: sz,
      fromPostcode,
      toPostcode,
    });

    if (!result.success) {
      // Extract errors
      const validationErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        validationErrors[field] = err.message;
      });
      setErrors(validationErrors);
      return;
    }

    // All valid - proceed
    setIsLoading(true);
    try {
      setSize(sz);
      await fetchPrices(process.env.NEXT_PUBLIC_API_KEY!);
    } catch (error) {
      console.error("Failed to fetch prices:", error);
      setErrors({ general: "Kunde inte hämta priser. Försök igen." });
    } finally {
      setIsLoading(false);
      setVisible(true);
    }
  };

  return (
    <div className="pt-16">
      <header className="w-full md:w-4/5 mx-auto px-6 flex flex-col items-center mt-12 text-center">
        <h1 className="pb-4 text-4xl text-primary-foreground">
          Boka <span className="font-bold text-primary">Flytthjälp</span>
        </h1>
        <p className="text-foreground pb-4 text-xl">
          text om varför ska man boka hos oss
        </p>
      </header>

      {/* top inputs */}
      <div className="w-full md:w-4/5 mx-auto px-6 flex flex-col items-center gap-6">
        <div className="w-full grid gap-4 md:grid-cols-3">
          <div className="space-y-1">
            <Input
              ref={sizeRef}
              defaultValue={sizeValue || ""}
              type="number"
              placeholder="Storlek (m³)"
              className={`w-full ${errors.size ? "border-red-500" : ""}`}
            />
            {errors.size && (
              <p className="text-sm text-red-500">{errors.size}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              type="text"
              placeholder="Postnummer (från)"
              className={`w-full ${
                errors.fromPostcode ? "border-red-500" : ""
              }`}
              value={from.postcode ?? ""}
              onChange={(e) => {
                setFrom({ postcode: e.target.value });
                if (errors.fromPostcode) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.fromPostcode;
                    return next;
                  });
                }
              }}
            />
            {errors.fromPostcode && (
              <p className="text-sm text-red-500">{errors.fromPostcode}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              type="text"
              placeholder="Postnummer (till)"
              className={`w-full ${errors.toPostcode ? "border-red-500" : ""}`}
              value={to.postcode ?? ""}
              onChange={(e) => {
                setTo({ postcode: e.target.value });
                if (errors.toPostcode) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.toPostcode;
                    return next;
                  });
                }
              }}
            />
            {errors.toPostcode && (
              <p className="text-sm text-red-500">{errors.toPostcode}</p>
            )}
          </div>
        </div>

        {errors.general && (
          <Alert variant="destructive" className="w-full">
            <AlertDescription>{errors.general}</AlertDescription>
          </Alert>
        )}

        <Button onClick={onclick} className="text-white" disabled={isLoading}>
          {isLoading ? "Laddar..." : "Fortsätt"}
        </Button>
      </div>
      <main className="w-full md:w-4/5 mx-auto px-6 mt-12 mb-24 min-h-[60vh]">
        {visible && (
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_380px] items-start">
            <div className="space-y-10">
              <AddressSection
                title="Nuvarande adress"
                value={from}
                onChange={(v) => setFrom(v)}
              />
              <AddressSection
                title="Ny adress"
                value={to}
                onChange={(v) => setTo(v)}
                showDistance={false}
              />
              <section>
                <ExtraServices
                  value={extra}
                  onChange={(v) => setExtra(v)}
                  cleaningValue={cleaningExtra}
                  onCleaningChange={(v) => setCleaningExtra(v)}
                />
              </section>
              <section>
                <BookingDetails />
              </section>
            </div>
            <SummaryCard />
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
