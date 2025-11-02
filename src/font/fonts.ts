import { Instrument_Serif, DM_Sans } from "next/font/google";

export const sans = DM_Sans({
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const serif = Instrument_Serif({
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});
