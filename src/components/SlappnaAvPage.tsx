// app/slappna-av/page.tsx
"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export const metadata = { title: "Vi gör – du slappnar av" };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const widgetVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SlappnaAvPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white"
    >
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Höger panel = Reco-widget */}
        <motion.div 
          variants={widgetVariants}
          whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
          className="relative h-[450px] md:h-[600px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <motion.iframe
            src="https://widget.reco.se/v2/venues/5974772/horizontal/xlarge?inverted=false&border=true&lang=sv "
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allow="fullscreen"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          
          {/* Loading placeholder */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute inset-0 bg-gray-50 flex items-center justify-center pointer-events-none"
          >
            <motion.div 
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-3 border-[#95fff8] border-t-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}