// app/your-page/page.tsx
import Link from "next/link";
import Image from "next/image";
import ChecklistSection from "@/components/ChecklistSection";
import FAQSection from "@/components/FAQSection";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <header className="relative isolate">
        <div className="relative flex items-end justify-start min-h-[260px] md:min-h-[800px]">
          <Image
            src="/land-page.jpg"
            alt="" // decorative
            fill
            priority
            className="object-cover object-center -z-10"
            sizes="100vw"
          />
          <div aria-hidden className="absolute inset-0 bg-black/30" />
          <h1 className="relative z-10 ml-10 mb-8 text-4xl md:text-5xl font-bold leading-tight text-white text-balance">
            Flytthjälp
          </h1>
        </div>
      </header>

      {/* Curved background section */}
      <section className="relative overflow-hidden mt-20 py-16 md:py-20">
        {/* background curve */}
        <div
          aria-hidden
          className="absolute -left-[35vw] -top-[35vw] h-[120vw] w-[120vw] rounded-full
                     bg-[#97fff3] -z-10
                     md:-left-[28vw] md:-top-[28vw] md:h-[95vw] md:w-[95vw]"
        />

        {/* content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary-foreground">
            Din perfekta flytt börjar här Med Swediana!
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-primary-foreground">
            Var trygg med ditt val. Vi erbjuder säker och försäkrad flytthjälp
            för att du ska känna dig helt nöjd. Låt oss ta hand om detaljerna så
            att du kan fokusera på ditt nya hem.
          </p>

          <Link
            href="/services/moving"
            className="mt-6 inline-block font-bold underline text-primary-foreground"
          >
            Se våra tjänster och boka tryggt!
          </Link>
        </div>
      </section>

      <ChecklistSection />
      <FAQSection />
    </main>
  );
}
