import { Alata, Manrope } from "next/font/google";

export const alata = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body", // variable font; all weights available
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});
