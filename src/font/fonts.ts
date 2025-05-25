import { Roboto_Serif, Montserrat, Alex_Brush, Rufina } from "next/font/google";

export const sans = Montserrat({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  weight: ["400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ["latin"],
  variable: "--font-sans"
});

export const serif = Roboto_Serif({
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ["latin"],
  variable: "--font-serif"
});

export const wedCursive = Alex_Brush({
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-wedcursive"
});

export const wedSerif = Rufina({
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-wedSerif"
});