// app/your-page/page.tsx
import Link from "next/link";
import Image from "next/image";
import ChecklistSection from "@/components/ChecklistSection";
import SafetyGuarantee from "@/components/SafetyGuarantee";
import { faqItemsByggstad } from "../util/items";
import FAQTilesCollapsing from "@/components/FAQTiles";
import ChecklistSectionStad from "@/components/ChecklistSectionStad";
import ChecklistSectionByggStad from "@/components/ChecklistSectionByggStad";

export default function Page() {
  const saftyTitle = "Vår nöjdhetsgaranti för byggstädning";
  const subtitleSafty =
    "Din tillfredsställelse är vår prioritet. Alla våra byggstädningar kommer med en 24-timmars nöjdhetsgaranti. Om något inte lever upp till dina förväntningar inom denna tid, hör av dig så åtgärdar vi det omgående.";

  return (
    <main className="text-slate-900">
      {/* HERO — full-bleed, responsive height */}
      <header className="relative isolate w-screen mx-[calc(50%-50vw)]">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full">
          <Image
            src="/vase.png"
            alt="Turkos fåtölj i solbelyst rum"
            fill
            priority
            quality={90}
            className="object-cover object-[65%_50%] -z-10"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent"
          />
          <h1
            className="absolute left-4 right-4 sm:left-8 md:left-10 bottom-4 sm:bottom-6 md:bottom-8
                         text-3xl sm:text-4xl md:text-5xl font-bold text-white
                         drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          >
            Byggstäd
          </h1>
        </div>
      </header>

      {/* CURVED BACKGROUND SECTION */}
      <section className="relative overflow-hidden mt-10 sm:mt-14 md:mt-20 py-10 sm:py-14 md:py-20">
        <div
          aria-hidden
          className="absolute -left-[45vw] -top-[45vw] h-[140vw] w-[140vw] rounded-full bg-[#97fff3] -z-10
                     sm:-left-[38vw] sm:-top-[38vw] sm:h-[120vw] sm:w-[120vw]
                     md:-left-[28vw] md:-top-[28vw] md:h-[95vw] md:w-[95vw]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance text-primary-foreground">
            Professionell byggstädning för en perfekt överlämning
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto text-primary-foreground">
            Slipp stressen med byggstädning. Vi erbjuder noggrann och
            professionell flyttstädning som uppfyller alla krav från mäklare och
            nya ägare. Lita på oss för ett prickfritt resultat.
          </p>
          <Link
            href="/services/moving"
            className="mt-6 inline-block font-semibold underline text-primary-foreground"
          >
            Boka flyttstädning
          </Link>
        </div>
      </section>

      {/* CHECKLIST (your existing component should already be responsive) */}
      <ChecklistSectionByggStad />

      {/* TEAL PROMO STRIP */}
      <section className="relative overflow-hidden bg-teal-700 text-white py-10 sm:py-14 md:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-10 top-6 text-[18rem] sm:text-[22rem] md:text-[28rem] leading-none font-black opacity-10 select-none">
            %
          </div>
          <div className="absolute left-1/3 top-24 text-[14rem] sm:text-[18rem] md:text-[20rem] leading-none font-black opacity-10 select-none">
            %
          </div>
          <div className="absolute right-4 sm:right-10 top-10 text-[18rem] sm:text-[20rem] md:text-[24rem] leading-none font-black opacity-10 rotate-12 select-none">
            %
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
            {/* LEFT */}
            <div className="md:max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Så förbereder du inför vår byggstädning en enkel checklista!
              </h2>
              <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-base sm:text-lg">
                {[
                  "Informera om speciella behov",
                  "Töm bostaden helt",
                  "Frosta av frysen",
                  "Säkerställ el och vatten",
                  "Kontrollera nycklar",
                  "Dubbelkolla allt en extra gång",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-6 w-6 flex-none rounded border border-white/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="4" />
                      <path d="m8 12 3 3 5-7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CIRCLE */}
            <div className="w-full md:w-auto flex md:block justify-center">
              <div className="relative rounded-full bg-cyan-200 text-teal-900 size-[260px] sm:size-[320px] md:size-[420px] shadow-xl flex items-center justify-center p-6 sm:p-8 md:p-10 text-center">
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-semibold">
                    Förenkla din flytt! När du
                    <br /> bokar både flyttstädning
                    <br /> och flytthjälp hos oss, får
                    <br /> du <span className="font-extrabold">
                      15% rabatt
                    </span>{" "}
                    på din
                    <br /> flyttstädning
                  </p>
                  <a
                    href="/booking"
                    className="mt-4 sm:mt-5 inline-block rounded-full bg-teal-700 px-4 sm:px-5 py-2 font-bold text-white shadow hover:bg-teal-800"
                  >
                    Boka nu
                  </a>
                </div>
                <span className="pointer-events-none absolute inset-2 rounded-full ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH GUARANTEE BLOCK */}
      <SafetyGuarantee
        imageUrl="/Orange_Chair.png"
        title={saftyTitle}
        subtitle={subtitleSafty}
        bgColor="#d9e9e8"
      />

      {/* FAQ */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-foreground">
          Frågor &amp; svar <span className="text-teal-700">byggstädning</span>
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Har du frågor om flyttstädning? Här har vi samlat de vanligaste
          frågorna och svaren som rör flyttstädning.
        </p>

        <div className="mt-6 sm:mt-8">
          <FAQTilesCollapsing
            items={faqItemsByggstad}
            collapsed={180} // narrower cards on mobile
            expanded={300}
            height={340}
            gap={10}
          />
        </div>
      </section>
    </main>
  );
}
