"use client";

import { Instagram, Facebook, Music2 } from "lucide-react";
import Image from "next/image";

export  default function Page() {
  return <div>
      {/* Header Section */}
      <div className="relative  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Building.png')",
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
        Företagsstädning
      </h1>
      </div>
      {/* Vad ingår i kontorsstädning */}
<section className="mx-auto w-[90%] md:w-[85%] lg:w-[80%] py-10 md:py-14">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Vänster: bild */}
    <div
      className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[520px]"
      style={{
        backgroundImage: "url('/Elegance.png')", // samma bild som i headern eller byt till /office.jpg
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />

    {/* Höger: turkos panel med accordion */}
    <div className="bg-[#00ada1] text-white ">
      <div className="px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Vad ingår i en kontorsstädning?
        </h2>

        <div className="mt-6 sm:mt-8 divide-y divide-white/30 border-y border-white/30 max-w-xl">
          {/* Item */}
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
              <span>Kontor & mötesrum</span>
              <span className="transition-transform group-open:rotate-180">∨</span>
            </summary>
            <div className="pb-4 text-white/90">
              Dammtorkning av fria ytor, tömning av papperskorgar, avtorkning av bord/stolar,
              dammsugning och våttorkning av golv, puts av glasytor vid behov.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
              <span>Kök / pentry</span>
              <span className="transition-transform group-open:rotate-180">∨</span>
            </summary>
            <div className="pb-4 text-white/90">
              Rengöring av bänkar, diskho, mikrovågsugn utvändigt, kyl/frys handtag,
              avtorkning av skåpsluckor och vitvaror, golvstädning.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
              <span>Badrum / toaletter</span>
              <span className="transition-transform group-open:rotate-180">∨</span>
            </summary>
            <div className="pb-4 text-white/90">
              Rengöring av porslin och blandare, avtorkning av kakel där det kommer åt,
              påfyllning av förbrukningsmaterial, speglar och golv.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
              <span>Tilläggstjänster</span>
              <span className="transition-transform group-open:rotate-180">∨</span>
            </summary>
            <div className="pb-4 text-white/90">
              Fönsterputs, storstäd, mattvätt, höghöjdsstädning, maskinstädning m.m.
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
              <span>Städmaterial</span>
              <span className="transition-transform group-open:rotate-180">∨</span>
            </summary>
            <div className="pb-4 text-white/90">
              Allt basmaterial kan ingå efter överenskommelse – vi använder miljömärkta
              kemikalier och mikrofiber.
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="">
      <div className="mx-auto w-[90%] md:w-[85%] lg:w-[80%] py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
          {/* Vänster: turkos panel med text */}
          <div className="bg-[#00ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 flex items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                Behöver ditt företag hjälp
                <br /> med städningen?
              </h2>

              <div className="mt-5 space-y-4 text-white/95 text-base md:text-lg leading-relaxed">
                <p>
                  Vi utför regelbunden städning för företag, oavsett om ni har
                  kontor, butik eller lager.
                </p>
                <p>
                  Vi erbjuder skräddarsydda städscheman. Kontakta oss för att boka
                  ett möte, så tar vi fram en optimal plan för just ert företag.
                </p>
              </div>

            
            
            </div>
          </div>

          {/* Höger: bild */}
          <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[520px]">
            <Image
              src="/office.png" // lägg din bild i /public/office/boardroom.jpg
              alt="Konferensrum"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="  bg-[#3b3d3f] text-white mb-20">
      <div className="mx-auto w-[92%] md:w-[88%] lg:w-[90%] py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: heading + intro */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Kontakt Oss
            </h2>
            <p className="mt-6 max-w-md text-white/85 leading-relaxed">
              Varje företag är unikt, och det är er städning också. Kontakta oss
              för en kostnadsfri konsultation eller offert. Vi lyssnar på era
              specifika krav och skapar en flexibel städlösning som håller era
              lokaler rena och representativa.
            </p>
          </div>

          {/* Middle: form (two columns) */}
          <form
            className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "Företag", type: "text", name: "company" },
              { label: "Kvm", type: "number", name: "sqm" },
              { label: "Kontaktperson", type: "text", name: "contact" },
              { label: "E-post", type: "email", name: "email" },
              { label: "Telefon", type: "tel", name: "phone" },
              { label: "Adress", type: "text", name: "address" },
              { label: "Postnummer", type: "text", name: "zip" },
              { label: "Ort", type: "text", name: "city" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col">
                <label className="text-sm text-white/85">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  className="mt-2 bg-transparent border-0 border-b border-white/40 focus:border-white/80 outline-none py-2"
                />
              </div>
            ))}

            {/* Message (full width) */}
            <div className="md:col-span-2">
              <label className="text-sm text-white/85">Meddelande</label>
              <textarea
                rows={4}
                className="mt-2 w-full resize-y bg-transparent border-0 border-b border-white/40 focus:border-white/80 outline-none py-2"
              />
            </div>

            {/* Submit button (left aligned) */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="mt-2 inline-flex w-64 items-center justify-center bg-[#9aa2a3] hover:bg-[#8c9496] text-white py-3"
              >
                Skicka
              </button>
            </div>
          </form>

          {/* Right: sidebar info + socials */}
          <aside className="lg:col-span-2 flex flex-col justify-start lg:justify-end gap-8">
            <div className="text-sm space-y-1">
              <p className="text-white/80">Besöka oss</p>
              <p className="font-medium leading-relaxed">
                Emil Sjögrens väg 16A
                <br />
                74143 Knivsta
              </p>
            </div>

            <div className="text-sm space-y-1">
              <p className="text-white/80">Prata med oss</p>
              <p className="font-medium leading-relaxed">
                <a href="tel:+46108085625" className="hover:underline">
                  +46 10 808 56 25
                </a>
                <br />
                <a href="mailto:info@swediana.se" className="hover:underline">
                  info@swediana.se
                </a>
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-white/85 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-white/85 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              {/* TikTok isn’t in Lucide; using Music2 as neutral glyph */}
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="text-white/85 hover:text-white"
              >
                <Music2 size={20} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>

  </div>;
}