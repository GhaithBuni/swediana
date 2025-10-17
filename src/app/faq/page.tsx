// app/faq/page.tsx (or your current file)
"use client";

import Image from "next/image";
import { useState } from "react";

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  { q: "Vad ingår i er flytthjälp?", a: "Vi hjälper med packning, bärhjälp, transport, montering/demontering samt återvinning enligt överenskommelse." },
  { q: "Tar ni extra betalt för förrådsflytt?", a: "Nej, det är inkluderat i priset – Ingen extra avgift." },
  { q: "Ingår RUT-avdrag i ert pris?", a: "Ja, vi hanterar RUT-avdraget direkt på fakturan enligt Skatteverkets regler." },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number>(1); // öppna mittenraden som i bilden

  return (
    <div className="">
    {/* HERO — full-bleed, responsive + safe viewport heights */}
     {/* Header Section */}
      <div className="relative  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/faq.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

           <h1
        className="
          text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          leading-tight
        "
      >
        Frågor &amp; svar
      </h1>
      </div>

      {/* FAQ SECTION */}
      <section className="bg-[#e6f7f5] flex justify-center my-20 py-10 w-[75%] mx-auto ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left titles */}
            <div className="lg:col-span-5">
              <h2 className="text-5xl sm:text-6xl font-bold">Frågor?</h2>
              <p className="mt-10 text-2xl font-medium ">Vanliga frågor</p>
            </div>

            {/* Right: intro + accordion */}
            <div className="lg:col-span-7">
              <p className="max-w-xl text-gray-700">
                Om du har frågor, har vi svar till dig här. Om vi inte har det, är
                du varmt välkommen att{" "}
                <a href="/kontakt" className="underline underline-offset-2">
                  kontakta oss
                </a>
                .
              </p>

              <div className="mt-8 sm:mt-10 max-w-2xl">
                {faqs.map((item, i) => {
                  const open = openIndex === i;
                  return (
                    <div key={i} className="border-t border-gray-700/60 py-3 sm:py-4">
                      <button
                        className="flex w-full items-center justify-between gap-4 text-left"
                        aria-expanded={open}
                        onClick={() => setOpenIndex(open ? -1 : i)}
                      >
                        <span className="font-semibold text-gray-800">
                          {item.q}
                        </span>
                        <span className="text-xl font-bold text-gray-800 select-none leading-none">
                          {open ? "X" : "+"}
                        </span>
                      </button>

                      {/* Answer */}
                      {open && (
                        <div className="pt-3 pl-0 sm:pl-1 text-gray-700">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* bottom line to match the mock */}
                <div className="border-t border-gray-700/60" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
