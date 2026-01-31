'use client';

// app/flytthjalp-uppsala/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function FlytthjalpUppsalaPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#007a7b] via-[#006566] to-[#007a7b]">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#95fff8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#95fff8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 255, 255, 0.1) 10px,
                rgba(255, 255, 255, 0.1) 20px
              )`
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30">
              <span className="text-3xl">🚚</span>
              <span className="text-white font-bold text-sm uppercase tracking-wider">Professionell Flytthjälp</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Flytthjälp i Uppsala –{" "}
              <span className="relative inline-block">
                <span className="relative z-10">trygg flytt</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M0 6C100 3 200 9 300 6" stroke="#95fff8" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </span>
              {" "}utan stress
            </h1>
            
            <p className="text-lg sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl">
              Att flytta ska inte behöva betyda tunga lyft, trasiga ryggar och kaos med logistik. Swediana AB 
              erbjuder professionell flytthjälp i Uppsala för både privatpersoner och företag – smidigt, säkert 
              och med tydliga priser.
            </p>
            
            {/* Key benefits */}
            <div className="space-y-3 mb-10">
              {[
                "Bärhjälp, transport och planering",
                "Tydlig offert utan dolda kostnader",
                "RUT-avdrag direkt på fakturan (upp till 50% på arbetskostnaden)"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[#95fff8] text-2xl">✅</span>
                  <span className="text-white text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link 
                href="/flytthjalp"
                className="group relative px-8 py-5 bg-[#95fff8] text-[#007a7b] font-black text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Be om offert på flytthjälp i Uppsala
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/flytthjalp"
                className="px-8 py-5 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white hover:text-[#007a7b] transition-all duration-300"
              >
                Boka flytthjälp
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave transition */}
        
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl">💰</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Vad kostar flytthjälp?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Priset beror främst på:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "📦", title: "Antal rum & volym" },
              { icon: "📍", title: "Avstånd" },
              { icon: "🏋️", title: "Bärhjälp (trappor/hiss, långt bäravstånd)" },
              { icon: "📋", title: "Packning/uppackning" },
              { icon: "🔧", title: "Tilläggstjänster (t.ex. montering)" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#007a7b] transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-gradient-to-br from-[#007a7b] to-[#006566] rounded-3xl p-10 text-white shadow-2xl">
            <p className="text-xl sm:text-2xl mb-6 leading-relaxed">
              Du får alltid en <strong className="text-[#95fff8]">gratis offert</strong> – så du vet exakt vad flytten kostar innan du bestämmer dig.
            </p>
            <Link
              href="/flytthjalp"
              className="inline-block bg-[#95fff8] text-[#007a7b] font-black text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Få offert med RUT-pris
            </Link>
          </div>
        </div>
      </section>

      {/* RUT-AVDRAG SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#95fff8]/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Visual element */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#007a7b] to-[#006566] rounded-3xl p-12 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#95fff8] rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#007a7b]">50%</div>
                    <div className="text-xs font-bold text-[#007a7b]">RABATT</div>
                  </div>
                </div>
                
                <div className="text-white">
                  <div className="text-6xl mb-4">💳</div>
                  <h3 className="text-3xl font-black mb-4">RUT-avdrag</h3>
                  <p className="text-xl leading-relaxed opacity-90">
                    Upp till 50% rabatt på arbetskostnaden – direkt på fakturan!
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#95fff8] rounded-full opacity-30" />
              <div className="absolute -top-8 left-10 w-16 h-16 border-4 border-[#95fff8] rounded-full opacity-50" />
            </div>
            
            {/* Right: Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                RUT-avdrag – vi fixar allt
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Flytthjälp räknas som hushållsnära tjänst, vilket betyder att du kan använda RUT-avdrag 
                  på arbetstiden (bärhjälp, packning, uppackning).
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Du betalar ett <strong className="text-[#007a7b]">reducerat pris direkt</strong> – 
                  Swediana AB hanterar ansökan åt dig.
                </p>
              </div>
              
              <div className="bg-[#95fff8]/20 rounded-2xl p-6 border-2 border-[#95fff8]">
                <p className="text-gray-900 font-bold text-lg">
                  💡 Ingen krångel – vi sköter allt pappersarbete så du kan fokusera på flytten!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Våra vanligaste flyttjänster
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Service 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#95fff8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007a7b] to-[#006566] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Komplett flytthjälp</h3>
              </div>
              <p className="text-lg text-gray-700">bärhjälp, transport och logistik</p>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#95fff8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007a7b] to-[#006566] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Packhjälp</h3>
              </div>
              <p className="text-lg text-gray-700">proffsig packning av ömtåligt och värdefullt</p>
            </div>
            
            {/* Service 3 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#95fff8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007a7b] to-[#006566] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Demontering & montering</h3>
              </div>
              <p className="text-lg text-gray-700">möbler isär och på plats igen</p>
            </div>
            
            {/* Service 4 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#95fff8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007a7b] to-[#006566] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">Flyttstädning som tillval</h3>
              </div>
              <p className="text-lg text-gray-700">boka flytt + städ och slipp hela slutspurten</p>
            </div>
          </div>

          {/* 15% Discount callout */}
          <div className="bg-gradient-to-br from-[#007a7b] to-[#006566] rounded-3xl p-8 text-white text-center shadow-2xl">
            <p className="text-2xl sm:text-3xl font-bold mb-6">
              💡 Boka flytthjälp + flyttstädning och få 15% rabatt på flyttstädningen.
            </p>
            <Link
              href="/flytthjalp"
              className="inline-block bg-[#95fff8] text-[#007a7b] font-black text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Boka paket & spara 15%
            </Link>
          </div>
        </div>
      </section>

      {/* CHECKLIST SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl">📋</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Snabb checklista inför flyttdagen
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Gör gångar fria så vi kommer fram smidigt",
              "Informera om parkering, portkod och hiss",
              "Meddela om tunga/ömtåliga saker",
              "Packa ömtåligt separat och märk kartonger tydligt"
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 bg-gradient-to-br from-[#95fff8]/20 to-white rounded-2xl p-6 border-2 border-[#95fff8]/30 hover:border-[#007a7b] transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-[#007a7b] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{idx + 1}</span>
                </div>
                <p className="text-lg text-gray-900 font-medium pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#007a7b]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#95fff8]/10 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="text-3xl">⚡</span>
              <span className="font-bold text-lg">Snabb återkoppling</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Få din offert idag
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Berätta kort om din flytt så återkopplar vi snabbt – ofta samma dag.
          </p>
          
          <Link
            href="/flytthjalp"
            className="inline-block bg-[#95fff8] text-[#007a7b] font-black text-xl px-12 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#95fff8]/50"
          >
            Begär offert – flytthjälp i Uppsala →
          </Link>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Gratis offert</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Inga dolda kostnader</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>RUT-avdrag</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}