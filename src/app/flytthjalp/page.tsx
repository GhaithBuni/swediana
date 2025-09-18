"use client";

import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ExtraServices from "@/components/ExtraServices";
import BookingDetails from "@/components/BookingDetails";
import SummaryCard from "@/components/SummaryCard";
import AddressSection from "@/components/AddressSection";
import { useBookingStore } from "@/stores/bookingStore";

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

  const onclick = async () => {
    // sync size from input into store first
    const sz = Number(sizeRef.current?.value || 1);
    setSize(sz);
    await fetchPrices(process.env.NEXT_PUBLIC_API_KEY!);
  };

  return (
    <div className="pt-16">
      {/* offset for fixed nav h-16 */}
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
          <Input
            ref={sizeRef}
            defaultValue={sizeValue}
            type="number"
            placeholder="Storlek (m³)"
            className="w-full"
          />
          <Input
            type="text"
            placeholder="Postnummer (från)"
            className="w-full"
            value={from.postcode ?? ""}
            onChange={(e) => setFrom({ postcode: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Postnummer (till)"
            className="w-full"
            value={to.postcode ?? ""}
            onChange={(e) => setTo({ postcode: e.target.value })}
          />
        </div>
        <Button onClick={onclick} className="text-white">
          Fortsätt
        </Button>
      </div>

      <main className="w-full md:w-4/5 mx-auto px-6 mt-12 mb-24">
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

            {/* Optional */}
            {/* <CleaningIncludes /> */}
          </div>

          {/* Summary reads from the store directly now (no props needed) */}
          <SummaryCard />
        </div>
      </main>
    </div>
  );
};

export default Page;
