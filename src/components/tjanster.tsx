// components/Services.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Item = {
  title: string;
  body: string;
  icon: string;
  href?: string; // Optional href for the link
};

const items: Item[] = [
  {
    title: "Flyttstädning",
    icon: "/flyttstadning.png",
    body:
      "Vår flyttstädning gör din flytt enkel, smidig och stressfri. Vi lämnar bostaden skinande ren och redo för nästa boende, enligt mäklarnas och hyresvärdarnas krav.",
    href: "/flyttstadning", // Add your actual routes here
  },
  {
    title: "Flytthjälp",
    icon: "/flytthjalp.png",
    body:
      "Behöver du hjälp med flytten? Vår pålitliga flytthjälp gör det enkelt att byta boende utan stress. Vi hjälper med packning, transport och städning så att du kan fokusera på ditt nya hem.",
    href: "/flytthjalp",
  },
  {
    title: "Företagsstädning",
    icon: "/foretagsstadning.png",
    body:
      "Håll din arbetsplats representativ och trivsam med vår professionella företagsstädning. Vi anpassar städschemat efter ditt företags behov, oavsett om du har kontor, butik eller annan verksamhet.",
    href: "/foretagsstadning",
  },
  {
    title: "Fönsterputs",
    icon: "/fonsterputs.png",
    body:
      "Ge ditt hem eller företag ett lyft med vår professionella fönsterputs. Vi rengör fönster, karmar och lister för ett kristallklart resultat – både invändigt och utvändigt.",
    href: "/fonsterputs",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 text-center mt-10">
      {/* Rubriker */}
      <h1 className="text-2xl md:text-5xl">Professionella städtjänster</h1>
      <h1 className="text-2xl md:text-5xl mt-1">
        Skräddarsydda lösningar för hem och företag
      </h1>

      <p className="mt-4 md:max-w-5xl mx-auto leading-relaxed text-1xl md:text-2xl">
        Upptäck våra städtjänster som är anpassade för både privatpersoner och företag. 
        Vi erbjuder flyttstädning, flytthjälp, företagsstädning, byggstädning och fönsterputs 
        i Stockholm, Uppsala och Västerås. Alltid med 100 % nöjdkund-garanti.
      </p>

      {/* 2x2 grid utan linjer */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-30">
        {items.map((it) => (
          <div key={it.title} className="flex flex-col items-center gap-3 px-6 text-center">
            <Image
              src={it.icon}
              alt={it.title}
              width={100}
              height={100}
              priority
              className="opacity-80"
            />
            <Link 
              href={it.href || "#"} 
              className="transition-colors duration-300 hover:text-[#95fff8]"
            >
              <h1 className="text-2xl md:text-3xl">{it.title}</h1>
            </Link>
            <p className="leading-relaxed max-w-lg">{it.body}</p>
          </div>
        ))}
      </div>

      {/* Byggstädning separat */}
      <div className="mt-16 flex flex-col items-center">
        <Image
          src="/byggstadning.png"
          alt="Byggstädning"
          width={100}
          height={100}
          className="opacity-80"
          priority
        />
        <Link 
          href="/byggstadning" 
          className="transition-colors duration-300 hover:text-[#95fff8]"
        >
          <h1 className="text-2xl md:text-3xl mt-3">Byggstädning</h1>
        </Link>
        <p className="leading-relaxed max-w-lg mt-2">
          Vår byggstädning är perfekt efter renovering eller nybygge. Vi tar bort
          byggdamm, skräp och smuts så att ytorna blir rena och säkra att använda.
          Oavsett om det gäller lägenheter, villor eller kommersiella lokaler,
          levererar vi byggstädning av högsta klass.
        </p>
      </div>
    </section>
  );
}