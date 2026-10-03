import { Fira_Code as FontMono, Archivo as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  axes: ["wdth"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
