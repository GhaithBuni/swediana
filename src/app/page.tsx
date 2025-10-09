'use client';

import Image from "next/image";
import Nav from "../components/Nav";
import { useEffect, useRef, useState } from "react";
import Tjanster from "../components/tjanster";
import Swediana from "../components/swediana";
import BookingFlowPage from "../components/BookingFlowPage";
import OmdomePage from "../components/OmdomePage";
import VarforPage from "../components/VarforPage";
import SlappnaAvPage from "../components/SlappnaAvPage";

const words = [
  "Flyttstäd",
  "Flytthjälp",
  "Företagsstädning",
  "Fönsterputs",
  "Byggstädning"
];

function Typewriter({ words, speed = 100, pause = 1200 }) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    if (!deleting && charIndex < words[wordIndex].length) {
      timeout = setTimeout(() => {
        setDisplayed((d) => d + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!deleting && charIndex === words[wordIndex].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed((d) => d.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return (
    <span className="text-[#11b6b7] font-bold inline-block min-h-[1.5em] md:min-h-[1.2em]">
      {displayed}
    </span>
  );
}

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center px-4 py-8"
        style={{ backgroundImage: "url('/land-page.jpg')" }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Din pålitliga städfirma med
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[60px] md:min-h-[80px] flex items-center justify-center">
            <Typewriter words={words} />
          </h2>
          
          {/* Optional: Add a CTA button for mobile */}
          <div className="mt-8 md:mt-12 lg:hidden">
            <button className="bg-[#11b6b7] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-[#0fa0a1] transition-colors duration-300">
              Boka Nu
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full">
        <Tjanster />
        <Swediana />
        <BookingFlowPage />
        <OmdomePage />
        <VarforPage />
        <SlappnaAvPage />
      </div>
    </div>
  );
}