import Link from "next/link";
import OmdomePage from "@/components/OmdomePage";
import { faqItemsFonsterPuts } from "../util/items";
import FAQTilesCollapsing from "@/components/FAQTiles";

export default function Page() {
    return <div>
        {/* Header Section */}
      <div className="relative  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Nouveau.png')",
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
Fönsterputs      </h1>
      </div>
      
      {/* CURVED BACKGROUND SECTION */}
      <section className="relative overflow-hidden mt-10 sm:mt-14 md:mt-20 py-10 sm:py-14 md:py-20 ">
        <div
          aria-hidden
          className="absolute -left-[45vw] -top-[45vw] h-[140vw] w-[140vw] rounded-full bg-[#95fff8] -z-10
                     sm:-left-[38vw] sm:-top-[38vw] sm:h-[120vw] sm:w-[120vw]
                     md:-left-[28vw] md:-top-[28vw] md:h-[95vw] md:w-[95vw]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance text-primary-foreground">
Fönsterputs som Fångar Ljuset – Experter på Fönster & Städning         </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto text-primary-foreground">
Söker du klar sikt och skinande rena fönster utan ränder? En professionell fönsterputs lyfter inte bara intrycket av ditt hem eller kontor, utan förbättrar också ljusinsläppet och trivseln.
Swediana AB är din kompletta städpartner. Vi erbjuder mer än bara städning – vi erbjuder detaljkunskap. Vår fönsterputstjänst är ett perfekt komplement till vår företagsstädning och flyttstädning, och kan bokas som en fristående service. När du väljer Swediana AB väljer du expertis och en kundfokus som garanterar ett perfekt resultat.
          </p>
      
        </div>
      </section>

     {/* Why Choose Professional Window Cleaning Section */}
<section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
  <div className="mx-auto max-w-6xl">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-4 sm:mb-6">
        Därför Ska Du Välja Professionell Fönsterputs
      </h2>
      <div className="w-24 h-1 bg-[#95fff8] mx-auto mb-6"></div>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Att putsa fönster kan vara tidskrävande och svårt att få helt perfekt, särskilt på höga höjder eller med många fönsterrutor.
      </p>
    </div>
    
    <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
      <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#95fff8]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-2xl"></div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#95fff8] bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-[#00bfa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Ränder Fritt</h3>
            <p className="text-gray-600 leading-relaxed">
              Våra professionella putstekniker använder rätt utrustning och beprövade metoder för att lämna dina fönster helt fria från ränder och fläckar.
            </p>
          </div>
        </div>
      </div>
      
      <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#95fff8]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-2xl"></div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#95fff8] bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-[#00bfa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Säkerhet</h3>
            <p className="text-gray-600 leading-relaxed">
              Vi hanterar säkert svåråtkomliga fönster, så att du slipper riskera skador.
            </p>
          </div>
        </div>
      </div>
      
      <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#95fff8]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-2xl"></div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#95fff8] bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-[#00bfa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Tidsbesparing</h3>
            <p className="text-gray-600 leading-relaxed">
              Få tillbaka din helg och låt oss sköta det tidskrävande arbetet.
            </p>
          </div>
        </div>
      </div>
      
      <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#95fff8]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-2xl"></div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#95fff8] bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-[#00bfa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Förbättrat Intryck</h3>
            <p className="text-gray-600 leading-relaxed">
              Rena fönster ger ett omedelbart lyft till både exteriör och interiör.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* Business and Private Services Section */}
<section className="relative overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
  {/* Decorative background elements */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-[#95fff8] opacity-10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6ee7df] opacity-10 rounded-full blur-3xl"></div>
  
  <div className="relative z-10 mx-auto max-w-5xl">
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#95fff8] bg-opacity-20 rounded-2xl mb-6">
        <svg className="w-8 h-8 text-[#00bfa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-4 sm:mb-6">
        Fönsterputs för Företag och Privatpersoner
      </h2>
      <div className="w-24 h-1 bg-[#95fff8] mx-auto mb-6"></div>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Oavsett om ni driver en butik, har ett stort kontor eller bor i en villa, kan vi anpassa vår fönsterputs efter ert behov:
      </p>
    </div>
    
    <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
      <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#95fff8] to-[#6ee7df] group-hover:w-3 transition-all duration-300"></div>
        <div className="flex items-start gap-6 ml-4">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00bfa5] transition-colors duration-300">
              Återkommande Service
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Få skinande rena fönster varje vår och höst.
            </p>
          </div>
        </div>
      </div>
      
      <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#95fff8] to-[#6ee7df] group-hover:w-3 transition-all duration-300"></div>
        <div className="flex items-start gap-6 ml-4">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00bfa5] transition-colors duration-300">
              Som Tilläggstjänst
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Lägg till fönsterputs vid er ordinarie företagsstädning eller i samband med en flyttstädning.
            </p>
          </div>
        </div>
      </div>
      
      <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#95fff8] to-[#6ee7df] group-hover:w-3 transition-all duration-300"></div>
        <div className="flex items-start gap-6 ml-4">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00bfa5] transition-colors duration-300">
              Garantilöfte
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Vi putsar tills du är nöjd, med vår nöjdhetsgaranti.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Top row: title left, text + arrows right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          {/* Left title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
             Vanliga Frågor (FAQs)
            <span className="block text-teal-700">Fönsterputs </span>
          </h2>

          {/* Right text + arrows */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-base  max-w-md ">
             
Vi svarar på de vanligaste frågorna om kostnader, metoder och vad som ingår när du bokar fönsterputs hos oss.            </p>
          </div>
        </div>

        {/* FAQ tiles below */}
        <div className="mt-8 sm:mt-10">
          <FAQTilesCollapsing
            items={faqItemsFonsterPuts}
            collapsed={180}
            expanded={350}
            height={400}
            gap={15}
          />
        </div>
      </section>
    </div>
}


