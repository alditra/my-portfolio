import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Alif Dwi Putra - Web Developer",
  description: " Passionate about building scalable web applications, optimizing system performance, and delivering user-centric digital solutions with intuitive interfaces.",
  keywords: "Alif Dwi Putra, Full Web Developer, Laravel, PHP, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Alif Dwi Putra" }],
  openGraph: {
    title: "Alif Dwi Putra - Web Developer",
    description: "Portfolio of Alif Dwi Putra, a passionate full-web developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}