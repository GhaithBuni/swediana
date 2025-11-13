// app/your-page/page.tsx
import Link from "next/link";
import Image from "next/image";
import SafetyGuarantee from "@/components/SafetyGuarantee";
import { faqItemsFlyttstad } from "../util/items";
import FAQTilesCollapsing from "@/components/FAQTiles";
import ChecklistSectionStad from "@/components/ChecklistSectionStad";

export default function Page() {
  const saftyTitle = "Vår nöjdhetsgaranti för flyttstädning";
  const subtitleSafty =
    "Din tillfredsställelse är vår prioritet. Alla våra flyttstädningar kommer med en 24-timmars nöjdhetsgaranti. Om något inte lever upp till dina förväntningar inom denna tid, hör av dig så åtgärdar vi det omgående.";

  return (
    <div>
      {/* Header Section */}
      <div className="relative  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/vase.png')",
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
          Flyttstädning
        </h1>
      </div>

      {/* CURVED BACKGROUND SECTION */}
      <section className="relative overflow-hidden mt-10 sm:mt-14 md:mt-20 py-10 sm:py-14 md:py-20">
        <div
          aria-hidden
          className="absolute -left-[45vw] -top-[45vw] h-[140vw] w-[140vw] rounded-full bg-[#95fff8] -z-10
                     sm:-left-[38vw] sm:-top-[38vw] sm:h-[120vw] sm:w-[120vw]
                     md:-left-[28vw] md:-top-[28vw] md:h-[95vw] md:w-[95vw]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            Professionell flyttstädning för en perfekt överlämning{" "}
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
            Slipp stressen med flyttstädningen. Vi erbjuder noggrann och
            professionell flyttstädning som uppfyller alla krav från mäklare och
            nya ägare. Lita på oss för ett prickfritt resultat.
          </p>
          <Link
            href="/flyttstad"
            className="mt-6 inline-block font-semibold underline text-primary-foreground"
          >
            Boka flyttstädning{" "}
          </Link>
        </div>
      </section>

      {/* CHECKLIST (your existing component should already be responsive) */}
      <ChecklistSectionStad />

      <div className="w-full">
        {/* TEAL PROMO STRIP */}
        <section className="relative overflow-hidden bg-[#007a7b] text-white py-10 sm:py-14 md:py-20">
          {/* DESKTOP + TABLET (≥ 640px) */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none hidden sm:block"
            style={{
              backgroundImage: "url('/procent.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "70%",
            }}
          ></div>

          {/* MOBILE (≤ 639px) */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none sm:hidden"
            style={{
              backgroundImage: "url('/procent.mob.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "90%", // as you requested
            }}
          ></div>
          <div className="px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
              {/* VÄNSTER TEXT */}
              <div className="xl:translate-x-[19%]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-normal">
                  Så förbereder du inför vår flyttstädning en enkel checklista!
                </h2>

                <ul className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-xl md:text-2xl font-bold">
                  {[
                    "Informera om speciella behov",
                    "Töm bostaden helt",
                    "Frosta av frysen",
                    "Säkerställ el och vatten",
                    "Kontrollera nycklar",
                    "Dubbelkolla allt en extra gång",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <svg
                        className="mt-1 h-6 w-6 flex-none rounded border border-white/40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="22" height="22" rx="4" />
                        <path d="m8 12 3 3 5-7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* HÖGER CIRKEL */}
              <div className="w-full flex justify-center md:justify-end overflow-visible">
                <div
                  className="
                 relative rounded-full bg-[#95fff8] text-[#3f3f3f]
                 size-[260px] sm:size-[320px] md:size-[420px]
                 flex items-center justify-center
                 p-6 sm:p-8 md:p-10 text-center
                 md:mr-[-80px] lg:mr-[-100px] xl:mr-[-110px]
               "
                >
                  <div>
                    <p className="text-base sm:text-lg md:text-xl font-semibold">
                      Förenkla din flytt! När du
                      <br />
                      bokar både flyttstädning
                      <br />
                      och flytthjälp hos oss, får
                      <br />
                      du <span className="font-extrabold">15% rabatt</span> på
                      din
                      <br />
                      flyttstädning
                    </p>

                    <a
                      href="/flytthjalp
                 "
                      className="
                     mt-6 inline-block 
                     text-base sm:text-lg 
                     font-semibold 
                     text-[#3f3f3f] 
                     underline underline-offset-4
                     hover:text-[#1e1e1e] 
                     transition
                   "
                    >
                      Boka nu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRYGGHETSBLOCK – PRECIS UNDER, FULLBREDD */}
        <section className="bg-[#e6f7f5]">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {/* VÄNSTER: BILD */}
            <div className="relative h-[260px]  md:h-[500px] ">
              <Image
                src="/Orange_Chair.png"
                alt="Glad hund i flyttlåda"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* HÖGER: TEXT + DEKOR-LINJER */}
            <div className="relative px-6 sm:px-8 md:px-12 py-10 sm:py-12 flex items-center">
              {/* Dekorativa linjer bakom texten */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-6 sm:-top-10 left-6 sm:left-10 w-40 sm:w-56 h-32 sm:h-40 border-[6px] sm:border-8 border-teal-500/70 rounded-[999px] rotate-[-10deg]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute top-10 sm:top-16 left-24 sm:left-36 w-40 sm:w-56 h-32 sm:h-40 border-[6px] sm:border-8 border-teal-500/50 rounded-[999px] rotate-[8deg]"
              />

              <div className="relative z-10 max-w-xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Vår nöjdhetsgaranti <br />
                  för flyttstädning
                </h3>
                <p className="text-base sm:text-lg  leading-relaxed ">
                  Din tillfredsställelse är vår prioritet. Alla våra
                  flyttstädningar kommer med en 24-timmars nöjdhetsgaranti. Om
                  något inte lever upp till dina förväntningar inom denna tid,
                  hör av dig så åtgärdar vi det omgående.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Top row: title left, text + arrows right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          {/* Left title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Frågor &amp; svar
            <span className="block text-teal-700">flyttstädning</span>
          </h2>

          {/* Right text + arrows */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-base sm:text-lg max-w-md font-bold ">
              Har du frågor om flytthjälp? Här har vi samlat de vanligaste
              frågorna och svaren som rör flytthjälp.
            </p>
          </div>
        </div>

        {/* FAQ tiles below */}
        <div className="mt-8 sm:mt-10">
          <FAQTilesCollapsing
            items={faqItemsFlyttstad}
            collapsed={180}
            expanded={350}
            height={400}
            gap={15}
          />
        </div>
      </section>
    </div>
  );
}
