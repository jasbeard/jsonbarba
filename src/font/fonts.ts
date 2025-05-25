import { Roboto_Serif, Montserrat } from "next/font/google";

export const sans = Montserrat({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  weight: ["400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ["latin"],
  variable: "--font-sans"
})

export const serif = Roboto_Serif({
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ["latin"],
  variable: "--font-serif"
})