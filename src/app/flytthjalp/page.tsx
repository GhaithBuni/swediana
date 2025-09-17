"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import CleaningIncludes from "@/components/CleaningIncludes";
import ExtraServices from "@/components/ExtraServices";
import BookingDetails from "@/components/BookingDetails";
import SummaryCard from "@/components/SummaryCard";
import AddressSection from "@/components/AddressSection";

type ServiceKey = "packa" | "montera" | "flyttstad" | "packaKitchen";

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
  const [to, setTo] = React.useState<Address>(DEFAULT_ADDRESS);
  const [visible, setVisible] = React.useState(false);
  const [extra, setExtra] = React.useState<
    Partial<Record<ServiceKey, "JA" | "NEJ">>
  >({});
  const [movingPrice, setMovingPrice] = useState(0);
  const [extraService, setExtraService] = useState([]);
  const [cleaningPrice, setCleaningPrice] = useState(0);

  //Api Call

  const sizeRef = useRef<HTMLInputElement>(null);

  const onclick = async () => {
    const size = sizeRef.current?.value;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/prices`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        size,
        postNummer: from.postcode,
        postNummerTo: to.postcode,
      }),
    });
    const result = await response.json();
    setMovingPrice(result.data.movingPrice);
    setExtraService(result.data.extraServices);
    setCleaningPrice(result.data.cleaningPrice);
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
          <Input
            type="text"
            placeholder="Postnummer (till)"
            className="w-full"
            value={to.postcode ?? ""}
            onChange={(e) => setTo({ ...to, postcode: e.target.value })}
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

            <AddressSection
              title="Ny adress"
              value={to}
              onChange={setTo}
              // Often distance is global (between from/to), so keep only on first section:
              showDistance={false}
            />

            <section>
              <ExtraServices value={extra} onChange={setExtra} />
            </section>

            <section>
              <BookingDetails />
            </section>

            {/* Optional helper/info block */}
            {visible && <CleaningIncludes />}
          </div>

          {/* RIGHT column */}
          <SummaryCard
            title="Flytthjälp"
            movingPrice={movingPrice}
            extra={extra}
            extraService={extraService}
            size={sizeRef}
            cleaningPrice={cleaningPrice}
          />
        </div>
      </main>
    </div>
  );
};

export default Page;
