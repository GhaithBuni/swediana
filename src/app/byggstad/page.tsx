"use client";

import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import CleaningIncludes from "@/components/CleaningIncludes";
import BookingDetails from "@/components/BookingDetails";
import AddressSection from "@/components/AddressSection";
import ExtraServicesCleaning from "@/components/ExtraServicesCleaning";
import CleaningSummaryCard from "@/components/CleaningSummaryCard";
import BookingDetailsBygg from "@/components/BookingDetailsBygg";
import ByggSummaryCard from "@/components/byggSummaryCard";

type ServiceKey = "Persienner" | "badrum" | "toalett" | "Inglasadduschhörna";
type HomeType = "lagenhet" | "Hus" | "forrad" | "kontor";
type Floor = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10+";
type Access = "stairs" | "elevator" | "large-elevator";

type Address = {
  homeType: HomeType;
  floor: Floor;
  access: Access;
  distance: number;
  postcode?: string;
};

const DEFAULT_ADDRESS: Address = {
  homeType: "lagenhet",
  floor: "1",
  access: "stairs",
  distance: 10,
};

const Page = () => {
  const [from, setFrom] = React.useState<Address>(DEFAULT_ADDRESS);
  const [visible, setVisible] = React.useState(false);
  const [extra, setExtra] = React.useState<
    Partial<Record<ServiceKey, "JA" | "NEJ">>
  >({});
  const [cleaningPrice, setCleaningPrice] = useState(0);
  const [extraService, setExtraService] = useState([]);
  const sizeRef = useRef<HTMLInputElement>(null);

  const onclick = async () => {
    const size = sizeRef.current?.value;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/prices/cleaning`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          size,
        }),
      }
    );
    const result = await response.json();
    setCleaningPrice(result.data.cleaningPrice);
    setExtraService(result.data.extraServices);
    console.log(result);
    console.log(cleaningPrice, extraService);
  };

  return (
    <div className="pt-16">
      {/* offset for fixed nav h-16 */}
      <header className="w-full md:w-4/5 mx-auto px-6 flex flex-col items-center mt-12 text-center">
        <h1 className="pb-4 text-4xl text-primary-foreground">
          Boka <span className="font-bold text-primary">Byggstäd</span>
        </h1>
        <p className="text-foreground pb-4 text-xl">
          text om varför ska man boka hos oss
        </p>
      </header>

      {/* top inputs */}
      <div className="w-full md:w-4/5 mx-auto px-6 flex flex-col items-center gap-6">
        <div className="w-full grid gap-4 md:grid-cols-2">
          <Input
            ref={sizeRef}
            type="number"
            placeholder="Storlek (m³)"
            className="w-full"
          />
          <Input
            type="text"
            placeholder="Postnummer (från)"
            className="w-full"
            value={from.postcode ?? ""}
            onChange={(e) => setFrom({ ...from, postcode: e.target.value })}
          />
        </div>
        <Button onClick={onclick} className="text-white">
          Fortsätt
        </Button>
      </div>

      {/* main content */}
      <main className="w-full md:w-4/5 mx-auto px-6 mt-12 mb-24">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_380px] items-start">
          {/* LEFT column */}
          <div className="space-y-10">
            <AddressSection
              title="Nuvarande adress"
              value={from}
              onChange={setFrom}
            />

            <section>
              <ExtraServicesCleaning value={extra} onChange={setExtra} />
            </section>

            <section>
              <BookingDetailsBygg />
            </section>

            {/* Optional helper/info block */}
            {visible && <CleaningIncludes />}
          </div>

          {/* <SummaryCard title="Flyttstäd" /> */}

          <ByggSummaryCard />
        </div>
      </main>
    </div>
  );
};

export default Page;
