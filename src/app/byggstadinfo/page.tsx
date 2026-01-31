// app/your-page/page.tsx

import { faqItemsByggstad } from "../util/items";
import FAQTilesCollapsing from "@/components/FAQTiles";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* Header Section */}
      <div className="relative flex items-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/foretag.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-7xl mx-auto">
            Byggstädning
          </h1>
        </div>
      </div>

      {/* CURVED BACKGROUND SECTION */}
      <section className="relative overflow-hidden mt-8 sm:mt-12 md:mt-16 lg:mt-20 py-8 sm:py-12 md:py-16 lg:py-20">
        <div
          aria-hidden
          className="absolute -left-[50vw] -top-[50vw] h-[150vw] w-[150vw] rounded-full bg-[#95fff8] -z-10
                     sm:-left-[40vw] sm:-top-[40vw] sm:h-[130vw] sm:w-[130vw]
                     md:-left-[30vw] md:-top-[30vw] md:h-[100vw] md:w-[100vw]
                     lg:-left-[28vw] lg:-top-[28vw] lg:h-[95vw] lg:w-[95vw]"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance leading-tight px-2">
            Byggstädning – Låt Swediana AB göra ditt projekt inflyttningsklart!
          </h2>
          <p className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Efter en lyckad nybyggnation, ombyggnad eller renovering återstår
            det sista och viktigaste steget: byggstädning. Oavsett projektets
            storlek lämnar byggarbetet alltid efter sig stora mängder av fint
            damm, grovspill och emballage. Att hantera detta kräver mer än en
            vanlig veckostädning – det kräver en professionell byggstädare. På
            Swediana AB är vi specialister på att förvandla en stökig
            byggarbetsplats till ett skinande rent utrymme, redo för besiktning
            och inflyttning. Våra rutiner säkerställer att alla spår av
            byggarbetet är borta, från golv till tak, dolda vinklar och de mest
            svåråtkomliga ytor.
          </p>
        </div>
      </section>

      {/* Why Choose Swediana Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              Varför Välja Swediana AB för Din Byggstädning?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#95fff8] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
              Vi levererar professionell byggstädning med fokus på kvalitet,
              säkerhet och kundnöjdhet.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-xl sm:rounded-t-2xl"></div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                    Erfarenhet och Expertis
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Vi har gedigen erfarenhet av både små och stora projekt –
                    från mindre lägenhetsrenoveringar till stora byggstäd
                    entreprenader. Vi vet exakt vad som krävs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-xl sm:rounded-t-2xl"></div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                    Kvalitetssäkrad Process
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Vårt arbete bygger på strikta rutiner och en noggrann
                    egenkontroll byggstäd för att säkerställa högsta kvalitet.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-xl sm:rounded-t-2xl"></div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                    Tydlig Prissättning
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Vi erbjuder transparenta och konkurrenskraftiga priser.
                    Kontakta oss för en exakt offert och få svar på vad kostar
                    byggstäd för just ditt projekt.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95fff8] to-[#6ee7df] rounded-t-xl sm:rounded-t-2xl"></div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                    Allt Ingår
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Vi hanterar både grovstädning och finstädning – allt för att
                    uppfylla kraven för en godkänd besiktning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#95fff8] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#6ee7df] opacity-5 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              Vad Ingår i Byggstädning?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#95fff8] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
              Byggstäd är en omfattande tjänst som skiljer sig markant från en
              vanlig städning. Den är uppdelad i två huvudfaser som tillsammans
              utgör alla arbetsmoment i byggstäd.
            </p>
          </div>

          {/* Phase 1: Grovstädning */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border-t-4 border-[#95fff8]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#95fff8] to-[#6ee7df] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl sm:text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    Grovstädning
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">Initial rengöring</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Denna fas fokuserar på borttagning av det mest skrymmande
                byggmaterialet.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#00bfa5] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">
                    Bortforsling av större skräp som gipsrester, träspån,
                    metallspill, kartong och plastemballage.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#00bfa5] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">
                    Grovsugning av golv och ytor för att avlägsna det värsta
                    dammet.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 2: Finstädning */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border-t-4 border-[#6ee7df]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#6ee7df] to-[#95fff8] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl sm:text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    Finstädning
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">Detaljerad rengöring</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                När grovstädet är klart fokuserar vi på att avlägsna det finaste
                byggdammet från varje yta.
              </p>

              {/* Detailed table - Mobilanpassad */}
              <div className="overflow-x-auto -mx-6 sm:mx-0">
                <div className="inline-block min-w-full align-middle px-6 sm:px-0">
                  <div className="overflow-hidden rounded-lg sm:rounded-xl border border-gray-200">
                    <table className="min-w-full">
                      <thead className="bg-gradient-to-r from-[#95fff8] to-[#6ee7df]">
                        <tr>
                          <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-white font-semibold text-sm sm:text-base">
                            Utrymme/Moment
                          </th>
                          <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-white font-semibold text-sm sm:text-base">
                            Beskrivning
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base align-top">
                            Golv
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base align-top">
                            Dammsugning med specialfilter (för att fånga det
                            finkorniga byggdammet) och våttorkning. Vid behov kan
                            även maskinsuring ingå.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base align-top">
                            Fönster
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base align-top">
                            Komplett fönsterputsning, inklusive avtorkning av
                            karmar, lister och fönsterbleck.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base align-top">
                            Ytor & Skåp
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base align-top">
                            Noggrann avtorkning av alla fria ytor, väggar, dörrar,
                            lister, eluttag och strömbrytare. Invändig och utvändig
                            torkning av lådor och skåp.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base align-top">
                            Sanitära Utrymmen
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base align-top">
                            Grundlig rengöring av toaletter, badrumsskåp, kakel,
                            klinker och köksinredning, inklusive vitvaror och
                            diskbänk.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base align-top">
                            Ventilation
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base align-top">
                            Avtorkning av ventilationsdon och synliga rör.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#95fff8] via-[#6ee7df] to-[#4dd5c4]">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg px-2">
            Är Det Dags att Boka Byggstädning?
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 drop-shadow-md px-2">
            Vi vet att varje byggprojekt är unikt.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white text-opacity-95 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2">
            För att ge dig ett exakt byggstäd pris – oavsett om du behöver
            byggstäd pris per kvm eller ett fast pris – behöver vi veta mer om
            projektets omfattning.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="/byggstad"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#00bfa5] px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto touch-manipulation"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="whitespace-nowrap">Begär Kostnadsfri Offert</span>
            </a>

            <a
              href="tel:+46108085625"
              className="inline-flex items-center justify-center gap-2  bg-opacity-20 backdrop-blur-sm text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-xl hover:bg-white hover:text-[#00bfa5] hover:scale-105 transition-all duration-300 w-full sm:w-auto touch-manipulation"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="whitespace-nowrap">Ring Oss Nu</span>
            </a>
          </div>

          <p className="mt-6 sm:mt-8 text-white text-opacity-90 text-sm sm:text-base px-2">
            📋 Vi skickar dig en skräddarsydd checklista för just ditt projekt
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          {/* Left title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Vanliga Frågor (FAQs)
            <span className="block text-teal-700">Byggstädning</span>
          </h2>

          {/* Right text */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm sm:text-base max-w-md">
              Vi har samlat de vanligaste frågorna för att ge dig svar direkt.
            </p>
          </div>
        </div>

        {/* FAQ tiles */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <FAQTilesCollapsing
            items={faqItemsByggstad}
            collapsed={180}
            expanded={350}
            height={400}
            gap={15}
          />
        </div>
      </section>
    </main>
  );
}