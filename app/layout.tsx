import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/utils/ScrollToTopButton";
import DayBackground from "@/components/main/DayBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit Joshi - Full Stack Developer Portfolio",
  description:
    "Senior Software Engineer. Specializing web apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Sumit Joshi",
    "SumitJoshi",
    "sumitjoshi",
    "sumit joshi",
    "Next.js",
    "React.js",
    "Full Stack Developer",
    "Full Stack",
    "Full Stack Developer Portfolio",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <SpeedInsights />
        <Analytics /> */}
        <StarsCanvas />
        {/* <DayBackground /> */}
        <Navbar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
