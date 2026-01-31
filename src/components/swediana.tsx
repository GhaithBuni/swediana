// app/swediana/page.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export const metadata = { title: "Swediana!" };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatAnimation = (delay: number) => ({
  y: [-10, 10, -10],
  rotate: [-2, 2, -2],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

export default function SwedianaPage() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const circleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ellipseY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <main ref={containerRef} className="min-h-screen mt-20 overflow-hidden">
      {/* Bakgrund: turkos + vita abstrakta former */}
      <div className="relative overflow-hidden bg-[#95fff8]">
        {/* Circle Background - Left Middle */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : circleY }}
          animate={prefersReducedMotion ? {} : floatAnimation(0)}
          className="
            absolute
            top-15 left-[-100]             /* mobil (default) */
            md:top-8 md:left-[-200]     /* iPad (≥768px) */
            lg:top-[1/2] lg:left-[-200px]  /* desktop (≥1024px) */
            w-70 h-70 md:w-200 md:h-200 lg:w-[1200px] lg:h-[1200px]
            will-change-transform
          "
        >
          <Image
            src="/illusion/circle.svg"
            alt="Background circle"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Ellipse Background - Top Right */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : ellipseY }}
          animate={prefersReducedMotion ? {} : floatAnimation(2)}
          className="
            absolute
            top-[-50px] right-[-50px]           /* mobil (default) */
            md:top-[-100px] md:right-[-100px]   /* iPad (≥768px) */
            lg:top-[-150px] lg:right-[-150px]   /* desktop (≥1024px) */
            w-40 h-40 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
            will-change-transform
          "
        >
          <Image
            src="/illusion/ellipse.svg"
            alt="Background ellipse"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Third Shape Background - Down Left */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : shapeY }}
          animate={prefersReducedMotion ? {} : floatAnimation(4)}
          className="
            absolute
            bottom-[-50px] left-[-50px]           /* mobil (default) */
            md:bottom-[-100px] md:left-[-100px]   /* iPad (≥768px) */
            lg:bottom-[-150px] lg:left-[-150px]   /* desktop (≥1024px) */
            w-40 h-40 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
            will-change-transform
          "
        >
          <Image
            src="/illusion/ellipse.svg" // or use another shape like "/illusion/triangle.svg"
            alt="Background shape"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-7xl px-6 py-8 text-center"
        >
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold"
          >
            Swediana!
          </motion.h1>

          {/* Collage-grid */}
          <motion.div 
            variants={containerVariants}
            className="mt-6 grid grid-cols-2 gap-6 md:gap-8 lg:mt-20"
          >
            {/* Rad 1 – två större bilder */}
            <motion.div 
              variants={imageVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, transition: { duration: 0.3 } }}
              className="relative aspect-[4/3] w-full lg:mt-10"
            >
              <motion.img
                src="/images/window.jpg"
                alt="Fönsterputs"
                className="rounded-md shadow w-full h-auto"
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, transition: { duration: 0.3 } }}
              className="relative aspect-[4/3]"
            >
              <motion.img
                src="/images/moving.jpg"
                alt="Fönsterputs"
                className="rounded-md shadow w-full h-auto"
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Rad 2 – två medelstora */}
            <motion.div 
              variants={imageVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, transition: { duration: 0.3 } }}
              className="col-span-2 md:col-span-1 relative aspect-[4/3] lg:mt-10"
            >
              <motion.img
                src="/images/floor.jpg"
                alt="floor"
                className="rounded-md shadow w-full h-auto"
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, transition: { duration: 0.3 } }}
              className="col-span-2 md:col-span-1 relative aspect-[4/3] lg:mt-10"
            >
              <motion.img
                src="/images/mirror.jpeg"
                alt="mirror"
                className="rounded-md shadow w-full h-auto"
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                transition={0.3 }
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}