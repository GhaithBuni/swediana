// app/boka/Page.tsx (or wherever your Page lives)
"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import CleaningIncludes from "@/components/CleaningIncludes";
import DistanceSlider from "@/components/DistanceSlider";
import ExtraServices from "@/components/ExtraServices";
import BookingDetails from "@/components/BookingDetails";
import SummaryCard from "@/components/SummaryCard";
import AddressSection from "@/components/AddressSection";
import Container from "@/components/Container";

type ServiceKey =
  | "packa"
  | "montera"
  | "bortforsling"
  | "flyttstad"
  | "magasinering";

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
  const [visibleAdress, setVisibleAdress] = React.useState(false);
  const [extra, setExtra] = React.useState<
    Partial<Record<ServiceKey, "JA" | "NEJ">>
  >({});

  const handleCalculate = () => {
    setVisible(!visible);
  };
  const handleContinue = () => setVisibleAdress(!visibleAdress);

  return (
    <div className="pt-16">
      {/* Header */}
      <header className="mt-12 text-center">
        <Container className="flex flex-col items-center">
          <h1 className="pb-4 text-4xl text-primary-foreground">
            Boka <span className="font-bold text-primary">Flytthjälp</span>
          </h1>
          <p className="text-foreground pb-4 text-xl">
            text om varför ska man boka hos oss
          </p>
        </Container>
      </header>

      {/* Top inputs */}
      <Container className="flex flex-col items-center gap-6">
        <div className="w-full grid gap-4 md:grid-cols-3">
          <Input type="number" placeholder="Storlek (m³)" className="w-full" />
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
        <Button onClick={handleContinue} className="text-white">
          Fortsätt
        </Button>
      </Container>

      {/* Main content */}
      <main className="mt-12 mb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Row 1: Address sections side-by-side */}
            {visibleAdress && (
              <>
                <AddressSection
                  title="Nuvarande adress"
                  value={from}
                  onChange={setFrom}
                />
                <AddressSection title="Ny adress" value={to} onChange={setTo} />

                {/* Calculate button spans both columns */}
                <div className="md:col-span-2">
                  <Button
                    className="w-full md:w-auto text-white"
                    onClick={handleCalculate}
                  >
                    Beräkna ditt pris
                  </Button>
                </div>
              </>
            )}

            {/* Row 2 & 3 */}
            {visible && (
              <>
                {/* Row 2: ExtraServices | SummaryCard */}
                <section>
                  <ExtraServices value={extra} onChange={setExtra} />
                  <section className="mt-20">
                    <BookingDetails />
                  </section>
                </section>
                <div>
                  <div className="h-[30vh]" />
                </div>
              </>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Page;
