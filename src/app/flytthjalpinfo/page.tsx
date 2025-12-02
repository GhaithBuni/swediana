// app/your-page/page.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import ChecklistSection from "@/components/ChecklistSection";
import SafetyGuarantee from "@/components/SafetyGuarantee";
import { faqItemsFlytthjalp } from "../util/items";
import FAQTilesCollapsing from "@/components/FAQTiles";
                                                                                                                                            
                                                                                                                                   
export default function Page() {                                                   
  const saftyTitle = "Vår trygghetsgaranti för flytthjälp";
  const subtitleSafty =
    "Din trygghet är vår prioritet. Alla våra flytthjälpstjänster kommer med en heltäckande transportförsäkring och en nöjdhetsgaranti. Skulle något mot förmodan inte vara till belåtenhet under flytten, eller om du har frågor efteråt, är du välkommen att kontakta oss så hjälper vi dig omgående. Vi strävar alltid efter att du ska känna dig helt nöjd med din flyttupplevelse.";                                                    

  return (                                          
    <div>                          
      {/* Header Section */}                              
      <div className="relative  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Turquoise_Elegance_upscaled.png')",
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
          Flytthjälp
        </h1>
      </div>

      {/* CURVED BACKGROUND SECTION */}
      <section className="relative overflow-hidden mt-10 sm:mt-14 md:mt-20 py-10 sm:py-14 md:py-20">
        <div
          aria-hidden
          className="absolute -left-[45vw] -top-[45vw] h-[140vw] w-[140vw] rounded-full bg-[#97fff3] -z-10
                     sm:-left-[38vw] sm:-top-[38vw] sm:h-[120vw] sm:w-[120vw]
                     md:-left-[28vw] md:-top-[28vw] md:h-[95vw] md:w-[95vw]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            Professionell Flytthjälp | Få Fullständig Service med Swediana AB
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
            Att flytta är en stor händelse. Låt inte stressen med tunga lyft och
            logistik ta över. Swediana AB erbjuder komplett och trygg flytthjälp
            för privatpersoner och företag över hela landet. Från första
            kartongen till den sista flyttstädningen – vi hanterar hela
            processen smidigt, professionellt och med full fokus på din
            trygghet.
          </p>
          <Link
            href="/flytthjalp"
            className="mt-6 inline-block font-semibold underline text-primary-foreground"
          >
            Se våra tjänster och boka tryggt!
          </Link>
        </div>
      </section>
      {/* KOSTNAD + RUT-SEKTION (läggs före ChecklistSection) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 sm:mt-14 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Vänster: Kostnad */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm border border-black/5 p-6 sm:p-8 md:p-10">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#97fff3]/60 blur-2xl"
            />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Vad kostar flytthjälp?
            </h3>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
              En av de vanligaste frågorna är: “Vad kostar flytthjälp?” Priset
              beror på omfattningen av din flytt (antal rum, volym, avstånd och
              eventuella tilläggstjänster som packning). Vi arbetar alltid med
              tydliga offerter utan dolda kostnader, så du vet exakt vad det
              kostar att anlita flytthjälp i förväg.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              {[
                "Antal rum & volym",
                "Avstånd",
                "Bärhjälp",
                "Packning/uppackning",
                "Tilläggstjänster",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full bg-[#e9fffc] px-3 py-1 text-sm sm:text-base font-semibold text-[#0b4b4b]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Höger: RUT */}
          <div className="relative overflow-hidden rounded-3xl bg-[#007a7b] text-white shadow-sm p-6 sm:p-8 md:p-10">
            <div
              aria-hidden
              className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Använd RUT-avdrag för att halvera arbetskostnaden
            </h3>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/95">
              Flytthjälp räknas som en hushållsnära tjänst. Det innebär att du
              har rätt till RUT-avdrag på arbetskostnaden – ett avdrag som låter
              dig dra av upp till 50% av kostnaden.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3 text-base sm:text-lg font-semibold">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-white" />
                Swediana AB hanterar ansökan åt dig – du betalar direkt ett
                reducerat pris.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-white" />
                Avdraget gäller arbetstimmar (bärhjälp, packning, uppackning).
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-white" />
                Gäller inte material (kartonger) eller transportkostnader (bil,
                bränsle).
              </li>
            </ul>

            {/* Exempel-box */}
            <div className="mt-6 sm:mt-8 rounded-2xl bg-white/10 p-4 sm:p-5">
              <p className="text-base sm:text-lg font-bold">Exempel:</p>
              <p className="mt-1 text-base sm:text-lg text-white/95">
                Om arbetskostnaden för din flytt är 10 000 kr, betalar du endast
                5 000 kr efter RUT-avdraget. Det gör din flytthjälp betydligt
                lägre i kostnad.
              </p>
            </div>

            <Link
              href="/flytthjalp"
              className="mt-6 inline-block font-semibold underline underline-offset-4 text-white hover:text-white/90 transition"
            >
              Be om offert med RUT-pris
            </Link>
          </div>
        </div>
      </section>

      {/* CHECKLIST (your existing component should already be responsive) */}
      <ChecklistSection />

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
                  För att din flytt ska bli så smidig och effektiv som möjligt,
                  här är några saker att tänka på innan våra flyttare anländer..
                </h2>

                <ul className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-xl md:text-2xl font-bold">
                  {[
                    "Gör gångar fria",
                    "Informera om tillgänglighet",
                    "Meddela om speciella behov",
                    "Packa ömtåligt separat",
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
        <section className="bg-[#EDE4D8]">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {/* VÄNSTER: BILD */}
            <div className="relative h-[260px]  md:h-auto w-full">
              <Image
                src="/Dog.png"
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
                  Swediana AB: Mer än bara Bärhjälp – Din Helhetslösning
                </h3>
                <p className="text-base sm:text-lg  leading-relaxed ">
                  På Swediana AB är vi specialiserade på att erbjuda en
                  helhetslösning som täcker alla dina behov. Vårt mål är att du
                  ska kunna fokusera på ditt nya hem, medan vi tar hand om
                  resten.
                </p>
                <h3 className="text-xl   font-bold mt-5">
                  Våra Populäraste Flyttjänster
                </h3>
                <p className="mt-3 text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold">Komplett Flytthjälp:</span>{" "}
                  Bärhjälp, transport och logistik. Vi hanterar tunga lyft och
                  ser till att dina ägodelar kommer säkert fram.
                </p>

                <p className="mt-3 text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold">Packhjälp:</span>{" "}
                  Professionell packning av porslin, kläder och ömtåliga
                  föremål.
                </p>

                <p className="mt-3 text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold">
                    Demontering &amp; Montering:
                  </span>{" "}
                  Hjälp med att montera isär och sätta ihop möbler.
                </p>

                <p className="mt-3 text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold">
                    Specialtjänst – Professionell Flyttstädning:
                  </span>{" "}
                  Vi är specialister på städtjänster. Vår flyttstädning utförs
                  med kvalitetsgaranti och säkerställer att bostaden är i
                  godkänt skick för nästa ägare eller hyresgäst.
                </p>

                <p className="mt-4 text-base sm:text-lg leading-relaxed font-semibold">
                  Tips: Boka flytt och städ tillsammans hos oss för en
                  garanterat stressfri upplevelse – och den mest
                  kostnadseffektiva lösningen.
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
             FAQ – Vanliga Frågor  &amp; Pris/Rutiner
            <span className="block text-teal-700">Flytthjälp </span>
          </h2>

          {/* Right text + arrows */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-base  max-w-md ">
             <strong className="text-lg">Vad kostar flytthjälp?</strong> <br />
Priset varierar beroende på volym och specifika tjänster, men vi erbjuder alltid konkurrenskraftiga priser med transparenta offerter. Kontakta oss för en gratis och icke-bindande offert oavsett var i landet du behöver hjälp.
            </p>
          </div>
        </div>

        {/* FAQ tiles below */}
        <div className="mt-8 sm:mt-10">
          <FAQTilesCollapsing
            items={faqItemsFlytthjalp}
            collapsed={180}
            expanded={350}
            height={400}
            gap={15}
          />
        </div>
      </section>

   {/* OFFERTSEKTION – NY DESIGN MED DIN ORIGINALTEXT */}
<section className="relative mt-10 sm:mt-14 md:mt-20 py-14 sm:py-20 bg-gradient-to-b from-white to-[#f6fffd]">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">

    {/* CENTRERAD TOPP-TEXT */}
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        Få din skräddarsydda Offert Idag!
      </h2>

      <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-black/80">
        Låt Swediana AB ta hand om din flytt. Vi erbjuder en professionell och heltäckande service 
        som sparar dig tid, energi och pengar genom effektivitet och RUT-avdraget.
      </p>

      <p className="mt-3 text-base sm:text-lg md:text-xl leading-relaxed font-semibold text-black">
        Kontakta oss nu för att diskutera din flytt och få ett exakt flytthjälp pris.
      </p>
    </div>

    {/* HIGHLIGHTED CARD */}
    <div className="mt-10 sm:mt-12 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-black/5 p-7 sm:p-10 relative">

        {/* Dekorativ highlight-cirkel */}
        <div
          aria-hidden
          className="absolute -top-10 -right-10 h-36 w-36 bg-[#97fff3] rounded-full opacity-40 blur-2xl"
        />

        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0b4b4b]">
            Varför du bör be om offert från oss:
          </h3>
          
          <ul className="mt-5 space-y-3 text-base sm:text-lg text-black/80">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#007a7b] flex-none"></span>
              Snabb återkoppling – ofta samma dag.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#007a7b] flex-none"></span>
              Tydliga och fasta priser utan dolda avgifter.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#007a7b] flex-none"></span>
              RUT-avdraget dras direkt på fakturan.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#007a7b] flex-none"></span>
              Heltäckande service – från bärhjälp till flyttstädning.
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="/kontakt"
              className="inline-block bg-[#007a7b] text-white py-3 px-10 rounded-full text-lg font-bold shadow-md hover:bg-[#006566] transition"
            >
              Begär offert
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

    </div>
  );
}
