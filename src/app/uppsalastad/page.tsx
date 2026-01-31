// app/flyttstad-uppsala/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function FlyttstadUppsalaPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION - Full screen impact */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#007a7b]/20 via-transparent to-[#95fff8]/30"
          style={{
            backgroundImage: "url('/vase.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 border-4 border-[#95fff8] rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#007a7b] rounded-lg rotate-45 opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-[#007a7b]/10 rounded-full border-2 border-[#007a7b]/30">
              <span className="text-[#007a7b] font-bold text-sm uppercase tracking-wider">Uppsala</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Flyttstädning i Uppsala –{" "}
              <span className="text-[#007a7b] relative inline-block">
                godkänd städning
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M0 4C100 2 200 6 300 4" stroke="#95fff8" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
              {" "}utan stress
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Ska du flytta från lägenhet eller villa i Uppsala? Då vet du hur mycket som ska hinnas med på kort tid. 
              Låt oss ta hand om flyttstädningen så att du kan fokusera på nycklar, flyttkartonger och ditt nya hem.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link 
                href="/flyttstad"
                className="group relative px-8 py-4 bg-[#007a7b] text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Boka flyttstädning →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#006566] to-[#007a7b] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-12 h-12 rounded-full bg-[#95fff8] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#007a7b]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span className="font-semibold">Ring för rådgivning</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 bg-gradient-to-r from-[#95fff8]/20 via-white to-[#95fff8]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#007a7b] flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Snabb återkoppling</p>
                <p className="text-sm text-gray-600">Svar inom 24h</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#007a7b] flex items-center justify-center">
                <span className="text-white text-xl">💰</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Fast pris</p>
                <p className="text-sm text-gray-600">Inga dolda avgifter</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#007a7b] flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">24h garanti</p>
                <p className="text-sm text-gray-600">Nöjdhetsgaranti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6">
            Swediana AB erbjuder professionell flyttstädning i Uppsala – noggrant utförd, 
            enligt krav från hyresvärdar, bostadsrättsföreningar och mäklare.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-[#007a7b]">
            Resultatet ska bli godkänt direkt. Punkt.
          </p>
        </div>
      </section>

      {/* CTA CARD */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative bg-gradient-to-br from-[#007a7b] to-[#006566] rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#95fff8]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
              👉 Få en fast offert & boka flyttstädning i Uppsala
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3 text-white">
                <span className="text-[#95fff8] text-2xl">•</span>
                <span className="text-lg">Snabb återkoppling</span>
              </div>
              <div className="flex items-start gap-3 text-white">
                <span className="text-[#95fff8] text-2xl">•</span>
                <span className="text-lg">Tydlig offert utan dolda avgifter</span>
              </div>
              <div className="flex items-start gap-3 text-white">
                <span className="text-[#95fff8] text-2xl">•</span>
                <span className="text-lg">24h nöjdhetsgaranti</span>
              </div>
            </div>
            
            <Link
              href="/flyttstad"
              className="inline-block bg-white text-[#007a7b] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#95fff8] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Intresseanmälan
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-b from-white to-[#95fff8]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Därför väljer kunder oss för{" "}
              <span className="text-[#007a7b]">flyttstädning i Uppsala</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              När du lämnar över en bostad vill du slippa diskussioner, anmärkningar och extra kostnader i efterhand. 
              Vår flyttstädning är upplagd för att klara besiktningen – och om något ändå missas finns vår garanti.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📋", title: "Komplett flyttstädning", desc: "enligt checklista" },
              { icon: "🪟", title: "Fönsterputs ingår", desc: "(alla sidor)" },
              { icon: "⏰", title: "24-timmars", desc: "nöjdhetsgaranti" },
              { icon: "💵", title: "Fast pris", desc: "du vet vad det kostar" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#95fff8]"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/flyttstad"
              className="inline-block bg-[#007a7b] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#006566] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Be om offert – tar 1 minut
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED - Modern card layout */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Vad ingår i flyttstädningen?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Vi följer en tydlig checklista och städar med fokus på det som faktiskt kontrolleras vid överlämning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kök */}
            <div className="bg-gradient-to-br from-[#95fff8]/20 to-white rounded-3xl p-8 border-2 border-[#95fff8]/50 hover:border-[#007a7b] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#007a7b] flex items-center justify-center">
                  <span className="text-3xl">🍳</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Kök</h3>
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Rengöring in- och utvändigt av skåp, lådor och vitvaror</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Avtorkning av ytor, lister och detaljer</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                <strong>Tillägg vid behov:</strong> grovrengöring av ugn/spis vid kraftig nedsmutsning, ej tömda vitvaror.
              </p>
            </div>
            
            {/* Badrum/WC */}
            <div className="bg-gradient-to-br from-[#95fff8]/20 to-white rounded-3xl p-8 border-2 border-[#95fff8]/50 hover:border-[#007a7b] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#007a7b] flex items-center justify-center">
                  <span className="text-3xl">🚿</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Badrum/WC</h3>
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Noggrann rengöring av toalett, dusch/badkar, kakel och ytor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Kalkborttagning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Rengöring av golvbrunn</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                <strong>Tillägg vid behov:</strong> borttagning av silikonfog, klistermärken m.m.
              </p>
            </div>
            
            {/* Bostadsrum */}
            <div className="bg-gradient-to-br from-[#95fff8]/20 to-white rounded-3xl p-8 border-2 border-[#95fff8]/50 hover:border-[#007a7b] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#007a7b] flex items-center justify-center">
                  <span className="text-3xl">🛋️</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Bostadsrum</h3>
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Dammsugning & våttorkning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Torkning av lister, dörrar, element och fasta ytor</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                <strong>Tillägg:</strong> tömning/städ av förråd, garage eller vind.
              </p>
            </div>
            
            {/* Övrigt */}
            <div className="bg-gradient-to-br from-[#95fff8]/20 to-white rounded-3xl p-8 border-2 border-[#95fff8]/50 hover:border-[#007a7b] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#007a7b] flex items-center justify-center">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Övrigt</h3>
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#007a7b] mt-1">✓</span>
                  <span className="text-gray-700">Fönsterputs (samtliga sidor)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                <strong>Tillägg:</strong> balkong- och altanstädning.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/flyttstad"
              className="inline-block bg-[#007a7b] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#006566] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Boka flyttstädning i Uppsala
            </Link>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#007a7b] to-[#006566] text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#95fff8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-2xl" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 rounded-full bg-[#95fff8] flex items-center justify-center mx-auto">
                <span className="text-5xl">🏆</span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Nöjdhetsgaranti – vi lämnar inte förrän det är rätt
            </h2>
            
            <p className="text-xl sm:text-2xl leading-relaxed mb-4 max-w-3xl mx-auto">
              Alla våra flyttstädningar kommer med 24-timmars nöjdhetsgaranti. Skulle något behöva justeras 
              inom 24 timmar efter städningen, så åtgärdar vi det snabbt.
            </p>
            
            <p className="text-xl sm:text-2xl font-bold text-[#95fff8]">
              Det ska kännas tryggt att lämna över bostaden.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Vad kostar flyttstädning i Uppsala?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Priset beror främst på storlek, skick och bostadstyp:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#95fff8]/30 to-[#95fff8]/10 rounded-3xl p-8 border-2 border-[#95fff8]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#007a7b] flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Lägenhet</h3>
              </div>
              <p className="text-lg text-gray-700">
                Pris styrs oftast av antal kvadratmeter
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#95fff8]/30 to-[#95fff8]/10 rounded-3xl p-8 border-2 border-[#95fff8]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#007a7b] flex items-center justify-center">
                  <span className="text-3xl">🏡</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Villa</h3>
              </div>
              <p className="text-lg text-gray-700">
                Pris baseras på kvm, antal badrum och biytor (t.ex. källare)
              </p>
            </div>
          </div>
          
          <div className="text-center bg-[#007a7b]/5 rounded-3xl p-8 border-2 border-[#007a7b]/20">
            <p className="text-xl text-gray-700 mb-6">
              Hos Swediana AB får du alltid en fast offert baserad på din bostad – utan dolda avgifter.
            </p>
            <Link
              href="/flyttstad"
              className="inline-block bg-[#007a7b] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#006566] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              👉 Få pris direkt - Be om fast offert
            </Link>
          </div>
        </div>
      </section>

      {/* PREPARATION + 15% DISCOUNT */}
      <section className="py-20 bg-gradient-to-br from-[#007a7b] via-[#006566] to-[#007a7b] text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, transparent 20%, rgba(149, 255, 248, 0.3) 21%, transparent 22%),
                               radial-gradient(circle at 80% 80%, transparent 20%, rgba(149, 255, 248, 0.3) 21%, transparent 22%)`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Preparation checklist */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
                Förberedelser inför flyttstädningen
                <span className="block text-[#95fff8]">(snabb lista)</span>
              </h2>
              
              <p className="text-xl mb-8 text-white/90">
                För att allt ska gå smidigt ber vi dig att:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Tömma bostaden helt",
                  "Frosta av frysen",
                  "Säkerställa att el och vatten är på",
                  "Samla nycklar och se till att vi kommer in",
                  "Meddela om något särskilt ska tas hänsyn till"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#95fff8] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#007a7b] font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-lg pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right: 15% discount circle */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-[#95fff8] rounded-full blur-2xl opacity-30 animate-pulse" />
                
                {/* Main circle */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[#95fff8] flex items-center justify-center p-12 shadow-2xl">
                  <div className="text-center">
                    <p className="text-4xl sm:text-5xl font-black text-[#007a7b] mb-4 leading-tight">
                      Extra förmån:<br/>
                      <span className="text-6xl sm:text-7xl">15%</span><br/>
                      rabatt
                    </p>
                    
                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-snug">
                      Vill du förenkla hela flytten? När du bokar både flyttstädning och flytthjälp hos oss 
                      får du <strong>15% rabatt</strong> på flyttstädningen.
                    </p>
                    
                    <Link
                      href="/flytthjalp"
                      className="inline-block bg-[#007a7b] text-white font-bold px-6 py-3 rounded-full hover:bg-[#006566] transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Boka paket & få 15% rabatt →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Redo att boka din flyttstädning?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri offert. Vi ser fram emot att göra din flytt smidigare!
          </p>
          <Link
            href="/flyttstad"
            className="inline-block bg-[#007a7b] text-white font-bold text-xl px-12 py-5 rounded-full hover:bg-[#006566] transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Få offert nu →
          </Link>
        </div>
      </section>
    </div>
  );
}