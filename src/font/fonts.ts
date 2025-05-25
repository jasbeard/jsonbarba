import { Noto_Sans, Roboto_Serif } from "next/font/google";

export const body = Noto_Sans({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ["latin"],
  variable: "--font-sans"
})

export const display = Roboto_Serif({
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ["latin"],
  variable: "--font-serif"
})