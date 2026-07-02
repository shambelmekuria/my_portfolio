import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import ScrollTop from "@/components/common/scroll-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const superMagicalFont = localFont({
  variable: "--font-super-magical",
  src: "./fonts/super-magical.ttf",
  display: "swap",
});

const innerMountingFlame = localFont({
  variable: "--font-inner-mounting-flame",
  src: "./fonts/inner-mounting-flame.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shambel Mekuriya | Full-Stack Developer",
  description:
    "Portfolio of Shambel Mekuria, a Full-Stack Developer specializing in modern web applications with Next.js, React, and Django.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable, // ← was missing
        inter.variable,
        superMagicalFont.variable,
        innerMountingFlame.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ScrollTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
