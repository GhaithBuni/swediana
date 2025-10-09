// app/varfor/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Varför välja Swediana" };

const benefits = [
  "Alltid fasta priser",
  "Flytthjälp över hela Sverige",
  "Boka på kort varsel",
  "Anpassade lösningar",
  "Allt-i-ett paket med städ och flytt",
];

export default function VarforPage() {
  return (
    <main className="">
      {/* HERO med bakgrundsbild */}
      <section className="relative  w-full h-full">
        {/* Bakgrund */}
        <Image
          src="/varforPage/background.png"
          alt="Ljust rum"
          fill
          className="object-cover"
          priority
        />
        {/* subtil overlay för bättre kontrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/25 to-white/40" />

        {/* Content wrapper */}
        <div className=" relative mx-auto max-w-6xl px-6 py-10 ">
          {/* Kortet */}
          <div className="mx-auto max-w-5xl rounded-md bg-white p-8 md:p-12 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold  text-center">
              Varför välja Swediana för din flytt
              <br className="hidden md:block" /> och städning?
            </h1>
            <p className="mt-4 text-center leading-relaxed mx-auto max-w-2xl text-lg md:text-xl">
              Vi strävar alltid efter att göra din flytt och städning så smidig
              och stressfri som möjligt. Utöver personlig service och
              skräddarsydda lösningar, erbjuder vi en rad fördelar för att
              säkerställa din fullständiga nöjdhet.
            </p>

            {/* Fördelar */}
            <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-5">
                  <span className="relative top-0.5 inline-block h-8 w-8">
                    <Image
                      src="/varforPage/clean.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span className="font-bold  md:text-2xl">{b}</span>
                </div>
              ))}
            </div>

            {/* CTA + Illustration */}
            <div className="mt-8 flex items-end justify-between">
              <Link
                href="#boka"
                className="inline-flex items-center justify-center rounded-md bg-teal-500 px-8 py-3 text-white font-semibold shadow hover:bg-teal-600 transition"
              >
                Boka nu
              </Link>

              <div className="relative h-24 w-28 md:h-30 md:w-40">
                <Image
                  src="/varforPage/cleaning-mop.svg"
                  alt="Städutrustning"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
