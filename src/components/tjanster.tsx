// components/Services.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Item = {
  title: string;
  body: string;
  icon: string;
  href?: string;
  features?: string[];
  popular?: boolean;
};

const items: Item[] = [
  {
    title: "Flyttstädning",
    icon: "/flyttstadning.png",
    body:
      "Vår flyttstädning gör din flytt enkel, smidig och stressfri. Vi lämnar bostaden skinande ren och redo för nästa boende, enligt mäklarnas och hyresvärdarnas krav.",
    href: "/flyttstadinfo",
    features: ["RUT-avdrag 50%", "Garanti godkänd", "Samma dag möjligt"],
    popular: true,
  },
  {
    title: "Flytthjälp",
    icon: "/flytthjalp.png",
    body:
      "Behöver du hjälp med flytten? Vår pålitliga flytthjälp gör det enkelt att byta boende utan stress. Vi hjälper med packning, transport och städning så att du kan fokusera på ditt nya hem.",
    href: "/flytthjalpinfo",
    features: ["Packning & transport", "Möbel montering", "Försäkrad"],
    popular: true,
  },
  {
    title: "Företagstädning",
    icon: "/foretagsstadning.png",
    body:
      "Håll din arbetsplats representativ och trivsam med vår professionella företagsstädning. Vi anpassar städschemat efter ditt företags behov, oavsett om du har kontor, butik eller annan verksamhet.",
    href: "/foretagstad",
    features: ["Anpassade scheman", "Miljövänliga produkter", "Fast kontakt"],
  },
  {
    title: "Fönsterputs",
    icon: "/fonsterputs.png",
    body:
      "Ge ditt hem eller företag ett lyft med vår professionella fönsterputs. Vi rengör fönster, karmar och lister för ett kristallklart resultat – både invändigt och utvändigt.",
    href: "/fonsterputs",
    features: ["Invändigt & utvändigt", "Karmar & lister", "Fläckfritt"],
  },
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-6 sm:mt-8 lg:mt-10"
    >
      {/* Rubriker */}
      <motion.div 
        variants={headerVariants}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <motion.h1 
          variants={headerVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl "
        >
          Professionella städtjänster
        </motion.h1>
        <motion.h2 
          variants={headerVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-3  leading-tight px-2"
        >
          Skräddarsydda lösningar för hem och företag
        </motion.h2>

        <motion.p 
          variants={headerVariants}
          className="mt-4 sm:mt-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl  px-2"
        >
          Upptäck våra städtjänster som är anpassade för både privatpersoner och företag. 
          Vi erbjuder flyttstädning, flytthjälp, företagsstädning, byggstädning och fönsterputs 
          i Stockholm, Uppsala och Västerås. Alltid med{" "}
          <motion.span 
            animate={prefersReducedMotion ? {} : pulseAnimation}
            className="text-[#28ebde] font-semibold whitespace-nowrap inline-block"
          >
            100 % nöjdkund-garanti
          </motion.span>.
        </motion.p>
      </motion.div>

      {/* Grid - Responsiv layout */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            custom={index}
            whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.3 } }}
          >
            <Link 
              href={item.href || "#"}
              className="group block w-full"
            >
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="relative h-full bg-gradient-to-br from-[#0d4d4a] to-[#073532] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#95fff8]/20 hover:border-[#95fff8] transition-all duration-300 hover:shadow-2xl hover:shadow-[#95fff8]/30 active:scale-95"
              >
                
                {/* Popular Badge */}
                {item.popular && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <motion.span 
                      animate={prefersReducedMotion ? {} : pulseAnimation}
                      className="bg-[#28ebde] text-gray-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap block"
                    >
                      POPULÄR TJÄNST
                    </motion.span>
                  </motion.div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-4 sm:mb-6 mt-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#95fff8] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <motion.div
                      animate={prefersReducedMotion ? {} : floatAnimation}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                        priority
                        className="relative opacity-90 group-hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 object-contain brightness-0 invert"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-3 sm:mb-4 text-[#28ebde] transition-colors duration-300 px-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center mb-4 sm:mb-6 px-2 min-h-[80px] sm:min-h-[100px]">
                  {item.body}
                </p>

                {/* Features */}
                {item.features && (
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {item.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={idx}
                        variants={featureVariants}
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 px-2"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx, type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#95fff8] flex-shrink-0" />
                        </motion.div>
                        <span className="leading-tight">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <div className="flex justify-center mt-auto pt-2 sm:pt-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, gap: "1rem" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 sm:gap-3 bg-[#28ebde] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base group-hover:gap-3 sm:group-hover:gap-5 group-hover:px-8 sm:group-hover:px-10 transition-all duration-300 shadow-lg shadow-[#28ebde]/50 active:scale-95 touch-manipulation cursor-pointer"
                  >
                    <span>Boka nu</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#95fff8]/0 to-[#95fff8]/0 group-hover:from-[#95fff8]/10 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Byggstädning - Featured Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl mx-auto px-2"
      >
        <Link href="/byggstadinfo" className="group block">
          <motion.div 
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gradient-to-br from-[#0d4d4a] via-[#073532] to-[#042421] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-[#95fff8]/30 hover:border-[#95fff8] transition-all duration-300 hover:shadow-2xl hover:shadow-[#95fff8]/40 active:scale-95"
          >
            

            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mt-6 sm:mt-4">
              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#95fff8] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <motion.div
                  animate={prefersReducedMotion ? {} : floatAnimation}
                >
                  <Image
                    src="/byggstadning.png"
                    alt="Byggstädning"
                    width={100}
                    height={100}
                    className="relative opacity-90 group-hover:scale-110 transition-transform duration-300 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain brightness-0 invert"
                    priority
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left w-full">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#28ebde] transition-colors duration-300"
                >
                  Byggstädning
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 px-2 md:px-0"
                >
                  Vår byggstädning är perfekt efter renovering eller nybygge. Vi tar bort
                  byggdamm, skräp och smuts så att ytorna blir rena och säkra att använda.
                  Oavsett om det gäller lägenheter, villor eller kommersiella lokaler,
                  levererar vi byggstädning av högsta klass.
                </motion.p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 px-2 md:px-0">
                  {["Professionell utrustning", "Certifierad städning", "Snabb leverans"].map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 justify-center md:justify-start"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#95fff8] flex-shrink-0" />
                      </motion.div>
                      <span className="leading-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex justify-center md:justify-start"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, gap: "1.25rem" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 sm:gap-3 bg-[#28ebde] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg group-hover:gap-3 sm:group-hover:gap-5 group-hover:px-8 sm:group-hover:px-10 transition-all duration-300 shadow-lg shadow-[#28ebde]/50 active:scale-95 touch-manipulation cursor-pointer"
                  >
                    <span>Boka nu</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
}