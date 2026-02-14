// app/bokning/page.tsx
"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export const metadata = {
  title: "Så enkelt är det att boka städning",
};

type Step = {
  title: string;
  text: string;
  icon: string;
};

const steps: Step[] = [
  {
    title: "Boka tjänst",
    text: "Välj ett datum som passar dig och boka din städning eller flytthjälp enkelt online.",
    icon: "/steps/clander.png",
  },
  {
    title: "Vi kommer till dig",
    text: "Vi hämtar nyckeln eller möter dig på plats. Enkelt och smidigt.",
    icon: "/steps/door.png",
  },
  {
    title: "Vi städar och flyttar",
    text: "Noggrann flytt och städning med trygg transport av dina ägodelar.",
    icon: "/steps/house.png",
  },
  {
    title: "Klart & godkänt",
    text: "Vi erbjuder städgaranti så att du är redo för nästa hyresgäst, försäljning eller inflyttning.",
    icon: "/steps/check.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconFloat = {
  y: [-3, 3, -3],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const pathDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};

export default function BookingFlowPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="mt-10" ref={ref}>
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Titel */}
        <motion.h1 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center text-2xl md:text-5xl"
        >
          Få tillbaka din tid – så enkelt är det att boka städning
        </motion.h1>

        {/* Dotted wave background (visa på md+) */}
        <motion.svg
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={pathDraw}
          className="pointer-events-none absolute left-0 right-0 mx-auto hidden md:block w-full max-w-6xl h-40 -z-10"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          {/* prickad våg */}
          <motion.path
            d="M0,140 C160,40 320,180 480,110 C640,40 800,180 960,110 C1040,80 1120,120 1200,100"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="2 10"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.svg>

        {/* Steg */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8"
        >
          {steps.map((s, index) => (
            <motion.div 
              key={s.title} 
              variants={stepVariants}
              whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <motion.div 
                className="mx-auto w-14 h-14 relative"
                animate={prefersReducedMotion ? {} : iconFloat}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-full h-full filter" 
                  style={{ filter: 'invert(63%) sepia(76%) saturate(459%) hue-rotate(131deg) brightness(95%) contrast(96%)' }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={s.icon}
                    alt={s.title}
                    fill
                    className="object-contain"
                    sizes="56px"
                    priority
                  />
                </motion.div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#28ebde] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="mt-5 font-bold text-lg"
              >
                {s.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="mt-2"
              >
                {s.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}