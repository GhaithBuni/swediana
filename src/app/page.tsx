"use client";

import Image from "next/image";
import Nav from "../components/Nav";
import { useEffect, useRef, useState } from "react";
import Tjanster from "../components/tjanster";
import Swediana from "../components/swediana";
import BookingFlowPage from "../components/BookingFlowPage";
import OmdomePage from "../components/OmdomePage";
import VarforPage from "../components/VarforPage";
import SlappnaAvPage from "../components/SlappnaAvPage";
import Certifications from "../components/us/Certifications";

const words = [
  "Flyttstäd",
  "Flytthjälp",
  "Företagsstädning",
  "Fönsterputs",
  "Byggstädning",
];

function Typewriter({
  words,
  speed = 100,
  pause = 1200,
}: {
  words: string[];
  speed?: number;
  pause?: number;
}) {
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
  // Hantera smooth scroll när sidan laddas med hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/land-page.jpg')" }}
      >
        <h1
          className="
            text-white
            font-bold
            leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            text-center
            md:text-left
          "
        >
          Din pålitliga städfirma med{" "}
        </h1>

        <h2
          className="
            mt-4
            sm:mt-6
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            text-center
            md:text-left
            text-[#11b6b7]
            font-bold
          "
        >
          <Typewriter words={words} />
        </h2>
      </div>

      {/* Tjänster Section - med ID för scroll */}
      <section id="tjanster" className="scroll-mt-20">
        <Tjanster />
      </section>

      {/* Övriga sektioner - lägg till ID:n om du vill länka till dem också */}
      <section id="swediana" className="scroll-mt-20">
        <Swediana />
      </section>

      <section id="booking" className="scroll-mt-20">
        <BookingFlowPage />
      </section>

      <section id="slappna-av" className="scroll-mt-20">
        <SlappnaAvPage />
      </section>
      <Certifications />

      <section id="varfor" className="scroll-mt-20">
        <VarforPage />
      </section>
    </div>
  );
}