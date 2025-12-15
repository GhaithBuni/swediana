// components/Certifications.tsx (Compact Version)
"use client";

import Image from "next/image";
import { Shield } from "lucide-react";

export default function Certifications() {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
       

      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-50 ">
        {["/stampel/1.png", "/stampel/2.png", "/stampel/4.png"].map((img, index) => (
          <div
            key={index}
            className="group relative"
          >
            <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative  hover:-translate-y-1">
              <Image
                src={img}
                alt={`Certification ${index + 1}`}
                width={100}
                height={100}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}