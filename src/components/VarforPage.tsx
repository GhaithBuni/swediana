// app/varfor/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const benefits = [
  "Alltid fasta priser",
  "Flytthjälp över hela Sverige",
  "Boka på kort varsel",
  "Anpassade lösningar",
  "Allt-i-ett paket med städ och flytt",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatAnimation = {
  y: [-5, 5, -5],
  rotate: [-1, 1, -1],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function VarforPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.6]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById("tjanster")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main ref={ref} className="py-10 overflow-hidden">
      {/* HERO med bakgrundsbild */}
      <section className="relative w-full h-full min-h-[600px]">
        {/* Bakgrund med parallax */}
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
        >
          <Image
            src="/varforPage/background.png"
            alt="Ljust rum"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* subtil overlay för bättre kontrast */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/25 to-white/40"
          style={{ opacity: prefersReducedMotion ? 0.4 : overlayOpacity }}
        />

        {/* Content wrapper */}
        <div className="relative mx-auto max-w-6xl px-6 py-10">
          {/* Kortet */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="mx-auto max-w-5xl rounded-md bg-white p-8 md:p-12 shadow-2xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center"
            >
              Varför välja Swediana för din flytt
              <br className="hidden md:block" /> och städning?
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-center leading-relaxed mx-auto max-w-2xl text-lg md:text-xl"
            >
              Vi strävar alltid efter att göra din flytt och städning så smidig
              och stressfri som möjligt. Utöver personlig service och
              skräddarsydda lösningar, erbjuder vi en rad fördelar för att
              säkerställa din fullständiga nöjdhet.
            </motion.p>

            {/* Fördelar */}
            <motion.div 
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
            >
              {benefits.map((b, index) => (
                <motion.div 
                  key={b} 
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? {} : { x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start gap-5 group"
                >
                  <motion.span 
                    className="relative top-0.5 inline-block h-8 w-8 flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      type: "spring", 
                      stiffness: 200,
                      damping: 10
                    }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 10 }}
                  >
                    <Image
                      src="/varforPage/clean.svg"
                      alt=""
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.span>
                  <span className="font-bold md:text-2xl">{b}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA + Illustration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex items-end justify-between"
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#tjanster"
                  className="inline-flex items-center justify-center rounded-md bg-teal-500 px-8 py-3 text-white font-semibold shadow hover:bg-teal-600 transition"
                  onClick={handleScroll}
                >
                  Boka Nu
                </Link>
              </motion.div>

              <motion.div 
                className="relative h-24 w-28 md:h-30 md:w-40"
                animate={prefersReducedMotion ? {} : floatAnimation}
              >
                <Image
                  src="/varforPage/cleaning-mop.svg"
                  alt="Städutrustning"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}