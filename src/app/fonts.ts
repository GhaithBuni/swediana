import { Alata, Manrope } from "next/font/google";

export const alata = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});
