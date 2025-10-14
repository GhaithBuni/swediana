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
  return (
    <div>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/land-page.jpg')" }}
      >
        <h1 className="text-white text-5xl font-bold">Welcome to Swediana</h1>
      </div>
    </div>
  );
}
