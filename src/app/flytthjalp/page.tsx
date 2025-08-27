"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import HomeTypeSelect from "@/components/ui/HomeTypeSelect";
import CleaningIncludes from "@/components/CleaningIncludes";
import FloorSelect from "@/components/FloorSelect";
import DistanceSlider from "@/components/DistanceSlider";
import AccessSelect from "@/components/AccessSelect";
import ExtraServices from "@/components/ExtraServices";
import BookingDetails from "@/components/BookingDetails";

type ServiceKey =
  | "packa"
  | "montera"
  | "bortforsling"
  | "flyttstad"
  | "magasinering";

const Page = () => {
  const [homeType, setHomeType] = React.useState<
    "lagenhet" | "Hus" | "forrad" | "kontor"
  >("lagenhet");
  const [floor, setFloor] = React.useState<
    "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10+"
  >("1");
  const [distance, setDistance] = React.useState(10);
  const [access, setAccess] = React.useState<
    "stairs" | "elevator" | "large-elevator"
  >("stairs");
  const [visible, setVisable] = useState(false);
  const [extra, setExtra] = React.useState<
    Partial<Record<ServiceKey, "JA" | "NEJ">>
  >({});

  return (
    <div className="pt-16">
      {/* offset for fixed nav h-16 */}
      {/* Heading */}
      <div className="w-full md:w-4/5 mx-auto px-6 flex flex-col items-center mt-12">
        <h1 className="pb-4 text-4xl text-primary-foreground">
          Boka <span className="font-bold text-primary">Flytthjälp</span>
        </h1>
        <p className="text-foreground pb-4 text-xl">
          text om varför ska man boka hos oss
        </p>
      </div>

      {/* Inputs */}
      <div className="w-full md:w-4/5 mx-auto px-6 flex flex-col items-center gap-6">
        <div className="w-full flex gap-4">
          <Input type="number" placeholder="Storlek (m³)" className="w-full" />
          <Input
            type="text"
            placeholder="Postnummer (från)"
            className="w-full"
          />
          <Input
            type="text"
            placeholder="Postnummer (Till)"
            className="w-full"
          />
        </div>
        <Button className="text-white">Fortsätt</Button>
      </div>

      {/* Nuvarande plats och booking card */}
      <section className="w-full md:w-4/5 mx-auto px-6 mt-12 mb-24">
        <h2 className="mb-4 text-2xl text-primary-foreground">
          Nuvarande adress
        </h2>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_400px] items-start">
          {/* LEFT column: all details */}
          <div className="space-y-10">
            <HomeTypeSelect value={homeType} onChange={setHomeType} />

            <section>
              <FloorSelect value={floor} onChange={setFloor} />
            </section>

            <section>
              <AccessSelect value={access} onChange={setAccess} />
            </section>

            <section>
              <DistanceSlider value={distance} onChange={setDistance} />
            </section>

            <div aria-hidden className="md:h-[5vh]" />

            {/* Ny plats */}
            <section>
              <h2 className="mb-4 text-2xl text-primary-foreground">
                Ny adress
              </h2>
              <HomeTypeSelect value={homeType} onChange={setHomeType} />
            </section>

            <section>
              <FloorSelect value={floor} onChange={setFloor} />
            </section>

            <section>
              <AccessSelect value={access} onChange={setAccess} />
            </section>

            <section>
              <DistanceSlider value={distance} onChange={setDistance} />
            </section>

            {/* Extra services */}
            <section>
              <ExtraServices value={extra} onChange={setExtra} />
            </section>

            {/* Booking details form */}
            <section>
              <BookingDetails />
            </section>
          </div>

          {/* RIGHT column: sticky summary card */}
          <div className="space-y-8">
            <div className="sticky top-16 self-start">
              {/* top-16 matches header height */}
              <Card className="relative bg-primary text-white rounded-[28px] overflow-hidden shadow-md">
                <div className="absolute inset-x-0 top-0 h-16 bg-primary/20" />
                <CardHeader className="relative flex flex-col items-center justify-center pt-8">
                  <CardTitle className="text-2xl">Bokning uppgifter</CardTitle>
                  <div className="w-24 border-b border-white/60 my-2" />
                  <CardDescription className="text-lg text-white">
                    Flytthjälp
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative divide-y divide-white/30">
                  <div className="flex justify-between items-center py-2 px-4">
                    <p>Extra Badrum</p>
                    <p>300kr</p>
                  </div>
                  <div className="flex justify-between items-center py-2 px-4">
                    <p>Extra Toalett</p>
                    <p>200kr</p>
                  </div>
                  <div className="flex justify-between items-center py-2 px-4">
                    <p>Inglasad Duschhörna</p>
                    <p>200kr</p>
                  </div>

                  <div className="flex items-center gap-2 py-6 px-4">
                    <Input
                      placeholder="Rabattskod"
                      className="w-full bg-transparent text-white placeholder:text-white/80 ring-1 ring-white/50 rounded-full px-4"
                    />
                    <Button className="bg-[#95fff8] text-black px-4 rounded-lg">
                      Använd
                    </Button>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center py-3 px-4 border-t border-white/30">
                  <p>Totalt pris:</p>
                  <p>2800kr</p>
                </CardFooter>
              </Card>
            </div>

            {/* Keep content below so the column is tall; remove the huge spacer */}
            <div aria-hidden className="mt-8 md:h-[335vh]" />
            {visible && <CleaningIncludes />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
