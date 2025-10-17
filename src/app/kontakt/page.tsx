// app/kontakt/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Instagram, Facebook, Music2 } from "lucide-react"; // TikTok brand not in Lucide

export const metadata: Metadata = {
  title: "Kontakta oss",
};

export default function Page() {
  return (
    <main className="bg-white">
      {/* TEAL HERO */}
      <section className="relative bg-[#0c8a84] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="mx-auto max-w-3xl text-center text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
            Ta kontakt med vårt<br />team
          </h1>
        </div>

        {/* Right-side illustration using your circle.svg */}
        <div className="pointer-events-none absolute right-2 sm:right-6 top-4 sm:top-6 w-80 h-80 md:w-150 md:h-150 opacity-35">
          <Image
            src="/illusion/circle.svg"       
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* OVERLAPPING CARD */}
      <section className="-mt-16 md:-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-none md:rounded-md bg-[#3d3d3d] text-white shadow-lg ring-1 ring-black/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
              {/* FORM AREA (spans 2 columns) */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-semibold">Kontakta Oss</h2>

                <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  <div>
                    <label className="block text-sm text-white/80">Namn</label>
                    <input
                      type="text"
                      className="mt-2 w-full bg-transparent border-0 border-b border-white/40 focus:border-white outline-none py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80">E-post</label>
                    <input
                      type="email"
                      className="mt-2 w-full bg-transparent border-0 border-b border-white/40 focus:border-white outline-none py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80">Ämne</label>
                    <input
                      type="text"
                      className="mt-2 w-full bg-transparent border-0 border-b border-white/40 focus:border-white outline-none py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80">Telefon</label>
                    <input
                      type="tel"
                      className="mt-2 w-full bg-transparent border-0 border-b border-white/40 focus:border-white outline-none py-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-white/80">Meddelande</label>
                    <textarea
                      rows={4}
                      className="mt-2 w-full resize-y bg-transparent border-0 border-b border-white/40 focus:border-white outline-none py-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <div className="h-px w-full bg-white/35 mb-4" />
                    <button
                      type="submit"
                      className="inline-flex w-60 items-center justify-center rounded-none bg-[#9aa2a3] text-white py-3 font-medium hover:bg-[#8b9495]"
                    >
                      Skicka
                    </button>
                  </div>
                </form>
              </div>

              {/* SIDEBAR */}
              <aside className="flex flex-col justify-end gap-8">
                <div className="space-y-1 text-sm">
                  <p className="text-white/80">Besök oss</p>
                  <p className="font-medium">
                    Emil Sjögrens väg 16A<br />
                    74143 Knivsta
                  </p>
                </div>

                <div className="space-y-1 text-sm">
                  <p className="text-white/80">Prata med oss</p>
                  <p className="font-medium">
                    <a href="tel:+46108085625" className="hover:underline">
                      +46 10 808 56 25
                    </a>
                    <br />
                    <a href="mailto:info@swediana.se" className="hover:underline">
                      info@swediana.se
                    </a>
                  </p>
                </div>

                {/* Socials (Lucide) */}
                <div className="flex items-center gap-4 pt-2">
                  <a aria-label="Instagram" href="https://instagram.com" className="text-white/85 hover:text-white">
                    <Instagram size={22} />
                  </a>
                  <a aria-label="Facebook" href="https://facebook.com" className="text-white/85 hover:text-white">
                    <Facebook size={22} />
                  </a>
                  {/* TikTok brand isn't in Lucide; using Music2 as a neutral glyph */}
                  <a aria-label="TikTok" href="https://tiktok.com" className="text-white/85 hover:text-white">
                    <Music2 size={22} />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:h-20" />
    </main>
  );
}
