// components/Certifications.tsx (Compact Version)
"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatAnimation = (delay: number) => ({
  y: [-5, 5, -5],
  rotate: [-2, 2, -2],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const certifications = ["/stampel/1.png", "/stampel/2.png", "/stampel/4.png"];

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <motion.div 
        variants={containerVariants}
        className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-50"
      >
        {certifications.map((img, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={prefersReducedMotion ? {} : floatAnimation(index * 0.5)}
            className="group relative cursor-pointer"
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-[#28ebde] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"
              initial={false}
            />
            
            {/* Image container */}
            <div className="relative">
              <Image
                src={img}
                alt={`Certification ${index + 1}`}
                width={100}
                height={100}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
            </div>

            {/* Subtle ring on hover */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#28ebde] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              style={{ margin: "-10px", padding: "10px" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}