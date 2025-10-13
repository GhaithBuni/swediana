"use client";

import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import BookingDetailsCleaning from "@/components/BookingDetailsCleaning";
import AddressSection from "@/components/AddressSection";
import ExtraServicesCleaning from "@/components/ExtraServicesCleaning";
import CleaningSummaryCard from "@/components/CleaningSummaryCard";
import { useCleaningStore } from "@/stores/cleaningStore";
import { initialCleaningSchema } from "../schema/schema";

const CleaningPage = () => {
  const {
    address,
    setAddress,
    size,
    setSize,
    extras,
    setExtras,

    fetchCleaningPrices,
    resetToken, // used to force child inputs to reset if they cache internal state
  } = useCleaningStore();

  const sizeRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const onFetch = async () => {
    // Clear previous errors
    setErrors({});
    // Get current values
    const sz = Number(sizeRef.current?.value || 0);
    const fromPostcode = address.postcode || "";

    // Validate
    const result = initialCleaningSchema.safeParse({
      size: sz,
      fromPostcode,
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
      await fetchCleaningPrices(process.env.NEXT_PUBLIC_API_KEY!);
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
          Boka <span className="font-bold text-primary">Flyttstäd</span>
        </h1>
        <p className="text-foreground pb-4 text-xl">
          text om varför ska man boka hos oss
        </p>
      </header>

      {/* top inputs (controlled by store) */}
      <div className="w-full md:w-4/5 mx-auto px-6 flex flex-col items-center gap-6">
        <div className="w-full grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <Input
              ref={sizeRef}
              defaultValue={size || ""}
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
              value={address.postcode ?? ""}
              onChange={(e) => {
                setAddress({ postcode: e.target.value });
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
        </div>
        <Button onClick={onFetch} className="text-white" disabled={isLoading}>
          {isLoading ? "Laddar..." : "Fortsätt"}
        </Button>
      </div>

      {/* main content */}
      <main className="w-full md:w-4/5 mx-auto px-6 mt-12 mb-24 min-h-[50vh]">
        {visible && (
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_380px] items-start">
            {/* LEFT column */}
            <div className="space-y-10">
              <AddressSection
                key={`addr-${resetToken}`} // helps reset internal child state when store resets
                title="Adress"
                value={address}
                onChange={setAddress}
                showDistance={true}
              />

              <section>
                <ExtraServicesCleaning
                  key={`extras-${resetToken}`} // same trick for extras
                  value={extras}
                  onChange={setExtras}
                />
              </section>

              <section>
                <BookingDetailsCleaning />
              </section>

              {/* Optional helper/info block */}
              {/* <CleaningIncludes /> */}
            </div>

            {/* RIGHT column */}
            <CleaningSummaryCard />
          </div>
        )}
      </main>
    </div>
  );
};

export default CleaningPage;
