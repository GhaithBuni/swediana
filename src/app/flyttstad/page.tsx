"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import CleaningIncludes from "@/components/CleaningIncludes";
import BookingDetailsCleaning from "@/components/BookingDetailsCleaning";
import AddressSection from "@/components/AddressSection";
import ExtraServicesCleaning from "@/components/ExtraServicesCleaning";
import CleaningSummaryCard from "@/components/CleaningSummaryCard";
import { useCleaningStore } from "@/stores/cleaningStore";

const CleaningPage = () => {
  const {
    address,
    setAddress,
    size,
    setSize,
    extras,
    setExtras,
    basePrice,
    extrasTable,
    fetchCleaningPrices,
    resetToken, // used to force child inputs to reset if they cache internal state
  } = useCleaningStore();

  const onFetch = async () => {
    await fetchCleaningPrices(process.env.NEXT_PUBLIC_API_KEY!);
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
          <Input
            type="number"
            placeholder="Storlek (m²)"
            className="w-full"
            value={Number.isFinite(size) ? String(size) : ""}
            onChange={(e) => setSize(Number(e.target.value) || 0)}
          />
          <Input
            type="text"
            placeholder="Postnummer"
            className="w-full"
            value={address.postcode ?? ""}
            onChange={(e) => setAddress({ postcode: e.target.value })}
          />
        </div>
        <Button onClick={onFetch} className="text-white">
          Fortsätt
        </Button>
      </div>

      {/* main content */}
      <main className="w-full md:w-4/5 mx-auto px-6 mt-12 mb-24">
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
      </main>
    </div>
  );
};

export default CleaningPage;
