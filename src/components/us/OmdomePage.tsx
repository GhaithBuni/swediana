// app/omdome/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export const metadata = { title: "Omdöme – Swediana" };

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Swediana gjorde ett fantastiskt jobb med vår företagsstädning i Uppsala. Vi är mycket nöjda med deras noggrannhet och professionalism",
    name: "Erik Johansson",
    role: "Företagskund, Uppsala"
  },
  {
    id: 2,
    quote: "Flyttstädningen var perfekt! Allt var skinande rent och vi fick tillbaka hela depositionen utan problem. Rekommenderas varmt!",
    name: "Anna Svensson",
    role: "Privatkund, Stockholm"
  },
  {
    id: 3,
    quote: "Professionell service från början till slut. Våra fönster har aldrig varit renare. Kommer definitivt anlita Swediana igen.",
    name: "Marcus Lindberg",
    role: "Fönsterputs, Västerås"
  },
  {
    id: 4,
    quote: "Flytthjälpen sparade oss så mycket tid och stress. Teamet var effektivt och noggrant med våra ägodelar. Fem stjärnor!",
    name: "Sara och David Nilsson",
    role: "Flytthjälp, Stockholm"
  }
];

export default function OmdomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <main className="">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Turkos panel - Fullt responsiv */}
        <div className="relative bg-[#00ada1] px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 rounded-lg min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center">
          
          {/* Ikon + citat - Responsiv layout */}
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
            
            {/* Ikon - Responsiv storlek */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative ">
              <Image
                src="/omOss/spray.svg"
                alt="Spray icon"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Citat - Responsiv textstorlek */}
            <blockquote className="w-full text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed sm:leading-relaxed md:leading-snug transition-opacity duration-500 px-2 sm:px-4">
              &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
            </blockquote>
          </div>

          {/* Navigation arrows - Responsiv positionering */}
          {/* Vänster pil - Dölj på mycket små skärmar */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl text-white hover:text-gray-200 transition-colors duration-200 p-2 sm:p-3"
            aria-label="Föregående omdöme"
          >
            &lt;
          </button>

          {/* Höger pil - Dölj på mycket små skärmar */}
          <button 
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl text-white hover:text-gray-200 transition-colors duration-200 p-2 sm:p-3"
            aria-label="Nästa omdöme"
          >
            &gt;
          </button>

          {/* Name and role - Responsiv positionering och storlek */}
          <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8 bottom-4 sm:bottom-6 text-white/95 italic">
            <div className="text-[#95fff8] font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              {testimonials[currentTestimonial].name}
            </div>
            {testimonials[currentTestimonial].role && (
              <div className="text-xs sm:text-sm md:text-base opacity-80 mt-1">
                {testimonials[currentTestimonial].role}
              </div>
            )}
          </div>

          {/* Dots indicator - Responsiv positionering och storlek */}
          <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 bottom-4 sm:bottom-6 flex gap-1 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Gå till omdöme ${index + 1}`}
              />
            ))}
          </div>

          {/* Touch-friendly navigation för mobiler */}
          <div className="absolute inset-0 flex justify-between items-center pointer-events-none sm:pointer-events-none">
            <div 
              className="h-full w-1/4 pointer-events-auto cursor-pointer"
              onClick={prevTestimonial}
            />
            <div 
              className="h-full w-1/4 pointer-events-auto cursor-pointer"
              onClick={nextTestimonial}
            />
          </div>
        </div>

        {/* Ytterligare indikator för mobiler */}
        <div className="flex justify-center mt-4 sm:hidden">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gray-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Gå till omdöme ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}